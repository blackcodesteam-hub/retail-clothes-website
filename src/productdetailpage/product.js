
// --- START OF FILE product.js ---

// --- Electronics Product Images ---
const cameraMain = 'https://images.unsplash.com/photo-1705107958312-bd94ca0029bd?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600';
const headphonesMain = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
const consoleMain = 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
const laptopMain = 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
const phoneMain = 'https://images.unsplash.com/photo-1759588071781-2c3ba9128497?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600';
const watchMain = 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';

// --- Home & Garden Product Images ---
const vaseMain = 'https://plus.unsplash.com/premium_photo-1676836059659-161e0d6ea49e?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600';
const chairMain = 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
const planterMain = 'https://media.istockphoto.com/id/1372896722/photo/potted-banana-plant-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=9aeRHm240Jl6Bl5utn7G7WSd70L1WHBD4PShEgzb_jI=';
const clockMain = 'https://images.unsplash.com/photo-1688731789548-d48e75c02894?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600';
const blanketMain = 'https://plus.unsplash.com/premium_photo-1723563579500-6702026fc3d3?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600';
const toolsMain = 'https://plus.unsplash.com/premium_photo-1678457829001-fed083f72cb3?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600';

// --- Fashion Product Images ---
const ElegantEveningDress = 'https://images.unsplash.com/photo-1664343866299-bc69e9909655?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVsZ2FudCUyMGV2ZW5pbmclMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600';
const MenClassicLeatherJacket = 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
const CasualDenimJeans = 'https://images.unsplash.com/photo-1662011966037-7ea814f79a64?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhc3VhbCUyMGRlbmltJTIwamVhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600';
const SlimFitBusinessSuit = 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2xpbSUyMGZpdCUyMGJ1c3NpbmVzcyUyMHN1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600';
const CozyKnitSweater = 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
const SummerMaxiDress = 'https://plus.unsplash.com/premium_photo-1723780956289-1893c7f074f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN1bW1lciUyMG1heGklMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600';

// --- Book Product Images ---
const bookMidnightLibrary = 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
const bookEducated = 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
const bookAtomicHabits = 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
const bookCrawdads = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
const bookSilentPatient = 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'; // Reusing Educated image
const bookSapiens = 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
const bookAlchemist = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'; // Reusing Crawdads image
const bookBecoming = 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
const bookDune = 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
const bookPragmaticProgrammer = 'https://images.unsplash.com/photo-1536148935331-408321065b18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1lcnxlbnwwfHwwfHx8MA%3D%3D';


