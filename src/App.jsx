import { useState } from 'react';
import { FaWhatsapp, FaSearch, FaMusic, FaCar, FaBicycle, FaFish, FaPaintBrush, FaSeedling, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaTradeFederation, FaGithub, FaLinkedin } from 'react-icons/fa';
import { GiGuitar, GiPianoKeys, GiCorn, GiMechanicGarage, GiFarmer } from 'react-icons/gi';
import { FaPalette } from 'react-icons/fa';
import { MdDirectionsBike, MdMusicNote } from 'react-icons/md';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [zoomedImage, setZoomedImage] = useState(null);
  const [activeNav, setActiveNav] = useState('home');
  const [loadedImages, setLoadedImages] = useState({});

  // Business categories data
// Business categories data
const categories = [
  {
    id: 'fish-sales',
    title: 'Premium Fish Sales',
    icon: <FaFish className="text-red-500 text-2xl" />,
    description: 'We offer the freshest, highest-quality fish in the region, carefully selected and handled for optimal taste and nutrition.',
    importance: 'Fresh fish is packed with omega-3 fatty acids, high-quality protein, and essential nutrients that support heart and brain health. Our fish are sourced daily from trusted local fishermen.',
    tips: [
      'For maximum freshness, consume within 2 days of purchase or freeze immediately',
      'Our tilapia is farmed in pristine conditions with no antibiotics',
      'Mudfish is excellent for traditional dishes and rich in flavor'
    ],
    items: [
      { name: 'Tilapia', price: 'Fair prices', image: '/20240323_143136.jpg' },
      { name: 'Tilapia', price: 'Fair prices', image: '/20241003_180524.jpg' },
      { name: 'Mudfish', price: 'Fair prices', image: '/20241003_180513.jpg' },
      { name: 'Catfish', price: 'Fair prices', image: '/20231128_102731.jpg' },
      { name: 'Nile Perch', price: 'Fair prices', image: '/20240323_143830.jpg' },
      { name: 'Fresh Harvesting', price: 'Fair prices', image: '/20241220_154009.jpg' },
      { name: 'Harvesting', price: 'Fair prices', image: '/20241220_154331.jpg' },
      { name: 'Catfish', price: 'Fair prices', image: '/20250308_115236.jpg' },
      { name: 'Catfish', price: 'Fair prices', image: '/eat.png'},
      { name: 'Catfish', price: 'Fair prices', image: '/20250308_115236.jpg'}
    ]
  },
  {
    id: 'bike-repair',
    title: 'Expert Bike Repair',
    icon: <MdDirectionsBike className="text-amber-600 text-2xl" />,
    description: 'Your trusted partner for all bicycle repair and maintenance needs, from quick fixes to complete overhauls.',
    importance: 'Regular bicycle maintenance ensures safety, improves performance, and extends the lifespan of your bike. Our certified mechanics use premium parts and tools.',
    tips: [
      'Get a tune-up every 500km or 6 months for optimal performance',
      'Properly inflated tires can improve efficiency by up to 15%',
      'Regular chain lubrication prevents wear and tear on components'
    ],
    services: [
      { name: 'Full Bike Repair', price: 'Fair prices', image: '/20241031_182228.jpg' },
      { name: 'Garage Operations', price: 'Fair prices', image: '/20240130_163445_001.jpg' },
      { name: 'sons-of-men', price: 'Fair prices', image: '/20241022_174812.jpg' },
      { name: 'sons-of-men', price: 'Fair prices', image: '/20241031_182254.jpg' },
      { name: 'sons-of-men', price: 'Fair prices', image: '/20241031_182300.jpg' },
      { name: 'sons-of-men', price: 'Fair prices', image: '/IMG_20230125_145522.jpg' },
      { name: 'sons-of-men', price: 'Fair prices', image: '/IMG_20230128_161322.jpg' },
      { name: 'sons-of-men', price: 'Fair prices', image: '/20241031_200843.jpg' },
    ]
  },
  {
    id: 'car-sales',
    title: 'Quality Car Sales',
    icon: <FaCar className="text-amber-600 text-2xl" />,
    description: 'Exceptional selection of second-hand and classic vehicles, each thoroughly inspected for reliability and value.',
    importance: 'Buying a quality used car can save you up to 50% compared to new vehicles while still providing reliable transportation. We perform 150-point inspections on all our vehicles.',
    tips: [
      'Consider fuel efficiency - can save you thousands annually',
      'Check service history for regular maintenance records',
      'Test drive multiple vehicles to compare handling and comfort'
    ],
    items: [
      { name: 'Peugeot 504', price: 'Fair prices', image: '/1730401560451.jpg' },
      { name: 'Customized ', price: 'Fair prices', image: '/20241015_121153_0000.png' },
      { name: 'Customize your "wheel"', price: 'Fair prices', image: '/3_20240928_183851_0002.png' },
      { name: 'Full Car Customization', price: 'Fair prices', image: '/20240815_165345.jpg' },
      { name: 'sons-of-men', price: 'Fair prices', image: '/20240815_165440.jpg' },
      { name: 'sons-of-men', price: 'Fair prices', image: '/20240815_171608.jpg' },
      { name: 'sons-of-men', price: 'Fair prices', image: '/20240818_153109.jpg' },
      { name: 'sons-of-men', price: 'Fair prices', image: '/20240815_165440.jpg' },
      { name: 'sons-of-men', price: 'Fair prices', image: '/20240815_165440.jpg' },
      { name: 'sons-of-men', price: 'Fair prices', image: '/20240815_165440.jpg' },
    ]
  },
  {
    id: 'furniture-sales',
    title: 'Radiant Furnitures',
    icon: <FaCar className="text-amber-600 text-2xl" />,
    description: 'Exceptional selection of second-hand and classic vehicles, each thoroughly inspected for reliability and value.',
    importance: 'Buying quality comffy furniture can save you up to 50% compared  reliable.',
    tips: [
      'Consider comfort and relaxation',
      'Check maintenance methods',
      'Test multiple seats to compare handling and comfort'
    ],
    items: [
      { name: 'All degrees seats', price: 'Fair prices', image: '/20231116_114827.jpg' },
      { name: 'Entire setup', price: 'Fair prices', image: '/20231117_124022.jpg' },
      { name: 'Effective for sun basking', price: 'Fair prices', image: '/20231117_125354.jpg' },
      { name: 'Classic', price: 'Fair prices', image: '/20231124_145446.jpg' }
    ]
  },
  {
    id: 'motorcycle-sales',
    title: 'Premium Motorcycle Sales',
    icon: <GiMechanicGarage className="text-amber-600 text-2xl" />,
    description: 'From rugged dirt bikes to smooth commuters, we offer the best selection of quality motorcycles.',
    importance: 'Motorcycles provide affordable transportation with excellent fuel efficiency. Our bikes undergo rigorous inspections to ensure roadworthiness.',
    tips: [
      'Consider your primary use (commuting vs off-road) when selecting',
      'Always invest in quality safety gear',
      'Regular maintenance is crucial for motorcycle longevity'
    ],
    items: [
      { name: 'Yamaha DT 125', price: 'Fair prices', image: '49.png' },
      { name: 'Honda CRF 250', price: 'Fair prices', image: '/1727058096885.jpg' },
      { name: 'Suzuki DR 200', price: 'Fair prices', image: '/20250524_153522.jpg' }
    ]
  },
  {
    id: 'music-instruments',
    title: 'Professional Music Instruments',
    icon: <MdMusicNote className="text-amber-600 text-2xl" />,
    description: 'Quality instruments for musicians of all levels, from beginners to professionals.',
    importance: 'Playing musical instruments enhances cognitive abilities, reduces stress, and provides creative expression. We offer instruments that maintain excellent tone and playability.',
    tips: [
      'Acoustic guitars should be stored at stable humidity levels',
      'Electronic keyboards should be covered when not in use',
      'Regular tuning maintains instrument health and sound quality'
    ],
    items: [
      { name: 'Acoustic Guitar', price: 'Fair prices', image: '/placeholder-guitar.jpg' },
      { name: 'Mention Yours', price: 'Fair prices', image: '/IMG_20231004_090917_626.jpg' },
      { name: 'sons-of-men', price: 'Fair prices', image: '/20250417_182101.jpg' }
    ]
  },
  {
    id: 'music-lessons',
    title: 'Expert Music Lessons',
    icon: <GiGuitar className="text-amber-600 text-2xl" />,
    description: 'Personalized music instruction tailored to your goals and skill level.',
    importance: 'Structured music education accelerates learning and builds proper technique. Our instructors are experienced performers and educators.',
    tips: [
      'Consistent practice (even 15 minutes daily) yields best results',
      'Record yourself to track progress',
      'Start with proper posture and hand positioning'
    ],
    services: [
      { name: 'Guitar Lessons', price: 'Fair prices', image: '/20240411_151028.jpg' },
      { name: 'Keyboard Lessons', price: 'Fair prices', image: '/20240411_152623.jpg' },
      { name: 'Vocal Training', price: 'Fair prices', image: '/20240411_152738.jpg' }
    ]
  },
  {
    id: 'art-portraits',
    title: 'Fine Art & Portraits',
    icon: <FaPalette className="text-amber-600 text-2xl" />,
    description: 'Custom artwork that captures personality, emotion, and beauty in every stroke.',
    importance: 'Art enhances living spaces and preserves memories in a unique, personal way. Our artists combine technical skill with creative vision.',
    tips: [
      'Provide clear reference photos for portraits',
      'Consider lighting in the display location',
      'Oil paintings require proper curing time'
    ],
    services: [
      { name: 'Portrait Drawing', price: 'Fair prices', image: '/20230419_161818.jpg' },
      { name: 'Landscape Art', price: 'Fair prices', image: '/20230419_161909.jpg' },
      { name: 'Custom Commission', price: 'Fair prices', image: '/sonssss.jpg' },
      { name: 'Custom Commission', price: 'Fair prices', image: '/portrait.jpg' }
    ]
  },
  {
    id: 'farm-produce',
    title: 'Fresh Farm Produce',
    icon: <GiFarmer className="text-amber-600 text-2xl" />,
    description: 'Locally grown, organic produce delivered fresh from farm to your table.',
    importance: 'Fresh, local produce retains more nutrients and supports community agriculture. We work directly with farmers to ensure quality and fair prices.',
    tips: [
      'Store root vegetables in cool, dark places',
      'Bananas ripen faster when stored with other fruits',
      'Fresh corn is best consumed within 3 days of harvest'
    ],
    items: [
      { name: 'Goat', price: 'Fair prices', image: '/20231112_171011.jpg' },
      { name: 'Goat', price: 'Fair prices', image: '/20230521_162939.jpg' },
      { name: 'Woolen Sheep', price: 'Fair prices', image: '/20240429_150628.jpg' },
      { name: 'Grade Rabbits', price: 'Fair prices', image: '/20240510_183728.jpg' },
      { name: 'Baby Rabbits', price: 'Fair prices', image: '/20240510_183833.jpg' },
      { name: 'Premature Cows', price: 'Fair prices', image: '/20230415_180331.jpg' },
      { name: 'Baby Rabbits', price: 'Fair prices', image: '/20240510_183833.jpg' },
      { name: 'Young Tree', price: 'Fair prices', image: '/20250326_195634.jpg' },
      { name: 'Hand-Picked Coffee', price: 'Fair prices', image: '/20240622_134738.jpg' },
      { name: 'Dried Coffee Berries', price: 'Fair prices', image: '/20240622_134645.jpg' },
      { name: 'Fresh Pineapples', price: 'Fair prices', image: '/20240227_144110.jpg' }
    ]
  },
  {
    id: 'music-band',
    title: 'Professional Music Band',
    icon: <GiPianoKeys className="text-amber-600 text-2xl" />,
    description: 'Talented musicians creating unforgettable experiences for your special events.',
    importance: 'Live music elevates events, creating atmosphere and memories. Our versatile band adapts to your musical preferences and event needs.',
    tips: [
      'Book at least 3 months in advance for peak seasons',
      'Provide a playlist of must-play songs',
      'Consider venue acoustics when planning setup'
    ],
    services: [
      { name: 'Any Performance', price: 'Fair prices', image: '/1729932358493.jpg' },
      { name: 'Corporate Event', price: 'Fair prices', image: '/VideoCapture_20231006-064028.jpg' },
      { name: 'Casual Occassions', price: 'Fair prices', image: '/20250417_182101.jpg' }
    ]
  },
  {
    id: 'bike-adventures',
    title: 'Epic Bike Tours & Adventures',
    icon: <FaPalette className="text-amber-600 text-2xl" />,
    description: 'Visit the place, write your name on it, riding on two wheels..',
    importance: 'Bike rides are and have been one of the best relaxations and therapies proven by West Virginia.',
    tips: [
      'Put on safety gears ',
      'Ride like a hero and rock it',
      'Dont need to be professional, just hop on'
    ],
    services: [
      { name: 'Portrait Drawing', price: 'Fair prices', image: '/1703334666360.jpg' },
      { name: 'Sky-Tarmac Ride', price: 'Fair prices', image: '/1724735261669.jpg' },
      { name: 'Sky-Tarmac Ride', price: 'Fair prices', image: '/20241207_210825_0000.png.png' },
      { name: 'Sky-Tarmac Ride', price: 'Fair prices', image: '/20241121_092511_0000.png' },
      { name: 'Landscape Art', price: 'Fair prices', image: '/20241015_120803_0000.png' },
      { name: 'Come Tour With the Best', price: 'Fair prices', image: '/20241015_121819_0000.png' },
      { name: 'With A Variety Of Bikes', price: 'Fair prices', image: '/20241015_122102_0000.png' },
      { name: 'Camp & Rest', price: 'Fair prices', image: '/1727074906511.jpg' },
    ]
  },
  {
    id: 'phone-repair',
    title: 'Phone Sales & Repair',
    icon: <FaPalette className="text-amber-600 text-2xl" />,
    description: 'All phone related problems fixed here',
    importance: 'Phones are by far crucial devices in our lives. And we need to take care of them when they have issues',
    tips: [
      'Screen Repairs ',
      'Software problems solutions',
      'Battery replacements',
      'etc'
    ],
    services: []
  }
];

  // Filter categories based on search and selected filter
  const filteredCategories = categories.filter(category => {
    const matchesSearch = category.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         category.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || category.id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // WhatsApp message generator
  const generateWhatsAppMessage = (category, item = null) => {
    const baseMessage = `Hello Sons of Men, I'm interested in your ${category.title} services.`;
    
    if (item) {
      return `${baseMessage} Specifically, I'd like to inquire about ${item.name} (${item.price}).`;
    }
    
    return `${baseMessage} Can you provide more information?`;
  };

  // Team members data - reduced to 2 members
  const teamMembers = [
    { 
      name: 'Moses Njoroge', 
      role: 'Founder & Lead Artist', 
      image: '/prof.png',
      phone: '+254 0100707314',
      email: 'mosesmuriithi83@gmail.com'
    },
    { 
      name: 'Charles Njoroge', 
      role: 'Organizer', 
      image: '/me.png',
      phone: '+254 707 645 624',
      email: 'thecharlesfactor.dev@gmail.com'
    }
  ];

  // Handle image load
  const handleImageLoad = (imageUrl) => {
    setLoadedImages(prev => ({ ...prev, [imageUrl]: true }));
  };

  // Handle nav click
  const handleNavClick = (section) => {
    setActiveNav(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 antialiased">
      {/* Premium Antique Navbar */}
      <nav className="fixed z-50 bg-gradient-to-r from-black to-gray-900 shadow-lg border-b border-red-900 w-[75%] mx-auto left-0 right-0">
        <div className="px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              {/* Logo Circle */}
              <div className="relative bg-red-800 w-[75%] mx-auto text-white p-3 rounded-full shadow-md">
                <GiGuitar className="text-2xl mx-auto" />
              </div>

              {/* Title */}
              <div>
                <h1 className="text-2xl font-serif font-bold text-red-500 tracking-wide">SONS OF MEN</h1>
                <p className="text-red-400 text-xs font-medium tracking-wider">EST. 2010</p>
              </div>
            </div>

            {/* Nav Links */}
            <div className="hidden lg:flex space-x-8">
              {['home', 'services', 'team', 'contact'].map((nav) => (
                <a
                  key={nav}
                  href={`#${nav}`}
                  onClick={() => handleNavClick(nav)}
                  className={`font-serif text-lg font-medium transition duration-300 pb-1 border-b-2 ${
                    activeNav === nav
                      ? 'text-red-500 border-red-600'
                      : 'text-red-400 border-transparent hover:border-red-400'
                  }`}
                >
                  {nav.charAt(0).toUpperCase() + nav.slice(1)}
                </a>
              ))}
            </div>

            {/* Mobile Button */}
            <div className="lg:hidden">
              <button className="text-red-500">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Elegant Hero Header */}
      <header id="home" className="relative pt-32 pb-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <div className="mb-8">
              <div className='bg-black-500'>
                <p className='text-2xl text-red-500 bg-gray-900 hover:bg-gray-800 font-bold py-3 px-6 rounded-full inline-block'>Jacks of All Trades!</p>
              </div>
              <br></br>
              <span className="font-serif text-red-400 tracking-widest">WELCOME TO</span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                <span className="text-red-500">Diverse Services,</span><br />
                <span className="text-blue-400">Uncompromising Quality</span>
              </h2>
            </div>
            <p className="text-xl text-red-300 mb-8 font-serif leading-relaxed">
              From automotive to arts, agriculture to music - we deliver excellence across all our ventures with passion and professionalism.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/254707645624?text=Hello%20Sons%20of%20Men,%20I'd%20like%20to%20inquire%20about%20your%20services" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-700 to-red-900 text-white hover:from-red-600 hover:to-red-800 font-bold py-3 px-6 rounded-full flex items-center transition duration-300 shadow-lg hover:shadow-xl"
              >
                <FaWhatsapp className="mr-2 text-green-300 text-xl" /> Chat on WhatsApp
              </a>
              <a 
                href="#services" 
                onClick={() => handleNavClick('services')}
                className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black font-bold py-3 px-6 rounded-full transition duration-300 font-serif"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
      </header>

      {/* Search and Filter */}
      <section className="container mx-auto px-6 py-16" id="services">
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl shadow-lg p-8 mb-12 border border-red-900 relative">
          <div className="bg-red-700 absolute -top-4 left-1/2 transform -translate-x-1/2 text-white font-serif font-bold px-6 py-1 rounded-full shadow-md">
            Our Services
          </div>  
          <h3 className="text-3xl font-serif font-bold text-red-400 mb-6 text-center mt-4">Find Exactly What You Need</h3>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 max-w-4xl mx-auto">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-red-500" />
              </div>
              <input
                type="text"
                placeholder="Search services..."
                className="w-full pl-10 pr-4 py-3 border border-red-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-800 text-red-200 placeholder-red-400 font-serif"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-64">
              <div className="relative">
                <select
                  className="appearance-none w-full pl-4 pr-10 py-3 border border-red-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-red-200 bg-gray-800 font-serif"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.title}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        {filteredCategories.length > 0 ? (
          filteredCategories.map(category => (
            <div key={category.id} className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl shadow-lg overflow-hidden mb-12 border border-red-900 relative">
              <div className="absolute -top-3 -left-3 bg-red-700 text-white font-serif font-bold px-4 py-1 rounded-full shadow-lg z-10">
                {category.title.split(' ')[0]}
              </div>
              <div className="p-8 pt-12">
                <div className="flex items-center mb-6">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4 shadow-inner border border-red-900">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-red-400">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <p className="text-red-300 mb-6 text-lg leading-relaxed font-serif">{category.description}</p>
                    
                    <div className="bg-gray-800 rounded-lg p-6 mb-6 border border-red-900 shadow-inner">
                      <h4 className="font-serif font-bold text-red-400 mb-3 text-lg">Why It Matters:</h4>
                      <p className="text-red-300 font-serif">{category.importance}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-serif font-bold text-red-400 mb-3 text-lg">Expert Tips:</h4>
                      <ul className="space-y-3">
                        {category.tips.map((tip, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span className="text-red-300 font-serif">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a
                      href={`https://wa.me/254707645624?text=${encodeURIComponent(generateWhatsAppMessage(category))}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg font-serif"
                    >
                      <FaWhatsapp className="mr-2 text-xl" /> Inquire About {category.title}
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="font-serif font-bold text-red-400 mb-4 text-lg border-b border-red-900 pb-2">
                      {category.items ? 'Available Products' : 'Our Services'}
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {(category.items || category.services).map((item, index) => (
                        <div key={index} className="group relative bg-gray-800 rounded-lg border border-red-900 p-3 hover:border-red-600 transition duration-300 shadow-sm hover:shadow-md">
                          <div 
                            className="h-40 bg-gray-700 rounded-md mb-2 overflow-hidden cursor-pointer relative"
                            onClick={() => setZoomedImage(item.image)}
                          >
                            {!loadedImages[item.image] && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="animate-pulse bg-gray-600 w-full h-full"></div>
                              </div>
                            )}
                            <img
                              src={item.image}
                              alt={item.name}
                              className={`w-full h-full object-cover transition-opacity duration-300 ${loadedImages[item.image] ? 'opacity-100' : 'opacity-0'}`}
                              onLoad={() => handleImageLoad(item.image)}
                              loading="lazy"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-30 transition duration-300">
                              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                            </div>
                          </div>
                          <h5 className="font-serif font-bold text-red-300 group-hover:text-red-200 transition duration-300 text-sm truncate">{item.name}</h5>
                          <p className="text-red-400 font-medium mb-2 font-serif text-xs">{item.price}</p>
                          <a
                            href={`https://wa.me/254707645624?text=${encodeURIComponent(generateWhatsAppMessage(category, item))}`}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="absolute bottom-2 right-2 bg-green-600 text-white p-1.5 rounded-full hover:bg-green-700 transition duration-300 shadow-md hover:shadow-lg"
                          >
                            <FaWhatsapp className="text-sm" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl shadow-lg p-12 text-center border border-red-900 max-w-2xl mx-auto">
            <div className="max-w-md mx-auto">
              <svg className="w-16 h-16 mx-auto text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl text-red-400 font-medium mb-2 font-serif">No matching services found</h3>
              <p className="text-red-300 mb-6 font-serif">Try adjusting your search or filter to find what you're looking for</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white font-medium py-2 px-6 rounded-lg transition duration-300 font-serif"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Team Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-16 relative" id="team">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-geometric.png')]"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-red-400 mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
            <p className="text-red-300 max-w-2xl mx-auto font-serif">
              The passionate professionals behind Sons of Men's diverse ventures, each an expert in their field.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-500 transform hover:-translate-y-2 border border-red-900 group">
                <div 
                  className="h-64 bg-gray-700 relative overflow-hidden cursor-pointer"
                  onClick={() => setZoomedImage(member.image)}
                >
                  {!loadedImages[member.image] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-pulse bg-gray-600 w-full h-full"></div>
                    </div>
                  )}
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${loadedImages[member.image] ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => handleImageLoad(member.image)}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-red-500 opacity-70 group-hover:opacity-90 transition duration-300">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif font-bold text-red-400 mb-1">{member.name}</h3>
                  <p className="text-red-300 font-serif mb-3">{member.role}</p>
                  
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <FaPhone className="text-red-400 text-sm" />
                    <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="text-red-300 hover:text-white text-sm font-serif">
                      {member.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <FaEnvelope className="text-red-400 text-sm" />
                    <a href={`mailto:${member.email}`} className="text-red-300 hover:text-white text-sm font-serif">
                      {member.email}
                    </a>
                  </div>
                  
                  <div className="mt-4 flex justify-center space-x-3">
                    <a href="#" className="text-red-400 hover:text-white transition duration-300">
                      <FaWhatsapp className="text-xl" />
                    </a>
                    <a href="#" className="text-red-400 hover:text-white transition duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-2xl overflow-hidden border border-blue-900 max-w-4xl mx-auto">
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:mr-8 mb-6 md:mb-0">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center shadow-lg border-2 border-blue-500">
                    <span className="text-white text-4xl font-bold">D</span>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-serif font-bold text-blue-400 mb-2">Developer</h2>
                  <p className="text-blue-300 mb-4 font-serif">Designed and developed this website</p>
                  
                  <div className="mb-4">
                    <h3 className="font-serif font-bold text-blue-400 mb-2">Services Offered:</h3>
                    <ul className="text-blue-300 font-serif space-y-1">
                      <li>• Web Development (React, Next.js, Node.js)</li>
                      <li>• Computirized Systems (React, Ruby, Flask, FastAPI)</li>
                      <li>• UI/UX Design</li>
                      <li>• Technical Consultation</li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                    <a 
                      href="https://wa.me/254707645624" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-full flex items-center transition duration-300 text-sm"
                    >
                      <FaWhatsapp className="mr-2" /> Contact Developer
                    </a>
                    <a 
                      href="https://github.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-full flex items-center transition duration-300 text-sm"
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                    <a 
                      href="https://linkedin.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-700 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full flex items-center transition duration-300 text-sm"
                    >
                      <FaLinkedin className="mr-2" /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900 text-white" id="contact">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-red-400 mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
            <p className="text-red-300 max-w-2xl mx-auto font-serif">
              Reach out to us through any of these channels for inquiries or collaborations.
            </p>
          </div>

          <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl shadow-2xl overflow-hidden max-w-6xl mx-auto border border-red-900">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 bg-gradient-to-b from-gray-900 to-gray-800">
                <h2 className="text-3xl font-serif font-bold text-red-400 mb-6">Get In Touch</h2>
                <p className="text-red-300 mb-8 font-serif leading-relaxed">
                  Have questions or ready to engage our services? Reach out through any of these channels.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-red-900 p-3 rounded-lg mr-4 shadow-inner">
                      <FaWhatsapp className="text-xl text-red-300" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg mb-1 text-red-400">WhatsApp</h4>
                      <a href="https://wa.me/254707645624" className="text-red-300 hover:text-white transition duration-300 font-serif">+254 707 645 624</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-900 p-3 rounded-lg mr-4 shadow-inner">
                      <FaPhone className="text-xl text-red-300" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg mb-1 text-red-400">Call Us</h4>
                      <a href="tel:0100707314" className="text-red-300 hover:text-white transition duration-300 font-serif">0100707314</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-900 p-3 rounded-lg mr-4 shadow-inner">
                      <FaEnvelope className="text-xl text-red-300" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg mb-1 text-red-400">Email</h4>
                      <a href="mailto:mosesmuriithi83@gmail.com" className="text-red-300 hover:text-white transition duration-300 font-serif">mosesmuriithi83@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-900 p-3 rounded-lg mr-4 shadow-inner">
                      <FaMapMarkerAlt className="text-xl text-red-300" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg mb-1 text-red-400">Location</h4>
                      <p className="text-red-300 font-serif">Githaruru, Gatundu South</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-10 border-t lg:border-t-0 lg:border-l border-red-900">
                <h3 className="text-2xl font-serif font-bold text-red-400 mb-6">Business Hours</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-2 border-b border-red-900">
                    <div className="flex items-center">
                      <FaClock className="text-red-400 mr-3" />
                      <span className="text-red-300 font-serif">Monday - Friday</span>
                    </div>
                    <span className="text-red-400 font-medium font-serif">24 hrs round</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b border-red-900">
                    <div className="flex items-center">
                      <FaClock className="text-red-400 mr-3" />
                      <span className="text-red-300 font-serif">Saturday</span>
                    </div>
                    <span className="text-red-400 font-medium font-serif">24 hrs</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <FaClock className="text-red-400 mr-3" />
                      <span className="text-red-300 font-serif">Sunday</span>
                    </div>
                    <span className="text-red-400 font-medium font-serif">Call for Services</span>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-red-900 shadow-inner">
                  <h4 className="font-serif font-bold text-red-400 mb-3">Emergency Service?</h4>
                  <p className="text-red-300 mb-4 font-serif">For urgent matters outside business hours, please call:</p>
                  <a href="tel:+254707645624" className="inline-block bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white font-medium py-2 px-4 rounded transition duration-300 font-serif">
                    0100707314
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-red-950 text-amber-200 pt-16 pb-8">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4 text-amber-100">SONS OF MEN</h3>
              <p className="text-amber-400 mb-4 font-serif">Delivering excellence across diverse business ventures</p>
              <div className="flex space-x-4">
                <a href="#" className="text-amber-400 hover:text-amber-100 transition duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-amber-400 hover:text-amber-100 transition duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.597 0-2.917-.01-3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="#" className="text-amber-400 hover:text-amber-100 transition duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-serif font-bold mb-4 text-amber-100">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#services" 
                    onClick={() => handleNavClick('services')}
                    className="text-amber-400 hover:text-amber-100 transition duration-300 font-serif"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a 
                    href="#team" 
                    onClick={() => handleNavClick('team')}
                    className="text-amber-400 hover:text-amber-100 transition duration-300 font-serif"
                  >
                    Meet The Team
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    onClick={() => handleNavClick('contact')}
                    className="text-amber-400 hover:text-amber-100 transition duration-300 font-serif"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-amber-400 hover:text-amber-100 transition duration-300 font-serif">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-serif font-bold mb-4 text-amber-100">Business Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-amber-400 font-serif">Mon-Fri</span>
                  <span className="text-amber-100 font-serif">8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-amber-400 font-serif">Saturday</span>
                  <span className="text-amber-100 font-serif">9:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-amber-400 font-serif">Sunday</span>
                  <span className="text-amber-100 font-serif">Closed</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-serif font-bold mb-4 text-amber-100">Newsletter</h4>
              <p className="text-amber-400 mb-4 font-serif">Subscribe to get updates on our latest offers and services.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-amber-900 font-serif"
                />
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-r-lg transition duration-300 font-serif">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-amber-800 pt-8 text-center">
            <p className="text-amber-500 font-serif">
              &copy; {new Date().getFullYear()} Sons of Men. All rights reserved. | 
              <a href="#" className="ml-2 hover:text-amber-300 transition duration-300 font-serif">Privacy Policy</a> | 
              <a href="#" className="ml-2 hover:text-amber-300 transition duration-300 font-serif">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div className="max-w-5xl w-full relative">
            <div 
              className="w-full h-96 bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${zoomedImage})` }}
            />
            <button 
              className="absolute top-4 right-4 text-white text-3xl hover:text-amber-400 transition duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setZoomedImage(null);
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Back to Top Button */}
      <button 
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setActiveNav('home');
        }}
        className="fixed bottom-6 right-6 bg-amber-700 text-white p-3 rounded-full shadow-lg hover:bg-amber-600 transition duration-300 z-40"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default App;