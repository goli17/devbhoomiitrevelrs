-- Verify Database Setup
-- Run this to check if everything is set up correctly

-- Check if all tables exist
SELECT 
    'Tables Check' as check_type,
    CASE 
        WHEN COUNT(*) = 5 THEN '✅ All tables exist'
        ELSE '❌ Missing tables: ' || (5 - COUNT(*))::text
    END as status
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('profiles', 'packages', 'testimonials', 'contact_messages', 'blog_posts');

-- Check if sample data exists
SELECT 
    'Sample Data Check' as check_type,
    CASE 
        WHEN COUNT(*) > 0 THEN '✅ Sample packages loaded: ' || COUNT(*)::text
        ELSE '❌ No sample data found'
    END as status
FROM public.packages;

-- Check if admin user exists
SELECT 
    'Admin User Check' as check_type,
    CASE 
        WHEN COUNT(*) > 0 THEN '✅ Admin user exists: ' || string_agg(email, ', ')
        ELSE '❌ No admin user found'
    END as status
FROM public.profiles 
WHERE role = 'admin';

-- Check Row Level Security
SELECT 
    'RLS Check' as check_type,
    CASE 
        WHEN COUNT(*) = 5 THEN '✅ RLS enabled on all tables'
        ELSE '❌ RLS missing on some tables'
    END as status
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename IN ('profiles', 'packages', 'testimonials', 'contact_messages', 'blog_posts')
AND rowsecurity = true;

-- Show all profiles (for debugging)
SELECT 
    'Current Users' as info,
    id,
    email,
    role,
    created_at
FROM public.profiles
ORDER BY created_at DESC;