// --- The Master List of All Products ---
export const allProducts = [
  // --- Electronics ---
  {
    id: 1,
    name: 'Ultra HD 4K Camera',
    price: 749.99,
    description: 'Capture stunning photos and videos with this high-resolution 4K camera. Perfect for professionals and enthusiasts alike.',
    category: 'Electronics',
    images: { main: cameraMain }
  },
  {
    id: 2,
    name: 'Wireless Over-Ear Headphones',
    price: 249.99,
    description: 'Experience immersive sound with noise cancellation and wireless freedom. Long battery life keeps the music going all day.',
    category: 'Electronics',
    images: { main: headphonesMain }
  },
  {
    id: 3,
    name: 'Next-Gen Gaming Console',
    price: 499.99,
    description: 'Enjoy ultra-fast load times and breathtaking graphics with the latest generation gaming console.',
    category: 'Electronics',
    images: { main: consoleMain }
  },
  {
    id: 4,
    name: 'Pro-Series Laptop 15"',
    price: 1299.99,
    description: 'A powerful laptop designed for professionals and creators. High performance meets sleek design.',
    category: 'Electronics',
    images: { main: laptopMain }
  },
  {
    id: 5,
    name: 'Latest Smartphone Pro',
    price: 999.99,
    description: 'Stay connected with cutting-edge performance, a stunning display, and advanced camera features.',
    category: 'Electronics',
    images: { main: phoneMain }
  },
  {
    id: 6,
    name: 'Smartwatch Series 8',
    price: 399.99,
    description: 'Track your health and stay connected with the latest smartwatch. Stylish, durable, and feature-packed.',
    category: 'Electronics',
    images: { main: watchMain }
  },

  // --- Home & Garden ---
  {
    id: 7,
    name: 'Modern Ceramic Vase',
    price: 34.99,
    description: 'A sleek ceramic vase that adds a modern touch to any room.',
    category: 'Home & Garden',
    images: { main: vaseMain }
  },
  {
    id: 8,
    name: 'Comfortable Accent Chair',
    price: 249.99,
    description: 'A cozy accent chair with a minimalist design, perfect for living rooms or bedrooms.',
    category: 'Home & Garden',
    images: { main: chairMain }
  },
  {
    id: 9,
    name: 'Indoor Planters',
    price: 49.99,
    description: 'Set of stylish indoor planters to bring greenery into your home.',
    category: 'Home & Garden',
    images: { main: planterMain }
  },
  {
    id: 10,
    name: 'Minimalist Wall Clock',
    price: 59.99,
    description: 'A modern wall clock with a clean design that fits any decor.',
    category: 'Home & Garden',
    images: { main: clockMain }
  },
  {
    id: 11,
    name: 'Cozy Knit Throw Blanket',
    price: 69.99,
    description: 'Soft and warm knit throw blanket, perfect for cozy evenings.',
    category: 'Home & Garden',
    images: { main: blanketMain }
  },
  {
    id: 12,
    name: 'Ergonomic Gardening Tool Set',
    price: 39.99,
    description: 'Durable and ergonomic gardening tools to make your outdoor work easier.',
    category: 'Home & Garden',
    images: { main: toolsMain }
  },

  // --- Fashion ---
  {
    id: 23,
    name: 'Elegant Evening Dress',
    price: 89.99,
    description: 'A stunning evening dress perfect for formal occasions and special events.',
    category: 'Fashion',
    images: { main: ElegantEveningDress }
  },
  {
    id: 24,
    name: 'Men\'s Classic Leather Jacket',
    price: 149.99,
    description: 'A stylish and timeless leather jacket for men, crafted from premium materials.',
    category: 'Fashion',
    images: { main: MenClassicLeatherJacket } 
  },
  {
    id: 25,
    name: 'Casual Denim Jeans',
    price: 59.99,
    description: 'Comfortable and versatile denim jeans suitable for everyday wear.',
    category: 'Fashion',
    images: { main: CasualDenimJeans }
  },
  {
    id: 26,
    name: 'Slim-Fit Business Suit',
    price: 299.99,
    description: 'A sharp and modern slim-fit business suit for professional settings.',
    category: 'Fashion',
    images: { main: SlimFitBusinessSuit }

  },
  {
    id: 27,
    name: 'Cozy Knit Sweater',
    price: 69.99,
    description: 'A warm and comfortable knit sweater, perfect for chilly days.',
    category: 'Fashion',
    images: { main: CozyKnitSweater }
  },
  {
    id: 28,
    name: 'Summer Maxi Dress',
    price: 79.99,
    description: 'A light and breezy maxi dress ideal for summer outings and vacations.',
    category: 'Fashion',
    images: { main: SummerMaxiDress }
  },
  // --- Books ---
  {
    id: 13,
    name: 'The Midnight Library',
    price: 14.99,
    description: 'A novel about all the choices that go into a life well lived.',
    category: 'Books',
    images: { main: bookMidnightLibrary }
  },
  {
    id: 14,
    name: 'Educated: A Memoir',
    price: 18.99,
    description: 'A powerful memoir about a woman who grows up in a survivalist family and goes on to earn a PhD.',
    category: 'Books',
    images: { main: bookEducated }
  },
  {
    id: 15,
    name: 'Atomic Habits',
    price: 16.49,
    description: 'An easy & proven way to build good habits and break bad ones.',
    category: 'Books',
    images: { main: bookAtomicHabits }
  },
  {
    id: 16,
    name: 'Where the Crawdads Sing',
    price: 13.99,
    description: 'A coming-of-age murder mystery set in the marshes of the Deep South.',
    category: 'Books',
    images: { main: bookCrawdads }
  },
  {
    id: 17,
    name: 'The Silent Patient',
    price: 12.99,
    description: 'A psychological thriller about a woman who stops speaking after a violent act and the therapist determined to uncover the truth.',
    category: 'Books',
    images: { main: bookSilentPatient }
  },
  {
    id: 18,
    name: 'Sapiens: A Brief History of Humankind',
    price: 19.99,
    description: 'A sweeping history of the human species, exploring how Homo sapiens came to dominate the planet.',
    category: 'Books',
    images: { main: bookSapiens }
  },
  {
    id: 19,
    name: 'The Alchemist',
    price: 11.99,
    description: 'A philosophical novel about following your dreams and listening to your heart.',
    category: 'Books',
    images: { main: bookAlchemist }
  },
  {
    id: 20,
    name: 'Becoming',
    price: 17.99,
    description: 'Michelle Obama\'s memoir reflecting on her life, experiences, and time in the White House.',
    category: 'Books',
    images: { main: bookBecoming }
  },
  {
    id: 21,
    name: 'Dune',
    price: 15.49,
    description: 'Epic science fiction saga set on the desert planet Arrakis.',
    category: 'Books',
    images: { main: bookDune }
  },
  {
    id: 22,
    name: 'The Pragmatic Programmer',
    price: 29.99,
    description: 'Classic software development best practices and pragmatic advice for programmers.',
    category: 'Books',
    images: { main: bookPragmaticProgrammer }
  }
];

// --- END OF FILE product.js ---