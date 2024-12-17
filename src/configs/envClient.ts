'use client'

import { z } from 'zod'

// Client-side environment variables schema
const configClientSchema = z.object({
  DOMAIN_API: z.string(),
  DOMAIN_IMAGE: z.string()
})

// Validate client-side environment variables
const configClient = configClientSchema.safeParse({
  DOMAIN_API: process.env.NEXT_PUBLIC_DOMAIN_API,
  DOMAIN_IMAGE: process.env.NEXT_PUBLIC_DOMAIN_IMAGE
})

// Check for client-side environment variable validation errors
if (!configClient.success) {
  throw new Error('Environment variables for client not valid!')
}

// Export the validated configurations
export const envClientConfig = configClient.data
