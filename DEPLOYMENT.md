# GitHub Pages Deployment Guide

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Repository name: **`prituljogiya.github.io`** (must be exactly this for user site)
5. Description: "Portfolio Website"
6. Set to **Public** (required for free GitHub Pages)
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. Click **Create repository**

## Step 2: Push Your Code to GitHub

Run these commands in your terminal:

```bash
# Add the remote repository (replace with your actual GitHub username if different)
git remote add origin https://github.com/prituljogiya/prituljogiya.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/prituljogiya/prituljogiya.github.io`
2. Click on **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Deploy from a branch**: `gh-pages` branch, `/ (root)` folder
   - OR use **GitHub Actions** (recommended - already configured)
5. If using GitHub Actions:
   - The workflow will automatically deploy when you push to `main` branch
   - Go to **Actions** tab to see the deployment progress
6. Your site will be live at: **https://prituljogiya.github.io**

## Step 4: Verify Deployment

1. Wait a few minutes for GitHub Actions to build and deploy
2. Check the **Actions** tab in your repository to see deployment status
3. Visit **https://prituljogiya.github.io** to see your live portfolio

## Automatic Deployment

Every time you push changes to the `main` branch, GitHub Actions will:
1. Build your portfolio
2. Deploy it to GitHub Pages
3. Your site will update automatically

## Troubleshooting

- If the site doesn't load, check the **Actions** tab for any errors
- Make sure the repository is set to **Public**
- Wait 5-10 minutes after first deployment for DNS propagation
- Clear browser cache if you see old content

## Future Updates

To update your portfolio:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

The site will automatically rebuild and deploy!

