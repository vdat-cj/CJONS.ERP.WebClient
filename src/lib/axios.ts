'use server'

import axios from 'axios'
import https from 'https'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { ACCESS_TOKEN } from '@/configs/constants'
import { envServerConfig } from '@/configs/envServer'

// Create an HTTPS Agent that allows self-signed certificates
const agent = new https.Agent({
  rejectUnauthorized: false // Allows self-signed certificates
})

// Axios Interceptor Instance
const axiosInstance = axios.create({
  baseURL: `${envServerConfig.DOMAIN_API}/api`,
  headers: {
    'Content-Type': 'application/json'
  },
  httpsAgent: agent // Use the agent to allow self-signed certificates
})

axiosInstance.interceptors.request.use(
  (config) => {
    const cookieStore = cookies()
    const token = cookieStore.get(ACCESS_TOKEN)

    // If token is present, add it to request's Authorization Header
    if (token) {
      if (config.headers) config.headers.Authorization = `Bearer ${token.value}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Axios Interceptor: Response Method
axiosInstance.interceptors.response.use(
  (response) => {
    // Can be modified response
    if (response.status === 401) {
      redirect('/auth/login')
    }
    return response
  },
  (error) => {
    // Handle response errors here
    return Promise.reject(error)
  }
)

export default axiosInstance
