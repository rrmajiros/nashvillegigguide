#!/bin/bash

echo "🚀 Deploying NashvilleGigGuide.com to Vercel"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm install -g vercel
fi

# Deploy to Vercel
echo "Deploying to Vercel..."
vercel --prod --yes

echo "✅ Deployment complete!"
echo "🌐 Site will be live at: https://nashvillegigguide.com"
echo "⏱️  DNS propagation may take 5-60 minutes"