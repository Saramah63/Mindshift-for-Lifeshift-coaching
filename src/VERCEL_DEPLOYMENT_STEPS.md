# How to Deploy to Vercel - Step by Step
## For Sara Mahmodi Coaching Website

---

## 🎯 Easiest Method: GitHub + Vercel (Recommended)

This method allows automatic updates - whenever you change your code, Vercel automatically redeploys!

### **Step 1: Upload Code to GitHub (10 minutes)**

#### A. Create GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Enter your email, create password
4. Verify your email
5. ✅ Done!

#### B. Create New Repository
1. Click the **"+"** icon (top right)
2. Select **"New repository"**
3. Name it: `luminary-coaching` or `saramahmodi-website`
4. Make it **Private** (recommended) or Public
5. **Do NOT** check "Add README"
6. Click **"Create repository"**

#### C. Upload Your Files
You have 2 options:

**Option 1: Drag and Drop (Easiest)**
1. On the repository page, you'll see "uploading an existing file"
2. Click it
3. Drag ALL your project files into the browser
   - App.tsx
   - index.html
   - package.json
   - All folders (components, styles, public, etc.)
4. Scroll down and click **"Commit changes"**
5. ✅ Done!

**Option 2: Use GitHub Desktop (If you prefer a GUI)**
1. Download [GitHub Desktop](https://desktop.github.com)
2. Install and sign in
3. Click "Add" → "Add existing repository"
4. Select your project folder
5. Click "Publish repository"
6. ✅ Done!

---

### **Step 2: Deploy to Vercel (5 minutes)**

#### A. Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (easiest!)
4. Authorize Vercel to access GitHub
5. ✅ Logged in!

#### B. Import Your Project
1. Click **"Add New..."** button (top right)
2. Select **"Project"**
3. You'll see "Import Git Repository"
4. Find your repository: `luminary-coaching`
5. Click **"Import"**

#### C. Configure Project
Vercel will auto-detect your settings. You should see:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

**Just click "Deploy"** - Vercel does everything automatically!

#### D. Wait for Deployment (2-3 minutes)
- Vercel will:
  - Install dependencies
  - Build your project
  - Deploy it
- Watch the build logs (cool to see!)

#### E. Your Site is Live! 🎉
- You'll see: **"Congratulations!"**
- Vercel gives you a URL like: `luminary-coaching.vercel.app`
- Click "Visit" to see your live site!

---

### **Step 3: Connect Your Domain (10 minutes)**

#### A. Add Domain in Vercel
1. In your Vercel dashboard, click your project
2. Click **"Settings"** tab (top)
3. Click **"Domains"** (left sidebar)
4. Type: `saramahmodi.com`
5. Click **"Add"**
6. Also add: `www.saramahmodi.com`
7. Click **"Add"**

#### B. Vercel Shows You DNS Records
Vercel will display something like:

```
For saramahmodi.com:
Type: A
Name: @
Value: 76.76.21.21

For www.saramahmodi.com:
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Copy these! You'll need them next.**

#### C. Update DNS at Your Domain Registrar
1. **Go to where you bought saramahmodi.com**
   - GoDaddy? Namecheap? Google Domains?
   - Log in to that website

2. **Find "DNS Settings" or "DNS Management"**
   - Usually under Domain Settings or Manage Domain

3. **Delete old A and CNAME records** (if any exist)

4. **Add new records from Vercel:**

   **Record 1:**
   ```
   Type: A
   Name: @ (or leave blank)
   Value: 76.76.21.21
   TTL: 3600 (or Automatic)
   ```

   **Record 2:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600 (or Automatic)
   ```

5. **Save changes**

#### D. Wait for DNS Propagation
- Takes **10 minutes to 48 hours**
- Usually works within **1-2 hours**
- Check status: [whatsmydns.net](https://whatsmydns.net)

#### E. Verify in Vercel
- Go back to Vercel → Domains
- You'll see a checkmark ✅ when it's working
- Vercel automatically adds FREE SSL (https)

**Your site is now live at www.saramahmodi.com!** 🎉

---

## 🚀 Alternative Method: Vercel CLI (For Advanced Users)

If you're comfortable with command line:

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login
```bash
vercel login
```

### Step 3: Deploy
```bash
cd your-project-folder
vercel
```

### Step 4: Follow Prompts
- Setup and deploy? **Yes**
- Which scope? **Your account**
- Link to existing project? **No**
- Project name? **luminary-coaching**
- Directory? **./** (current)
- Override settings? **No**

### Step 5: Deploy to Production
```bash
vercel --prod
```

---

## 📦 Alternative Method: Drag & Drop Build Folder

If you don't want to use GitHub:

### Step 1: Build Your Project Locally
```bash
npm install
npm run build
```

This creates a `dist` folder.

### Step 2: Use Netlify Drop Instead
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `dist` folder to the page
3. Your site is live instantly!
4. Add custom domain in Netlify settings

**Note:** With this method, you need to rebuild and re-upload for every change.

---

## 🔄 How to Update Your Site (After Initial Deploy)

### If you used GitHub + Vercel:
1. Make changes to your code
2. Upload to GitHub (commit and push)
3. **Vercel automatically rebuilds and deploys!**
4. Your site updates in 2-3 minutes
5. No manual work needed! 🎉

### If you used Vercel CLI:
```bash
vercel --prod
```

### If you used drag & drop:
1. Build again: `npm run build`
2. Re-upload the `dist` folder

---

## 🆘 Troubleshooting

### "Build Failed" Error
**Check these files exist:**
- ✅ package.json
- ✅ vite.config.ts or vite.config.js
- ✅ index.html (in root)
- ✅ All component files

**Solution:** Make sure ALL files are uploaded to GitHub.

### "Domain Not Working"
**Common issues:**
- DNS not updated yet (wait 24-48 hours)
- Wrong DNS records (double-check values)
- Old DNS cache (try incognito mode)

**Solution:** 
```
1. Clear browser cache
2. Try different browser/device
3. Check whatsmydns.net
4. Wait longer (DNS is slow sometimes)
```

### "404 Not Found" on Routes
**If using React Router:**
Add `vercel.json` file:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### "Environment Variables Not Working"
1. In Vercel dashboard → Settings → Environment Variables
2. Add your variables there
3. Redeploy

---

## ✅ Deployment Checklist

**Before deploying:**
- [ ] All files uploaded to GitHub
- [ ] package.json includes all dependencies
- [ ] Tested locally with `npm run build`
- [ ] Updated contact info (email, phone)
- [ ] Added real Calendly link
- [ ] Checked all images load

**After deploying:**
- [ ] Visit your Vercel URL - does it work?
- [ ] Test on mobile
- [ ] Test in different browsers
- [ ] Check all links work
- [ ] Test language toggle
- [ ] Test booking buttons
- [ ] Test agreement signing

**After domain connected:**
- [ ] www.saramahmodi.com loads ✅
- [ ] HTTPS works (green padlock) ✅
- [ ] Submit to Google Search Console
- [ ] Share on social media!

---

## 🎯 Quick Reference

**Your Steps:**
1. ✅ Upload code to GitHub
2. ✅ Sign up for Vercel
3. ✅ Import GitHub repo to Vercel
4. ✅ Click Deploy
5. ✅ Add domain in Vercel settings
6. ✅ Update DNS at domain registrar
7. ✅ Wait for DNS propagation
8. ✅ Your site is live!

**Total Time:** 30 minutes + DNS wait time

---

## 📞 Need Help?

**Vercel Support:**
- Docs: [vercel.com/docs](https://vercel.com/docs)
- Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

**GitHub Help:**
- Docs: [docs.github.com](https://docs.github.com)
- Upload help: [docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)

**Common Issues:**
- "Can't find my repository" → Make sure you authorized Vercel to access it
- "Build fails" → Check all files are uploaded, especially package.json
- "Domain won't connect" → Wait 24 hours, double-check DNS records

---

## 🎉 You're Almost There!

**Next Steps:**
1. Follow Step 1 (GitHub) today
2. Follow Step 2 (Vercel) today  
3. Follow Step 3 (Domain) today
4. Wait for DNS to work (1-48 hours)
5. Submit to Google Search Console
6. Start getting clients! 💰

**Your website will be live at www.saramahmodi.com!**

Good luck, Sara! 🚀
