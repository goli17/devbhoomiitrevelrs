-- Manual Admin Creation Script
-- Use this if the setup page doesn't work

-- Step 1: First create a user through Supabase Auth Dashboard
-- Then run this script with your user's email

-- Replace 'your-admin-email@example.com' with your actual email
DO $$
DECLARE
    user_id UUID;
BEGIN
    -- Get the user ID from auth.users
    SELECT id INTO user_id 
    FROM auth.users 
    WHERE email = 'gauravdewli01@gmail.com;
    
    IF user_id IS NOT NULL THEN
        -- Insert or update the profile
        INSERT INTO public.profiles (id, email, role, created_at, updated_at)
        VALUES (user_id, 'your-admin-email@example.com', 'admin', NOW(), NOW())
        ON CONFLICT (id) 
        DO UPDATE SET 
            role = 'admin',
            updated_at = NOW();
            
        RAISE NOTICE 'Admin user created successfully with ID: %', user_id;
    ELSE
        RAISE EXCEPTION 'User with email your-admin-email@example.com not found. Please create the user first in Supabase Auth.';
    END IF;
END $$;

-- Verify the admin user was created
SELECT id, email, role, created_at 
FROM public.profiles 
WHERE role = 'admin';
