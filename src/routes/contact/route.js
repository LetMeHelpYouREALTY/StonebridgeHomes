export default {
  data: () => {
    return {
      contactInfo: {
        agentName: "Dr. Jan Duffy",
        title: "Real Estate Professional",
        phone: "(702) 555-0123",
        email: "jan.duffy@heritagestonebridge.com",
        office: "Heritage Stonebridge Realty",
        license: "NV RE License #12345"
      },
      officeHours: [
        { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
        { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
        { day: "Sunday", hours: "By Appointment" }
      ],
      services: [
        "Home Buying & Selling",
        "Market Analysis & Pricing",
        "Property Valuation",
        "Negotiation & Contracts",
        "Transaction Management",
        "Investment Property Consultation"
      ],
      testimonials: [
        {
          name: "Sarah & Michael Johnson",
          text: "Jan helped us find our dream home in Heritage Stonebridge. Her knowledge of the area and attention to detail made the entire process smooth and stress-free.",
          rating: 5
        },
        {
          name: "David Chen",
          text: "Professional, responsive, and incredibly knowledgeable about the Summerlin market. Jan sold our home quickly and for a great price.",
          rating: 5
        },
        {
          name: "Lisa Rodriguez",
          text: "Jan's expertise in the Heritage Stonebridge community is unmatched. She guided us through every step of the buying process with patience and professionalism.",
          rating: 5
        }
      ]
    };
  }
};
