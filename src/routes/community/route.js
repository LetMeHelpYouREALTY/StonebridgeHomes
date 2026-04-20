export default {
  data: () => {
    return {
      community: {
        name: "Heritage at Stonebridge",
        location: "Summerlin, Las Vegas, NV",
        description: "A premier gated community offering luxury homes with stunning mountain and valley views in the heart of Summerlin.",
        yearBuilt: "2015-2020",
        totalHomes: 287,
        homeTypes: ["Single Family", "Townhomes"],
        priceRange: "$400,000 - $800,000"
      },
      amenities: [
        {
          name: "Community Pool & Spa",
          description: "Resort-style swimming pool with spa and cabana area",
          icon: "🏊‍♀️"
        },
        {
          name: "Fitness Center",
          description: "State-of-the-art fitness facility with cardio and weight equipment",
          icon: "💪"
        },
        {
          name: "Clubhouse",
          description: "Beautiful clubhouse perfect for community events and gatherings",
          icon: "🏛️"
        },
        {
          name: "Walking Trails",
          description: "Scenic walking trails throughout the community",
          icon: "🥾"
        },
        {
          name: "Playground",
          description: "Children's playground with modern equipment",
          icon: "🛝"
        },
        {
          name: "Gated Security",
          description: "24/7 gated security with controlled access",
          icon: "🔒"
        }
      ],
      hoa: {
        monthlyFee: "$185",
        includes: [
          "Landscaping & maintenance",
          "Community pool & spa",
          "Fitness center access",
          "Security services",
          "Common area utilities"
        ]
      },
      lifestyle: {
        demographics: "Families, professionals, and retirees",
        petFriendly: true,
        schools: "Excellent-rated schools in the Clark County School District",
        shopping: "5 minutes to Downtown Summerlin",
        dining: "Diverse dining options within 10 minutes",
        recreation: "Close to Red Rock Canyon and multiple golf courses"
      }
    };
  }
};
