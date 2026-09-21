import { asset } from '../lib/paths'

export const siteConfig = {
  name: 'Paciano',
  tagline: 'Nature Resort',
  fullName: 'Paciano Hospitality Pvt Ltd',
  description:
    'Nestled in the midst of verdant tea plantations and cradled by a serene river, Paciano offers unparalleled luxury and an idyllic escape at the gateway of North Bengal.',
  address:
    'Para: Banshbari, Vill: Manabari tea garden, Oodlabari, Ps: Malbazar, Dist: Jalpaiguri, State: West Bengal 735222',
  phones: ['+91 98314 76934', '+91 85976 66577', '+91 90511 25078', '+91 62808 68215'],
  emails: ['info@paciano.in', 'sales@paciano.in'],
  social: {
    instagram: 'https://www.instagram.com/paciano.in',
    facebook: 'https://www.facebook.com/pacianoresortindia/',
  },
  logo: asset('/images/brand/logo-1.png'),
  rating: 4.2,
  reviewCount: 77,
  stats: [
    { value: '24+', label: 'Luxurious Rooms' },
    { value: '10+', label: 'Acres of Greenery' },
    { value: '4.2/5', label: 'Guest Rating' },
    { value: '200', label: 'Banquet Capacity' },
  ],
}

export const heroSlides = [
  {
    image: asset('/images/hero/hero-banner-1.png'),
    script: 'Escape. Unwind. Reconnect.',
    title: 'Luxury in the Lap of Nature',
    subtitle:
      'Nestled in verdant tea plantations and cradled by a serene river at the gateway of North Bengal.',
  },
  {
    image: asset('/images/hero/hero-banner-2.png'),
    script: 'Luxury in Every Detail',
    title: 'Serenity by the Pool',
    subtitle:
      'Unwind in our sparkling infinity pool overlooking misty tea gardens and forested hills.',
  },
  {
    image: asset('/images/hero/hero-banner-3.png'),
    script: 'Savour the Moment',
    title: 'Dine by the River',
    subtitle:
      'Experience al fresco dining and curated flavours amidst nature\'s most breathtaking backdrop.',
  },
  {
    image: asset('/images/hero/hero-banner-4.png?v=3'),
    script: 'From first light to starlight',
    title: 'A Day in the Hills',
    subtitle:
      'Sunrise over tea gardens, a living river, and a sky that fades from gold to a canopy of stars.',
  },
  {
    image: asset('/images/hero/daycycle-05/noon.png'),
    script: 'River light, mountain hush',
    title: 'A Full Day at Paciano',
    subtitle:
      'Watch the valley shift from golden sunrise to bright noon, warm evening, and a starlit night.',
  },
]

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Rooms & Amenities', href: '/rooms' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Dining', href: '/dining' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export const aboutHighlights = [
  {
    icon: 'leaf',
    title: 'Nature at Its Best',
    description: 'Surrounded by lush tea gardens, tranquil rivers, and breathtaking hill views.',
  },
  {
    icon: 'bed',
    title: 'Luxury & Comfort',
    description: '24 thoughtfully designed rooms with modern amenities and stunning vistas.',
  },
  {
    icon: 'utensils',
    title: 'Gourmet Dining',
    description: 'Multi-cuisine restaurant, poolside bar, and open-air dining under the stars.',
  },
]

export const features = [
  {
    icon: 'users',
    title: 'Banquet for 200',
    description: 'Host weddings, conferences, and gatherings for up to 200 guests at Paciano.',
    image: asset('/images/gallery/living-space-hd.png'),
  },
  {
    icon: 'waves',
    title: 'Spa & Sparkling Pool',
    description: 'A world-class spa, children’s play area, and a pool to unwind after tea-garden days.',
    image: asset('/images/gallery/pool-deck-hd.png'),
  },
  {
    icon: 'binoculars',
    title: 'Wildlife at the Door',
    description: 'Kathambari Forest, Gajoldoba, Mongpong, Chapramari, and Murti are a short drive away.',
    image: asset('/images/gallery/valley-light-hd.png'),
  },
  {
    icon: 'heart',
    title: 'Warm Paciano Service',
    description: 'Personalised hospitality so every family, couple, and guest feels at home.',
    image: asset('/images/gallery/bath-sanctuary-hd.png'),
  },
]

