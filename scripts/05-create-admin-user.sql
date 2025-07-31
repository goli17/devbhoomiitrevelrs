-- This script creates an admin user directly in the database
-- Replace the email and password with your desired credentials

-- Step 1: Insert user into auth.users (this is usually done by Supabase Auth)
-- You should create the user through Supabase Dashboard instead

-- Step 2: After creating user through Supabase Dashboard, run this:
-- Replace 'your-email@example.com' with your actual email

-- First, let's check if the user exists and get their ID
SELECT id, email FROM auth.users WHERE email = 'your-email@example.com';

-- Then update their role to admin (replace the email with your actual email)
INSERT INTO public.profiles (id, email, role)
SELECT id, email, 'admin'
FROM auth.users 
WHERE email = 'your-email@example.com'
ON CONFLICT (id) DO UPDATE SET role = 'admin';
