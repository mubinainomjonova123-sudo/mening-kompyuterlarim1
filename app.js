/* =========================================================
   TECHNO SHOP — VANILLA JAVASCRIPT ES6+ APPLICATION
   ========================================================= */

"use strict";

// 1. 26 TA MAHSULOT MA'LUMOTLAR BAZASI (Barcha rasmlar va xususiyatlar bilan)
const PRODUCTS = [
  {
    id: 1,
    name: "Gaming PC RTX 4060",
    category: "gaming-pc",
    basePrice: 12500000,
    regularDiscount: 10,
    rating: 4.8,
    giftEligible: true,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "Intel Core i5-13400F | RTX 4060 8GB | 16GB DDR5 | 1TB NVMe",
      en: "Intel Core i5-13400F | RTX 4060 8GB | 16GB DDR5 | 1TB NVMe",
      ru: "Intel Core i5-13400F | RTX 4060 8GB | 16GB DDR5 | 1TB NVMe"
    }
  },
  {
    id: 2,
    name: "Gaming PC RTX 4070",
    category: "gaming-pc",
    basePrice: 18900000,
    regularDiscount: 12,
    rating: 4.9,
    giftEligible: true,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "Intel Core i7-13700KF | RTX 4070 12GB | 32GB DDR5 | 1TB NVMe",
      en: "Intel Core i7-13700KF | RTX 4070 12GB | 32GB DDR5 | 1TB NVMe",
      ru: "Intel Core i7-13700KF | RTX 4070 12GB | 32GB DDR5 | 1TB NVMe"
    }
  },
  {
    id: 3,
    name: "Gaming PC RTX 4080",
    category: "gaming-pc",
    basePrice: 27500000,
    regularDiscount: 15,
    rating: 4.9,
    giftEligible: true,
    image: "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "Intel Core i7-14700K | RTX 4080 16GB | 32GB DDR5 | 2TB NVMe",
      en: "Intel Core i7-14700K | RTX 4080 16GB | 32GB DDR5 | 2TB NVMe",
      ru: "Intel Core i7-14700K | RTX 4080 16GB | 32GB DDR5 | 2TB NVMe"
    }
  },
  {
    id: 4,
    name: "Gaming PC RTX 4090",
    category: "gaming-pc",
    basePrice: 39900000,
    regularDiscount: 15,
    rating: 5.0,
    giftEligible: true,
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "Intel Core i9-14900K | RTX 4090 24GB | 64GB DDR5 | 4TB NVMe",
      en: "Intel Core i9-14900K | RTX 4090 24GB | 64GB DDR5 | 4TB NVMe",
      ru: "Intel Core i9-14900K | RTX 4090 24GB | 64GB DDR5 | 4TB NVMe"
    }
  },
  {
    id: 5,
    name: "ASUS ROG Strix G16",
    category: "gaming-laptop",
    basePrice: 19500000,
    regularDiscount: 12,
    rating: 4.9,
    giftEligible: true,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "16\" 240Hz | i7-13650HX | RTX 4070 8GB | 16GB DDR5 | 1TB SSD",
      en: "16\" 240Hz | i7-13650HX | RTX 4070 8GB | 16GB DDR5 | 1TB SSD",
      ru: "16\" 240Гц | i7-13650HX | RTX 4070 8GB | 16GB DDR5 | 1TB SSD"
    }
  },
  {
    id: 6,
    name: "Lenovo Legion 5",
    category: "gaming-laptop",
    basePrice: 14900000,
    regularDiscount: 10,
    rating: 4.8,
    giftEligible: true,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "15.6\" 165Hz | Ryzen 7 7735HS | RTX 4060 | 16GB RAM | 512GB SSD",
      en: "15.6\" 165Hz | Ryzen 7 7735HS | RTX 4060 | 16GB RAM | 512GB SSD",
      ru: "15.6\" 165Гц | Ryzen 7 7735HS | RTX 4060 | 16GB RAM | 512GB SSD"
    }
  },
  {
    id: 7,
    name: "HP Victus 15",
    category: "gaming-laptop",
    basePrice: 9500000,
    regularDiscount: 8,
    rating: 4.6,
    giftEligible: true,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "15.6\" 144Hz | Core i5-12450H | RTX 3050 4GB | 16GB | 512GB SSD",
      en: "15.6\" 144Hz | Core i5-12450H | RTX 3050 4GB | 16GB | 512GB SSD",
      ru: "15.6\" 144Гц | Core i5-12450H | RTX 3050 4GB | 16GB | 512GB SSD"
    }
  },
  {
    id: 8,
    name: "Acer Nitro 5",
    category: "gaming-laptop",
    basePrice: 11200000,
    regularDiscount: 10,
    rating: 4.7,
    giftEligible: true,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "15.6\" 144Hz | Core i5-12500H | RTX 4050 6GB | 16GB | 512GB SSD",
      en: "15.6\" 144Hz | Core i5-12500H | RTX 4050 6GB | 16GB | 512GB SSD",
      ru: "15.6\" 144Гц | Core i5-12500H | RTX 4050 6GB | 16GB | 512GB SSD"
    }
  },
  {
    id: 9,
    name: "MSI Katana 15",
    category: "gaming-laptop",
    basePrice: 13800000,
    regularDiscount: 11,
    rating: 4.7,
    giftEligible: true,
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "15.6\" 144Hz | Core i7-13620H | RTX 4060 8GB | 16GB | 1TB SSD",
      en: "15.6\" 144Hz | Core i7-13620H | RTX 4060 8GB | 16GB | 1TB SSD",
      ru: "15.6\" 144Гц | Core i7-13620H | RTX 4060 8GB | 16GB | 1TB SSD"
    }
  },
  {
    id: 10,
    name: "MacBook Air M3",
    category: "ultrabook",
    basePrice: 16500000,
    regularDiscount: 8,
    rating: 4.9,
    giftEligible: false,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "13.6\" Liquid Retina | Apple M3 Chip | 16GB Unified | 512GB SSD",
      en: "13.6\" Liquid Retina | Apple M3 Chip | 16GB Unified | 512GB SSD",
      ru: "13.6\" Liquid Retina | Чип Apple M3 | 16GB Unified | 512GB SSD"
    }
  },
  {
    id: 11,
    name: "MacBook Pro M3",
    category: "ultrabook",
    basePrice: 25900000,
    regularDiscount: 10,
    rating: 5.0,
    giftEligible: false,
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "14.2\" XDR 120Hz | Apple M3 Pro | 18GB RAM | 1TB SSD",
      en: "14.2\" XDR 120Hz | Apple M3 Pro | 18GB RAM | 1TB SSD",
      ru: "14.2\" XDR 120Гц | Apple M3 Pro | 18GB RAM | 1TB SSD"
    }
  },
  {
    id: 12,
    name: "Dell XPS 15",
    category: "ultrabook",
    basePrice: 21500000,
    regularDiscount: 12,
    rating: 4.8,
    giftEligible: false,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "15.6\" OLED 3.5K | Core i7-13700H | RTX 4050 | 32GB | 1TB SSD",
      en: "15.6\" OLED 3.5K | Core i7-13700H | RTX 4050 | 32GB | 1TB SSD",
      ru: "15.6\" OLED 3.5K | Core i7-13700H | RTX 4050 | 32GB | 1TB SSD"
    }
  },
  {
    id: 13,
    name: "ASUS TUF Gaming",
    category: "gaming-laptop",
    basePrice: 12900000,
    regularDiscount: 10,
    rating: 4.8,
    giftEligible: true,
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "15.6\" 144Hz | Ryzen 7 7735HS | RTX 4060 8GB | 16GB | 512GB SSD",
      en: "15.6\" 144Hz | Ryzen 7 7735HS | RTX 4060 8GB | 16GB | 512GB SSD",
      ru: "15.6\" 144Гц | Ryzen 7 7735HS | RTX 4060 8GB | 16GB | 512GB SSD"
    }
  },
  {
    id: 14,
    name: "Lenovo IdeaPad",
    category: "office",
    basePrice: 7500000,
    regularDiscount: 8,
    rating: 4.5,
    giftEligible: false,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "15.6\" FHD IPS | Core i5-1335U | 16GB DDR4 | 512GB NVMe SSD",
      en: "15.6\" FHD IPS | Core i5-1335U | 16GB DDR4 | 512GB NVMe SSD",
      ru: "15.6\" FHD IPS | Core i5-1335U | 16GB DDR4 | 512GB NVMe SSD"
    }
  },
  {
    id: 15,
    name: "HP Pavilion",
    category: "office",
    basePrice: 8900000,
    regularDiscount: 9,
    rating: 4.6,
    giftEligible: false,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "15.6\" FHD | Core i7-1355U | 16GB RAM | 512GB NVMe SSD",
      en: "15.6\" FHD | Core i7-1355U | 16GB RAM | 512GB NVMe SSD",
      ru: "15.6\" FHD | Core i7-1355U | 16GB RAM | 512GB NVMe SSD"
    }
  },
  {
    id: 16,
    name: "Gaming PC RTX 4060 Ti",
    category: "gaming-pc",
    basePrice: 14800000,
    regularDiscount: 11,
    rating: 4.8,
    giftEligible: true,
    image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "Core i5-14600KF | RTX 4060 Ti 16GB | 32GB DDR5 | 1TB NVMe",
      en: "Core i5-14600KF | RTX 4060 Ti 16GB | 32GB DDR5 | 1TB NVMe",
      ru: "Core i5-14600KF | RTX 4060 Ti 16GB | 32GB DDR5 | 1TB NVMe"
    }
  },
  {
    id: 17,
    name: "Gaming PC RTX 4070 Super",
    category: "gaming-pc",
    basePrice: 22400000,
    regularDiscount: 14,
    rating: 4.9,
    giftEligible: true,
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "Ryzen 7 7800X3D | RTX 4070 Super 12GB | 32GB DDR5 | 2TB NVMe",
      en: "Ryzen 7 7800X3D | RTX 4070 Super 12GB | 32GB DDR5 | 2TB NVMe",
      ru: "Ryzen 7 7800X3D | RTX 4070 Super 12GB | 32GB DDR5 | 2TB NVMe"
    }
  },
  {
    id: 18,
    name: "ASUS Zenbook 14 OLED",
    category: "ultrabook",
    basePrice: 13400000,
    regularDiscount: 10,
    rating: 4.8,
    giftEligible: false,
    image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "14\" 2.8K OLED | Core Ultra 7 155H | 16GB LPDDR5X | 1TB SSD",
      en: "14\" 2.8K OLED | Core Ultra 7 155H | 16GB LPDDR5X | 1TB SSD",
      ru: "14\" 2.8K OLED | Core Ultra 7 155H | 16GB LPDDR5X | 1TB SSD"
    }
  },
  {
    id: 19,
    name: "Lenovo ThinkPad X1 Carbon",
    category: "ultrabook",
    basePrice: 22900000,
    regularDiscount: 12,
    rating: 4.9,
    giftEligible: false,
    image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "14\" WUXGA | Core i7-1365U vPro | 32GB RAM | 1TB NVMe SSD",
      en: "14\" WUXGA | Core i7-1365U vPro | 32GB RAM | 1TB NVMe SSD",
      ru: "14\" WUXGA | Core i7-1365U vPro | 32GB RAM | 1TB NVMe SSD"
    }
  },
  {
    id: 20,
    name: "Acer Predator Helios Neo 16",
    category: "gaming-laptop",
    basePrice: 17900000,
    regularDiscount: 12,
    rating: 4.8,
    giftEligible: true,
    image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "16\" 165Hz | Core i7-13700HX | RTX 4060 8GB | 16GB | 1TB SSD",
      en: "16\" 165Hz | Core i7-13700HX | RTX 4060 8GB | 16GB | 1TB SSD",
      ru: "16\" 165Гц | Core i7-13700HX | RTX 4060 8GB | 16GB | 1TB SSD"
    }
  },
  {
    id: 21,
    name: "MSI Raider GE78 HX",
    category: "gaming-laptop",
    basePrice: 31500000,
    regularDiscount: 15,
    rating: 5.0,
    giftEligible: true,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "17\" QHD+ 240Hz | Core i9-13980HX | RTX 4080 12GB | 32GB | 2TB",
      en: "17\" QHD+ 240Hz | Core i9-13980HX | RTX 4080 12GB | 32GB | 2TB",
      ru: "17\" QHD+ 240Гц | Core i9-13980HX | RTX 4080 12GB | 32GB | 2TB"
    }
  },
  {
    id: 22,
    name: "HP Omen 16 Gaming",
    category: "gaming-laptop",
    basePrice: 16800000,
    regularDiscount: 10,
    rating: 4.7,
    giftEligible: true,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "16.1\" 165Hz | Ryzen 7 7840HS | RTX 4060 8GB | 16GB | 1TB SSD",
      en: "16.1\" 165Hz | Ryzen 7 7840HS | RTX 4060 8GB | 16GB | 1TB SSD",
      ru: "16.1\" 165Гц | Ryzen 7 7840HS | RTX 4060 8GB | 16GB | 1TB SSD"
    }
  },
  {
    id: 23,
    name: "ASUS VivoBook 15",
    category: "office",
    basePrice: 6800000,
    regularDiscount: 7,
    rating: 4.5,
    giftEligible: false,
    image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "15.6\" FHD | Core i5-1235U | 16GB DDR4 | 512GB NVMe SSD",
      en: "15.6\" FHD | Core i5-1235U | 16GB DDR4 | 512GB NVMe SSD",
      ru: "15.6\" FHD | Core i5-1235U | 16GB DDR4 | 512GB NVMe SSD"
    }
  },
  {
    id: 24,
    name: "Acer Aspire 5",
    category: "office",
    basePrice: 6200000,
    regularDiscount: 8,
    rating: 4.4,
    giftEligible: false,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "15.6\" FHD IPS | Ryzen 5 7520U | 16GB LPDDR5 | 512GB SSD",
      en: "15.6\" FHD IPS | Ryzen 5 7520U | 16GB LPDDR5 | 512GB SSD",
      ru: "15.6\" FHD IPS | Ryzen 5 7520U | 16GB LPDDR5 | 512GB SSD"
    }
  },
  {
    id: 25,
    name: "Dell Inspiron 15",
    category: "office",
    basePrice: 7900000,
    regularDiscount: 9,
    rating: 4.6,
    giftEligible: false,
    image: "https://images.unsplash.com/photo-1504707748692-479802cf922d?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "15.6\" 120Hz | Core i5-1335U | 16GB RAM | 512GB NVMe SSD",
      en: "15.6\" 120Hz | Core i5-1335U | 16GB RAM | 512GB NVMe SSD",
      ru: "15.6\" 120Гц | Core i5-1335U | 16GB RAM | 512GB NVMe SSD"
    }
  },
  {
    id: 26,
    name: "Apple iMac 24 M3",
    category: "ultrabook",
    basePrice: 20500000,
    regularDiscount: 10,
    rating: 4.9,
    giftEligible: false,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=700&q=80",
    specs: {
      uz: "24\" 4.5K Retina | Apple M3 8-Core | 16GB Unified | 512GB SSD",
      en: "24\" 4.5K Retina | Apple M3 8-Core | 16GB Unified | 512GB SSD",
      ru: "24\" 4.5K Retina | Apple M3 8-Core | 16GB Unified | 512GB SSD"
    }
  }
];

