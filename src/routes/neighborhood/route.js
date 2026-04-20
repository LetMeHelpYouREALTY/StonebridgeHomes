export default {
  data: () => {
    return {
      neighborhood: {
        name: "Summerlin",
        location: "Las Vegas, Nevada",
        description: "A master-planned community featuring world-class amenities, top-rated schools, and premier shopping and dining destinations.",
        established: "1990",
        population: "100,000+",
        size: "22,500 acres"
      },
      schools: [
        {
          name: "Palo Verde High School",
          type: "High School",
          rating: "A+",
          distance: "2.1 miles",
          description: "Top-rated high school with excellent academic programs and extracurricular activities"
        },
        {
          name: "Rogich Middle School", 
          type: "Middle School",
          rating: "A",
          distance: "1.8 miles",
          description: "Highly rated middle school with strong STEM programs"
        },
        {
          name: "Cox Elementary School",
          type: "Elementary School", 
          rating: "A",
          distance: "1.2 miles",
          description: "Excellent elementary school with dedicated teachers and modern facilities"
        },
        {
          name: "The Meadows School",
          type: "Private K-12",
          rating: "A+",
          distance: "3.5 miles",
          description: "Premier private school with rigorous academic curriculum"
        }
      ],
      shopping: [
        {
          name: "Downtown Summerlin",
          type: "Shopping Center",
          distance: "5 minutes",
          description: "Premier shopping destination with 125+ stores, restaurants, and entertainment",
          highlights: ["Nordstrom", "Macy's", "Apple Store", "AMC Theatres"]
        },
        {
          name: "Red Rock Casino Resort",
          type: "Casino & Entertainment",
          distance: "3 minutes", 
          description: "Luxury casino resort with dining, entertainment, and shopping",
          highlights: ["Casino", "Spa", "Multiple Restaurants", "Entertainment Venues"]
        },
        {
          name: "Trader Joe's",
          type: "Grocery",
          distance: "4 minutes",
          description: "Popular specialty grocery store with organic and gourmet products"
        },
        {
          name: "Whole Foods Market",
          type: "Grocery",
          distance: "6 minutes",
          description: "Premium grocery store with organic and natural products"
        }
      ],
      dining: [
        {
          name: "Craftsteak",
          type: "Fine Dining",
          cuisine: "Steakhouse",
          distance: "3 minutes",
          rating: "4.5",
          description: "Award-winning steakhouse at Red Rock Casino"
        },
        {
          name: "Brio Tuscan Grille",
          type: "Casual Fine Dining",
          cuisine: "Italian",
          distance: "5 minutes", 
          rating: "4.2",
          description: "Authentic Italian cuisine in a warm, inviting atmosphere"
        },
        {
          name: "The Cheesecake Factory",
          type: "Family Dining",
          cuisine: "American",
          distance: "5 minutes",
          rating: "4.0",
          description: "Extensive menu with signature cheesecakes"
        },
        {
          name: "Shake Shack",
          type: "Casual",
          cuisine: "American",
          distance: "5 minutes",
          rating: "4.3",
          description: "Popular burger chain with premium ingredients"
        }
      ],
      recreation: [
        {
          name: "Red Rock Canyon National Conservation Area",
          type: "National Park",
          distance: "15 minutes",
          description: "Stunning red rock formations, hiking trails, and scenic drives",
          activities: ["Hiking", "Rock Climbing", "Scenic Drives", "Photography"]
        },
        {
          name: "TPC Summerlin Golf Course",
          type: "Golf Course", 
          distance: "8 minutes",
          description: "Championship golf course designed by Bobby Weed",
          activities: ["Golf", "Tournaments", "Lessons", "Dining"]
        },
        {
          name: "Angel Park Golf Club",
          type: "Golf Course",
          distance: "6 minutes", 
          description: "Two championship courses with beautiful mountain views",
          activities: ["Golf", "Practice Range", "Pro Shop", "Restaurant"]
        },
        {
          name: "Summerlin Skate Park",
          type: "Skate Park",
          distance: "10 minutes",
          description: "Modern skate park with ramps, rails, and bowls"
        }
      ],
      transportation: {
        airport: "Harry Reid International Airport - 25 minutes",
        strip: "Las Vegas Strip - 20 minutes", 
        downtown: "Downtown Las Vegas - 25 minutes",
        majorHighways: ["I-215 Beltway", "US-95", "Charleston Boulevard"]
      }
    };
  }
};
