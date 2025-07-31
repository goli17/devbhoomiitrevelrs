-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create custom types
CREATE TYPE user_role AS ENUM ('user', 'admin');

-- Create tables first
-- Extend the auth.users table with a custom profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  role user_role DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Packages table
CREATE TABLE IF NOT EXISTS public.packages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  price INTEGER NOT NULL,
  duration TEXT NOT NULL,
  description TEXT,
  itinerary JSONB DEFAULT '[]',
  highlights TEXT[] DEFAULT '{}',
  inclusions TEXT[] DEFAULT '{}',
  exclusions TEXT[] DEFAULT '{}',
  images TEXT[] DEFAULT '{}',
  location_map TEXT,
  featured BOOLEAN DEFAULT false,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Blog posts table
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  image TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Testimonials table
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  content TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  avatar TEXT,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact messages table
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Packages are viewable by everyone" ON public.packages;
DROP POLICY IF EXISTS "Only admins can manage packages" ON public.packages;
DROP POLICY IF EXISTS "Published blog posts are viewable by everyone" ON public.blog_posts;
DROP POLICY IF EXISTS "Only admins can manage blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Approved testimonials are viewable by everyone" ON public.testimonials;
DROP POLICY IF EXISTS "Anyone can insert testimonials" ON public.testimonials;
DROP POLICY IF EXISTS "Only admins can manage testimonials" ON public.testimonials;
DROP POLICY IF EXISTS "Only admins can view contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Anyone can insert contact messages" ON public.contact_messages;

-- Create Row Level Security Policies
-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Packages policies
CREATE POLICY "Packages are viewable by everyone" ON public.packages FOR SELECT USING (active = true);
CREATE POLICY "Only admins can manage packages" ON public.packages FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

-- Blog posts policies
CREATE POLICY "Published blog posts are viewable by everyone" ON public.blog_posts FOR SELECT USING (published = true);
CREATE POLICY "Only admins can manage blog posts" ON public.blog_posts FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

-- Testimonials policies
CREATE POLICY "Approved testimonials are viewable by everyone" ON public.testimonials FOR SELECT USING (approved = true);
CREATE POLICY "Anyone can insert testimonials" ON public.testimonials FOR INSERT WITH CHECK (true);
CREATE POLICY "Only admins can manage testimonials" ON public.testimonials FOR UPDATE USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

-- Contact messages policies
CREATE POLICY "Only admins can view contact messages" ON public.contact_messages FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);
CREATE POLICY "Anyone can insert contact messages" ON public.contact_messages FOR INSERT WITH CHECK (true);

-- Functions
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, role)
  VALUES (NEW.id, NEW.email, 'user');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert sample packages data
