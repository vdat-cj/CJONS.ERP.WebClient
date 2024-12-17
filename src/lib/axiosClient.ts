'use client'

import axios from 'axios'
import https from 'https'
import { redirect } from 'next/navigation'

import { ACCESS_TOKEN } from '@/configs/constants'
import { envClientConfig } from '@/configs/envClient'

// Create an HTTPS Agent that allows self-signed certificates
const agent = new https.Agent({
  rejectUnauthorized: false // Allows self-signed certificates
})

// Axios Interceptor Instance
const axiosInstance = axios.create({
  baseURL: `${envClientConfig.DOMAIN_API}/api`,
  headers: {
    'Content-Type': 'application/json'
  },
  httpsAgent: agent, // Use the agent to allow self-signed certificates,
  withCredentials: true
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN)

    // If token is present, add it to request's Authorization Header
    if (token) {
      if (config.headers) config.headers.Authorization = `Bearer ${token}`
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
