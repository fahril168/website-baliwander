// Data mockup paket, destinasi, aktivitas, dan blog (Semua foto dari Unsplash - Bali & Kepulauan)

export interface PackageItem {
  id: string;
  title: string;
  destination: string;
  duration: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  highlights: string[];
}

export interface DestinationItem {
  name: string;
  tripsCount: number;
  image: string;
  tag: string;
}

export interface ActivityItem {
  title: string;
  count: string;
  iconName: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  summary: string;
}

// Popular Packages
export const popularPackages: PackageItem[] = [
  {
    id: 'nusa-penida-one-day',
    title: 'One Day Nusa Penida Barat & Kelingking',
    destination: 'Nusa Penida, Bali',
    duration: '1 Hari (07.00 - 17.00)',
    rating: 4.9,
    reviews: 184,
    price: 450000,
    originalPrice: 550000,
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
    badge: 'Paling Laris',
    highlights: ['Kelingking Cliff', 'Broken Beach', 'Angel Billabong', 'Crystal Bay']
  },
  {
    id: 'ubud-cultural-waterfall',
    title: 'Ubud Heritage, Rice Terrace & Tegenungan',
    destination: 'Ubud, Gianyar',
    duration: '10 Jam',
    rating: 4.8,
    reviews: 142,
    price: 375000,
    originalPrice: 450000,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    badge: 'Favorit Budaya',
    highlights: ['Tegalalang Rice Terrace', 'Desa Penglipuran', 'Air Terjun Tegenungan', 'Pura Tirta Empul']
  },
  {
    id: 'uluwatu-sunset-kecak',
    title: 'Uluwatu Sunset, Tari Kecak & Seafood Jimbaran',
    destination: 'Badung Selatan, Bali',
    duration: '8 Jam',
    rating: 4.9,
    reviews: 210,
    price: 420000,
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80',
    highlights: ['Pantai Melasti', 'Pura Luhur Uluwatu', 'Tiket Tari Kecak', 'Makan Malam Jimbaran']
  },
  {
    id: 'batur-sunrise-jeep',
    title: 'Mount Batur Sunrise Jeep 4WD & Black Lava',
    destination: 'Kintamani, Bangli',
    duration: '7 Jam',
    rating: 4.9,
    reviews: 95,
    price: 490000,
    originalPrice: 600000,
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    badge: 'Trending',
    highlights: ['Sunrise Point Kintamani', 'Black Lava Batur', 'Pemandian Air Panas Alami', 'Kopi Luwak Resto']
  }
];

// Featured Trips
export const featuredTrips: PackageItem[] = [
  {
    id: 'honeymoon-bali-4d3n',
    title: 'Paket Honeymoon Private Villa 4D3N',
    destination: 'Seminyak & Ubud',
    duration: '4 Hari 3 Malam',
    rating: 5.0,
    reviews: 67,
    price: 3850000,
    originalPrice: 4500000,
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80',
    badge: 'Private Honeymoon',
    highlights: ['Private Pool Villa', 'Romantic Candlelight Dinner', 'Flower Bath & Spa 2 Jam', 'Supir Pribadi Siaga']
  },
  {
    id: 'family-bali-trip-3d2n',
    title: 'Family Holiday Bali Santai & Ramah Anak 3D2N',
    destination: 'Nusa Dua & Ubud',
    duration: '3 Hari 2 Malam',
    rating: 4.8,
    reviews: 83,
    price: 1650000,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    highlights: ['Mobil Avanza/Innova Bersih', 'Bali Safari Marine Park', 'Taman Ayun', 'Oleh-oleh Krisna/The Keranjang']
  },
  {
    id: 'bali-lombok-overland',
    title: 'Kombinasi Bali Nusa Penida & Lombok 3 Gili',
    destination: 'Bali & Lombok',
    duration: '5 Hari 4 Malam',
    rating: 4.9,
    reviews: 44,
    price: 4200000,
    originalPrice: 4900000,
    image: 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=800&q=80',
    badge: 'Trip Lengkap',
    highlights: ['Speedboat Sanur - Gili', 'Snorkeling Penyu Gili Meno', 'Kelingking Beach', 'Hotel Bintang 3 Termasuk']
  }
];

