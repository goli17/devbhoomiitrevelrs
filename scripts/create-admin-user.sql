-- This script should be run AFTER you create your first user through Supabase Auth
-- Replace 'your-admin-email@example.com' with the actual email you used to sign up

-- First, sign up a user through your application or Supabase dashboard
-- Then run this script to make them an admin

-- Update the user role to admin (replace the email with your actual admin email)
UPDATE public.profiles 
SET role = 'admin' 
WHERE email = 'your-admin-email@example.com';

-- If the profile doesn't exist, you can create it manually:
-- INSERT INTO public.profiles (id, email, role) 
-- VALUES ('your-user-uuid-from-auth-users-table', 'your-admin-email@example.com', 'admin');