INSERT INTO public.packages (slug, title, price, duration, description, itinerary, highlights, inclusions, exclusions, images, featured) VALUES
(
  'kedarnath-tour',
  'Kedarnath Dham Yatra',
  12999,
  '4 Days / 3 Nights',
  'Experience the divine journey to Kedarnath, one of the most sacred temples dedicated to Lord Shiva.',
  '[
    {"day": 1, "title": "Arrival in Haridwar", "description": "Pick up from Haridwar railway station/airport. Drive to Guptkashi. Overnight stay."},
    {"day": 2, "title": "Guptkashi to Kedarnath", "description": "Early morning drive to Gaurikund. Trek to Kedarnath (16 km). Darshan and overnight stay."},
    {"day": 3, "title": "Kedarnath to Guptkashi", "description": "Morning darshan. Trek back to Gaurikund. Drive to Guptkashi."},
    {"day": 4, "title": "Return to Haridwar", "description": "Drive back to Haridwar. Drop at railway station/airport."}
  ]',
  ARRAY['Kedarnath Temple Darshan', 'Helicopter service available', 'Experienced guides', 'Comfortable accommodation'],
  ARRAY['Accommodation', 'Meals (Breakfast & Dinner)', 'Transportation', 'Guide services'],
  ARRAY['Personal expenses', 'Helicopter charges', 'Porter charges', 'Travel insurance'],
  ARRAY['/images/kedarnath-1.jpg', '/images/kedarnath-2.jpg', '/images/kedarnath-3.jpg'],
  true
),
(
  'badrinath-tour',
  'Badrinath Dham Yatra',
  14999,
  '5 Days / 4 Nights',
  'Visit the sacred Badrinath temple, dedicated to Lord Vishnu, nestled in the Garhwal Himalayas.',
  '[
    {"day": 1, "title": "Arrival in Haridwar", "description": "Pick up and drive to Joshimath. Overnight stay."},
    {"day": 2, "title": "Joshimath to Badrinath", "description": "Drive to Badrinath. Temple darshan. Overnight stay."},
    {"day": 3, "title": "Badrinath Sightseeing", "description": "Visit Mana Village, Vyas Gufa, Ganesh Gufa. Temple darshan."},
    {"day": 4, "title": "Badrinath to Joshimath", "description": "Morning darshan. Drive back to Joshimath."},
    {"day": 5, "title": "Return to Haridwar", "description": "Drive to Haridwar. Drop at railway station/airport."}
  ]',
  ARRAY['Badrinath Temple Darshan', 'Mana Village visit', 'Hot water springs', 'Scenic mountain views'],
  ARRAY['Accommodation', 'Meals', 'Transportation', 'Guide services'],
  ARRAY['Personal expenses', 'Entry fees', 'Porter charges', 'Travel insurance'],
  ARRAY['/images/badrinath-1.jpg', '/images/badrinath-2.jpg', '/images/badrinath-3.jpg'],
  true
),
(
  'gangotri-tour',
  'Gangotri Dham Yatra',
  11999,
  '4 Days / 3 Nights',
  'Journey to Gangotri, the origin of the holy river Ganga, surrounded by stunning Himalayan peaks.',
  '[
    {"day": 1, "title": "Arrival in Haridwar", "description": "Pick up and drive to Uttarkashi. Overnight stay."},
    {"day": 2, "title": "Uttarkashi to Gangotri", "description": "Drive to Gangotri. Temple darshan. Overnight stay."},
    {"day": 3, "title": "Gangotri to Uttarkashi", "description": "Morning darshan. Drive back to Uttarkashi."},
    {"day": 4, "title": "Return to Haridwar", "description": "Drive to Haridwar. Drop at railway station/airport."}
  ]',
  ARRAY['Gangotri Temple Darshan', 'Ganga Aarti', 'Himalayan views', 'Sacred Ganga water'],
  ARRAY['Accommodation', 'Meals', 'Transportation', 'Guide services'],
  ARRAY['Personal expenses', 'Donations', 'Porter charges', 'Travel insurance'],
  ARRAY['/images/gangotri-1.jpg', '/images/gangotri-2.jpg', '/images/gangotri-3.jpg'],
  true
),
(
  'yamunotri-tour',
  'Yamunotri Dham Yatra',
  10999,
  '3 Days / 2 Nights',
  'Visit Yamunotri, the source of river Yamuna, and seek blessings at the sacred temple.',
  '[
    {"day": 1, "title": "Arrival in Haridwar", "description": "Pick up and drive to Barkot. Overnight stay."},
    {"day": 2, "title": "Barkot to Yamunotri", "description": "Drive to Janki Chatti. Trek to Yamunotri. Darshan and return."},
    {"day": 3, "title": "Return to Haridwar", "description": "Drive back to Haridwar. Drop at railway station/airport."}
  ]',
  ARRAY['Yamunotri Temple Darshan', 'Hot water springs', 'Surya Kund', 'Mountain trekking'],
  ARRAY['Accommodation', 'Meals', 'Transportation', 'Guide services'],
  ARRAY['Personal expenses', 'Trek equipment', 'Porter charges', 'Travel insurance'],
  ARRAY['/images/yamunotri-1.jpg', '/images/yamunotri-2.jpg', '/images/yamunotri-3.jpg'],
  true
);

-- Insert sample testimonials
INSERT INTO public.testimonials (name, content, rating, approved) VALUES
('Rajesh Kumar', 'Amazing experience! The team was very professional and the arrangements were perfect. Highly recommended for Char Dham Yatra.', 5, true),
('Priya Sharma', 'Best travel agency for spiritual tours. Everything was well organized and the guides were knowledgeable.', 5, true),
('Amit Singh', 'Wonderful journey to Kedarnath. The accommodation and food were excellent. Thank you for making our pilgrimage memorable.', 4, true),
('Sunita Devi', 'Professional service and great hospitality. The entire team was helpful throughout the journey.', 5, true);
