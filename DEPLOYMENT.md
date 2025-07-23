# 🚀 Portfolio Deployment Guide

## 📋 Pre-Deployment Checklist

✅ All files are ready for deployment:
- `vercel.json` - Vercel configuration
- `README.md` - Complete project documentation
- `.env.local.example` - Environment variables template
- `package.json` - Updated with project metadata
- All components and pages are complete

## 🌐 Deploy to Vercel (Recommended)

### Method 1: GitHub Integration (Easiest)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "feat: complete portfolio ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your `portfolio` repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   In Vercel dashboard, add:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

4. **Deploy**
   - Click "Deploy"
   - Your portfolio will be live at `https://your-project-name.vercel.app`

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login and Deploy**
   ```bash
   vercel login
   vercel
   ```

3. **Add Environment Variables**
   ```bash
   vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID
   vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
   vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## 📧 Email Setup (EmailJS)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. Copy your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and copy your **Template ID**

### Step 4: Get Public Key
1. Go to "Account" > "General"
2. Copy your **Public Key**

### Step 5: Update Environment Variables
Update your `.env.local` file with your actual values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 🌐 Deployment to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from your project directory:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? Yes
   - Which scope? (Choose your account)
   - Link to existing project? No
   - Project name: (Accept default or customize)
   - Directory: ./
   - Override settings? No

5. **Add Environment Variables:**
   ```bash
   vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID
   vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
   vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
   ```

6. **Redeploy with environment variables:**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub + Vercel Dashboard

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Complete portfolio with email functionality"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Add environment variables in the dashboard
   - Deploy

## 🔧 Environment Variables for Production

In Vercel dashboard, add these environment variables:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## 📱 Custom Domain (Optional)

1. **Buy a domain** from any registrar (Namecheap, GoDaddy, etc.)
2. **In Vercel dashboard:**
   - Go to your project
   - Click "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

## ✅ Post-Deployment Checklist

- [ ] EmailJS is configured and working
- [ ] Contact form sends emails successfully
- [ ] All sections load properly
- [ ] Mobile responsiveness works
- [ ] Dark mode functions correctly
- [ ] All links work (LinkedIn, GitHub, etc.)
- [ ] SEO meta tags are correct
- [ ] Performance is optimized

## 🔍 Testing Your Deployed Site

1. **Test the contact form** with a real email
2. **Check mobile responsiveness** on different devices
3. **Verify all navigation links** work properly
4. **Test dark/light mode** switching
5. **Check loading performance** with tools like PageSpeed Insights

## 🎯 Next Steps After Deployment

1. **Add Google Analytics** for visitor tracking
2. **Set up Google Search Console** for SEO
3. **Create a sitemap** for better search indexing
4. **Add a blog section** (optional)
5. **Set up monitoring** with Vercel Analytics

Your portfolio will be live at: `https://your-project-name.vercel.app`

## 🆘 Troubleshooting

**Email not sending?**
- Check EmailJS configuration
- Verify environment variables are set
- Check browser console for errors

**Site not loading?**
- Check build logs in Vercel dashboard
- Verify all dependencies are installed
- Check for TypeScript errors

**Need help?** Feel free to ask for assistance with any deployment issues!