// 2. UCHTA TIL UCHUN LUG'AT (UZ / EN / RU)
const TRANSLATIONS = {
  uz: {
    fridayTitle: "JUMA AKSIYASI (FRIDAY SALE) — 50% CHEGIRMA!",
    fridayGiftInfo: "+ Har bir mos kompyuterga BEPUL Gaming Mouse va Headset!",
    cdH: "s",
    cdM: "d",
    cdS: "son",
    searchPlaceholder: "Kompyuter, noutbuk yoki RTX qidiring...",
    navCatalog: "Katalog",
    navPromo: "Juma Aksiyasi",
    navContact: "Aloqa",
    cartBtn: "Savatcha",
    slide1Tag: "🔥 JUMA SUPER TAKLIFI",
    slide1Title: "RTX 4090 va RTX 4080 Gaming PC — 50% Chegirma!",
    slide1Desc: "Har bir kuchli kompyuter xaridiga Gaming Mouse va Gaming Headset mutlaqo BEPUL qo‘shib beriladi.",
    slide2Tag: "💻 APPLE & ULTRABOOK",
    slide2Title: "MacBook Pro M3 va Dell XPS 15 — Professional Tanlov",
    slide2Desc: "Dizaynerlar, dasturchilar va biznes uchun yuqori unumdorlikka ega original noutbuklar.",
    slide3Tag: "🎮 PRO GAMING LAPTOPS",
    slide3Title: "ASUS ROG Strix G16 & Lenovo Legion 5",
    slide3Desc: "240Hz ekran, mukammal sovutish tizimi va rasmiy kafolat bilan O‘zbekiston bo‘ylab yetkazib berish.",
    shopNowBtn: "Hoziroq xarid qilish",
    viewCatalogBtn: "Katalogni ko‘rish",
    catalogHeading: "Kompyuterlar va Noutbuklar Katalogi",
    sortLabel: "Saralash:",
    sortDefault: "Standart",
    sortPriceAsc: "Narx: Arzondan qimmatga",
    sortPriceDesc: "Narx: Qimmatdan arzonga",
    sortRating: "Yuqori reyting",
    catAll: "Barchasi (26)",
    catGamingPC: "Gaming PC",
    catGamingLaptop: "Gaming Noutbuklar",
    catUltrabook: "MacBook & Ultrabook",
    catOffice: "Ofis va O‘qish",
    detailsBtn: "Batafsil",
    addToCartBtn: "Savatchaga",
    giftBadgeText: "+ Mouse & Headset",
    noProductsFound: "So‘rovingiz bo‘yicha mahsulot topilmadi.",
    resetFilters: "Filtrlarni tozalash",
    featDeliveryTitle: "Tezkor Yetkazib Berish",
    featDeliveryDesc: "Toshkent bo‘ylab 2 soat ichida, barcha viloyatlarga 24 soatda bepul yetkazamiz.",
    featWarrantyTitle: "1 Yil Rasmiy Kafolat",
    featWarrantyDesc: "Barcha kompyuter va noutbuklarga rasmiy servis kafolati taqdim etiladi.",
    featGiftTitle: "Juma Sovg‘alari",
    featGiftDesc: "Juma aksiyasi doirasida har bir mos kompyuterga Gaming Mouse + Headset sovg‘a!",
    footerAbout: "O‘zbekistondagi eng yirik va ishonchli kompyuter texnikalari internet-do‘koni.",
    footerNavTitle: "Bo‘limlar",
    footerContactTitle: "Aloqa markazi",
    footerRights: "Barcha huquqlar himoyalangan.",
    cartTitle: "Sizning Savatchangiz",
    cartEmpty: "Savatchangiz hozircha bo‘sh. Katalogdan mahsulot tanlang!",
    freeGiftsTitle: "Juma Aksiyasi Sovg‘alari (BEPUL):",
    subtotalLabel: "Asl summa:",
    discountLabel: "Chegirma:",
    totalLabel: "Jami to‘lov:",
    clearCartBtn: "Tozalash",
    checkoutBtn: "Buyurtma berish",
    checkoutFormTitle: "Buyurtmani rasmiylashtirish",
    labelName: "Ism va familiyangiz *",
    labelPhone: "Telefon raqamingiz *",
    labelAddress: "Yetkazib berish manzili *",
    labelPayment: "To‘lov turi",
    payCash: "Naqd pul (Qabul qilganda)",
    payCard: "Uzcard / Humo / Visa",
    payInstallment: "Muddatli to‘lov (12 oy)",
    confirmOrderBtn: "Buyurtmani tasdiqlash",
    currency: "so‘m",
    foundCount: "ta mahsulot topildi",
    toastAdded: "savatchaga qo‘shildi!",
    toastCleared: "Savatcha tozalandi",
    toastOrderSuccess: "Buyurtmangiz qabul qilindi! Tez orada operator bog‘lanadi.",
    errNameText: "Kamida 3 ta harfdan iborat ism kiriting",
    errPhoneText: "To‘g‘ri telefon raqamini kiriting (kamida 9 ta raqam)",
    errAddressText: "To‘liq manzilni kiriting",
    giftMouse: "Gaming RGB Mouse (Sovg‘a)",
    giftHeadset: "Pro Gaming Headset 7.1 (Sovg‘a)"
  },
  en: {
    fridayTitle: "FRIDAY SALE — 50% OFF EVERYTHING!",
    fridayGiftInfo: "+ FREE Gaming Mouse & Headset with every eligible PC!",
    cdH: "h",
    cdM: "m",
    cdS: "s",
    searchPlaceholder: "Search PC, laptop or RTX...",
    navCatalog: "Catalog",
    navPromo: "Friday Sale",
    navContact: "Contact",
    cartBtn: "Cart",
    slide1Tag: "🔥 FRIDAY SUPER DEAL",
    slide1Title: "RTX 4090 & RTX 4080 Gaming PC — 50% Discount!",
    slide1Desc: "Get a FREE Gaming Mouse and Gaming Headset with every eligible gaming rig purchase.",
    slide2Tag: "💻 APPLE & ULTRABOOK",
    slide2Title: "MacBook Pro M3 & Dell XPS 15 — Pro Choice",
    slide2Desc: "High-performance original laptops for designers, developers, and business.",
    slide3Tag: "🎮 PRO GAMING LAPTOPS",
    slide3Title: "ASUS ROG Strix G16 & Lenovo Legion 5",
    slide3Desc: "240Hz displays, advanced cooling, and official warranty with nationwide delivery.",
    shopNowBtn: "Shop Now",
    viewCatalogBtn: "View Catalog",
    catalogHeading: "Computers & Laptops Catalog",
    sortLabel: "Sort by:",
    sortDefault: "Default",
    sortPriceAsc: "Price: Low to High",
    sortPriceDesc: "Price: High to Low",
    sortRating: "Top Rated",
    catAll: "All (26)",
    catGamingPC: "Gaming PC",
    catGamingLaptop: "Gaming Laptops",
    catUltrabook: "MacBook & Ultrabook",
    catOffice: "Office & Study",
    detailsBtn: "Details",
    addToCartBtn: "Add to Cart",
    giftBadgeText: "+ Mouse & Headset",
    noProductsFound: "No products matched your search.",
    resetFilters: "Reset Filters",
    featDeliveryTitle: "Fast Delivery",
    featDeliveryDesc: "Within 2 hours in Tashkent and 24 hours across all regions.",
    featWarrantyTitle: "1-Year Official Warranty",
    featWarrantyDesc: "All PCs and laptops come with official service center warranty.",
    featGiftTitle: "Friday Free Gifts",
    featGiftDesc: "During Friday Sale, eligible PCs include a free Gaming Mouse + Headset!",
    footerAbout: "The largest and most trusted computer hardware online store in Uzbekistan.",
    footerNavTitle: "Navigation",
    footerContactTitle: "Contact Center",
    footerRights: "All rights reserved.",
    cartTitle: "Your Shopping Cart",
    cartEmpty: "Your cart is currently empty. Pick a computer from the catalog!",
    freeGiftsTitle: "Friday Sale Free Gifts:",
    subtotalLabel: "Original price:",
    discountLabel: "Discount:",
    totalLabel: "Total payment:",
    clearCartBtn: "Clear Cart",
    checkoutBtn: "Checkout",
    checkoutFormTitle: "Complete Your Order",
    labelName: "Full Name *",
    labelPhone: "Phone Number *",
    labelAddress: "Delivery Address *",
    labelPayment: "Payment Method",
    payCash: "Cash on Delivery",
    payCard: "Uzcard / Humo / Visa",
    payInstallment: "Installment Plan (12 mo)",
    confirmOrderBtn: "Confirm Order",
    currency: "UZS",
    foundCount: "products found",
    toastAdded: "added to cart!",
    toastCleared: "Cart has been cleared",
    toastOrderSuccess: "Order placed successfully! Our manager will contact you shortly.",
    errNameText: "Please enter at least 3 characters",
    errPhoneText: "Please enter a valid phone number",
    errAddressText: "Please enter your full delivery address",
    giftMouse: "Gaming RGB Mouse (FREE)",
    giftHeadset: "Pro Gaming Headset 7.1 (FREE)"
  },
  ru: {
    fridayTitle: "ПЯТНИЧНАЯ РАСПРОДАЖА (FRIDAY SALE) — СКИДКА 50%!",
    fridayGiftInfo: "+ БЕСПЛАТНО Gaming Mouse и Headset к каждому игровому ПК!",
    cdH: "ч",
    cdM: "м",
    cdS: "с",
    searchPlaceholder: "Поиск ПК, ноутбука или RTX...",
    navCatalog: "Каталог",
    navPromo: "Пятничная акция",
    navContact: "Контакты",
    cartBtn: "Корзина",
    slide1Tag: "🔥 СУПЕР ПРЕДЛОЖЕНИЕ ПЯТНИЦЫ",
    slide1Title: "Игровые ПК RTX 4090 и RTX 4080 — Скидка 50%!",
    slide1Desc: "При покупке каждого игрового компьютера — игровая мышь и гарнитура в ПОДАРОК.",
    slide2Tag: "💻 APPLE И УЛЬТРАБУКИ",
    slide2Title: "MacBook Pro M3 и Dell XPS 15 — Выбор профи",
    slide2Desc: "Оригинальные ноутбуки высокой производительности для дизайна, кода и бизнеса.",
    slide3Tag: "🎮 ИГРОВЫЕ НОУТБУКИ",
    slide3Title: "ASUS ROG Strix G16 и Lenovo Legion 5",
    slide3Desc: "Экраны 240Гц, мощное охлаждение и официальная гарантия с доставкой по Узбекистану.",
    shopNowBtn: "Купить сейчас",
    viewCatalogBtn: "Смотреть каталог",
    catalogHeading: "Каталог компьютеров и ноутбуков",
    sortLabel: "Сортировка:",
    sortDefault: "По умолчанию",
    sortPriceAsc: "Цена: по возрастанию",
    sortPriceDesc: "Цена: по убыванию",
    sortRating: "Высокий рейтинг",
    catAll: "Все (26)",
    catGamingPC: "Игровые ПК",
    catGamingLaptop: "Игровые ноутбуки",
    catUltrabook: "MacBook и Ультрабуки",
    catOffice: "Офис и Учёба",
    detailsBtn: "Подробнее",
    addToCartBtn: "В корзину",
    giftBadgeText: "+ Мышь и Гарнитура",
    noProductsFound: "По вашему запросу товаров не найдено.",
    resetFilters: "Сбросить фильтры",
    featDeliveryTitle: "Быстрая доставка",
    featDeliveryDesc: "По Ташкенту за 2 часа, по всем регионам Узбекистана за 24 часа.",
    featWarrantyTitle: "Официальная гарантия 1 год",
    featWarrantyDesc: "На все компьютеры и ноутбуки предоставляется сервисная гарантия.",
    featGiftTitle: "Подарки по пятницам",
    featGiftDesc: "В рамках акции к каждому игровому ПК — Gaming Mouse + Headset бесплатно!",
    footerAbout: "Крупнейший и надёжный интернет-магазин компьютерной техники в Узбекистане.",
    footerNavTitle: "Разделы",
    footerContactTitle: "Контакт-центр",
    footerRights: "Все права защищены.",
    cartTitle: "Ваша корзина",
    cartEmpty: "Ваша корзина пуста. Выберите компьютер в каталоге!",
    freeGiftsTitle: "Подарки по акции (БЕСПЛАТНО):",
    subtotalLabel: "Исходная сумма:",
    discountLabel: "Скидка:",
    totalLabel: "Итого к оплате:",
    clearCartBtn: "Очистить",
    checkoutBtn: "Оформить заказ",
    checkoutFormTitle: "Оформление заказа",
    labelName: "Имя и фамилия *",
    labelPhone: "Номер телефона *",
    labelAddress: "Адрес доставки *",
    labelPayment: "Способ оплаты",
    payCash: "Наличными при получении",
    payCard: "Uzcard / Humo / Visa",
    payInstallment: "Рассрочка (12 месяцев)",
    confirmOrderBtn: "Подтвердить заказ",
    currency: "сум",
    foundCount: "товаров найдено",
    toastAdded: "добавлен в корзину!",
    toastCleared: "Корзина очищена",
    toastOrderSuccess: "Заказ принят! Оператор свяжется с вами в ближайшее время.",
    errNameText: "Введите имя (минимум 3 символа)",
    errPhoneText: "Введите корректный номер телефона",
    errAddressText: "Введите полный адрес доставки",
    giftMouse: "Gaming RGB Mouse (Подарок)",
    giftHeadset: "Pro Gaming Headset 7.1 (Подарок)"
  }
};

