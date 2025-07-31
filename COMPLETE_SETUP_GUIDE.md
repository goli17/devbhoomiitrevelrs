# 🚀 Complete Setup Guide - Char Dham Yatra 2025

## Step-by-Step Setup (10 minutes)

### 1. 📊 Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Click "New Project"
3. Choose organization and fill details:
   - **Name**: `char-dham-yatra-2025`
   - **Database Password**: Save this password!
   - **Region**: Choose closest to your users
4. Wait 2-3 minutes for project creation

### 2. 🗄️ Setup Database
1. In Supabase Dashboard, go to **SQL Editor**
2. Copy the entire content from `scripts/supabase-schema.sql`
3. Paste and click **"Run"**
4. ✅ You should see "Success. No rows returned" - this means it worked!

### 3. 🔐 Create Admin Login Credentials

#### Option A: Using Supabase Dashboard (Easiest)
1. Go to **Authentication** → **Users** in Supabase
2. Click **"Add user"**
3. Fill the form:
   - **Email**: `admin@yourdomain.com` (your real email)
   - **Password**: `YourStrongPassword123!`
   - **Auto Confirm User**: ✅ Toggle ON
4. Click **"Create user"**
5. Copy the **User UID** from the users list
6. Go back to **SQL Editor** and run:
\`\`\`sql
UPDATE public.profiles 
SET role = 'admin' 
WHERE id = 'paste-your-user-uuid-here';
\`\`\`

#### Option B: Using Temporary Signup Page
1. Start your app: `npm run dev`
2. Go to: `http://localhost:3000/admin/signup`
3. Create your admin account
4. **Important**: Delete `/app/admin/signup/page.tsx` after creating account

### 4. 🔧 Environment Variables
Create `.env.local` file in project root:

\`\`\`env
# Get these from Supabase Dashboard → Settings → API
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Optional: Add your Google Analytics ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
\`\`\`

### 5. 🧪 Test Everything
1. Run: `npm run dev`
2. Visit: `http://localhost:3000` - Should show homepage with packages
3. Visit: `http://localhost:3000/admin/login`
4. Login with your admin credentials
5. ✅ You should see the admin dashboard!

### 6. 🚀 Deploy to Vercel
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add the same environment variables in Vercel dashboard
5. Deploy!

---

## 🎯 What You Get Out of the Box

### ✅ Pre-loaded Content:
- **4 Tour Packages**: Kedarnath, Badrinath, Gangotri, Yamunotri
- **Sample Testimonials**: 4 approved customer reviews
- **Contact Form**: Working and storing in database
- **Admin Dashboard**: Full content management

### ✅ Features Working:
- 📱 Mobile responsive design
- 🔍 SEO optimized (sitemap, meta tags)
- 💬 WhatsApp integration
- 📞 Click-to-call functionality
- 🛡️ Secure admin authentication
- 📊 Contact message management

### 🎨 Customization:
- Update package details in admin dashboard
- Replace placeholder images with real photos
- Modify contact information in components
- Add your Google Analytics tracking ID

---

## 🔧 Troubleshooting

### "relation does not exist" error:
- Make sure you ran the complete `supabase-schema.sql` script
- Check if all tables were created in Supabase → Table Editor

### Can't login to admin:
- Verify user exists in Authentication → Users
- Check if user role is 'admin' in profiles table
- Make sure you're using the correct email/password

### Environment variables not working:
- File must be named `.env.local` (not `.env`)
- Restart your development server after adding variables
- Check for typos in variable names

---

## 📞 Support

If you need help:
1. Check the browser console for errors
2. Verify all environment variables are set
3. Ensure Supabase tables were created properly
4. Test database connection in Supabase dashboard

Your Char Dham Yatra website is now ready! 🎉
