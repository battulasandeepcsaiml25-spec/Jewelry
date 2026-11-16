// Sahira Jewelry Design - Product Catalog & Store Data

const STORE_DATA = {
  announcements: [
    { text: "FREE DOMESTIC SHIPPING ON ORDERS OF $125 OR MORE", link: "#" },
    { text: "Download the app and get 20% off your first order", link: "#" },
    { text: "Waterproof, Sweatproof & Tarnish-Free Jewelry — Made to Live In", link: "#" }
  ],

  spotlightCollections: [
    {
      title: "A Pearl Moment",
      tagline: "Fresh takes on the classic pearl, ready to layer or stand alone.",
      image: "https://sahirajewelrydesign.com/cdn/shop/files/image-1500x1500.png?v=1792682002&width=1500",
      link: "#pearl-jewelry"
    },
    {
      title: "Emerald Obsessed",
      tagline: "Vibrant green accents for timeless luxury and everyday sparkle.",
      image: "https://sahirajewelrydesign.com/cdn/shop/files/Gold_ring_and_green_feather_sleeve.png?v=1792683167&width=1254",
      link: "#emerald-obsessed"
    },
    {
      title: "The Tennis Collection",
      tagline: "High-sparkle bezel and prong-set tennis necklaces and bracelets.",
      image: "https://sahirajewelrydesign.com/cdn/shop/files/sahira-tennis-necklaces-1500x1500.png?v=1792686250&width=1500",
      link: "#tennis-collection"
    },
    {
      title: "Matching Sets",
      tagline: "Curated combinations designed to effortlessly complete your look.",
      image: "https://sahirajewelrydesign.com/cdn/shop/files/sahira-cream-1500x1500.png?v=1792686767&width=1500",
      link: "#matching-sets"
    },
    {
      title: "Two - Tone",
      tagline: "Mixed gold and silver metals for fearless, modern styling.",
      image: "https://sahirajewelrydesign.com/cdn/shop/files/Gloved-hand-gold-1500x1500.png?v=1792688352&width=1500",
      link: "#two-tone"
    },
    {
      title: "Religious Jewelry",
      tagline: "Meaningful crosses, pendants, and sacred tokens of faith.",
      image: "https://sahirajewelrydesign.com/cdn/shop/files/Cream_studio_portrait_with_crystal_cross_necklace.png?v=1792684854&width=1254",
      link: "#religious"
    }
  ],

  products: [
    {
      id: 1,
      title: "Polo Link Horse Bit Necklace",
      category: "necklaces",
      price: 72.00,
      comparePrice: 88.00,
      rating: 5.0,
      reviewsCount: 38,
      badge: "WATERPROOF",
      image: "https://sahirajewelrydesign.com/cdn/shop/files/Six-link_polished_gold_horsebit_necklace.png?v=1793907548&width=1254",
      hoverImage: "https://sahirajewelrydesign.com/cdn/shop/files/Refined_five-horsebit_gold_necklace.png?v=1793810400&width=1254",
      description: "Crafted in 18k gold-plated stainless steel with six signature equestrian-inspired polished horsebit links. Water-resistant, hypoallergenic, and designed for effortless statement layering.",
      materials: "18k Gold Plated Stainless Steel",
      details: ["Length: 16\" + 2\" extender", "Closure: Lobster clasp", "Waterproof & Sweat-proof"]
    },
    {
      id: 2,
      title: "Serpent Wrap Bracelet",
      category: "bracelets",
      price: 68.00,
      comparePrice: null,
      rating: 4.9,
      reviewsCount: 64,
      badge: "BEST SELLER",
      image: "https://sahirajewelrydesign.com/cdn/shop/files/ShopifyProductUpload_99.png?v=1794580673&width=2048",
      hoverImage: "https://sahirajewelrydesign.com/cdn/shop/files/ULinkChainBracelet3mm.jpg?v=1777324820&width=4500",
      description: "Sleek coiled serpent silhouette that bends gently to fit any wrist. Features micro-pavé crystal eyes for an opulent, hypnotic touch.",
      materials: "18k Gold Plated Brass & Cubic Zirconia",
      details: ["Adjustable flexible wrap fit", "Tarnish-resistant coating", "Comfort contoured design"]
    },
    {
      id: 3,
      title: "Christie CZ Stud",
      category: "earrings",
      price: 42.00,
      comparePrice: null,
      rating: 4.8,
      reviewsCount: 42,
      badge: "EVERYDAY ESSENTIAL",
      image: "https://sahirajewelrydesign.com/cdn/shop/files/Roundbezel-setgoldstudearrings.png?v=1794336845&width=1254",
      hoverImage: "https://sahirajewelrydesign.com/cdn/shop/files/ChatGPT_Image_Dec_17_2025_09_17_48_AM.png?v=1765981174&width=1024",
      description: "Round brilliant-cut cubic zirconia encased in a modern bezel setting. Safe for sensitive ears, perfect for first or second lobe piercings.",
      materials: "18k Gold over 925 Sterling Silver",
      details: ["Stone size: 6mm", "Hypoallergenic post with butterfly backing", "Water resistant"]
    },
    {
      id: 4,
      title: "Solea Pear Drop Earrings",
      category: "earrings",
      price: 60.00,
      comparePrice: null,
      rating: 5.0,
      reviewsCount: 29,
      badge: "NEW ARRIVAL",
      image: "https://sahirajewelrydesign.com/cdn/shop/files/Shopify_Product_Upload_13.png?v=1794428595&width=2048",
      hoverImage: "https://sahirajewelrydesign.com/cdn/shop/files/Shopify_Product_Upload_19.png?v=1794432946&width=2048",
      description: "Delicate pear-shaped crystal drops suspended from a sculpted huggie hoop. Glints beautifully in candlelight and sunshine alike.",
      materials: "18k Gold Plated Stainless Steel",
      details: ["Drop length: 1.25 inches", "Secure click latch closure", "Tarnish-free guarantee"]
    },
    {
      id: 5,
      title: "Sable Huggie Earrings",
      category: "earrings",
      price: 75.00,
      comparePrice: 90.00,
      rating: 4.9,
      reviewsCount: 51,
      badge: "BEST SELLER",
      image: "https://sahirajewelrydesign.com/cdn/shop/files/Shopify_Product_Upload_64.png?v=1794503541&width=2048",
      hoverImage: "https://sahirajewelrydesign.com/cdn/shop/files/ChatGPTImageMay11_2026_02_38_28PM.png?v=1778524729&width=1536",
      description: "Chunky ribbed golden huggie that delivers high-impact shine without the weight. Engineered for all-day comfort and sleep-in durability.",
      materials: "18k Gold Plated Stainless Steel",
      details: ["Diameter: 18mm", "Hollow lightweight construction", "Shower-friendly"]
    },
    {
      id: 6,
      title: "Odette Drop Earrings",
      category: "earrings",
      price: 60.00,
      comparePrice: null,
      rating: 4.7,
      reviewsCount: 18,
      badge: "WATERPROOF",
      image: "https://sahirajewelrydesign.com/cdn/shop/files/Shopify_Product_Upload_19.png?v=1794432946&width=2048",
      hoverImage: "https://sahirajewelrydesign.com/cdn/shop/files/Shopify_Product_Upload_13.png?v=1794428595&width=2048",
      description: "Architectural dangling drops designed to capture the essence of coastal glam. Seamless transition from office to evening cocktails.",
      materials: "18k Gold Plated Stainless Steel",
      details: ["Length: 1.5 inches", "Feather-light feel", "Anti-allergic ear wires"]
    },
    {
      id: 7,
      title: "Sophia CZ Paperclip Necklace",
      category: "necklaces",
      price: 98.00,
      comparePrice: 120.00,
      rating: 5.0,
      reviewsCount: 87,
      badge: "BEST SELLER",
      image: "https://sahirajewelrydesign.com/cdn/shop/files/Elongatednine-stonepaperclipnecklace.png?v=1793132286&width=1122",
      hoverImage: "https://sahirajewelrydesign.com/cdn/shop/files/ULinkChainNecklace3mm_782b6188-5324-4dcf-b35f-4ef1cab24940.jpg?v=1780603922&width=4500",
      description: "The classic paperclip link reimagined with alternating pavé-encrusted stations. The cornerstone piece for any sophisticated necklace stack.",
      materials: "18k Gold Plated Stainless Steel & Grade 5A CZ",
      details: ["Length: 18 inches", "Customizable length with link clasp", "100% Water resistant"]
    },
    {
      id: 8,
      title: "Caroline Statement Necklace",
      category: "necklaces",
      price: 78.00,
      comparePrice: null,
      rating: 4.8,
      reviewsCount: 33,
      badge: "TRENDING",
      image: "https://sahirajewelrydesign.com/cdn/shop/files/IMG_3373.jpg?v=1758635101&width=1592",
      hoverImage: "https://sahirajewelrydesign.com/cdn/shop/files/Six-link_polished_gold_horsebit_necklace.png?v=1793907548&width=1254",
      description: "A bold, interlocking textured chain that sits flush against the collarbone. Rich golden glow that withstands workouts, showers, and beach days.",
      materials: "Heavy 18k Gold Plated Stainless Steel",
      details: ["Length: 15\" + 3\" extender", "Statement width: 8mm", "Fade resistant"]
    },
    {
      id: 9,
      title: "Pear Cut Bezel Ring",
      category: "rings",
      price: 58.00,
      comparePrice: null,
      rating: 4.9,
      reviewsCount: 45,
      badge: "WATERPROOF",
      image: "https://sahirajewelrydesign.com/cdn/shop/files/Pear_Cut_Bezel_Ring.png?v=1792438301&width=1536",
      hoverImage: "https://sahirajewelrydesign.com/cdn/shop/files/Gold_ring_and_green_feather_sleeve.png?v=1792683167&width=1254",
      description: "A striking pear-shaped brilliant stone mounted in a smooth protective bezel frame. Sleek, comfortable band crafted for everyday wear without catching.",
      materials: "18k Gold Plated Stainless Steel",
      details: ["Available in US sizes 5-9", "Snag-free bezel profile", "Hand wash & lotion safe"]
    },
    {
      id: 10,
      title: "Calla Link Bracelet",
      category: "bracelets",
      price: 75.00,
      comparePrice: null,
      rating: 5.0,
      reviewsCount: 72,
      badge: "WATERPROOF",
      image: "https://sahirajewelrydesign.com/cdn/shop/files/ULinkChainBracelet3mm.jpg?v=1777324820&width=4500",
      hoverImage: "https://sahirajewelrydesign.com/cdn/shop/files/ShopifyProductUpload_99.png?v=1794580673&width=2048",
      description: "Iconic U-link architecture with seamless hinged links. Pairs harmoniously alongside tennis bracelets, cuffs, and wristwatches.",
      materials: "18k Gold Plated Stainless Steel",
      details: ["Length: 7.25 inches", "Secure hidden clasp", "Never turns green"]
    },
    {
      id: 11,
      title: "Calla Link Necklace",
      category: "necklaces",
      price: 98.00,
      comparePrice: 115.00,
      rating: 4.9,
      reviewsCount: 94,
      badge: "BEST SELLER",
      image: "https://sahirajewelrydesign.com/cdn/shop/files/ULinkChainNecklace3mm_782b6188-5324-4dcf-b35f-4ef1cab24940.jpg?v=1780603922&width=4500",
      hoverImage: "https://sahirajewelrydesign.com/cdn/shop/files/IMG_3373.jpg?v=1758635101&width=1592",
      description: "The sister piece to our bestselling Calla bracelet. Substantial weight and timeless luxury design inspired by high jewelry archives.",
      materials: "18k Gold Plated Stainless Steel",
      details: ["Length: 17 inches", "Links measure 3mm thickness", "Waterproof & tarnish resistant"]
    },
    {
      id: 12,
      title: "Karla Tennis Necklace - Turquoise",
      category: "necklaces",
      price: 118.00,
      comparePrice: 140.00,
      rating: 4.8,
      reviewsCount: 26,
      badge: "POPULAR",
      image: "https://sahirajewelrydesign.com/cdn/shop/files/FullSizeRender_b78f57fc-0f13-4f52-ac57-8b8fc3885fa9.jpg?v=1772406248&width=1024",
      hoverImage: "https://sahirajewelrydesign.com/cdn/shop/files/sahira-tennis-necklaces-1500x1500.png?v=1792686250&width=1500",
      description: "Continuous line of turquoise-hued stones mounted in four-prong 18k gold settings. Delivers vacation energy year-round.",
      materials: "18k Gold Plated Brass & Synthetic Turquoise",
      details: ["Length: 15\" + 2\" extender", "Double-safety box clasp", "Hypoallergenic"]
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Matilda N.",
      verified: true,
      rating: 5,
      headline: "I highly recommend Sahira",
      review: "Bought several pieces from them and I am yet to be disappointed. The waterproof claim is 100% real — I wear my necklaces in the pool and shower daily and they still look brand new. Would highly recommend!",
      product: "Sophia CZ Paperclip Necklace"
    },
    {
      id: 2,
      name: "Michelle K.",
      verified: true,
      rating: 5,
      headline: "Looks even better in person",
      review: "This bracelet is even better in person. I love it! And it's so comfortable to wear. I wear a size 8 bracelet and this fits perfectly! Will be ordering more as gifts.",
      product: "Calla Link Bracelet"
    },
    {
      id: 3,
      name: "Azilde O.",
      verified: true,
      rating: 5,
      headline: "Amazing jewelry quality",
      review: "It has become my principal jewelry since a year now, I love the quality and the versatility of the products! No tarnishing, no skin irritation whatsoever.",
      product: "Polo Link Horse Bit Necklace"
    },
    {
      id: 4,
      name: "Sarah V.",
      verified: true,
      rating: 5,
      headline: "The best waterproof jewelry on the market",
      review: "I have sensitive skin and everything usually tarnishes within weeks. Sahira pieces have lasted through hot yoga, beach trips to Florida, and daily showers. 10/10!",
      product: "Christie CZ Stud"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = STORE_DATA;
}
