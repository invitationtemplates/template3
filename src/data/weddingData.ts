export interface WeddingConfig {
  couple: {
    bride: string;
    groom: string;
    hashtag: string;
    announcement: string;
    ganeshMantra: string;
  };
  event: {
    date: string;
    displayDate: string;
    dayOfWeek: string;
    year: string;
    month: string;
    day: string;
    muhurat: string;
    targetTimestamp: number; // for countdown
    venueName: string;
    venueAddress: string;
    mapsUrl: string;
  };
  schedule: Array<{
    id: string;
    title: string;
    subtitle?: string;
    time: string;
    icon: 'ganesh' | 'ceremony' | 'varmala' | 'camera';
  }>;
  ourJourney: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    image: string;
  };
  gallery: Array<{
    id: string;
    src: string;
    title: string;
    alt: string;
  }>;
  dressCode: {
    title: string;
    type: string;
    description: string;
  };
  guestInfo: {
    title: string;
    message: string;
  };
  gifts: {
    title: string;
    message1: string;
    message2: string;
  };
  thankYou: {
    title: string;
    subtitle: string;
    coupleText: string;
    date: string;
  };
}

export const weddingData: WeddingConfig = {
  couple: {
    bride: "Gori",
    groom: "Shankar",
    hashtag: "#GoriWedsShankar",
    announcement: "WITH JOY IN OUR HEARTS WE INVITE YOU TO CELEBRATE THE WEDDING OF",
    ganeshMantra: "|| SHREE GANESHAY NAMAH ||"
  },
  event: {
    date: "2036-12-01",
    displayDate: "December 01, 2036",
    dayOfWeek: "Monday",
    year: "2036",
    month: "DECEMBER",
    day: "01",
    muhurat: "MUHURAT: 11:00 AM ONWARDS",
    // Target date set to Dec 1, 2036 11:00 AM
    targetTimestamp: new Date("2036-12-01T11:00:00").getTime(),
    venueName: "Wedding Venue",
    venueAddress: "Location details coming soon",
    mapsUrl: "https://maps.google.com/?q=Varanasi+Grand+Heritage+Palace"
  },
  schedule: [
    {
      id: "ganesh-puja",
      title: "Ganesh Puja",
      time: "To be confirmed",
      icon: "ganesh"
    },
    {
      id: "wedding-ceremony",
      title: "Wedding Ceremony / Pheras",
      time: "To be confirmed",
      icon: "ceremony"
    },
    {
      id: "varmala",
      title: "Varmala",
      time: "10:30 AM onwards",
      icon: "varmala"
    },
    {
      id: "blessings",
      title: "Blessings & Family Photos",
      time: "To be confirmed",
      icon: "camera"
    }
  ],
  ourJourney: {
    title: "OUR JOURNEY",
    paragraph1: "Two souls, guided by faith, brought together by destiny, and blessed by the divine.",
    paragraph2: "As we begin this new chapter, we seek your love, blessings and presence to make our journey more meaningful.",
    image: "/images/our-journey.jpg"
  },
  gallery: [
    {
      id: "rings",
      src: "/images/gallery-rings.jpg",
      title: "Sacred Rings",
      alt: "Wedding rings resting on velvet red rose petals"
    },
    {
      id: "mandap",
      src: "/images/gallery-mandap.jpg",
      title: "Mandap Decor",
      alt: "Traditional marigold and jasmine wedding mandap decoration"
    },
    {
      id: "garland",
      src: "/images/gallery-garland.jpg",
      title: "Floral Elegance",
      alt: "Fresh red roses and tuberose wedding garland"
    },
    {
      id: "diya",
      src: "/images/gallery-diya.jpg",
      title: "Auspicious Diya",
      alt: "Traditional brass diya oil lamp glowing warmly"
    }
  ],
  dressCode: {
    title: "DRESS CODE",
    type: "Traditional / Formal",
    description: "(Saree, Dhoti, Sherwani, Kurta etc.)"
  },
  guestInfo: {
    title: "GUEST INFORMATION",
    message: "Kindly arrive on time and be a part of our special day."
  },
  gifts: {
    title: "GIFTS & BLESSINGS",
    message1: "Your blessings are the greatest gift.",
    message2: "If you wish to give a gift, a contribution towards our future together would be deeply appreciated."
  },
  thankYou: {
    title: "Thank You",
    subtitle: "for being a part of our special day!",
    coupleText: "Gori weds Shankar",
    date: "December 01, 2036"
  }
};
