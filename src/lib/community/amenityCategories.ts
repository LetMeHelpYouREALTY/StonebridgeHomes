export type AmenityCategoryId =
  | 'healthcare'
  | 'golf'
  | 'parks'
  | 'community'
  | 'grocery'
  | 'fitness'
  | 'restaurants'
  | 'cafes'
  | 'pharmacies'
  | 'shopping'
  | 'parking'
  | 'schools';

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Google Places (New) primary types for searchNearby */
  placeTypes: string[];
  /** Hide chip on map UI for 55+ sites */
  hiddenForActiveAdult?: boolean;
};

const ALL_CATEGORIES: AmenityCategory[] = [
  {
    id: 'healthcare',
    label: 'Healthcare',
    placeTypes: ['hospital', 'doctor'],
  },
  {
    id: 'golf',
    label: 'Golf',
    placeTypes: ['golf_course'],
  },
  {
    id: 'parks',
    label: 'Parks',
    placeTypes: ['park', 'national_park'],
  },
  {
    id: 'community',
    label: 'Recreation',
    placeTypes: ['community_center', 'sports_complex'],
  },
  {
    id: 'grocery',
    label: 'Grocery',
    placeTypes: ['grocery_store', 'supermarket'],
  },
  {
    id: 'fitness',
    label: 'Fitness',
    placeTypes: ['gym', 'fitness_center'],
  },
  {
    id: 'restaurants',
    label: 'Restaurants',
    placeTypes: ['restaurant'],
  },
  {
    id: 'cafes',
    label: 'Cafes',
    placeTypes: ['cafe', 'coffee_shop'],
  },
  {
    id: 'pharmacies',
    label: 'Pharmacies',
    placeTypes: ['pharmacy', 'drugstore'],
  },
  {
    id: 'shopping',
    label: 'Shopping',
    placeTypes: ['shopping_mall', 'department_store'],
  },
  {
    id: 'parking',
    label: 'Parking',
    placeTypes: ['parking'],
  },
  {
    id: 'schools',
    label: 'Schools',
    placeTypes: ['school', 'primary_school', 'secondary_school'],
    hiddenForActiveAdult: true,
  },
];

/** Active adult: healthcare & recreation first; schools de-emphasized (hidden on map filters). */
const ACTIVE_ADULT_ORDER: AmenityCategoryId[] = [
  'healthcare',
  'golf',
  'parks',
  'community',
  'grocery',
  'fitness',
  'restaurants',
  'cafes',
  'pharmacies',
  'shopping',
  'parking',
];

export function getAmenityCategories(
  communityType: 'active-adult-55' | 'standard' = 'standard'
): AmenityCategory[] {
  if (communityType === 'standard') {
    return ALL_CATEGORIES.filter((c) => !c.hiddenForActiveAdult);
  }

  const byId = new Map(ALL_CATEGORIES.map((c) => [c.id, c]));
  return ACTIVE_ADULT_ORDER.map((id) => byId.get(id)).filter((c): c is AmenityCategory =>
    Boolean(c)
  );
}

export function defaultCategoryId(
  communityType: 'active-adult-55' | 'standard' = 'standard'
): AmenityCategoryId {
  const cats = getAmenityCategories(communityType);
  return cats[0]?.id ?? 'restaurants';
}
