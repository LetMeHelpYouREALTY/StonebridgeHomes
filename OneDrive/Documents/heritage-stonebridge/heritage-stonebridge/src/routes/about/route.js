module.exports = {
  all: () => [{ slug: 'about' }],
  permalink: '/about',
  data: ({ request }) => {
    return {
      pageTitle: 'About Heritage at Stonebridge',
      community: {
        name: "Heritage at Stonebridge",
        location: "Summerlin, Las Vegas, Nevada",
        established: "2015",
        totalHomes: 847,
        description: "Heritage at Stonebridge is a premier gated community in the heart of Summerlin, offering luxury living with stunning mountain and valley views. This luxury neighborhood combines modern amenities with the natural beauty of the Las Vegas landscape.",
        vision: "To provide residents with an unparalleled lifestyle that seamlessly blends luxury, comfort, and convenience in one of Las Vegas's most prestigious master-planned communities."
      },
      history: {
        title: "Our Story",
        content: [
          "Heritage at Stonebridge was developed as part of Summerlin's expansion, designed to offer luxury living in a master-planned community setting. The development began in 2015 with a vision to create a luxury neighborhood that would attract discerning homebuyers seeking both privacy and community.",
          "The community was carefully planned to take advantage of the stunning natural landscape, with homes positioned to maximize views of the Spring Mountains and Las Vegas Valley. Each home was designed with attention to detail and modern luxury in mind.",
          "Today, Heritage at Stonebridge stands as one of Summerlin's most sought-after communities, with residents enjoying the perfect balance of privacy, luxury, and access to world-class amenities."
        ]
      },
      amenities: [
        {
          title: "Resort-Style Pool & Spa",
          description: "Luxurious pool area with spa, perfect for relaxation and entertaining",
          icon: "🏊‍♀️"
        },
        {
          title: "Championship Golf Course",
          description: "Access to world-class golf courses designed by renowned architects",
          icon: "⛳"
        },
        {
          title: "Fitness Center",
          description: "State-of-the-art fitness facilities with personal training available",
          icon: "💪"
        },
        {
          title: "Tennis Courts",
          description: "Professional tennis courts for residents and guests",
          icon: "🎾"
        },
        {
          title: "Gated Security",
          description: "24/7 security with controlled access for peace of mind",
          icon: "🔒"
        },
        {
          title: "Walking Trails",
          description: "Scenic walking trails throughout the community",
          icon: "🚶‍♀️"
        },
        {
          title: "Parks & Recreation",
          description: "Beautiful parks and recreational areas for families",
          icon: "🌳"
        },
        {
          title: "Community Clubhouse",
          description: "Elegant clubhouse for events and community gatherings",
          icon: "🏛️"
        }
      ],
      location: {
        title: "Prime Location in Summerlin",
        description: "Heritage at Stonebridge is strategically located in the heart of Summerlin, one of Las Vegas's most prestigious master-planned communities.",
        highlights: [
          "Minutes from world-class shopping and dining",
          "Easy access to major highways and airports",
          "Close to public schools and universities",
          "Nearby entertainment and cultural attractions",
          "Proximity to Red Rock Canyon National Conservation Area",
          "Convenient access to Las Vegas Strip and downtown"
        ],
        nearbyAttractions: [
          "Red Rock Casino Resort & Spa",
          "Summerlin Centre",
          "Downtown Summerlin",
          "Red Rock Canyon National Conservation Area",
          "Las Vegas Strip (15 minutes)",
          "McCarran International Airport (20 minutes)"
        ]
      },
      schools: {
        title: "Nearby Public Schools",
        description: "Families in Heritage at Stonebridge have access to some of the public schools in the Las Vegas area.",
        elementary: [
          "John C. Vanderburg Elementary School",
          "Eldorado High School (K-12)",
          "The Meadows School"
        ],
        middle: [
          "Sig Rogich Middle School",
          "Eldorado High School (K-12)"
        ],
        high: [
          "Palo Verde High School",
          "The Meadows School",
          "Bishop Gorman High School"
        ],
        universities: [
          "University of Nevada, Las Vegas (UNLV)",
          "Nevada State College",
          "College of Southern Nevada"
        ]
      },
      lifestyle: {
        title: "The Heritage at Stonebridge Lifestyle",
        description: "Living in Heritage at Stonebridge means enjoying a lifestyle that combines luxury, convenience, and community.",
        features: [
          "Gated community with 24/7 security",
          "Luxury homes with modern amenities",
          "Access to world-class recreational facilities",
          "Close-knit community with regular events",
          "Professional property management",
          "Pet-friendly environment",
          "Resort-style living experience"
        ]
      }
    };
  }
};
