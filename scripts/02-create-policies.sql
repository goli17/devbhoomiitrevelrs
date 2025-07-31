-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
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

-- Create policies
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Packages are viewable by everyone" ON public.packages FOR SELECT USING (active = true);
CREATE POLICY "Only admins can manage packages" ON public.packages FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

CREATE POLICY "Published blog posts are viewable by everyone" ON public.blog_posts FOR SELECT USING (published = true);
CREATE POLICY "Only admins can manage blog posts" ON public.blog_posts FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

CREATE POLICY "Approved testimonials are viewable by everyone" ON public.testimonials FOR SELECT USING (approved = true);
CREATE POLICY "Anyone can insert testimonials" ON public.testimonials FOR INSERT WITH CHECK (true);
CREATE POLICY "Only admins can manage testimonials" ON public.testimonials FOR UPDATE USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

CREATE POLICY "Only admins can view contact messages" ON public.contact_messages FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);
CREATE POLICY "Anyone can insert contact messages" ON public.contact_messages FOR INSERT WITH CHECK (true);
