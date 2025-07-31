# 🔧 Fix Admin User Setup

## The Error You Got:
\`\`\`
ERROR: 42601: syntax error at or near "user"
LINE 1: UPDATE user SET role = 'admin' WHERE id =
\`\`\`

## ❌ Wrong Command:
\`\`\`sql
UPDATE user SET role = 'admin' WHERE id = 'some-id';
\`\`\`

## ✅ Correct Command:
\`\`\`sql
UPDATE public.profiles SET role = 'admin' WHERE id = 'your-actual-uuid';
\`\`\`

---

## 📋 Step-by-Step Fix:

### Step 1: Find Your User UUID
1. Go to Supabase Dashboard
2. Click **Authentication** → **Users**
3. Find your user in the list
4. **Copy the UUID** from the "ID" column (looks like: `12345678-1234-1234-1234-123456789abc`)

### Step 2: Run the Correct Command
1. Go to **SQL Editor**
2. Paste this command (replace the UUID with yours):

\`\`\`sql
UPDATE public.profiles 
SET role = 'admin' 
WHERE id = '12345678-1234-1234-1234-123456789abc';
\`\`\`

### Step 3: Verify It Worked
Run this to check:
\`\`\`sql
SELECT id, email, role FROM public.profiles WHERE role = 'admin';
\`\`\`

You should see your user with role = 'admin'

---

## 🎯 Alternative: Create Admin User Properly

If you haven't created a user yet, here's the complete process:

### Method 1: Supabase Dashboard
1. **Authentication** → **Users** → **Add user**
2. Fill form:
   - Email: `admin@yourdomain.com`
   - Password: `YourPassword123!`
   - Auto Confirm User: ✅ ON
3. Click **Create user**
4. Copy the new user's UUID
5. Run the UPDATE command above

### Method 2: Use the Signup Page
1. Go to `http://localhost:3000/admin/signup`
2. Create your admin account
3. It will automatically set the role to 'admin'
4. Delete the signup page file after use

---

## 🔍 Common Issues:

### "relation 'user' does not exist"
- ✅ Use `public.profiles` not `user`
- The user data is in `auth.users` but roles are in `public.profiles`

### "No rows updated"
- ❌ Wrong UUID - make sure you copied the correct ID
- ❌ User doesn't exist in profiles table

### "Permission denied"
- ✅ Make sure you're using the Service Role key in Supabase
- ✅ Or run the command in Supabase SQL Editor (recommended)

---

## 🎉 After Fixing:

1. Go to `http://localhost:3000/admin/login`
2. Enter your email and password
3. You should see the admin dashboard!

The key is using the correct table name (`public.profiles`) and your actual user UUID.
