export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  read: string;
  image: string;
  body: string[];
}

export const posts: Post[] = [
  {
    slug: "gulshan-market-2026",
    title: "What Gulshan buyers are paying in 2026",
    excerpt: "A clear look at sale prices, days on market, and which streets still command a premium.",
    category: "Market",
    date: "12 Mar 2026",
    read: "6 min",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    body: [
      "Gulshan remains Dhaka's reference market. Well-finished houses in Gulshan-2 are trading between the mid and high six figures, while full-floor penthouses still set the ceiling.",
      "Buyers are spending longer on inspections. Properties with a private garden, staff quarters, and a documented service history are moving first.",
      "If you are buying this season, compare price per square foot against the last three sales on the same road, not the asking price on the brochure.",
    ],
  },
  {
    slug: "renting-in-banani",
    title: "A renter's guide to Banani",
    excerpt: "How to read a lease, what a fair monthly rent looks like, and which buildings are worth the premium.",
    category: "Renting",
    date: "28 Feb 2026",
    read: "5 min",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
    body: [
      "Banani rents cluster around newer towers with a gym, generator backup, and a concierge. Older walk-ups nearby can be half the price if you can live without those extras.",
      "Ask for the service-charge schedule before you sign. A low rent with a high charge often costs more than the apartment next door.",
      "NestFind agents can arrange a same-week viewing and a lease review so the deposit terms are clear before you transfer funds.",
    ],
  },
  {
    slug: "prepare-your-home-to-sell",
    title: "How to prepare a Dhaka home for sale",
    excerpt: "The short list of fixes that actually change an offer, from lighting to paperwork.",
    category: "Selling",
    date: "4 Feb 2026",
    read: "7 min",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    body: [
      "Buyers decide in the first room. Clear surfaces, repair visible damp, and replace yellowed bulbs with warm white light before the first viewing.",
      "Have mutation, tax, and utility papers in one folder. Offers stall when documents arrive a week late.",
      "Price from recent comparable sales, then leave a little room. Overpricing in the first month is the most common reason a good house sits.",
    ],
  },
  {
    slug: "baridhara-embassy-district",
    title: "Living in the Baridhara embassy district",
    excerpt: "Schools, security, and the villa stock that expats and returning families ask for first.",
    category: "Neighbourhoods",
    date: "18 Jan 2026",
    read: "4 min",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    body: [
      "Baridhara and Baridhara DOHS stay in demand because of quieter streets, international schools, and a concentration of diplomatic residences.",
      "Villas with a pool and staff quarters rent and sell faster than apartments in the same postcode.",
      "Inventory is thin. If a property matches your brief, book the viewing the same day it is listed.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
