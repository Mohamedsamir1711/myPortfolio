/**
 * Portfolio data — single source of truth
 */
const PORTFOLIO_DATA = {
  images: {
    profile: 'assets/images/home.png',
    about: 'assets/images/about.png',
  },

  typingPhrases: [
    'MEARN Stack Developer',
    'UI/UX Designer',
    'Software Engineer',
  ],

  skills: [
    { name: 'HTML', level: 95, category: 'frontend' },
    { name: 'CSS', level: 92, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'React.js', level: 88, category: 'frontend' },
    { name: 'Angular', level: 75, category: 'frontend' },
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'MongoDB', level: 82, category: 'backend' },
    { name: 'Express.js', level: 84, category: 'backend' },
    { name: 'Figma', level: 88, category: 'design' },
    { name: 'Photoshop', level: 78, category: 'design' },
    { name: 'Python', level: 80, category: 'languages' },
    { name: 'C++', level: 72, category: 'languages' },
  ],

  projects: [
    {
      id: 'pulse-of-life',
      title: 'Pulse of Life',
      description:
        'A healthcare-related project focused on providing a modern and clean user experience.',
      github: 'https://github.com/Mohamedsamir1711/Pulse_of_life',
      demo: null,
      tags: ['Healthcare', 'React', 'UI/UX'],
      featured: true,
      image: 'assets/images/pulseoflife.png',
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #14b8a6 100%)',
    },
    {
      id: 'technest',
      title: 'TechNest E-Commerce',
      description:
        'Modern professional e-commerce platform with authentication, responsive UI, and scalable structure.',
      github: 'https://github.com/Mohamedsamir1711/TechNest-e-commerce',
      demo: null,
      tags: ['E-Commerce', 'MEARN', 'Auth'],
      featured: false,
      image: 'assets/images/technest.png',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)',
    },
    {
      id: 'travelbloom',
      title: 'TravelBloom',
      description:
        'Modern travel and tourism platform with elegant UI and immersive browsing experience.',
      github: 'https://github.com/Mohamedsamir1711/TravelBloom',
      demo: 'https://travel-bloom-psi.vercel.app/',
      tags: ['Travel', 'React', 'Design'],
      featured: false,
      image: 'assets/images/travelbloom.png',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #ec4899 100%)',
    },
    {
      id: 'omnifood',
      title: 'Omnifood',
      description:
        'Modern food delivery landing page with responsive layout, smooth animations, and a polished user interface.',
      github: 'https://github.com/Mohamedsamir1711/Omnifood',
      demo: 'https://omnifood-sigma-brown.vercel.app/',
      tags: ['Landing Page', 'HTML', 'CSS'],
      featured: false,
      image: 'assets/images/omnifood.png',
      gradient: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 50%, #e67e22 100%)',
    },
  ],

  testimonials: [
    {
      name: 'Sarah Mitchell',
      role: 'Startup Founder',
      avatar: 'assets/images/testimonials/client-1.jpg',
      rating: 5,
      text: 'Professional work, fast delivery, and excellent communication.',
    },
    {
      name: 'Ahmed Hassan',
      role: 'Product Manager',
      avatar: 'assets/images/testimonials/client-2.jpg',
      rating: 5,
      text: 'Mohammed delivered a stunning portfolio and web app that exceeded our expectations. Highly recommended!',
    },
    {
      name: 'Emily Chen',
      role: 'Marketing Director',
      avatar: 'assets/images/testimonials/client-3.jpg',
      rating: 5,
      text: 'Outstanding UI/UX skills combined with solid development. A true professional.',
    },
  ],
};
