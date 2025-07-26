#!/bin/bash

# Hamza Turhan Interview Portfolio - Deployment Script
# This script deploys the portfolio to Vercel

echo "🚀 Starting deployment process..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed. Installing..."
    npm install -g vercel
fi

# Check if we're in the correct directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Make sure you're in the correct directory."
    exit 1
fi

echo "✅ Pre-deployment checks passed"

# Build check (for static site, just verify files exist)
echo "🔍 Verifying required files..."
required_files=("index.html" "package.json" "vercel.json" "README.md" "sitemap.xml" "robots.txt")

for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ Missing required file: $file"
        exit 1
    fi
    echo "✅ Found: $file"
done

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "🎉 Deployment completed!"
echo ""
echo "📋 Post-deployment checklist:"
echo "1. ✅ Verify site loads correctly"
echo "2. ✅ Test all navigation links"
echo "3. ✅ Check mobile responsiveness"
echo "4. ✅ Verify project links work"
echo "5. ✅ Test contact form functionality"
echo ""
echo "🔗 Your portfolio should be live at: https://hamza-turhan-portfolio.vercel.app"
echo ""
echo "💡 Tips:"
echo "- Update your LinkedIn and other profiles with the new portfolio URL"
echo "- Share the link in your job applications"
echo "- Monitor analytics to see visitor engagement"