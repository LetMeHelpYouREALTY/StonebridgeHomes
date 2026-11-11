/**
 * Market facts used across pages. Every figure carries its source and the
 * date it was checked so a reader (or Dr. Jan) can audit it. Update the
 * numbers and `asOf` together; never edit one without the other.
 */
export const STONEBRIDGE_MARKET = {
  asOf: 'November 1, 2026',
  source: 'Las Vegas REALTORS® MLS data via IDX, last 12 months',
  medianSold: 822_500,
  medianDaysToSell: 20,
  pctOfOriginalList: 96.6,
  activeListings: 32,
  monthsOfSupply: 3.6,
  closedSales12mo: 98,
  medianListPrice: 944_440,
  listPricePerSqFt: 461,
  priceBands: [
    { band: '$500K to $600K', count: 6 },
    { band: '$600K to $750K', count: 2 },
    { band: '$750K to $1M', count: 9 },
    { band: '$1M to $1.5M', count: 8 },
    { band: '$1.5M to $2M', count: 3 },
    { band: '$2M to $3M', count: 4 },
  ],
};

export const HERITAGE_MARKET = {
  asOf: 'November 2, 2026',
  source: 'Las Vegas REALTORS® MLS data via IDX, last 12 months',
  medianSold: 568_000,
  medianDaysToSell: 8,
  pctOfOriginalList: 97.4,
  activeListings: 8,
  monthsOfSupply: 3.2,
  medianListPrice: 561_750,
  listPricePerSqFt: 447,
  hoaMonthly: 350,
  masterMonthly: 69,
  hoaConfirmed: 'August 2026',
};

/** Verified listing examples. Status changes daily; the page says so. */
export const EXAMPLE_LISTINGS = [
  {
    address: '894 Heritage Bend Drive, Las Vegas, NV 89138',
    neighborhood: 'Heritage at Stonebridge',
    price: 539_888,
    beds: 2,
    baths: 2,
    sqft: 1_234,
    plan: 'Lennar Claremont',
    yearBuilt: 2025,
    mls: '2825123',
    listed: 'October 8, 2026',
    note: 'Listed by Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.',
  },
  {
    address: '12459 Dolan Point Street, Las Vegas, NV 89138',
    neighborhood: 'Stonebridge',
    price: 899_900,
    listed: 'late October 2026',
    note: 'Listed by another brokerage; shown as a price reference only.',
  },
  {
    address: '897 Elmwood Forest Lane, Las Vegas, NV 89138',
    neighborhood: 'Heritage at Stonebridge',
    price: 529_000,
    beds: 2,
    baths: 2,
    sqft: 1_232,
    listed: 'November 2026',
    note: 'Listed by another brokerage; shown as a price reference only.',
  },
];

export type FloorPlan = {
  name: string;
  collection: 'Cromwell' | 'Stirling' | 'Evander';
  sqft: number;
  beds: string;
  baths: string;
  garage: string;
  note?: string;
};

/** Lennar's nine Heritage at Stonebridge plans, three collections. */
export const HERITAGE_PLANS: FloorPlan[] = [
  { name: 'Carson', collection: 'Cromwell', sqft: 1_232, beds: '2', baths: '2', garage: '2-car' },
  { name: 'Claremont', collection: 'Cromwell', sqft: 1_237, beds: '2', baths: '2', garage: '2-car', note: 'No model was built; 894 Heritage Bend Dr is a Claremont.' },
  { name: 'Connery', collection: 'Cromwell', sqft: 1_422, beds: '2', baths: '2', garage: '2-car' },
  { name: 'Stirling plan A', collection: 'Stirling', sqft: 1_747, beds: '2 to 3', baths: '2', garage: '2-car' },
  { name: 'Stirling plan B', collection: 'Stirling', sqft: 1_953, beds: '3', baths: '2', garage: '2-car' },
  { name: 'Sloan', collection: 'Stirling', sqft: 2_236, beds: '2', baths: '2', garage: '2-car' },
  { name: 'Everly', collection: 'Evander', sqft: 2_515, beds: '3 to 4', baths: '3', garage: '3-car', note: 'Includes a Next Gen suite with its own entrance and kitchenette.' },
  { name: 'Ethan', collection: 'Evander', sqft: 2_700, beds: '3 to 4', baths: '3', garage: '4-car' },
  { name: 'Elizabeth', collection: 'Evander', sqft: 2_873, beds: '4', baths: '3', garage: '4-car with 14-foot RV bay' },
];

export type Neighborhood = {
  slug: string;
  name: string;
  builder: string;
  type: string;
  gated: 'Guard gate' | 'Check listing';
  sizes: string;
  blurb: string;
};

