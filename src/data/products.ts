import { Product } from '@/contexts/CartContext';

// Fetch products from API
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('https://vintagevelocity-backend-production.up.railway.app/products/');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    // Fallback to static data if API fails
    return fallbackProducts;
  }
};

// Fallback static data
const fallbackProducts: Product[] = [
  {
    id: 1,
    images: [
      {
        id: 1,
        image: "http://127.0.0.1:8000/media/images/rb01.jpg",
        product: 1
      },
      {
        id: 2,
        image: "http://127.0.0.1:8000/media/images/rb02.jpg",
        product: 1
      },
      {
        id: 3,
        image: "http://127.0.0.1:8000/media/images/rb03.jpg",
        product: 1
      },
      {
        id: 4,
        image: "http://127.0.0.1:8000/media/images/rb04.jpg",
        product: 1
      },
      {
        id: 5,
        image: "http://127.0.0.1:8000/media/images/rb05.jpg",
        product: 1
      },
      {
        id: 6,
        image: "http://127.0.0.1:8000/media/images/rb06.jpg",
        product: 1
      },
      {
        id: 7,
        image: "http://127.0.0.1:8000/media/images/rb07.jpg",
        product: 1
      }
    ],
    category: {
      id: 50,
      category: "formula one"
    },
    material: {
      id: 1,
      material: "metal"
    },
    product_name: "Red Bull F1 static",
    description: "excellent",
    price: "2399",
    is_offer: true,
    offer_price: "2000",
    is_stock: true
  }
];

// For backward compatibility, export static products
export const products = fallbackProducts;