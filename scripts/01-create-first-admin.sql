-- Create First Admin User
-- Run this AFTER running the database setup script

-- Step 1: Create the admin user in auth.users (you need to do this manually first)
-- Go to Supabase Dashboard > Authentication > Users > Add User
-- Email: admin@yourdomain.com
-- Password: YourSecurePassword123!
-- Auto Confirm User: ON

-- Step 2: Then run this script to make them admin
-- Replace 'admin@yourdomain.com' with your actual admin email

DO $$
DECLARE
    user_id UUID;
    admin_email TEXT := 'admin@yourdomain.com'; -- ← CHANGE THIS EMAIL
BEGIN
    -- Get the user ID from auth.users
    SELECT id INTO user_id 
    FROM auth.users 
    WHERE email = admin_email;
    
    IF user_id IS NOT NULL THEN
        -- Insert or update the profile to make them admin
        INSERT INTO public.profiles (id, email, role, created_at, updated_at)
        VALUES (user_id, admin_email, 'admin', NOW(), NOW())
        ON CONFLICT (id) 
        DO UPDATE SET 
            role = 'admin',
            updated_at = NOW();
            
        RAISE NOTICE '✅ Admin user created successfully!';
        RAISE NOTICE '📧 Email: %', admin_email;
        RAISE NOTICE '🔑 User ID: %', user_id;
        RAISE NOTICE '🎯 Role: admin';
        RAISE NOTICE '';
        RAISE NOTICE '🚀 You can now login at: /admin/login';
    ELSE
        RAISE EXCEPTION '❌ User with email % not found!', admin_email;
        RAISE EXCEPTION '💡 Please create the user first in Supabase Dashboard > Authentication > Users';
    END IF;
END $$;

-- Verify the admin user was created
SELECT 
    id,
    email,
    role,
    created_at,
    '✅ Admin user verified' as status
FROM public.profiles 
WHERE role = 'admin';
