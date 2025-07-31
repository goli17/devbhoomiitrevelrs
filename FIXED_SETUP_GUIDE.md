# 🔧 FIXED Database Setup Guide

## The Problem:
The `public.profiles` table doesn't exist because the database setup failed.

## ✅ Solution: Step-by-Step Database Setup

### Step 1: Clear Everything (if needed)
If you have any existing tables, you can start fresh:
1. Go to Supabase Dashboard → SQL Editor
2. Run this to see existing tables:
\`\`\`sql
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
\`\`\`

### Step 2: Create Tables (Run Each Script in Order)

#### Script 1: Create Tables
Copy and paste `scripts/01-create-tables.sql` into SQL Editor and run it.

#### Script 2: Create Security Policies  
Copy and paste `scripts/02-create-policies.sql` into SQL Editor and run it.

#### Script 3: Create Functions
Copy and paste `scripts/03-create-functions.sql` into SQL Editor and run it.

#### Script 4: Insert Sample Data
Copy and paste `scripts/04-insert-sample-data.sql` into SQL Editor and run it.

### Step 3: Create Admin User

#### Method A: Supabase Dashboard (Recommended)
1. Go to **Authentication** → **Users**
2. Click **"Add user"**
3. Fill form:
   - Email: `admin@yourdomain.com`
   - Password: `YourPassword123!`
   - Auto Confirm User: ✅ ON
4. Click **Create user**

#### Method B: Use Signup Page
1. Go to `http://localhost:3000/admin/signup`
2. Create your account (it will automatically create the profile)

### Step 4: Make User Admin
After creating the user, run this in SQL Editor:
\`\`\`sql
-- Replace 'admin@yourdomain.com' with your actual email
UPDATE public.profiles 
SET role = 'admin' 
WHERE email = 'admin@yourdomain.com';
\`\`\`

### Step 5: Verify Everything Works
Check if tables exist:
\`\`\`sql
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
\`\`\`

Check if admin user exists:
\`\`\`sql
SELECT id, email, role FROM public.profiles WHERE role = 'admin';
\`\`\`

---

## 🎯 Alternative: One-Click Setup

If the step-by-step approach is too complex, use the signup page:

1. Start your app: `npm run dev`
2. Go to: `http://localhost:3000/admin/signup`
3. Create your admin account
4. The signup page will:
   - Create the user in Supabase Auth
   - Automatically create the profile with admin role
   - Handle all database operations

This bypasses all SQL commands and creates everything automatically!

---

## 🔍 Troubleshooting

### "relation does not exist" errors:
- Run the scripts in the correct order (01, 02, 03, 04)
- Make sure each script completes without errors
- Check the Supabase logs for detailed error messages

### Tables not appearing:
- Refresh the Supabase dashboard
- Check the "Table Editor" section to see if tables were created
- Verify you're in the correct project

### Still having issues:
Use the signup page method - it's foolproof and handles everything automatically!
