# 🚀 Vercel Reconnection Guide - Fix Deployment Issue

## 🎯 Problem

Vercel deployment is failing because:
- Vercel project is connected to `@shefayat` GitHub account
- Repository commits are now from `Shefwef` account
- Vercel free tier only allows one GitHub account per project

## ✅ Solution: Reconnect Vercel to Shefwef Account

---

## 📋 Step-by-Step Instructions

### Step 1: Disconnect Current Vercel Deployment

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard

2. **Find Your Project**
   - Locate the BNP-Central project in your dashboard

3. **Go to Settings**
   - Click on the project name
   - Click on **Settings** tab (top navigation)

4. **Navigate to Git Settings**
   - In the left sidebar, click **Git**

5. **Disconnect Repository**
   - Find the "Disconnect Git Repository" section
   - Click **Disconnect** button
   - Confirm the disconnection

---

### Step 2: Sign in to GitHub with Shefwef Account

Make sure you're signed in to GitHub with your **Shefwef** account:
- Go to https://github.com
- Check top-right corner - should show Shefwef profile
- If not, sign out and sign in with Shefwef account

---

### Step 3: Authorize Vercel for Shefwef Account

1. **Check GitHub Integrations**
   - Go to: https://github.com/settings/installations
   - Look for "Vercel" in the list

2. **Configure Vercel Access**
   - Click **Configure** next to Vercel
   - Make sure BNP-Central repository is included
   - Options:
     - "All repositories" (easiest)
     - OR "Only select repositories" → Select BNP-Central

---

### Step 4: Reconnect Project in Vercel

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard

2. **Import Project**
   - Click **Add New...** → **Project**

3. **Select Git Provider**
   - Click **Continue with GitHub**
   - Authorize with your **Shefwef** account if prompted

4. **Import Repository**
   - Find "BNP-Central" in the repository list
   - Click **Import**

5. **Configure Project (if needed)**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

6. **Deploy**
   - Click **Deploy**
   - Wait for deployment to complete

---

### Step 5: Verify Everything Works

1. **Check Deployment**
   - Once deployed, click on the deployment URL
   - Verify your site loads correctly

2. **Test Auto-Deploy**
   - Make a small change to your code
   - Commit and push:
     ```bash
     git add .
     git commit -m "Test deployment after reconnection"
     git push
     ```
   - Vercel should automatically trigger a new deployment

---

## 🔧 Your Current Git Configuration

Your Git is already configured correctly for Shefwef:

```bash
user.name = Shefwef
user.email = shefayatadib@iut-dhaka.edu
```

This configuration will be used for all future commits, and they will appear under your Shefwef GitHub profile.

---

## ✅ What Will Happen After Reconnection

### Automatic Deployments
Every time you push to the main branch:
1. Git commit is made by **Shefwef** ✅
2. GitHub receives the push from **Shefwef** ✅
3. Vercel detects change from **Shefwef's repository** ✅
4. Vercel automatically deploys ✅

### No More Errors
- ✅ No GitHub account mismatch
- ✅ No "Please use the GitHub account @shefayat" error
- ✅ Seamless deployment pipeline

---

## 📊 Before vs After

### Before (Not Working)
```
Commits: Shefwef → GitHub → ❌ Vercel (expects @shefayat) → ERROR
```

### After (Working)
```
Commits: Shefwef → GitHub → ✅ Vercel (connected to Shefwef) → DEPLOY ✅
```

---

## 🎯 Deployment Settings to Keep

When you reconnect the project, make sure these settings are correct:

### Build Settings
```
Framework: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node Version: 18.x or higher
```

### Environment Variables
If you had any environment variables configured, you'll need to re-add them:
- Go to Project Settings → Environment Variables
- Add any required variables

---

## 🚨 Troubleshooting

### If Vercel Still Shows Error After Reconnection

1. **Clear Vercel Cache**
   - Go to Project Settings
   - Redeploy with "Clear Cache" option

2. **Check Git Remote**
   ```bash
   git remote -v
   ```
   Should show your Shefwef repository

3. **Verify GitHub Connection**
   - In Vercel project settings
   - Check that Git repository shows correct URL

### If Deployment Fails

1. **Check Build Logs**
   - Click on failed deployment
   - Read error messages in logs

2. **Test Build Locally**
   ```bash
   npm run build
   ```
   If it fails locally, fix errors first

3. **Check Node Version**
   - Vercel uses Node 18.x by default
   - Match your local Node version

---

## 📱 Alternative: Use Vercel CLI (Optional)

If you prefer command line:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login with Shefwef account
vercel login

# Link project
vercel link

# Deploy
vercel --prod
```

---

## ✅ Checklist

Before reconnecting:
- [ ] Disconnected old Vercel project
- [ ] Signed in to GitHub with Shefwef account
- [ ] Authorized Vercel for Shefwef on GitHub

During reconnection:
- [ ] Imported BNP-Central repository in Vercel
- [ ] Verified build settings (Vite, dist, npm run build)
- [ ] Successfully deployed

After reconnection:
- [ ] Verified deployed site works
- [ ] Tested auto-deploy with a small commit
- [ ] Confirmed no GitHub account errors

---

## 📝 Important Notes

1. **Keep Shefwef as Commit Author**
   - Your Git is configured correctly
   - Don't change back to "shefayat"
   - All future commits should be from Shefwef

2. **One GitHub Account per Vercel Project**
   - Vercel free tier limitation
   - If you need multiple accounts, consider upgrading

3. **Previous Commits**
   - Old commits from "shefayat" will remain
   - That's perfectly fine
   - Only future commits need to match Vercel connection

---

## 🎉 Expected Result

After completing these steps:
- ✅ Vercel connected to Shefwef GitHub account
- ✅ Git configured to commit as Shefwef
- ✅ Automatic deployments working
- ✅ No more account mismatch errors
- ✅ Your site deployed and live!

---

**Ready to reconnect? Follow the steps above and your deployment will work perfectly!** 🚀

*Guide created: January 12, 2026*
