#!/bin/bash

# GitHub Pages Deployment Commands
# Run these commands one by one after creating the repository on GitHub

echo "🚀 Setting up GitHub Pages deployment..."

# Add remote repository
echo "📦 Adding remote repository..."
git remote add origin https://github.com/prituljogiya/prituljogiya.github.io.git

# Rename branch to main (if not already)
echo "🌿 Setting branch to main..."
git branch -M main

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Done! Now:"
echo "1. Go to https://github.com/prituljogiya/prituljogiya.github.io"
echo "2. Go to Settings > Pages"
echo "3. Select 'GitHub Actions' as source"
echo "4. Your site will be live at https://prituljogiya.github.io"
echo ""
echo "Check the Actions tab to see deployment progress!"

