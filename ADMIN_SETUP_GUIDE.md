# 🔐 Admin Setup Guide - 3 Easy Methods

## Method 1: Using Setup Page (Easiest) ⭐

### Step 1: Access Setup Page
1. Start your application: `npm run dev`
2. Go to: `http://localhost:3000/admin/setup`
3. Fill in your admin credentials:
   - **Email**: `admin@yourdomain.com`
   - **Password**: `YourStrongPassword123!`
   - **Confirm Password**: Same as above
4. Click **"Create Admin Account"**
5. ✅ Done! You'll see success message with your credentials

### Step 2: Test Login
1. Go to: `http://localhost:3000/admin/login`
2. Enter your credentials
3. You should access the admin dashboard!

### Step 3: Security (Important!)
**Delete the setup page after creating admin:**
- Delete file: `/app/admin/setup/page.tsx`
- This prevents unauthorized admin creation

---

## Method 2: Using Supabase Dashboard

### Step 1: Create User in Supabase
1. Go to your Supabase project dashboard
2. Navigate to **Authentication** → **Users**
3. Click **"Add user"**
4. Fill the form:
   - **Email**: `admin@yourdomain.com`
   - **Password**: `YourStrongPassword123!`
   - **Auto Confirm User**: ✅ Toggle ON
5. Click **"Create user"**

### Step 2: Make User Admin
1. Copy the **User UUID** from the users table
2. Go to **SQL Editor**
3. Run this query:

\`\`\`sql
UPDATE public.profiles 
SET role = 'admin' 
WHERE id = 'paste-your-user-uuid-here';
\`\`\`

### Step 3: Test Login
- Go to `/admin/login` and use your credentials

---

## Method 3: Using SQL Commands

### If you prefer direct database commands:

\`\`\`sql
-- Step 1: Insert user into auth.users (done via Supabase Auth)
-- Step 2: Update profile role
INSERT INTO public.profiles (id, email, role)
SELECT id, email, 'admin'
FROM auth.users 
WHERE email = 'your-admin-email@example.com'
ON CONFLICT (id) DO UPDATE SET role = 'admin';
\`\`\`

---

## 🎯 Quick Test Checklist

After creating admin account:

- [ ] Can access `/admin/login`
- [ ] Can login with credentials
- [ ] Can see admin dashboard
- [ ] Can view packages, messages, testimonials
- [ ] Setup page deleted (for security)

---

## 🔧 Troubleshooting

### "User already exists" error:
- The email is already registered
- Try a different email or reset the existing user

### "Profile not found" error:
- The profiles table might not exist
- Run the database setup scripts first

### "Permission denied" error:
- Check if RLS policies are set correctly
- Verify the user role is set to 'admin'

### Can't access admin dashboard:
- Clear browser cache and cookies
- Check browser console for errors
- Verify environment variables are set

---

## 🚀 Recommended Approach

**Use Method 1 (Setup Page)** - it's the easiest and handles everything automatically:

1. Go to `/admin/setup`
2. Create admin account
3. Delete setup page
4. Start managing your website!

Your admin panel will have:
- 📊 Dashboard with statistics
- 📦 Package management
- 💬 Contact messages
- ⭐ Testimonials management
- 👥 User management

**Security Note**: Always delete the setup page after creating your admin account!
