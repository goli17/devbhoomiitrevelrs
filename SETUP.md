# Char Dham Yatra 2025 - Setup Guide

## 🚀 Quick Setup (5 minutes)

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for the project to be ready (2-3 minutes)

### 2. Run Database Setup
1. Go to your Supabase dashboard → SQL Editor
2. Copy and paste the entire content from `scripts/supabase-schema.sql`
3. Click "Run" - this will create all tables and insert sample data

### 3. Set Environment Variables
Create a `.env.local` file in your project root:

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
\`\`\`

Get these values from: Supabase Dashboard → Settings → API

### 4. Create Admin User
1. Run the application: `npm run dev`
2. Go to `/admin/login` and try to sign up (it will fail, but creates the user)
3. Go to Supabase Dashboard → Authentication → Users
4. Copy your user UUID
5. Go to SQL Editor and run:
\`\`\`sql
UPDATE public.profiles 
SET role = 'admin' 
WHERE id = 'your-user-uuid-here';
\`\`\`

### 5. Deploy to Vercel
1. Push code to GitHub
2. Connect to Vercel
3. Add the same environment variables in Vercel dashboard
4. Deploy!

## 🎯 That's it! Your site is ready.

### Default Features:
- ✅ 4 sample tour packages
- ✅ Contact form working
- ✅ Admin dashboard accessible
- ✅ Testimonials system
- ✅ SEO optimized
- ✅ Mobile responsive
- ✅ WhatsApp integration

### Test the Admin Panel:
1. Go to `/admin/login`
2. Login with your admin credentials
3. Access the dashboard to manage content

### Customize:
- Update package details in Supabase dashboard
- Add your own images
- Modify contact information
- Update Google Analytics ID
\`\`\`

</QuickEdit>