export const roomTypes = [
  {
    id: 'standard',
    name: 'Standard Rooms',
    subtitle: 'Couple Rooms',
    image: asset('/images/rooms/stay-standard.png'),
    occupancy: '2 Adults + 1 Child (max.)',
    bed: '1 King Size Bed',
    description:
      'Ideal for couples or solo travelers seeking a peaceful retreat. Spacious, airy rooms with river views and modern comforts.',
    features: [
      'Air-conditioned with central AC',
      'River-view balcony',
      'King size bed with premium mattress',
      'High-speed internet & wall-mounted TV',
      'Mini bar & electric kettle',
      'Luxurious bathroom with premium toiletries',
    ],
  },
  {
    id: 'premium',
    name: 'Premium Rooms',
    subtitle: 'Family Rooms',
    image: asset('/images/rooms/stay-premium.png'),
    occupancy: '3 Adults + 1 Child (max.)',
    bed: '1 King Size Bed + 1 Single Bed',
    description:
      'Perfect for families or small groups. Extra space, additional bedding, and all the luxury amenities of our standard rooms.',
    features: [
      'Spacious family layout',
      'Open balcony with hill views',
      'King + single bed configuration',
      'Working corner & personal seating area',
      '2-layer blackout curtains',
      'Additional mattress on request',
    ],
  },
  {
    id: 'deluxe',
    name: 'Deluxe River View',
    subtitle: 'Suite Rooms',
    image: asset('/images/rooms/stay-river.png'),
    occupancy: '2 Adults + 1 Child (max.)',
    bed: '1 King Size Bed',
    description:
      'Wake up to panoramic river and mountain views from a private balcony. Bright, airy luxury with all premium amenities.',
    features: [
      'Private balcony with river views',
      'Outdoor lounge seating',
      'Air-conditioned with central AC',
      'King size bed with premium mattress',
      'High-speed internet & wall-mounted TV',
      'Luxurious bathroom with premium toiletries',
    ],
  },
]

export const roomAmenities = [
  {
    category: 'Rooms',
    image: asset('/images/premium/premium-room.png'),
    items: [
      'Maximum occupancy: 3 (2 Adults + 1 Child)',
      'Air-conditioned',
      '1 king size bed with high-quality mattress',
      'Intercom in room and washroom',
      'Wall-mounted TV with cable connection',
      'High-speed internet',
      '2 Layered Curtains for blackout',
      'Changing corner with wardrobe',
    ],
  },
  {
    category: 'Food & Beverages',
    image: asset('/images/premium/premium-dining.png'),
    items: [
      'Mini bar with drinks and snacks',
      'Mini refrigerator',
      'Electric kettle',
      'In-room snacking choices',
    ],
  },
  {
    category: 'Bath Spaces',
    image: asset('/images/premium/premium-wellness.png'),
    items: [
      'International standard washroom accessories',
      'Premium deflection washbasin',
      'Wide range of toiletries',
      'Six towels & bathrobes',
      'Bin for wet waste',
    ],
  },
  {
    category: 'Furniture & Comfort',
    image: asset('/images/premium/premium-room.png'),
    items: [
      'Working corner with table and chair',
      'Personal corner with sofa and tea table',
      'High-quality illumination',
      'Ottoman for added comfort',
    ],
  },
]

export const savourItems = [
  {
    id: 'restaurant',
    name: 'Multi-Cuisine Restaurant',
    description: 'Local favourites and global plates, crafted with care.',
    image: asset('/images/dining/restaurant.png'),
    icon: 'utensils',
    tone: 'teal',
  },
  {
    id: 'chef',
    name: 'Chef Specials',
    description: 'Signature curries and seasonal plates from our kitchen.',
    image: asset('/images/dining/chef-specials.webp'),
    tone: 'sage',
  },
  {
    id: 'gourmet',
    name: 'Gourmet Table',
    description: 'Shared spreads, fresh herbs, and slow afternoon dining.',
    image: asset('/images/dining/gourmet-table.webp'),
    icon: 'soup',
    tone: 'gold',
  },
  {
    id: 'poolside',
    name: 'Poolside Bar',
    description: 'Sip signature cocktails or fresh mocktails by the sparkling pool.',
    image: asset('/images/dining/poolside-lounge.webp'),
    icon: 'wine',
    tone: 'slate',
  },
  {
    id: 'lounge',
    name: 'Signature Lounge',
    description: 'A lavish bar counter and lounge for evenings at Paciano.',
    image: asset('/images/dining/signature-bar.png'),
    icon: 'glass',
    tone: 'copper',
  },
  {
    id: 'openair',
    name: 'Open-Air Dining',
    description: 'Dine under the stars beside tea gardens and a tranquil river.',
    image: asset('/images/dining/open-air.webp'),
    icon: 'leaf',
    tone: 'forest',
  },
  {
    id: 'terrace',
    name: 'Terrace Pour',
    description: 'Crystal glasses and golden-hour drinks on the deck.',
    image: asset('/images/dining/terrace-pour.webp'),
    icon: 'sparkles',
    tone: 'teal',
  },
  {
    id: 'garden',
    name: 'Garden Cocktails',
    description: 'Hill views, cold pours, and unhurried evenings.',
    image: asset('/images/dining/garden-drinks.webp'),
    tone: 'navy',
  },
  {
    id: 'candlelight',
    name: 'Candlelight Dinner',
    description: 'Starlit tables, candles, and a quiet river soundtrack.',
    image: asset('/images/dining/candlelight.png'),
    icon: 'flame',
    tone: 'gold',
  },
  {
    id: 'coffee',
    name: 'Coffee & Tea',
    description: 'Darjeeling pours, espresso, and pastry mornings.',
    image: asset('/images/dining/coffee-tea.png'),
    icon: 'coffee',
    tone: 'slate',
  },
]

