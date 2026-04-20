export default {
  data: () => {
    return {
      soldProperties: [
        {
          id: "hs-sold-001",
          address: "100 Heritage Way",
          soldPrice: 495000,
          originalPrice: 525000,
          soldDate: "2024-01-15",
          daysOnMarket: 45,
          bedrooms: 4,
          bathrooms: 3,
          squareFeet: 2450,
          yearBuilt: 2018,
          images: ["/images/sold/hs-sold-001.jpg"],
          features: ["Granite Countertops", "Stainless Appliances", "Hardwood Floors"]
        },
        {
          id: "hs-sold-002",
          address: "200 Stonebridge Dr",
          soldPrice: 465000,
          originalPrice: 485000,
          soldDate: "2024-01-08",
          daysOnMarket: 32,
          bedrooms: 3,
          bathrooms: 2.5,
          squareFeet: 2100,
          yearBuilt: 2017,
          images: ["/images/sold/hs-sold-002.jpg"],
          features: ["Updated Kitchen", "New Carpet", "Private Patio"]
        },
        {
          id: "hs-sold-003",
          address: "300 Heritage Lane",
          soldPrice: 635000,
          originalPrice: 675000,
          soldDate: "2023-12-20",
          daysOnMarket: 67,
          bedrooms: 5,
          bathrooms: 4,
          squareFeet: 3200,
          yearBuilt: 2019,
          images: ["/images/sold/hs-sold-003.jpg"],
          features: ["Master Suite", "Walk-in Closets", "Formal Dining"]
        },
        {
          id: "hs-sold-004",
          address: "400 Stonebridge Ave",
          soldPrice: 425000,
          originalPrice: 445000,
          soldDate: "2023-12-10",
          daysOnMarket: 28,
          bedrooms: 3,
          bathrooms: 2,
          squareFeet: 1850,
          yearBuilt: 2016,
          images: ["/images/sold/hs-sold-004.jpg"],
          features: ["Open Concept", "Island Kitchen", "Covered Patio"]
        },
        {
          id: "hs-sold-005",
          address: "500 Heritage Blvd",
          soldPrice: 585000,
          originalPrice: 615000,
          soldDate: "2023-11-28",
          daysOnMarket: 52,
          bedrooms: 4,
          bathrooms: 3.5,
          squareFeet: 2750,
          yearBuilt: 2020,
          images: ["/images/sold/hs-sold-005.jpg"],
          features: ["Premium Finishes", "Smart Home", "Mountain Views"]
        },
        {
          id: "hs-sold-006",
          address: "600 Stonebridge Ct",
          soldPrice: 445000,
          originalPrice: 475000,
          soldDate: "2023-11-15",
          daysOnMarket: 41,
          bedrooms: 3,
          bathrooms: 2,
          squareFeet: 1950,
          yearBuilt: 2017,
          images: ["/images/sold/hs-sold-006.jpg"],
          features: ["Energy Efficient", "Low Maintenance", "Great Location"]
        }
      ],
      marketTrends: {
        averageSoldPrice: 508333,
        averageDaysOnMarket: 44,
        averagePricePerSqFt: 201,
        totalSoldLastYear: 24,
        priceAppreciation: 8.5,
        marketActivity: "Active"
      },
      recentActivity: [
        {
          date: "2024-01-15",
          type: "Sale",
          address: "100 Heritage Way",
          price: 495000
        },
        {
          date: "2024-01-08", 
          type: "Sale",
          address: "200 Stonebridge Dr",
          price: 465000
        },
        {
          date: "2024-01-05",
          type: "Listing",
          address: "123 Heritage Way",
          price: 525000
        },
        {
          date: "2023-12-20",
          type: "Sale",
          address: "300 Heritage Lane",
          price: 635000
        }
      ]
    };
  }
};
