# 🚀 Vercel Deployment Guide for Char Dham Yatra Website

## Prerequisites
- GitHub account
- Vercel account (free)
- Supabase project setup

## Step 1: Prepare Your Repository

### 1.1 Create GitHub Repository
\`\`\`bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Char Dham Yatra website"

# Add remote origin (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/char-dham-yatra-2025.git

# Push to GitHub
git push -u origin main
\`\`\`

### 1.2 Environment Variables Setup
Create a `.env.local` file with your Supabase credentials:

\`\`\`env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://vpsnkacwsqwdujsqoyem.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwc25rYWN3c3F3ZHVqc3FveWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MjA3MDAsImV4cCI6MjA2OTM5NjcwMH0.QZ1iLxNo79e_ZR_g7H1pK9e2vr1UvD5Qkzp0ZvYQw20
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwc25rYWN3c3F3ZHVqc3FveWVtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MzgyMDcwMCwiZXhwIjoyMDY5Mzk2NzAwfQ.OEWwx2DIEYBAgZwzRSn26kpTW2isTO7eT2bRlwZ9q0Y

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_GA_ID=your_google_analytics_id
\`\`\`

## Step 2: Deploy to Vercel

### Method 1: Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub

2. **Import Project**
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

4. **Add Environment Variables**
   - In project settings, go to "Environment Variables"
   - Add all variables from your `.env.local` file
   - Make sure to add them for all environments (Production, Preview, Development)

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (usually 2-3 minutes)

### Method 2: Vercel CLI

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow the prompts:
# ? Set up and deploy "~/char-dham-yatra-2025"? [Y/n] y
# ? Which scope do you want to deploy to? [Your Account]
# ? Link to existing project? [y/N] n
# ? What's your project's name? char-dham-yatra-2025
# ? In which directory is your code located? ./

# Deploy to production
vercel --prod
\`\`\`

## Step 3: Configure Custom Domain (Optional)

1. **Buy Domain** (if you don't have one)
   - Recommended: Namecheap, GoDaddy, or Google Domains

2. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

3. **Update Environment Variables**
   - Update `NEXT_PUBLIC_SITE_URL` to your custom domain

## Step 4: Database Setup

### 4.1 Run Database Scripts
In your Supabase dashboard SQL editor, run these scripts in order:

1. `scripts/00-complete-database-setup.sql`
2. `scripts/01-create-first-admin.sql`
3. `scripts/02-verify-setup.sql`

### 4.2 Create Admin User
1. Go to your deployed site: `https://your-domain.vercel.app/admin/setup`
2. Create your first admin user
3. Test login at: `https://your-domain.vercel.app/admin/login`

## Step 5: Post-Deployment Checklist

### ✅ Functionality Tests
- [ ] Homepage loads correctly
- [ ] Navigation works on mobile/desktop
- [ ] Package pages display properly
- [ ] Contact form works
- [ ] Admin login functions
- [ ] Database connections work

### ✅ Performance Tests
- [ ] Page load speed < 3 seconds
- [ ] Mobile responsiveness
- [ ] Image optimization
- [ ] SEO meta tags

### ✅ Security Tests
- [ ] HTTPS enabled
- [ ] Environment variables secure
- [ ] Admin routes protected
- [ ] Database RLS policies active

## Step 6: Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Run build checks before deployment

## Step 7: Monitoring & Analytics

### 7.1 Vercel Analytics
- Enable in Project Settings → Analytics
- Monitor performance and user behavior

### 7.2 Google Analytics
- Add your GA ID to environment variables
- Verify tracking in Google Analytics dashboard

## Troubleshooting

### Common Issues:

1. **Build Fails**
   \`\`\`bash
   # Check build locally
   npm run build
   
   # Fix TypeScript errors
   npm run lint
   \`\`\`

2. **Environment Variables Not Working**
   - Ensure variables are added in Vercel dashboard
   - Redeploy after adding variables
   - Check variable names match exactly

3. **Database Connection Issues**
   - Verify Supabase URLs and keys
   - Check RLS policies
   - Ensure database tables exist

4. **Images Not Loading**
   - Check image paths are correct
   - Verify images are in `public/` directory
   - Update `next.config.mjs` if needed

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Review browser console for errors
3. Test locally with `npm run dev`
4. Contact support if needed

## 🎉 Congratulations!

Your Char Dham Yatra website is now live on Vercel! 

**Next Steps:**
- Set up Google Analytics
- Configure SEO optimization
- Add more content and features
- Monitor performance and user feedback