export const diningVenues = [
  {
    id: 'restaurant',
    name: 'Multi-Cuisine Restaurant',
    image: asset('/images/dining/restaurant.png'),
    description:
      'From local favourites to global dishes, our chefs create everything with love and care. Customised menus for events and chef-special dishes.',
    highlights: ['Multi-cuisine food', 'Customised menus for events', 'Chef-special dishes'],
  },
  {
    id: 'poolside',
    name: 'Poolside Bar',
    image: asset('/images/dining/poolside-lounge.webp'),
    description:
      'Sip signature cocktails or fresh mocktails while soaking in the sun. Friendly bartenders and poolside seating for the perfect unwind.',
    highlights: ['Signature cocktails', 'Fresh fruit mocktails', 'Poolside snacks and platters'],
  },
  {
    id: 'openair',
    name: 'Open-Air Bar & Restaurant',
    image: asset('/images/dining/open-air.webp'),
    description:
      'Dine under the stars surrounded by lush tea gardens and overlooking a tranquil river. Al fresco dining at its finest.',
    highlights: ['Al fresco dining', 'Curated cocktails and wines', 'Live grills and seasonal specials'],
  },
  {
    id: 'drinks',
    name: 'Drinks Corner',
    image: asset('/images/dining/signature-bar.png'),
    description:
      'Our newest hangout with a lavish bar counter and spacious lounge. Perfect for relaxed evenings and lively catch-ups.',
    highlights: ['Expansive lounge seating', 'Premium spirits and cocktails', 'Ideal for groups'],
  },
]

export const amenities = [
  { icon: 'wifi', name: 'High-Speed Internet' },
  { icon: 'pool', name: 'Swimming Pool' },
  { icon: 'wine', name: 'Pool Side Bar' },
  { icon: 'baby', name: "Children's Park" },
  { icon: 'gamepad', name: 'Indoor Games' },
  { icon: 'utensils', name: 'Open-Air Restaurant' },
  { icon: 'chef', name: 'Multi-Cuisine Restaurant' },
  { icon: 'users', name: 'Banquet & Conference' },
  { icon: 'car', name: 'Parking Area' },
  { icon: 'spa', name: 'Spa & Wellness' },
  { icon: 'camera', name: 'Surveillance Security' },
  { icon: 'coffee', name: 'Coffee Shop' },
]