// Deals & Discounts
export const deals: PackageItem[] = [
  {
    id: 'early-bird-nusa-dua',
    title: 'Watersport Tanjung Benoa & Pandawa Beach',
    destination: 'Tanjung Benoa, Bali',
    duration: 'Full Day',
    rating: 4.7,
    reviews: 130,
    price: 295000,
    originalPrice: 450000,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    badge: 'Hemat 35%',
    highlights: ['Banana Boat + Donut Boat', 'Pantai Pandawa', 'Makan Siang Nasi Khas Bali', 'Antar Jemput Hotel']
  },
  {
    id: 'promo-snorkeling-amed',
    title: 'Snorkeling Karang Amed & Japanese Shipwreck',
    destination: 'Karangasem, Bali Timur',
    duration: 'Full Day',
    rating: 4.9,
    reviews: 62,
    price: 360000,
    originalPrice: 480000,
    image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80',
    badge: 'Hemat 25%',
    highlights: ['Alat Snorkeling + Fin', 'Guide Snorkeling Lokal', 'Spot Kapal Karam Jepang', 'Pantai Pasir Hitam']
  }
];

// Popular Destinations
export const popularDestinations: DestinationItem[] = [
  {
    name: 'Nusa Penida',
    tripsCount: 8,
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
    tag: 'Pulau Eksotis'
  },
  {
    name: 'Ubud',
    tripsCount: 14,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    tag: 'Sawah & Seni'
  },
  {
    name: 'Uluwatu',
    tripsCount: 9,
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80',
    tag: 'Tebing & Sunset'
  },
  {
    name: 'Kintamani',
    tripsCount: 6,
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    tag: 'Danau & Gunung'
  },
  {
    name: 'Seminyak & Canggu',
    tripsCount: 11,
    image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80',
    tag: 'Beach Club & Cafe'
  },
  {
    name: 'Gili Islands (Lombok)',
    tripsCount: 7,
    image: 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=800&q=80',
    tag: 'Snorkeling Bebas Polusi'
  }
];

// Activities
export const activities: ActivityItem[] = [
  {
    title: 'Snorkeling & Diving',
    count: '12 Pilihan Paket',
    iconName: 'Waves',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Sunrise Trekking & Jeep',
    count: '6 Pilihan Rute',
    iconName: 'Mountain',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Tur Budaya & Pura',
    count: '15 Rute Harian',
    iconName: 'Landmark',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Sunset & Romantic Dinner',
    count: '8 Tempat Pilihan',
    iconName: 'Sunset',
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Sewa Mobil & Supir Lokal',
    count: 'Armada Siap Pakai',
    iconName: 'Car',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Watersport & Rafting',
    count: '9 Spot Adrenalin',
    iconName: 'Sailboat',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'
  }
];

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: 'tips-pertama-ke-nusa-penida',
    title: 'Panduan Pertama Kali ke Nusa Penida: Jadwal Boat, Rute & Biaya Real',
    category: 'Panduan Wisata',
    readTime: '4 Menit Baca',
    date: '12 September 2026',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
    summary: 'Rincian jam penyeberangan dari Sanur, estimasi waktu perjalanan di tebing, dan tips bawa uang tunai secukupnya.'
  },
  {
    id: 'perbedaan-trip-barat-dan-timur-penida',
    title: 'Pilih Nusa Penida Barat atau Timur? Ini Perbandingan Spot & Jalurnya',
    category: 'Rute & Destinasi',
    readTime: '5 Menit Baca',
    date: '28 Agustus 2026',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    summary: 'Barat untuk pemandangan ikonik Kelingking, timur untuk suasana lebih sepi di Diamond Beach dan Rumah Pohon Molenteng.'
  },
  {
    id: 'waktu-terbaik-snorkeling-gili-lombok',
    title: 'Bulan Terbaik Melihat Penyu Liar di Gili Meno dan Gili Trawangan',
    category: 'Tips Liburan',
    readTime: '3 Menit Baca',
    date: '15 Agustus 2026',
    image: 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=800&q=80',
    summary: 'Kondisi ombak laut selat Lombok per musim dan jam tepat agar air laut jernih saat berenang bersama penyu.'
  }
];
