import type { AmenityCategoryId } from './amenityCategories';

export type CuratedPlace = {
  id: string;
  name: string;
  category: AmenityCategoryId;
  address: string;
  schemaType: string;
  note?: string;
};

/** Verified names and street addresses only — used for fallback list & JSON-LD ItemList */
export const CURATED_PLACES: CuratedPlace[] = [
  {
    id: 'heritage-clubhouse',
    name: 'Heritage at Stonebridge Clubhouse',
    category: 'community',
    address: '930 Silverfir Ct, Las Vegas, NV 89138',
    schemaType: 'CommunityCenter',
    note: 'On-site clubhouse, pool, fitness, and pickleball for residents.',
  },
  {
    id: 'summerlin-hospital',
    name: 'Summerlin Hospital Medical Center',
    category: 'healthcare',
    address: '657 Town Center Dr, Las Vegas, NV 89144',
    schemaType: 'Hospital',
  },
  {
    id: 'centennial-hills-hospital',
    name: 'Centennial Hills Hospital Medical Center',
    category: 'healthcare',
    address: '6900 N Durango Dr, Las Vegas, NV 89149',
    schemaType: 'Hospital',
  },
  {
    id: 'angel-park-golf',
    name: 'Angel Park Golf Club',
    category: 'golf',
    address: '1001 Angel Park Dr, Las Vegas, NV 89145',
    schemaType: 'GolfCourse',
  },
  {
    id: 'tpc-summerlin',
    name: 'TPC Las Vegas',
    category: 'golf',
    address: '9851 Summit Canyon Dr, Las Vegas, NV 89148',
    schemaType: 'GolfCourse',
  },
  {
    id: 'red-rock-canyon',
    name: 'Red Rock Canyon National Conservation Area',
    category: 'parks',
    address: '3205 State Route 159, Las Vegas, NV 89161',
    schemaType: 'Park',
  },
  {
    id: 'downtown-summerlin',
    name: 'Downtown Summerlin',
    category: 'shopping',
    address: '1980 Festival Plaza Dr, Las Vegas, NV 89135',
    schemaType: 'ShoppingCenter',
  },
  {
    id: 'smiths-charleston',
    name: "Smith's Food and Drug",
    category: 'grocery',
    address: '9750 W Charleston Blvd, Las Vegas, NV 89117',
    schemaType: 'GroceryStore',
  },
  {
    id: 'whole-foods-summerlin',
    name: 'Whole Foods Market',
    category: 'grocery',
    address: '9260 W Charleston Blvd, Las Vegas, NV 89117',
    schemaType: 'GroceryStore',
  },
  {
    id: 'cvs-charleston',
    name: 'CVS Pharmacy',
    category: 'pharmacies',
    address: '9500 W Charleston Blvd, Las Vegas, NV 89117',
    schemaType: 'Pharmacy',
  },
  {
    id: 'lifetime-summerlin',
    name: 'Life Time',
    category: 'fitness',
    address: '10721 W Charleston Blvd, Las Vegas, NV 89135',
    schemaType: 'ExerciseGym',
  },
  {
    id: 'craftsteak-red-rock',
    name: 'Craftsteak',
    category: 'restaurants',
    address: '11011 Resort Vista Dr, Las Vegas, NV 89135',
    schemaType: 'Restaurant',
    note: 'At Red Rock Casino Resort & Spa.',
  },
  {
    id: 'harry-reid-airport',
    name: 'Harry Reid International Airport',
    category: 'parking',
    address: '5757 Wayne Newton Blvd, Las Vegas, NV 89119',
    schemaType: 'Airport',
    note: 'Regional air travel hub for Las Vegas.',
  },
];

export function curatedPlacesForCategory(category: AmenityCategoryId): CuratedPlace[] {
  return CURATED_PLACES.filter((p) => p.category === category);
}

export function directionsUrl(address: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
}
