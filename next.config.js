/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env: {
    DATABASE_PATH: process.env.DATABASE_PATH || '/Users/ron/.openclaw/workspace/data/ozzy_memory.db'
  }
}

module.exports = nextConfig