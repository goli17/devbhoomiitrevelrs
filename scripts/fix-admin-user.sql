-- STEP 1: First, find your user ID
-- Go to Supabase Dashboard → Authentication → Users
-- Copy the UUID from the "ID" column (it looks like: 12345678-1234-1234-1234-123456789abc)

-- STEP 2: Replace 'YOUR_ACTUAL_USER_UUID_HERE' with the UUID you copied
-- The correct syntax is:

UPDATE public.profiles 
SET role = 'admin' 
WHERE id = 'YOUR_ACTUAL_USER_UUID_HERE';

-- Example (replace with your actual UUID):
-- UPDATE public.profiles 
-- SET role = 'admin' 
-- WHERE id = '12345678-1234-1234-1234-123456789abc';

-- STEP 3: Verify it worked by checking the profiles table:
SELECT id, email, role FROM public.profiles WHERE role = 'admin';
