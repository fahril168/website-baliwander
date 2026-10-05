// Data mockup paket, destinasi, aktivitas, dan blog (Bilingual: ID & EN)

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

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  summary: string;
}

export interface TestimonialItem {
  initials: string;
  name: string;
  origin: string;
  text: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface UspPoint {
  title: string;
  desc: string;
}

// Popular Packages
export const popularPackagesData: Record<'id' | 'en', PackageItem[]> = {
  id: [
    {
      id: 'nusa-penida-one-day',
      title: 'One Day Nusa Penida Barat & Kelingking',
      destination: 'Nusa Penida, Bali',
      duration: '1 Hari (07.00 - 17.00)',
      rating: 4.9,
      reviews: 184,
      price: 450000,
      originalPrice: 550000,
      image: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      badge: 'Trending',
      highlights: ['Sunrise Point Kintamani', 'Black Lava Batur', 'Pemandian Air Panas Alami', 'Kopi Luwak Resto']
    }
  ],
  en: [
    {
      id: 'nusa-penida-one-day',
      title: 'One Day West Nusa Penida & Kelingking Tour',
      destination: 'Nusa Penida, Bali',
      duration: '1 Day (07:00 - 17:00)',
      rating: 4.9,
      reviews: 184,
      price: 450000,
      originalPrice: 550000,
      image: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=80',
      badge: 'Best Seller',
      highlights: ['Kelingking Cliff', 'Broken Beach', 'Angel Billabong', 'Crystal Bay']
    },
    {
      id: 'ubud-cultural-waterfall',
      title: 'Ubud Heritage, Rice Terrace & Waterfall Day Tour',
      destination: 'Ubud, Gianyar',
      duration: '10 Hours',
      rating: 4.8,
      reviews: 142,
      price: 375000,
      originalPrice: 450000,
      image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80',
      badge: 'Cultural Favorite',
      highlights: ['Tegalalang Rice Terrace', 'Penglipuran Village', 'Tegenungan Waterfall', 'Tirta Empul Temple']
    },
    {
      id: 'uluwatu-sunset-kecak',
      title: 'Uluwatu Sunset, Kecak Fire Dance & Jimbaran Seafood',
      destination: 'South Badung, Bali',
      duration: '8 Hours',
      rating: 4.9,
      reviews: 210,
      price: 420000,
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
      highlights: ['Melasti Beach', 'Uluwatu Cliff Temple', 'Kecak Dance Show', 'Jimbaran Seafood Dinner']
    },
    {
      id: 'batur-sunrise-jeep',
      title: 'Mount Batur Sunrise 4WD Jeep & Black Lava Adventure',
      destination: 'Kintamani, Bangli',
      duration: '7 Hours',
      rating: 4.9,
      reviews: 95,
      price: 490000,
      originalPrice: 600000,
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      badge: 'Trending',
      highlights: ['Kintamani Sunrise Viewpoint', 'Batur Black Lava', 'Natural Hot Springs', 'Luwak Coffee Tasting']
    }
  ]
};

// Featured Multi-Day Trips
export const featuredTripsData: Record<'id' | 'en', PackageItem[]> = {
  id: [
    {
      id: 'honeymoon-bali-4d3n',
      title: 'Paket Honeymoon Private Villa 4D3N',
      destination: 'Seminyak & Ubud',
      duration: '4 Hari 3 Malam',
      rating: 5.0,
      reviews: 67,
      price: 3850000,
      originalPrice: 4500000,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80',
      badge: 'Trip Lengkap',
      highlights: ['Speedboat Sanur - Gili', 'Snorkeling Penyu Gili Meno', 'Kelingking Beach', 'Hotel Bintang 3 Termasuk']
    }
  ],
  en: [
    {
      id: 'honeymoon-bali-4d3n',
      title: 'Romantic Private Pool Villa Honeymoon 4D3N',
      destination: 'Seminyak & Ubud',
      duration: '4 Days 3 Nights',
      rating: 5.0,
      reviews: 67,
      price: 3850000,
      originalPrice: 4500000,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
      badge: 'Private Honeymoon',
      highlights: ['Private Pool Villa', 'Romantic Candlelight Dinner', '2-Hour Flower Bath & Spa', 'Dedicated Private Chauffeur']
    },
    {
      id: 'family-bali-trip-3d2n',
      title: 'Relaxing Kid-Friendly Bali Family Tour 3D2N',
      destination: 'Nusa Dua & Ubud',
      duration: '3 Days 2 Nights',
      rating: 4.8,
      reviews: 83,
      price: 1650000,
      image: 'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?auto=format&fit=crop&w=800&q=80',
      highlights: ['Clean Air-Conditioned Van', 'Bali Safari & Marine Park', 'Taman Ayun Temple', 'Authentic Souvenir Stops']
    },
    {
      id: 'bali-lombok-overland',
      title: 'Ultimate Bali, Nusa Penida & Gili Islands 5D4N',
      destination: 'Bali & Lombok',
      duration: '5 Days 4 Nights',
      rating: 4.9,
      reviews: 44,
      price: 4200000,
      originalPrice: 4900000,
      image: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80',
      badge: 'Complete Trip',
      highlights: ['Sanur to Gili Fast Boat', 'Gili Meno Sea Turtle Snorkeling', 'Kelingking Cliff & Beach', '3-Star Resort Stays Included']
    }
  ]
};

// Popular Destinations
export const popularDestinationsData: Record<'id' | 'en', DestinationItem[]> = {
  id: [
    {
      name: 'Nusa Penida',
      tripsCount: 8,
      image: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=80',
      tag: 'Pulau Eksotis'
    },
    {
      name: 'Ubud',
      tripsCount: 14,
      image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80',
      tag: 'Sawah & Seni'
    },
    {
      name: 'Uluwatu',
      tripsCount: 9,
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
      tag: 'Tebing & Sunset'
    },
    {
      name: 'Kintamani',
      tripsCount: 6,
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      tag: 'Danau & Gunung'
    },
    {
      name: 'Seminyak & Canggu',
      tripsCount: 11,
      image: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=800&q=80',
      tag: 'Beach Club & Cafe'
    },
    {
      name: 'Gili Islands (Lombok)',
      tripsCount: 7,
      image: 'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=800&q=80',
      tag: 'Snorkeling Bebas Polusi'
    }
  ],
  en: [
    {
      name: 'Nusa Penida',
      tripsCount: 8,
      image: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=80',
      tag: 'Exotic Island'
    },
    {
      name: 'Ubud',
      tripsCount: 14,
      image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80',
      tag: 'Nature & Culture'
    },
    {
      name: 'Uluwatu',
      tripsCount: 9,
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
      tag: 'Cliffs & Sunsets'
    },
    {
      name: 'Kintamani',
      tripsCount: 6,
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      tag: 'Volcano & Lake'
    },
    {
      name: 'Seminyak & Canggu',
      tripsCount: 11,
      image: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=800&q=80',
      tag: 'Beach Clubs & Dining'
    },
    {
      name: 'Gili Islands (Lombok)',
      tripsCount: 7,
      image: 'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=800&q=80',
      tag: 'Pristine Marine Life'
    }
  ]
};

// Testimonials Data
export const testimonialsData: Record<'id' | 'en', TestimonialItem[]> = {
  id: [
    {
      initials: 'BS',
      name: 'Budi Santoso & Keluarga',
      origin: 'Jakarta Selatan',
      text: 'Sangat terbantu bawa anak balita dan orang tua. Supir kami (Bli Wayan) nyetirnya halus, tepat waktu jemput di Bandara Ngurah Rai, dan sabar menunggu saat anak rewel di jalan. Mobilnya bersih dan wangi.'
    },
    {
      initials: 'DA',
      name: 'Dimas & Anisa',
      origin: 'Surabaya',
      text: 'Awalnya ragu booking online tanpa kantor di kota kami, tapi respon admin WhatsApp sangat cepat dan transparan. Itinerary santai tanpa diburu-buru waktu, makan malam di Jimbaran juga dapat spot sunset terbaik.'
    },
    {
      initials: 'SW',
      name: 'Sarah Wijaya',
      origin: 'Bandung',
      text: 'Jadwal speedboat dari Sanur pas banget, supir lokal di Penida jago mengambil foto dan video di Kelingking Cliff. Tanpa mampir toko oleh-oleh komisi, benar-benar murni keliling pantai.'
    }
  ],
  en: [
    {
      initials: 'MJ',
      name: 'Michael & Jessica Miller',
      origin: 'Melbourne, Australia',
      text: 'Traveling with toddlers and grandparents was completely seamless. Our driver (Wayan) drove smoothly, greeted us on time at Ngurah Rai Airport, and was so patient throughout our journey. The vehicle was spotless.'
    },
    {
      initials: 'DL',
      name: 'David & Lisa Wang',
      origin: 'Singapore',
      text: 'Quick WhatsApp response and completely transparent pricing. The itinerary felt relaxed with zero rushing, and our Jimbaran sunset seafood table had the best ocean view possible. Highly recommended!'
    },
    {
      initials: 'SK',
      name: 'Sarah Klein',
      origin: 'Munich, Germany',
      text: 'Speedboat timing from Sanur was spot-on. Our local guide in Penida took fantastic photos and videos at Kelingking Cliff. No tourist trap shopping stops — just pure, authentic exploration.'
    }
  ]
};

// FAQ Data
export const faqData: Record<'id' | 'en', FaqItem[]> = {
  id: [
    {
      q: 'Apakah bisa jemput di hotel atau vila yang lokasinya jauh?',
      a: 'Bisa. Penjemputan gratis mencakup area Kuta, Seminyak, Canggu, Sanur, Ubud, Jimbaran, Nusa Dua, hingga Uluwatu. Untuk area Bali Utara (seperti Lovina/Amed), cukup konfirmasikan alamat ke tim kami.'
    },
    {
      q: 'Bolehkah meminta rute khusus (custom) di luar paket yang ada?',
      a: 'Sangat boleh. Karena semua paket kami berkonsep private tour, kamu bebas menentukan destinasi, menambahkan mampir ke cafe tertentu, atau mengatur durasi berhenti di tiap spot foto.'
    },
    {
      q: 'Berapa persen uang muka (DP) untuk mengunci jadwal?',
      a: 'DP pemesanan cukup 20% – 30% untuk mengamankan supir dan ketersediaan unit mobil. Sisa pelunasan bisa dibayarkan secara tunai atau transfer saat bertemu di hari pertama trip.'
    },
    {
      q: 'Bagaimana jika cuaca buruk saat jadwal tour Nusa Penida?',
      a: 'Jika otoritas pelabuhan membatalkan penyeberangan fast boat demi keselamatan, kami memberikan opsi penjadwalan ulang tanggal atau pengalihan rute ke destinasi darat di pulau utama Bali tanpa hangus.'
    },
    {
      q: 'Apakah harga paket sudah termasuk bensin dan tiket parkir?',
      a: 'Ya, seluruh biaya paket private tour sudah berkonsep all-in (mobil ber-AC, bensin, supir lokal merangkap pemandu, dan biaya parkir destinasi wisata).'
    }
  ],
  en: [
    {
      q: 'Can you pick up from hotels or villas outside the main tourist hub?',
      a: 'Yes! Complimentary hotel pickup covers Kuta, Seminyak, Canggu, Sanur, Ubud, Jimbaran, Nusa Dua, and Uluwatu. For North Bali areas (such as Lovina/Amed), simply confirm your address with our team.'
    },
    {
      q: 'Can we customize our itinerary beyond the listed packages?',
      a: 'Absolutely. Since our tours are 100% private, you have the flexibility to tailor the itinerary, add cafe stops, or adjust spending time at each photo spot.'
    },
    {
      q: 'What deposit is required to secure our reservation?',
      a: 'A 20% – 30% deposit secures your driver and vehicle availability. The remaining balance can be settled in cash (IDR) or bank transfer upon meeting on day one.'
    },
    {
      q: 'What happens if sea conditions cancel our Nusa Penida boat?',
      a: 'If port authorities cancel speedboat departures for safety, we offer flexible rescheduling or an alternative mainland Bali tour route without any cancellation penalties.'
    },
    {
      q: 'Does the package price include fuel and parking fees?',
      a: 'Yes, all our private packages are strictly all-inclusive (clean air-conditioned car, petrol, professional English-speaking driver, and destination parking fees).'
    }
  ]
};

// USP Points Data
export const uspPointsData: Record<'id' | 'en', UspPoint[]> = {
  id: [
    {
      title: 'Driver & Guide Asli Lokal Bali',
      desc: 'Bukan sekadar mengantar rute. Driver kami paham jam sepi tempat wisata, jalur tikus saat jalan raya padat, dan rekomendasi kuliner higienis yang ramah di kantong.'
    },
    {
      title: 'Harga Jujur Tanpa Toko Oleh-Oleh Paksa',
      desc: 'Banyak travel murah memaksa tamu mampir berjam-jam ke galeri komisi. Bersama kami, waktu liburan sepenuhnya milik kamu tanpa agenda belanja tersembunyi.'
    },
    {
      title: '100% Private Trip & Armada Bersih Terawat',
      desc: 'Mobil tidak pernah digabung dengan rombongan orang asing. Seluruh unit (Avanza, Innova Reborn, HiAce) bersih, wangi, dan pendingin udara selalu dingin prima.'
    }
  ],
  en: [
    {
      title: 'Authentic Local Balinese Chauffeur & Guide',
      desc: 'More than just driving. Our drivers know off-peak timings at popular sights, smart detour routes during traffic, and clean, delicious local culinary gems.'
    },
    {
      title: 'Honest Pricing — Zero Forced Shopping Stops',
      desc: 'Budget operators frequently waste guests\' time at commission-driven souvenir galleries. With us, your vacation time is entirely yours to enjoy.'
    },
    {
      title: '100% Private Experience & Spotless Vehicles',
      desc: 'You will never share a ride with strangers. Every vehicle (Avanza, Innova Reborn, HiAce) is meticulously cleaned, sanitised, and comfortably air-conditioned.'
    }
  ]
};

// Blog Posts Data
export const blogPostsData: Record<'id' | 'en', BlogPost[]> = {
  id: [
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
  ],
  en: [
    {
      id: 'tips-pertama-ke-nusa-penida',
      title: 'First-Timer\'s Guide to Nusa Penida: Fast Boats, Routes & Costs',
      category: 'Travel Guide',
      readTime: '4 Min Read',
      date: 'September 12, 2026',
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
      summary: 'Speedboat departure times from Sanur harbor, cliff trail expectations, and essential cash preparation tips.'
    },
    {
      id: 'perbedaan-trip-barat-dan-timur-penida',
      title: 'West vs East Nusa Penida: Route & Viewpoint Comparison',
      category: 'Routes & Sights',
      readTime: '5 Min Read',
      date: 'August 28, 2026',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      summary: 'West for the world-famous Kelingking T-Rex cliff, East for serene sunrises at Diamond Beach and Tree House.'
    },
    {
      id: 'waktu-terbaik-snorkeling-gili-lombok',
      title: 'Best Months to Snorkel with Wild Sea Turtles in Gili Islands',
      category: 'Holiday Tips',
      readTime: '3 Min Read',
      date: 'August 15, 2026',
      image: 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=800&q=80',
      summary: 'Ocean swell conditions across the Lombok Strait and ideal morning hours for crystal clear underwater visibility.'
    }
  ]
};

// Backwards compatibility exports (default ID)
export const popularPackages = popularPackagesData.id;
export const featuredTrips = featuredTripsData.id;
export const popularDestinations = popularDestinationsData.id;
export const blogPosts = blogPostsData.id;
