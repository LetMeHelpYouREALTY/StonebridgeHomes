export default {
  data: () => {
    return {
      marketData: {
        currentMonth: "January 2024",
        totalListings: 12,
        newListings: 3,
        pendingSales: 8,
        closedSales: 24,
        averageDaysOnMarket: 44,
        averageListPrice: 525000,
        averageSoldPrice: 508333,
        listToSaleRatio: 96.8,
        monthsOfInventory: 1.5
      },
      priceStatistics: {
        averagePricePerSqFt: 201,
        medianPrice: 495000,
        highestPrice: 675000,
        lowestPrice: 425000,
        priceRange: {
          under400k: 0,
          "400k-500k": 8,
          "500k-600k": 12,
          "600k-700k": 6,
          over700k: 2
        }
      },
      marketTrends: [
        {
          month: "Jan 2024",
          averagePrice: 508333,
          sales: 24,
          newListings: 3,
          inventory: 12
        },
        {
          month: "Dec 2023", 
          averagePrice: 495000,
          sales: 18,
          newListings: 5,
          inventory: 15
        },
        {
          month: "Nov 2023",
          averagePrice: 485000,
          sales: 22,
          newListings: 4,
          inventory: 18
        },
        {
          month: "Oct 2023",
          averagePrice: 472000,
          sales: 20,
          newListings: 6,
          inventory: 20
        },
        {
          month: "Sep 2023",
          averagePrice: 465000,
          sales: 19,
          newListings: 7,
          inventory: 22
        },
        {
          month: "Aug 2023",
          averagePrice: 458000,
          sales: 21,
          newListings: 5,
          inventory: 19
        }
      ],
      neighborhoodComparison: [
        {
          neighborhood: "Heritage Stonebridge",
          averagePrice: 508333,
          priceChange: "+8.5%",
          daysOnMarket: 44,
          salesVolume: 24
        },
        {
          neighborhood: "Summerlin North",
          averagePrice: 485000,
          priceChange: "+6.2%",
          daysOnMarket: 52,
          salesVolume: 18
        },
        {
          neighborhood: "The Lakes",
          averagePrice: 425000,
          priceChange: "+4.8%",
          daysOnMarket: 58,
          salesVolume: 15
        },
        {
          neighborhood: "The Trails",
          averagePrice: 565000,
          priceChange: "+7.1%",
          daysOnMarket: 41,
          salesVolume: 12
        }
      ],
      marketInsights: [
        {
          title: "Strong Seller's Market",
          description: "With only 1.5 months of inventory, Heritage Stonebridge remains a strong seller's market with properties selling quickly.",
          impact: "High"
        },
        {
          title: "Price Appreciation",
          description: "Home values have increased 8.5% year-over-year, outpacing the broader Summerlin market.",
          impact: "Positive"
        },
        {
          title: "High Demand",
          description: "Properties are selling at 96.8% of asking price on average, indicating strong buyer demand.",
          impact: "High"
        },
        {
          title: "Limited Inventory",
          description: "Low inventory levels continue to drive competition among buyers and support price growth.",
          impact: "Neutral"
        }
      ]
    };
  }
};