export const NEIGHBORHOODS: Neighborhood[] = [
  { slug: 'heritage-at-stonebridge', name: 'Heritage at Stonebridge', builder: 'Lennar', type: 'Age-qualified 55+, single-story', gated: 'Guard gate', sizes: '1,232 to 2,873 sq ft', blurb: '421 single-story homes built 2021 to 2025 behind a staffed gate, with a private 8,000 sq ft clubhouse, two pools, pickleball, and bocce. The only guard-gated section of the village.' },
  { slug: 'caledonia', name: 'Caledonia', builder: 'KB Home', type: 'Single-family', gated: 'Check listing', sizes: 'Varies by plan', blurb: 'The first Stonebridge neighborhood to open, with sales starting in 2018. Resales here are among the village\'s lower price points.' },
  { slug: 'bristle-vale', name: 'Bristle Vale', builder: 'KB Home', type: 'Single-family', gated: 'Check listing', sizes: 'Varies by plan', blurb: 'KB Home\'s second Stonebridge neighborhood, with one- and two-story plans.' },
  { slug: 'westcott', name: 'Westcott', builder: 'Lennar', type: 'Single-family', gated: 'Check listing', sizes: 'Varies by plan', blurb: 'Lennar neighborhood sold with the builder\'s Everything\'s Included finish package.' },
  { slug: 'graycliff', name: 'Graycliff', builder: 'Lennar', type: 'Single-family', gated: 'Check listing', sizes: 'Varies by plan', blurb: 'Lennar\'s larger Stonebridge collection, also sold with Everything\'s Included finishes.' },
  { slug: 'foxtail', name: 'Foxtail', builder: 'Pulte', type: 'Single-family', gated: 'Check listing', sizes: 'Varies by plan', blurb: 'Pulte neighborhood in the village\'s interior.' },
  { slug: 'starling', name: 'Starling', builder: 'Pulte', type: 'Single-family', gated: 'Check listing', sizes: 'Varies by plan', blurb: 'Pulte\'s second Stonebridge neighborhood.' },
  { slug: 'bixby-creek', name: 'Bixby Creek', builder: 'Woodside Homes', type: 'Single-family', gated: 'Check listing', sizes: 'Varies by plan', blurb: 'Woodside Homes neighborhood with contemporary elevations.' },
  { slug: 'scots-pine', name: 'Scots Pine', builder: 'Richmond American', type: 'Single-family', gated: 'Check listing', sizes: 'Up to about 4,000 sq ft', blurb: 'Among the largest homes in Stonebridge. A 4,017 sq ft Scots Pine resale at 12439 Sky Bluff Ct listed at $2,787,750 in July 2026.' },
  { slug: 'skye-knoll', name: 'Skye Knoll', builder: 'Richmond American', type: 'Single-family', gated: 'Check listing', sizes: 'Varies by plan', blurb: 'Richmond American\'s second Stonebridge neighborhood.' },
  { slug: 'sandalwood', name: 'Sandalwood', builder: 'Verify on the listing', type: 'Single-family', gated: 'Check listing', sizes: 'Varies by plan', blurb: 'Pays the same $69 Summerlin West master assessment as Heritage, plus its own sub-association.' },
  { slug: 'toll-brothers-at-stonebridge', name: 'Toll Brothers collections', builder: 'Toll Brothers', type: 'Single-family', gated: 'Check listing', sizes: 'Up to about 4,500 sq ft', blurb: 'The village\'s premium collections on its elevated west side, nearest Red Rock Canyon.' },
];

export type Faq = { q: string; a: string };

export const SITE_FAQS: Faq[] = [
  { q: 'Where is Stonebridge in Las Vegas?', a: 'Stonebridge is a village of Summerlin West on the far west edge of Las Vegas, north of Charleston Boulevard near Sky Vista Drive and west of the 215 Beltway. The ZIP code is 89138. It sits on elevated ground about five minutes from Red Rock Canyon National Conservation Area.' },
  { q: 'How much do homes in Stonebridge Summerlin cost?', a: `Homes in Stonebridge sold for a median of $822,500 over the 12 months ending ${STONEBRIDGE_MARKET.asOf}, with a median list price of $944,440 and 32 active listings. Heritage at Stonebridge, the 55+ section, sold at a median of $568,000 over the same period. Individual homes range from about $500,000 to about $3 million.` },
  { q: 'Who built the homes in Stonebridge?', a: 'KB Home, Lennar, Pulte, Woodside Homes, Richmond American, Toll Brothers, Tri Pointe, and Pardee built the neighborhoods between 2018 and 2025. Lennar built Heritage at Stonebridge, the age-qualified 55+ section. The builders have finished, so homes for sale are resales.' },
  { q: 'What are the Stonebridge Summerlin floor plans?', a: 'Builder plans run from 1,232 square feet in Heritage at Stonebridge to about 4,500 square feet in the Toll Brothers and Richmond American collections. Heritage has nine single-story plans in three collections: Cromwell (1,232 to 1,422 sq ft), Stirling (1,747 to 2,236 sq ft), and Evander (2,515 to 2,873 sq ft).' },
  { q: 'What is at Stonebridge Park?', a: 'Stonebridge Park is about 11 acres at 870 Crossbridge Road. It opened in April 2021 with lighted soccer fields, a lighted basketball court, pickleball courts, a shaded playground, picnic pavilions, and an exercise area. It is open 6:00 AM to 11:00 PM daily and run by the Summerlin Council.' },
  { q: 'Is Stonebridge gated?', a: 'Not as one village. Heritage at Stonebridge has a staffed guard gate. Several other neighborhoods have an entry gate. The main roads, Stonebridge Park, and Doral Academy Red Rock are open to the public.' },
  { q: 'What are the HOA fees in Stonebridge?', a: 'Every home pays the Summerlin West Community Association, $69 a month in 2026. Most neighborhoods add a sub-association fee for their gate and landscaping. Heritage at Stonebridge adds $350 a month for the staffed gate and clubhouse, for $419 total as confirmed in August 2026. Ask for the resale package to confirm the figure for a specific address.' },
  { q: 'Which schools serve Stonebridge?', a: 'Doral Academy Red Rock, a public charter school, is inside the village on Crossbridge Drive. Clark County School District zoning for most Stonebridge addresses is Givens Elementary, Sig Rogich Middle, and Palo Verde High. Verify the zoning for any specific address with CCSD before you buy.' },
];
