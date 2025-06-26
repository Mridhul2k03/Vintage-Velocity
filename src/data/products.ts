

// const categories = [
//   'Sports Cars',
//   'Muscle Cars',
//   'Supercars',
//   'Hypercars',
//   'Race Cars',
//   'Monster Trucks',
//   'Off-Road Vehicles',
//   'Police Cars',
//   'Fire Trucks',
//   'Construction Vehicles',
//   'Motorcycles',
//   'Military Vehicles',
//   'Aircraft / Planes',
//   'Boats & Watercraft',
//   'Hot Wheels Originals',
//   'Hot Wheels Legends',
//   'HW Flames',
//   'HW Race Team',
//   'HW Rescue',
//   'HW Metro',
//   'HW Art Cars',
//   'HW Exotics',
//   'Street Beasts',
//   'X-Raycers',
//   'Track Stars',
//   'Color Shifters',
//   'For Collectors',
//   'For Kids',
//   'Track Builders',
//   'Playsets',
//   'Stunt Sets',
//   'Die-Cast Basics',
//   'Limited Editions',
//   'Treasure Hunts',
//   'Super Treasure Hunts',
//   'First Editions',
//   'Exclusive Variants',
//   'Glow in the Dark',
//   'Color Changers',
//   'Premium Models',
//   'Retro Series',
//   'Real Riders (rubber tires)',
//   'Movie & TV Series Cars',
//   'Carded Singles',
//   '5-Packs',
//   '10-Packs',
//   'Display Cases',
//   'Box Sets',
//   'Collector Editions'
// ];




import { Product } from '@/contexts/CartContext';
 
import { GetProductData } from '@/services/AllApi';

export const products: Product[] = [
  {
    id: 1,
    name: "Messeratti Alferi",
    price: 511.99,
    image: "https://raw.githubusercontent.com/Mridhul2k03/HOTWHEELSIMAGE/refs/heads/main/images/rb01.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Sports Cars",
    material: "Metal",
    images: [
      "https://raw.githubusercontent.com/Mridhul2k03/HOTWHEELSIMAGE/refs/heads/main/images/rb01.jpg",
      "https://raw.githubusercontent.com/Mridhul2k03/HOTWHEELSIMAGE/refs/heads/main/images/rb02.jpg",
      "https://raw.githubusercontent.com/Mridhul2k03/HOTWHEELSIMAGE/refs/heads/main/images/rb03.jpg",
      "https://raw.githubusercontent.com/Mridhul2k03/HOTWHEELSIMAGE/refs/heads/main/images/rb04.jpg",
      "https://raw.githubusercontent.com/Mridhul2k03/HOTWHEELSIMAGE/refs/heads/main/images/rb05.jpg",
      "https://raw.githubusercontent.com/Mridhul2k03/HOTWHEELSIMAGE/refs/heads/main/images/rb06.jpg",
      "https://raw.githubusercontent.com/Mridhul2k03/HOTWHEELSIMAGE/refs/heads/main/images/rb07.jpg",
    ]
  },

];
