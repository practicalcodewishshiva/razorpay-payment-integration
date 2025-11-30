import Adidas from '../../assets/Images/Adidas.jpg'
import BearHouse from '../../assets/Images/BearHouse.jpg'
import Glitchez from '../../assets/Images/Glitchez.jpg'
import Max from '../../assets/Images/Max.jpg'
import Allen_Solly from '../../assets/Images/Allen Solly.jpg'
import Louis_Philippe from '../../assets/Images/Louis Philippe.jpg'
import Zara from '../../assets/Images/zara.jpg'
import Levis from '../../assets/Images/Levis.jpg'
import Mast from '../../assets/Images/Mast.jpg'
import Mack_Jonny from '../../assets/Images/Mack_Jonny.jpg'
import Lux_Cozi from '../../assets/Images/Lux_Cozi.jpg'
import Puma from '../../assets/Images/Puma.jpg'

const products = [
  // ========== MEN'S PRODUCTS ==========
  {
    id: 1,
    brand: "Adidas",
    name: "Men Regular Fit Solid Spread Collar Casual Shirt",
    price: 1200,
    discount: 79,
    images: [Adidas],
    quantity: 1,
    category: "Men"
  },
  {
    id: 2,
    brand: "THE BEAR HOUSE",
    name: "Men's Purple Drop Shoulder Relaxed Fit Polo Neck T-Shirt",
    price: 923,
    discount: 63,
    images: [BearHouse],
    quantity: 1,
    category: "Men"
  },
  {
    id: 3,
    brand: "Glitchez",
    name: "Solid Drop-Shoulder Sleeves Round Neck Oversized T-shirt",
    price: 593,
    discount: 67,
    images: [Glitchez],
    quantity: 1,
    category: "Men"
  },
  {
    id: 4,
    brand: "Max",
    name: "Men Cotton Textured Long Sleeve Lounge Regular Fit T-Shirt",
    price: 499,
    discount: 20,
    images: [Max],
    quantity: 1,
    category: "Men"
  },
  {
    id: 5,
    brand: "Allen Solly",
    name: "Polo Collar Pure Cotton Slim Fit T-shirt",
    price: 1036,
    discount: 39,
    images: [Allen_Solly],
    quantity: 1,
    category: "Men"
  },
  {
    id: 6,
    brand: "Levis",
    name: "Men's Cotton Regular Fit Logo T-Shirt",
    price: 1124,
    discount: 30,
    images: [Levis],
    quantity: 1,
    category: "Men"
  },
  {
    id: 7,
    brand: "Louis Philippe",
    name: "Men's Cotton Regular Fit T-Shirt",
    price: 1448,
    discount: 37,
    images: [Louis_Philippe],
    quantity: 1,
    category: "Men"
  },
  {
    id: 8,
    brand: "Zara",
    name: "Men's Cotton T-Shirt (DOCR016025, Blue)",
    price: 2550,
    discount: 40,
    images: [Zara],
    quantity: 1,
    category: "Men"
  },
  {
    id: 9,
    brand: "Mast & Harbour",
    name: "Long Sleeve Tshirt",
    price: 255,
    discount: 70,
    images: [Mast],
    quantity: 1,
    category: "Men"
  },
  {
    id: 10,
    brand: "Mack JONNY",
    name: "Men's Cotton Printed Round Neck Tshirt",
    price: 300,
    discount: 75,
    images: [Mack_Jonny],
    quantity: 1,
    category: "Men"
  },
  {
    id: 11,
    brand: "Lux Cozi",
    name: "Polo Collar Lounge Tshirts",
    price: 899,
    discount: 20,
    images: [Lux_Cozi],
    quantity: 1,
    category: "Men"
  },
  {
    id: 12,
    brand: "PUMA",
    name: "Men's PUMA All In Training Polo T-shirt",
    price: 1064,
    discount: 29,
    images: [Puma],
    quantity: 1,
    category: "Men"
  },

  // ========== WOMEN'S PRODUCTS ==========
  {
    id: 13,
    brand: "H&M",
    name: "Women's Floral Print A-Line Dress",
    price: 1299,
    discount: 45,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345678/2023/1/1/abc123.jpg"],
    quantity: 1,
    category: "Women"
  },
  {
    id: 14,
    brand: "Forever 21",
    name: "Women's Casual Fit Denim Jeans",
    price: 1899,
    discount: 50,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345679/2023/1/1/def456.jpg"],
    quantity: 1,
    category: "Women"
  },
  {
    id: 15,
    brand: "Zara",
    name: "Women's Striped Cotton T-Shirt",
    price: 999,
    discount: 35,
    images: [Zara],
    quantity: 1,
    category: "Women"
  },
  {
    id: 16,
    brand: "Mango",
    name: "Women's Embroidered Kurta Set",
    price: 2499,
    discount: 40,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345680/2023/1/1/ghi789.jpg"],
    quantity: 1,
    category: "Women"
  },
  {
    id: 17,
    brand: "Only",
    name: "Women's High-Waisted Wide Leg Trousers",
    price: 1599,
    discount: 55,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345681/2023/1/1/jkl012.jpg"],
    quantity: 1,
    category: "Women"
  },
  {
    id: 18,
    brand: "Vero Moda",
    name: "Women's Floral Print Blouse",
    price: 1199,
    discount: 42,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345682/2023/1/1/mno345.jpg"],
    quantity: 1,
    category: "Women"
  },
  {
    id: 19,
    brand: "Biba",
    name: "Women's Printed Anarkali Suit",
    price: 2999,
    discount: 60,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345683/2023/1/1/pqr678.jpg"],
    quantity: 1,
    category: "Women"
  },
  {
    id: 20,
    brand: "W",
    name: "Women's Solid Round Neck T-Shirt",
    price: 599,
    discount: 30,
    images: [Mast],
    quantity: 1,
    category: "Women"
  },

  // ========== KIDS PRODUCTS ==========
  {
    id: 21,
    brand: "H&M Kids",
    name: "Boys' Printed Cotton T-Shirt",
    price: 499,
    discount: 40,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345684/2023/1/1/stu901.jpg"],
    quantity: 1,
    category: "Kids"
  },
  {
    id: 22,
    brand: "Gini & Jony",
    name: "Girls' Floral Print Dress",
    price: 899,
    discount: 50,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345685/2023/1/1/vwx234.jpg"],
    quantity: 1,
    category: "Kids"
  },
  {
    id: 23,
    brand: "Allen Solly Junior",
    name: "Boys' Regular Fit Denim Jeans",
    price: 1299,
    discount: 45,
    images: [Allen_Solly],
    quantity: 1,
    category: "Kids"
  },
  {
    id: 24,
    brand: "Pepe Jeans Kids",
    name: "Girls' Printed T-Shirt & Shorts Set",
    price: 1099,
    discount: 35,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345686/2023/1/1/yza567.jpg"],
    quantity: 1,
    category: "Kids"
  },
  {
    id: 25,
    brand: "United Colors of Benetton Kids",
    name: "Boys' Track Pants",
    price: 1499,
    discount: 40,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345687/2023/1/1/bcd890.jpg"],
    quantity: 1,
    category: "Kids"
  },
  {
    id: 26,
    brand: "Gap Kids",
    name: "Girls' Striped Cotton Top",
    price: 799,
    discount: 38,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345688/2023/1/1/efg123.jpg"],
    quantity: 1,
    category: "Kids"
  },

  // ========== HOME PRODUCTS ==========
  {
    id: 27,
    brand: "Home Centre",
    name: "Cotton Bed Sheet Set (King Size)",
    price: 1999,
    discount: 50,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345689/2023/1/1/hij456.jpg"],
    quantity: 1,
    category: "Home"
  },
  {
    id: 28,
    brand: "Spaces",
    name: "Decorative Cushion Cover Set (Pack of 4)",
    price: 899,
    discount: 45,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345690/2023/1/1/klm789.jpg"],
    quantity: 1,
    category: "Home"
  },
  {
    id: 29,
    brand: "HomeTown",
    name: "Cotton Curtains (Pair) - Blue",
    price: 2499,
    discount: 40,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345691/2023/1/1/nop012.jpg"],
    quantity: 1,
    category: "Home"
  },
  {
    id: 30,
    brand: "D'Decor",
    name: "Printed Table Runner Set",
    price: 599,
    discount: 35,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345692/2023/1/1/qrs345.jpg"],
    quantity: 1,
    category: "Home"
  },
  {
    id: 31,
    brand: "Portico New York",
    name: "Bath Towel Set (Pack of 2)",
    price: 1299,
    discount: 42,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345693/2023/1/1/tuv678.jpg"],
    quantity: 1,
    category: "Home"
  },
  {
    id: 32,
    brand: "Bombay Dyeing",
    name: "Cotton Quilt Cover Set (Queen Size)",
    price: 2999,
    discount: 55,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345694/2023/1/1/wxy901.jpg"],
    quantity: 1,
    category: "Home"
  },

  // ========== BEAUTY PRODUCTS ==========
  {
    id: 33,
    brand: "Lakme",
    name: "Lakme Absolute Matte Revolution Lipstick - Red",
    price: 599,
    discount: 30,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345695/2023/1/1/zab234.jpg"],
    quantity: 1,
    category: "Beauty"
  },
  {
    id: 34,
    brand: "Maybelline",
    name: "Maybelline New York Fit Me Foundation - Natural Beige",
    price: 499,
    discount: 25,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345696/2023/1/1/cde567.jpg"],
    quantity: 1,
    category: "Beauty"
  },
  {
    id: 35,
    brand: "L'Oreal Paris",
    name: "L'Oreal Paris Kajal Magique - Black",
    price: 299,
    discount: 20,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345697/2023/1/1/fgh890.jpg"],
    quantity: 1,
    category: "Beauty"
  },
  {
    id: 36,
    brand: "Nykaa",
    name: "Nykaa Naturals Face Wash - Vitamin C",
    price: 399,
    discount: 35,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345698/2023/1/1/ijk123.jpg"],
    quantity: 1,
    category: "Beauty"
  },
  {
    id: 37,
    brand: "Plum",
    name: "Plum Green Tea Face Toner - 200ml",
    price: 449,
    discount: 28,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345699/2023/1/1/lmn456.jpg"],
    quantity: 1,
    category: "Beauty"
  },
  {
    id: 38,
    brand: "Mamaearth",
    name: "Mamaearth Vitamin C Face Serum - 30ml",
    price: 599,
    discount: 40,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345700/2023/1/1/opq789.jpg"],
    quantity: 1,
    category: "Beauty"
  },

  // ========== GENZ PRODUCTS ==========
  {
    id: 39,
    brand: "Roadster",
    name: "GenZ Oversized Graphic Print T-Shirt",
    price: 699,
    discount: 50,
    images: [BearHouse],
    quantity: 1,
    category: "GenZ"
  },
  {
    id: 40,
    brand: "HRX",
    name: "GenZ Street Style Cargo Pants",
    price: 1499,
    discount: 45,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345701/2023/1/1/rst012.jpg"],
    quantity: 1,
    category: "GenZ"
  },
  {
    id: 41,
    brand: "Dillinger",
    name: "GenZ Vintage Denim Jacket",
    price: 2499,
    discount: 55,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345702/2023/1/1/uvw345.jpg"],
    quantity: 1,
    category: "GenZ"
  },
  {
    id: 42,
    brand: "Flying Machine",
    name: "GenZ Ripped Denim Jeans",
    price: 1799,
    discount: 40,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345703/2023/1/1/xyz678.jpg"],
    quantity: 1,
    category: "GenZ"
  },
  {
    id: 43,
    brand: "H&M",
    name: "GenZ Crop Top with High Waist Shorts",
    price: 1299,
    discount: 48,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345704/2023/1/1/abc901.jpg"],
    quantity: 1,
    category: "GenZ"
  },
  {
    id: 44,
    brand: "Forever 21",
    name: "GenZ Oversized Hoodie",
    price: 1999,
    discount: 50,
    images: [Glitchez],
    quantity: 1,
    category: "GenZ"
  },

  // ========== STUDIO PRODUCTS ==========
  {
    id: 45,
    brand: "Studio West",
    name: "Studio Premium Cotton Shirt",
    price: 1599,
    discount: 42,
    images: [Louis_Philippe],
    quantity: 1,
    category: "Studio"
  },
  {
    id: 46,
    brand: "Studio by H&M",
    name: "Studio Tailored Blazer",
    price: 3499,
    discount: 45,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345705/2023/1/1/def234.jpg"],
    quantity: 1,
    category: "Studio"
  },
  {
    id: 47,
    brand: "Studio Line",
    name: "Studio Formal Trousers",
    price: 1999,
    discount: 38,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345706/2023/1/1/ghi567.jpg"],
    quantity: 1,
    category: "Studio"
  },
  {
    id: 48,
    brand: "Studio Collection",
    name: "Studio Premium Cotton Kurta",
    price: 2299,
    discount: 50,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345707/2023/1/1/jkl890.jpg"],
    quantity: 1,
    category: "Studio"
  },
  {
    id: 49,
    brand: "Studio Essentials",
    name: "Studio Linen Shirt",
    price: 1799,
    discount: 40,
    images: [Zara],
    quantity: 1,
    category: "Studio"
  },
  {
    id: 50,
    brand: "Studio Premium",
    name: "Studio Tailored Waistcoat",
    price: 2499,
    discount: 43,
    images: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12345708/2023/1/1/mno123.jpg"],
    quantity: 1,
    category: "Studio"
  }
];

export default products;