// 3. HOLAT (STATE) VA LOCALSTORAGE
const STORAGE_KEYS = {
  CART: "techno_shop_cart_v1",
  THEME: "techno_shop_theme_v1",
  LANG: "techno_shop_lang_v1",
  FRIDAY: "techno_shop_friday_v1"
};

let state = {
  lang: localStorage.getItem(STORAGE_KEYS.LANG) || "uz",
  theme: localStorage.getItem(STORAGE_KEYS.THEME) || "dark",
  fridaySaleActive: localStorage.getItem(STORAGE_KEYS.FRIDAY) !== "false",
  cart: JSON.parse(localStorage.getItem(STORAGE_KEYS.CART) || "[]"),
  category: "all",
  searchQuery: "",
  sortBy: "default",
  currentSlide: 0
};

const FALLBACK_IMAGE = "https://placehold.co/700x480/1e293b/38bdf8?text=TECHNO+SHOP+PC";

// 4. YORDAMCHI FUNKSIYALAR
function formatPrice(amount) {
  const rounded = Math.round(amount);
  const formatted = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${formatted} ${TRANSLATIONS[state.lang].currency}`;
}

function getEffectivePricing(product) {
  const discountPercent = state.fridaySaleActive ? 50 : product.regularDiscount;
  const finalPrice = Math.round(product.basePrice * (1 - discountPercent / 100));
  return {
    oldPrice: product.basePrice,
    finalPrice,
    discountPercent
  };
}

function saveCart() {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(state.cart));
}

function showToast(message) {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2600);
}

// 5. TUN VA KUN REJIMI (DARK / LIGHT MODE)
function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEYS.THEME, theme);
}

function toggleTheme() {
  applyTheme(state.theme === "dark" ? "light" : "dark");
}

// 6. UCHTA TILNI ALMASHTIRISH
function applyLanguage(lang) {
  state.lang = lang;
  localStorage.setItem(STORAGE_KEYS.LANG, lang);
  document.documentElement.lang = lang;

  const dict = TRANSLATIONS[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  renderProducts();
  renderCart();
}

// 7. JUMA AKSIYASI VA COUNTDOWN TIMER
function updateFridayBannerUI() {
  const banner = document.getElementById("fridayBanner");
  const statusText = document.getElementById("fridayStatusText");
  banner.classList.toggle("is-off", !state.fridaySaleActive);
  statusText.textContent = state.fridaySaleActive ? "ON (50%)" : "OFF";
}

function toggleFridaySale() {
  state.fridaySaleActive = !state.fridaySaleActive;
  localStorage.setItem(STORAGE_KEYS.FRIDAY, String(state.fridaySaleActive));
  updateFridayBannerUI();
  renderProducts();
  renderCart();
}

function startCountdownTimer() {
  let totalSeconds = 14 * 3600 + 38 * 60 + 45;

  function tick() {
    if (totalSeconds <= 0) {
      totalSeconds = 24 * 3600;
    }
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    document.getElementById("cdHours").textContent = String(hrs).padStart(2, "0");
    document.getElementById("cdMinutes").textContent = String(mins).padStart(2, "0");
    document.getElementById("cdSeconds").textContent = String(secs).padStart(2, "0");
    totalSeconds--;
  }

  tick();
  setInterval(tick, 1000);
}

// 8. MAHSULOTLARNI FILTERLASH, SARALASH VA CHIZISH
function getFilteredProducts() {
  let list = [...PRODUCTS];

  if (state.category !== "all") {
    list = list.filter((p) => p.category === state.category);
  }

  if (state.searchQuery.trim() !== "") {
    const q = state.searchQuery.toLowerCase().trim();
    list = list.filter((p) => {
      const specText = p.specs[state.lang].toLowerCase();
      return p.name.toLowerCase().includes(q) || specText.includes(q);
    });
  }

  if (state.sortBy === "price-asc") {
    list.sort((a, b) => getEffectivePricing(a).finalPrice - getEffectivePricing(b).finalPrice);
  } else if (state.sortBy === "price-desc") {
    list.sort((a, b) => getEffectivePricing(b).finalPrice - getEffectivePricing(a).finalPrice);
  } else if (state.sortBy === "rating-desc") {
    list.sort((a, b) => b.rating - a.rating);
  }

  return list;
}

function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const emptyState = document.getElementById("emptySearchState");
  const countLabel = document.getElementById("productsCountLabel");
  const dict = TRANSLATIONS[state.lang];

  const items = getFilteredProducts();
  countLabel.textContent = `${items.length} ${dict.foundCount}`;

  if (items.length === 0) {
    grid.innerHTML = "";
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;

  grid.innerHTML = items.map((product) => {
    const pricing = getEffectivePricing(product);
    const showGift = state.fridaySaleActive && product.giftEligible;

    return `
      <article class="product-card">
        <div class="card-media">
          <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'">
          <span class="discount-badge">-${pricing.discountPercent}%</span>
          ${showGift ? `<span class="gift-badge">🎁 ${dict.giftBadgeText}</span>` : ""}
        </div>
        <div class="card-body">
          <div class="card-rating">★ ${product.rating.toFixed(1)}</div>
          <h3 class="card-title">${product.name}</h3>
          <p class="card-specs">${product.specs[state.lang]}</p>
          <div class="card-pricing">
            <span class="old-price">${formatPrice(pricing.oldPrice)}</span>
            <span class="current-price">${formatPrice(pricing.finalPrice)}</span>
          </div>
          <div class="card-actions">
            <button type="button" class="btn btn-outline" data-action="details" data-id="${product.id}">${dict.detailsBtn}</button>
            <button type="button" class="btn btn-primary" data-action="add" data-id="${product.id}">${dict.addToCartBtn}</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// 9. MAHSULOT BATAFSIL MODAL OYNASI
function openProductModal(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const dict = TRANSLATIONS[state.lang];
  const pricing = getEffectivePricing(product);
  const specsArray = product.specs[state.lang].split("|").map((s) => s.trim());

  const modalContent = document.getElementById("modalProductContent");
  modalContent.innerHTML = `
    <div class="modal-product-grid">
      <div>
        <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'">
      </div>
      <div>
        <span class="slide-tag">-${pricing.discountPercent}% CHEGIRMA • ★ ${product.rating.toFixed(1)}</span>
        <h3 id="modalProductTitle">${product.name}</h3>
        <ul class="modal-specs-list">
          ${specsArray.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <div class="card-pricing">
          <span class="old-price">${formatPrice(pricing.oldPrice)}</span>
          <span class="current-price">${formatPrice(pricing.finalPrice)}</span>
        </div>
        <button type="button" class="btn btn-primary btn-block" id="modalAddBtn">${dict.addToCartBtn}</button>
      </div>
    </div>
  `;

  document.getElementById("modalAddBtn").addEventListener("click", () => {
    addToCart(product.id);
    closeProductModal();
  });

  document.getElementById("productModalBackdrop").hidden = false;
}

function closeProductModal() {
  document.getElementById("productModalBackdrop").hidden = true;
}

// 10. SAVATCHA (SHOPPING CART) FUNKSIYALARI
function addToCart(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const existing = state.cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ id: productId, qty: 1 });
  }

  saveCart();
  renderCart();
  showToast(`${product.name} ${TRANSLATIONS[state.lang].toastAdded}`);
}

