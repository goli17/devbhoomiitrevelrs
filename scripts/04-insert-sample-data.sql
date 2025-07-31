-- Insert sample packages
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
    {"day": 4, "title": "Return to Haridwar", "description": "Drive back to Haridwar. Drop at railway station/airport."}
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
)
ON CONFLICT (slug) DO NOTHING;

-- Insert sample testimonials
INSERT INTO public.testimonials (name, content, rating, approved) VALUES
('Rajesh Kumar', 'Amazing experience! The team was very professional and the arrangements were perfect. Highly recommended for Char Dham Yatra.', 5, true),
('Priya Sharma', 'Best travel agency for spiritual tours. Everything was well organized and the guides were knowledgeable.', 5, true),
('Amit Singh', 'Wonderful journey to Kedarnath. The accommodation and food were excellent. Thank you for making our pilgrimage memorable.', 4, true),
('Sunita Devi', 'Professional service and great hospitality. The entire team was helpful throughout the journey.', 5, true);
