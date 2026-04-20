export default {
  data: ({ params }) => {
    // Mock property data - in a real app, this would fetch from a database
    const properties = {
      "hs-001": {
        id: "hs-001",
        address: "123 Heritage Way",
        price: 525000,
        bedrooms: 4,
        bathrooms: 3,
        squareFeet: 2450,
        lotSize: 0.25,
        yearBuilt: 2018,
        status: "Available",
        description: "Beautiful single-family home with stunning mountain views and modern finishes throughout. This spacious home features an open floor plan perfect for entertaining, with a gourmet kitchen boasting granite countertops and stainless steel appliances.",
        images: [
          "/images/homes/hs-001-1.jpg",
          "/images/homes/hs-001-2.jpg",
          "/images/homes/hs-001-3.jpg",
          "/images/homes/hs-001-4.jpg"
        ],
        features: [
          "Granite Countertops",
          "Stainless Steel Appliances", 
          "Hardwood Floors",
          "Gas Fireplace",
          "Master Suite with Walk-in Closet",
          "Attached 2-Car Garage",
          "Private Backyard",
          "Mountain Views",
          "Energy Efficient Windows",
          "Central Air Conditioning"
        ],
        amenities: [
          "Community Pool",
          "Fitness Center",
          "Walking Trails",
          "Gated Security"
        ],
        schoolDistrict: "Clark County School District",
        hoaFee: 185,
        propertyTax: 4200,
        utilities: {
          electric: "NV Energy",
          gas: "Southwest Gas",
          water: "Las Vegas Valley Water District",
          internet: "Cox Communications, CenturyLink"
        },
        virtualTour: "https://example.com/virtual-tour/hs-001",
        mapLocation: {
          lat: 36.1699,
          lng: -115.1398
        }
      },
      "hs-002": {
        id: "hs-002",
        address: "456 Stonebridge Dr",
        price: 485000,
        bedrooms: 3,
        bathrooms: 2.5,
        squareFeet: 2100,
        lotSize: 0.22,
        yearBuilt: 2017,
        status: "Available",
        description: "Charming townhome with open floor plan and private outdoor space. Perfect for first-time buyers or those looking to downsize without compromising on style and comfort.",
        images: [
          "/images/homes/hs-002-1.jpg",
          "/images/homes/hs-002-2.jpg",
          "/images/homes/hs-002-3.jpg"
        ],
        features: [
          "Updated Kitchen",
          "New Carpet",
          "Private Patio",
          "Attached Garage",
          "Open Floor Plan",
          "Vaulted Ceilings",
          "Laminate Flooring",
          "Ceiling Fans",
          "Window Coverings",
          "Laundry Room"
        ],
        amenities: [
          "Community Pool",
          "Clubhouse",
          "Playground",
          "Gated Security"
        ],
        schoolDistrict: "Clark County School District",
        hoaFee: 185,
        propertyTax: 3800,
        utilities: {
          electric: "NV Energy",
          gas: "Southwest Gas",
          water: "Las Vegas Valley Water District",
          internet: "Cox Communications, CenturyLink"
        },
        virtualTour: "https://example.com/virtual-tour/hs-002",
        mapLocation: {
          lat: 36.1699,
          lng: -115.1398
        }
      }
    };

    const property = properties[params.property] || null;
    
    if (!property) {
      return {
        notFound: true,
        property: null
      };
    }

    return {
      property: property,
      relatedProperties: Object.values(properties).filter(p => p.id !== property.id).slice(0, 3)
    };
  }
};