function updateCartQty(productId, delta) {
  const index = state.cart.findIndex((item) => item.id === productId);
  if (index === -1) return;

  state.cart[index].qty += delta;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }

  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((item) => item.id !== productId);
  saveCart();
  renderCart();
}

function clearCart() {
  state.cart = [];
  saveCart();
  renderCart();
  showToast(TRANSLATIONS[state.lang].toastCleared);
}

function renderCart() {
  const container = document.getElementById("cartItemsContainer");
  const footer = document.getElementById("cartFooter");
  const giftsBox = document.getElementById("cartGiftsBox");
  const giftsList = document.getElementById("cartGiftsList");
  const badge = document.getElementById("cartCountBadge");
  const dict = TRANSLATIONS[state.lang];

  const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = totalItems;

  if (state.cart.length === 0) {
    container.innerHTML = `<p class="cart-empty-msg">${dict.cartEmpty}</p>`;
    footer.hidden = true;
    giftsBox.hidden = true;
    return;
  }

  let originalTotal = 0;
  let finalTotal = 0;
  let eligibleGiftCount = 0;

  container.innerHTML = state.cart.map((cartItem) => {
    const product = PRODUCTS.find((p) => p.id === cartItem.id);
    if (!product) return "";

    const pricing = getEffectivePricing(product);
    originalTotal += pricing.oldPrice * cartItem.qty;
    finalTotal += pricing.finalPrice * cartItem.qty;

    if (state.fridaySaleActive && product.giftEligible) {
      eligibleGiftCount += cartItem.qty;
    }

    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'">
        <div>
          <div class="cart-item-title">${product.name}</div>
          <div class="cart-item-price">${formatPrice(pricing.finalPrice * cartItem.qty)}</div>
          <div class="qty-controls">
            <button type="button" class="qty-btn" data-cart-action="dec" data-id="${product.id}">−</button>
            <span>${cartItem.qty}</span>
            <button type="button" class="qty-btn" data-cart-action="inc" data-id="${product.id}">+</button>
          </div>
        </div>
        <button type="button" class="remove-item-btn" data-cart-action="remove" data-id="${product.id}" aria-label="O'chirish">🗑️</button>
      </div>
    `;
  }).join("");

  // Juma aksiyasi sovg'alarini avtomatik qo'shish
  if (eligibleGiftCount > 0) {
    giftsBox.hidden = false;
    giftsList.innerHTML = `
      <li>🖱️ ${dict.giftMouse} × <b>${eligibleGiftCount}</b></li>
      <li>🎧 ${dict.giftHeadset} × <b>${eligibleGiftCount}</b></li>
    `;
  } else {
    giftsBox.hidden = true;
  }

  const totalDiscount = originalTotal - finalTotal;

  document.getElementById("cartSubtotal").textContent = formatPrice(originalTotal);
  document.getElementById("cartDiscount").textContent = `-${formatPrice(totalDiscount)}`;
  document.getElementById("cartTotal").textContent = formatPrice(finalTotal);
  document.getElementById("checkoutTotalAmount").textContent = formatPrice(finalTotal);

  footer.hidden = false;
}

function openCartDrawer() {
  document.getElementById("cartBackdrop").hidden = false;
  document.getElementById("cartDrawer").classList.add("open");
}

function closeCartDrawer() {
  document.getElementById("cartBackdrop").hidden = true;
  document.getElementById("cartDrawer").classList.remove("open");
}

// 11. BUYURTMA FORMASI VA VALIDATSIYA
function openCheckoutModal() {
  closeCartDrawer();
  document.getElementById("checkoutModalBackdrop").hidden = false;
}

function closeCheckoutModal() {
  document.getElementById("checkoutModalBackdrop").hidden = true;
}

function handleCheckoutSubmit(event) {
  event.preventDefault();
  const dict = TRANSLATIONS[state.lang];

  const nameInput = document.getElementById("custName");
  const phoneInput = document.getElementById("custPhone");
  const addressInput = document.getElementById("custAddress");

  const errName = document.getElementById("errName");
  const errPhone = document.getElementById("errPhone");
  const errAddress = document.getElementById("errAddress");

  let isValid = true;

  if (nameInput.value.trim().length < 3) {
    errName.textContent = dict.errNameText;
    isValid = false;
  } else {
    errName.textContent = "";
  }

  const digitsOnly = phoneInput.value.replace(/\D/g, "");
  if (digitsOnly.length < 9) {
    errPhone.textContent = dict.errPhoneText;
    isValid = false;
  } else {
    errPhone.textContent = "";
  }

  if (addressInput.value.trim().length < 5) {
    errAddress.textContent = dict.errAddressText;
    isValid = false;
  } else {
    errAddress.textContent = "";
  }

  if (!isValid) return;

  // Buyurtma tasdiqlandi
  clearCart();
  event.target.reset();
  closeCheckoutModal();
  showToast(dict.toastOrderSuccess);
}

// 12. AVTOMATIK CAROUSEL
function initCarousel() {
  const slides = document.querySelectorAll(".carousel-slide");
  const dotsContainer = document.getElementById("carouselDots");

  slides.forEach((_, idx) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = `carousel-dot ${idx === 0 ? "active" : ""}`;
    dot.setAttribute("aria-label", `Slayd ${idx + 1}`);
    dot.addEventListener("click", () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  function goToSlide(index) {
    state.currentSlide = (index + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("active", i === state.currentSlide));
    dotsContainer.querySelectorAll(".carousel-dot").forEach((d, i) => {
      d.classList.toggle("active", i === state.currentSlide);
    });
  }

  document.getElementById("carouselPrev").addEventListener("click", () => {
    goToSlide(state.currentSlide - 1);
  });

  document.getElementById("carouselNext").addEventListener("click", () => {
    goToSlide(state.currentSlide + 1);
  });

  setInterval(() => {
    goToSlide(state.currentSlide + 1);
  }, 5000);
}

// 13. BARCHA EVENT LISTENERLARNI ULASH
function initEventListeners() {
  // Theme
  document.getElementById("themeToggleBtn").addEventListener("click", toggleTheme);

  // Juma aksiyasi toggle
  document.getElementById("fridayToggleBtn").addEventListener("click", toggleFridaySale);

  // Til almashtirish
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.getAttribute("data-lang"));
    });
  });

  // Mobil hamburger menyu
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  hamburgerBtn.addEventListener("click", () => {
    const isOpen = mobileDrawer.classList.toggle("open");
    hamburgerBtn.classList.toggle("active", isOpen);
    hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileDrawer.classList.remove("open");
      hamburgerBtn.classList.remove("active");
    });
  });

  // Qidiruv (Desktop va Mobil sinxron)
  const searchInput = document.getElementById("searchInput");
  const mobileSearchInput = document.getElementById("mobileSearchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");

  function handleSearch(value) {
    state.searchQuery = value;
    searchInput.value = value;
    mobileSearchInput.value = value;
    clearSearchBtn.hidden = value.length === 0;
    renderProducts();
  }

  searchInput.addEventListener("input", (e) => handleSearch(e.target.value));
  mobileSearchInput.addEventListener("input", (e) => handleSearch(e.target.value));
  clearSearchBtn.addEventListener("click", () => handleSearch(""));

  // Kategoriya filterlari
  document.getElementById("categoryFilters").addEventListener("click", (e) => {
    const chip = e.target.closest(".filter-chip");
    if (!chip) return;

    document.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    state.category = chip.getAttribute("data-category");
    renderProducts();
  });

  // Saralash
  document.getElementById("sortSelect").addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderProducts();
  });

  // Filtrlarni tozalash tugmasi
  document.getElementById("resetFiltersBtn").addEventListener("click", () => {
    state.category = "all";
    state.sortBy = "default";
    document.getElementById("sortSelect").value = "default";
    document.querySelectorAll(".filter-chip").forEach((c) => {
      c.classList.toggle("active", c.getAttribute("data-category") === "all");
    });
    handleSearch("");
  });

  // Mahsulot kartochkalaridagi tugmalar (Event Delegation)
  document.getElementById("productsGrid").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    const id = Number(btn.getAttribute("data-id"));
    const action = btn.getAttribute("data-action");

    if (action === "add") {
      addToCart(id);
    } else if (action === "details") {
      openProductModal(id);
    }
  });

  // Product modal yopish
  document.getElementById("closeProductModal").addEventListener("click", closeProductModal);
  document.getElementById("productModalBackdrop").addEventListener("click", (e) => {
    if (e.target.id === "productModalBackdrop") closeProductModal();
  });

  // Savatcha ochish / yopish / boshqarish
  document.getElementById("openCartBtn").addEventListener("click", openCartDrawer);
  document.getElementById("closeCartBtn").addEventListener("click", closeCartDrawer);
  document.getElementById("cartBackdrop").addEventListener("click", closeCartDrawer);
  document.getElementById("clearCartBtn").addEventListener("click", clearCart);

  document.getElementById("cartItemsContainer").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-cart-action]");
    if (!btn) return;
    const id = Number(btn.getAttribute("data-id"));
    const action = btn.getAttribute("data-cart-action");

    if (action === "inc") updateCartQty(id, 1);
    if (action === "dec") updateCartQty(id, -1);
    if (action === "remove") removeFromCart(id);
  });

  // Checkout modal
  document.getElementById("openCheckoutBtn").addEventListener("click", openCheckoutModal);
  document.getElementById("closeCheckoutModal").addEventListener("click", closeCheckoutModal);
  document.getElementById("checkoutModalBackdrop").addEventListener("click", (e) => {
    if (e.target.id === "checkoutModalBackdrop") closeCheckoutModal();
  });
  document.getElementById("checkoutForm").addEventListener("submit", handleCheckoutSubmit);

  // ESC tugmasi bilan modallarni yopish
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
      closeCartDrawer();
      closeCheckoutModal();
    }
  });
}

// 14. ILOVANI ISHGA TUSHIRISH
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(state.theme);
  updateFridayBannerUI();
  initCarousel();
  initEventListeners();
  startCountdownTimer();
  applyLanguage(state.lang);
});