// Imports
import dotenv from 'dotenv'

// Load .env
dotenv.config()

// Environment
export const NODE_ENV = process.env.NODE_ENV

// Port
export const PORT = process.env.PORT || 8000

// DB URL
export const DATABASE_URL = process.env.DATABASE_URL
