#!/bin/bash

# Portfolio Deployment Script
echo "🚀 Starting portfolio deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if Node.js version is correct
echo "📋 Checking Node.js version..."
node_version=$(node -v)
echo "Current Node.js version: $node_version"

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Vercel CLI not found. Installing..."
    npm install -g vercel
fi

echo "🌐 Ready for deployment!"
echo ""
echo "Next steps:"
echo "1. Make sure your EmailJS environment variables are set in .env.local"
echo "2. Run 'vercel' to deploy to Vercel"
echo "3. Add environment variables to Vercel dashboard"
echo "4. Run 'vercel --prod' for production deployment"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions"