export const experiences = [
  {
    title: 'Morning Yoga',
    image: asset('/images/experiences/exp-yoga-front.png'),
    imageBack: asset('/images/experiences/exp-yoga-back.png'),
    description: 'Start your day with yoga amidst the serene tea gardens.',
  },
  {
    title: 'Nature Trails',
    image: asset('/images/experiences/exp-trails-front.png'),
    imageBack: asset('/images/experiences/exp-trails-back.png'),
    description: 'Explore lush trails through tea plantations and riverside paths.',
  },
  {
    title: 'Candlelight Dinner',
    image: asset('/images/hero/hero-banner-3.png'),
    imageBack: asset('/images/experiences/exp-dinner-back.png'),
    description: 'Romantic dining under the stars with the natural symphony of the forest.',
  },
  {
    title: 'Wellness & Spa',
    image: asset('/images/premium/premium-wellness.png'),
    imageBack: asset('/images/experiences/exp-spa-back.png'),
    description: 'Rejuvenate with world-class spa treatments in tranquil surroundings.',
  },
  {
    title: 'Jungle Walks',
    image: asset('/images/experiences/exp-jungle-front.png'),
    imageBack: asset('/images/experiences/exp-jungle-back.png'),
    description: 'Discover nearby forests and wildlife with guided nature walks.',
  },
  {
    title: 'Bird Watching',
    image: asset('/images/experiences/exp-bird-front.png'),
    imageBack: asset('/images/experiences/exp-bird-back.png'),
    description: 'Spot exotic birds in the diverse ecosystem of the Dooars region.',
  },
  {
    title: 'Tea Garden Strolls',
    image: asset('/images/experiences/exp-tea-front.png'),
    imageBack: asset('/images/experiences/exp-tea-back.png'),
    description: 'Walk through world-famous tea gardens and learn about tea cultivation.',
  },
  {
    title: 'Sightseeing Tours',
    image: asset('/images/experiences/exp-tours-front.png'),
    imageBack: asset('/images/experiences/exp-tours-back.png'),
    description: 'Visit Kathambari Forest, Gajoldoba, Mongpong, Chapramari, and Murti.',
  },
]

export const distinctions = [
  {
    title: 'Idyllic Location',
    description:
      'Nestled at the gateway of North Bengal, surrounded by lush tea gardens and a tranquil river, offering breathtaking views of the hills.',
  },
  {
    title: 'Nature & Wildlife',
    description:
      'Discover nearby gems like Kathambari Forest, Gajoldoba Teesta Barrage, Mongpong, Chapramari Forest Reserve, and Murti.',
  },
  {
    title: 'Luxury & Comfort',
    description:
      'A 24-room resort with modern amenities including swimming pool, spa, multi-cuisine restaurant, coffee shop, and bar.',
  },
  {
    title: 'Recreational Activities',
    description:
      'Jungle walks, tea garden strolls, bird watching, and enchanting open-air dining with candlelight dinners.',
  },
  {
    title: 'Cultural Connection',
    description:
      'Unique microclimate of the Dooars region producing world-class tea, tied to local myths and legends.',
  },
  {
    title: 'Warm Service',
    description:
      'Exceptional, personalised service ensuring every guest feels welcome and at home.',
  },
]

export const testimonials = [
  {
    name: 'Shikha Tiwari',
    location: 'Kolkata',
    quote:
      'The size of the rooms are big, cozy and comforting. Riverview balcony. Surrounded by river and hills. The best part was the hospitality provided by the staff.',
    rating: 5,
  },
  {
    name: 'Trinanjan Ghosh',
    location: 'Kolkata',
    quote:
      'One of the best resorts I have ever visited. The rooms were really big, airy, neat and clean. The location and view was just worth the money. Grand experience.',
    rating: 5,
  },
  {
    name: 'Biplab Kumar Basu',
    location: 'Siliguri',
    quote:
      'Our stay was amazing. The rooms are quite spacious and view from the room is amazing. The food was delicious. All the staff were courteous and well mannered.',
    rating: 5,
  },
  {
    name: 'Dipali Banerjee',
    location: 'Kolkata',
    quote:
      'Wonderful experience. Perfect for a relaxing getaway. The rooms were spacious, clean and equipped with all modern amenities. Can\'t wait to return!',
    rating: 5,
  },
  {
    name: 'Saurav Basu',
    location: 'Siliguri',
    quote:
      'Excellent ambiance, hospitality and food. The Bengali cuisine served at the property is delicious. Overall we had a pleasant and memorable stay.',
    rating: 5,
  },
  {
    name: 'Bapi Ghosh',
    location: 'Kolkata',
    quote:
      'The resort\'s location is just amazing, the rooms were neat, clean and very large, full of amenities and the taste of food was very good. Really want to visit again.',
    rating: 5,
  },
  {
    name: 'Tarun Kumar Bhadra',
    location: 'West Bengal',
    quote: 'Good atmosphere. Best service. A calm stay surrounded by nature.',
    rating: 5,
  },
  {
    name: 'Subhabrata Sarkar',
    location: 'Kolkata',
    quote:
      'We went for lunch and ordered Chinese Combo. Food tasted good. Overall ambience is very good. The resort seems well maintained and clean.',
    rating: 4,
  },
]

