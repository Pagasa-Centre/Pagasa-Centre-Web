import { DivideIcon as LucideIcon, Music, Camera, Heart, Baby, Palette, BookOpen, Mic2, Truck } from 'lucide-react';

export type Ministry = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  image: string;
  time: string;
  day: string;
  leader: {
    name: string;
    image: string;
  };
  location: string;
  activities?: string[];
};

export const ministries: Ministry[] = [
  {
    slug: 'worship',
    title: "WORSHIP MINISTRY",
    shortDescription: "Leading our congregation in worship through music and song, creating an atmosphere of praise and devotion.",
    fullDescription: "The Worship Ministry is dedicated to leading our congregation in heartfelt worship through music and song. We believe in creating an atmosphere where people can encounter God's presence through worship.",
    icon: Music,
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
    time: "1:00 PM",
    day: "SUNDAY",
    leader: {
      name: "Ptr. John Smith",
      image: "/leaders/john-smith.jpg"
    },
    location: "Jo Richardson Community School",
    activities: [
      "Vocal Training",
      "Musical Instruments",
      "Sound Engineering",
      "Worship Leading"
    ]
  },
  {
    slug: 'media',
    title: "MEDIA MINISTRY",
    shortDescription: "Utilizing technology and creative media to spread the Gospel and enhance our worship experience.",
    fullDescription: "The Media Ministry is the Church's evangelistic extension that focuses on using media to spread the word of God. The technical assistance needed for our worship services, archived teachings, sermon messages, and other events will be taught. You will have the chance to use various forms of technology, media outlets, and social media platforms to effectively share the Good News of Jesus Christ with people all over the world if you choose to serve in the team!",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    time: "2:00 PM",
    day: "SUNDAY",
    leader: {
      name: "Gian Ambat",
      image: "/leaders/gian-ambat.jpg"
    },
    location: "Jo Richardson Community School",
    activities: [
      "Photography",
      "Videography",
      "Editing",
      "Projection"
    ]
  },
  {
    slug: 'production',
    title: "PRODUCTION TEAM",
    shortDescription: "The Production ministry is responsible for transporting, assembling and storing the church's assets",
    fullDescription: "Our Production Team is the backbone of our church services, handling all technical aspects and equipment setup to ensure smooth worship experiences.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1523803326055-13445f07d885",
    time: "2:00 PM",
    day: "SUNDAY",
    leader: {
      name: "Mark Wilson",
      image: "/leaders/mark-wilson.jpg"
    },
    location: "Jo Richardson Community School",
    activities: [
      "Equipment Setup",
      "Sound System Management",
      "Lighting Control",
      "Stage Management"
    ]
  },
  {
    slug: 'children',
    title: "CHILDREN'S MINISTRY",
    shortDescription: "Nurturing the spiritual growth and helping the next generation discover the love of Jesus Christ.",
    fullDescription: "Our Children's Ministry is dedicated to nurturing young hearts in their spiritual journey, teaching biblical truths through engaging activities and creative learning methods.",
    icon: Baby,
    image: "https://images.unsplash.com/photo-1544749458-8d1d781c6b90",
    time: "3:00 PM",
    day: "SUNDAY",
    leader: {
      name: "Emily Davis",
      image: "/leaders/emily-davis.jpg"
    },
    location: "Jo Richardson Community School",
    activities: [
      "Bible Stories",
      "Worship Songs",
      "Arts and Crafts",
      "Group Activities"
    ]
  }
];

export function getMinistryBySlug(slug: string): Ministry | undefined {
  return ministries.find((ministry) => ministry.slug === slug);
}

export function getRelatedMinistries(currentSlug: string, count: number = 3): Ministry[] {
  return ministries
    .filter((ministry) => ministry.slug !== currentSlug)
    .slice(0, count);
}

export function getAllMinistries(): Ministry[] {
  return ministries;
}