export default {
  data: () => {
    return {
      availableHomes: [
        {
          id: "hs-001",
          address: "123 Heritage Way",
          price: 525000,
          bedrooms: 4,
          bathrooms: 3,
          squareFeet: 2450,
          lotSize: 0.25,
          yearBuilt: 2018,
          status: "Available",
          images: ["/images/homes/hs-001-1.jpg", "/images/homes/hs-001-2.jpg"],
          features: ["Granite Countertops", "Stainless Appliances", "Hardwood Floors", "Fireplace"],
          description: "Beautiful single-family home with mountain views and modern finishes throughout."
        },
        {
          id: "hs-002", 
          address: "456 Stonebridge Dr",
          price: 485000,
          bedrooms: 3,
          bathrooms: 2.5,
          squareFeet: 2100,
          lotSize: 0.22,
          yearBuilt: 2017,
          status: "Available",
          images: ["/images/homes/hs-002-1.jpg", "/images/homes/hs-002-2.jpg"],
          features: ["Updated Kitchen", "New Carpet", "Private Patio", "Attached Garage"],
          description: "Charming townhome with open floor plan and private outdoor space."
        },
        {
          id: "hs-003",
          address: "789 Heritage Lane",
          price: 675000,
          bedrooms: 5,
          bathrooms: 4,
          squareFeet: 3200,
          lotSize: 0.35,
          yearBuilt: 2019,
          status: "Available",
          images: ["/images/homes/hs-003-1.jpg", "/images/homes/hs-003-2.jpg"],
          features: ["Master Suite", "Walk-in Closets", "Formal Dining", "Bonus Room"],
          description: "Spacious family home with premium upgrades and stunning valley views."
        },
        {
          id: "hs-004",
          address: "321 Stonebridge Ave",
          price: 445000,
          bedrooms: 3,
          bathrooms: 2,
          squareFeet: 1850,
          lotSize: 0.18,
          yearBuilt: 2016,
          status: "Available",
          images: ["/images/homes/hs-004-1.jpg", "/images/homes/hs-004-2.jpg"],
          features: ["Open Concept", "Island Kitchen", "Covered Patio", "Energy Efficient"],
          description: "Modern townhome perfect for first-time buyers or downsizing."
        }
      ],
      filters: {
        priceRange: {
          min: 400000,
          max: 800000
        },
        bedrooms: [1, 2, 3, 4, 5],
        bathrooms: [1, 1.5, 2, 2.5, 3, 3.5, 4],
        homeTypes: ["Single Family", "Townhome"],
        features: [
          "Fireplace",
          "Hardwood Floors", 
          "Granite Countertops",
          "Stainless Appliances",
          "Master Suite",
          "Walk-in Closets",
          "Attached Garage",
          "Private Patio"
        ]
      },
      sortOptions: [
        { value: "price-low", label: "Price: Low to High" },
        { value: "price-high", label: "Price: High to Low" },
        { value: "size-large", label: "Size: Largest First" },
        { value: "newest", label: "Newest First" }
      ]
    };
  }
};