export const guestVideos = [
  {
    src: asset('/videos/testimonials/video-1.mp4'),
    name: 'Ms. Ojaswi Niyogi',
    location: 'Kolkata',
    title: 'A stay that felt like home',
  },
  {
    src: asset('/videos/testimonials/video-2.mp4'),
    name: 'Mr. & Mrs. Tiwari',
    location: 'Kolkata',
    title: 'Our home, our story',
  },
  {
    src: asset('/videos/testimonials/video-3.mp4'),
    name: 'Lions Club',
    location: 'Siliguri',
    title: 'Together by the river',
  },
  {
    src: asset('/videos/testimonials/video-4.mp4'),
    name: 'Jagadish Agarwal',
    location: 'Siliguri',
    title: 'A picturesque escape',
  },
  {
    src: asset('/videos/testimonials/video-5.mp4'),
    name: 'Mrs. Namrata Singh',
    location: 'India',
    title: 'Peace in the tea gardens',
  },
  {
    src: asset('/videos/testimonials/video-6.mp4'),
    name: 'Saheli Kar & Indrani Basu',
    location: 'Kolkata',
    title: 'Memories by the hills',
  },
]

export const galleryItems = [
  { src: asset('/images/hero/hero-banner-1.png'), category: 'nature', label: 'River & tea gardens' },
  { src: asset('/images/hero/hero-banner-2.png'), category: 'wellness', label: 'Infinity pool' },
  { src: asset('/images/hero/hero-banner-3.png'), category: 'dining', label: 'Dine by the river' },
  { src: asset('/images/gallery/aerial-paciano-hd.png'), category: 'nature', label: 'Aerial Paciano' },
  { src: asset('/images/gallery/valley-light-hd.png'), category: 'nature', label: 'Valley light' },
  { src: asset('/images/premium/premium-room.png'), category: 'rooms', label: 'Luxury suite' },
  { src: asset('/images/gallery/garden-room-hd.png'), category: 'rooms', label: 'Garden room' },
  { src: asset('/images/gallery/river-suite-hd.png'), category: 'rooms', label: 'River suite' },
  { src: asset('/images/rooms/stay-riverview.png'), category: 'rooms', label: 'River view stay' },
  { src: asset('/images/dining/restaurant.png'), category: 'dining', label: 'Restaurant' },
  { src: asset('/images/gallery/open-air-dining-hd.png'), category: 'dining', label: 'Open-air dining' },
  { src: asset('/images/dining/signature-bar.png'), category: 'dining', label: 'Lounge bar' },
  { src: asset('/images/dining/candlelight.png'), category: 'dining', label: 'Candlelight dinner' },
  { src: asset('/images/dining/coffee-tea.png'), category: 'dining', label: 'Coffee & tea' },
  { src: asset('/images/gallery/pool-deck-hd.png'), category: 'wellness', label: 'Pool deck' },
  { src: asset('/images/gallery/pool-evening-hd.png'), category: 'wellness', label: 'Pool evening' },
  { src: asset('/images/premium/premium-wellness.png'), category: 'wellness', label: 'Spa & stillness' },
  { src: asset('/images/gallery/bath-sanctuary-hd.png'), category: 'wellness', label: 'Bath sanctuary' },
  { src: asset('/images/gallery/living-space-hd.png'), category: 'rooms', label: 'Living space' },
  { src: asset('/images/gallery/tea-estate-hd.png'), category: 'nature', label: 'Tea estate' },
  { src: asset('/images/gallery/misty-hills-hd.png'), category: 'nature', label: 'Misty hills' },
  { src: asset('/images/gallery/resort-grounds-hd.png'), category: 'nature', label: 'Resort grounds' },
  { src: asset('/images/experiences/exp-yoga-front.png'), category: 'wellness', label: 'Morning yoga' },
  { src: asset('/images/experiences/exp-trails-front.png'), category: 'nature', label: 'Nature trails' },
]

export const galleryImages = galleryItems.map((item) => item.src)

export const nearbyAttractions = [
  { name: 'Kathambari Forest', distance: 'Nearby' },
  { name: "Gajoldoba's Teesta Barrage", distance: '30 min' },
  { name: 'Mongpong', distance: '45 min' },
  { name: 'Chapramari Forest Reserve', distance: '1 hr' },
  { name: 'Murti River', distance: '1 hr' },
  { name: 'Jaldapara National Park', distance: '2 hr' },
]
