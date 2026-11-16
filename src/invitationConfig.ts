import type { WeddingEvent } from "./invitation/schema";

const maps = (address: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
const weddingVenue = { name: "Kotada Jadodar", address: "Kutch, Gujarat" };
const weddingMap = maps("Kotada Jadodar, Kutch, Gujarat");
const groomParents = "S/O Mohanlal Suthar and Jasodaben Suthar";
const brideParents = "D/O Bhavanjibhai Suthar and Bhartiben Suthar";

export const invitationConfig = {
  couple: {
    first: "Jitesh",
    second: "Twinkle",
    brideParents,
    groomParents,
    groomGrandparents: "",
  },
  countdownTarget: "2026-12-14T00:00:00+05:30",
  memorialLine: "With heavenly blessings and in loving memory of our beloved grandparents, Late Pragji Bhimji Suthar and Late Sakarben Pragji Suthar.",
  memorialNames: ["Late Pragji Bhimji Suthar", "Late Sakarben Pragji Suthar"],
  invitationLine: "With the blessings of our loved ones, we are delighted to invite you to the wedding of Jitesh and Twinkle.",
  blessingLine: "Two hearts, one journey, bound by love and forever. Your presence and blessings will make our celebration complete.",
  homeAddress: "Kutch, Gujarat",
  hosts: "Waghmar Family",
  rsvp: "Mohanlal Suthar and the Waghmar Family",
  wishesFrom: "Waghmar Family, relatives and friends",
  artwork: "/assets/wedding-floral-arch-v2.webp",
  venue: { ...weddingVenue, mapUrl: weddingMap },
  contacts: ["+91 91046 31580", "+91 99794 31580"],
  contactNames: ["Dineshbhai Pragji Suthar", "Ishwarbhai Pragji Suthar"],
  optional: { travel: "", stay: "", contact: "", musicUrl: "/assets/kudmayi.mp3", whatsappHostNumber: "" },
  celebrations: [
    {
      id: "engagement", shortName: "Engagement", title: "Engagement — The beginning of forever",
      start: "2026-12-12T10:00:00+05:30",
      venue: "Kotada Jadodar", address: "Kutch, Gujarat", mapUrl: weddingMap,
      supportingLine: "Join our families as Jitesh and Twinkle exchange rings and begin a beautiful journey together.",
      image: "/assets/gujarati-engagement-filler-v1.png", scene: "lanterns", phereTime: "",
    },
    {
      id: "sangeet", shortName: "Sangeet Night", title: "Sangeet Night — An evening of music and joy",
      start: "2026-12-13T20:00:00+05:30",
      venue: "Ludva", address: "Kutch, Gujarat", mapUrl: maps("Ludva, Kutch, Gujarat"),
      supportingLine: "An evening of music, dancing and laughter with the people we love.",
      image: "/assets/gujarati-sangeet-filler-v1.png", scene: "lanterns", phereTime: "",
    },
    {
      id: "mandvo-mameru", shortName: "Mandvo and Mameru", title: "Mandvo and Mameru — A morning of cherished traditions",
      start: "2026-12-14T08:00:00+05:30",
      venue: "Ludva", address: "Kutch, Gujarat", mapUrl: maps("Ludva, Kutch, Gujarat"),
      supportingLine: "Gather with the Waghmar Family for Mandvo and Mameru, with love and blessings for the couple.",
      image: "/assets/gujarati-mandvo-mameru-filler-v1.png", scene: "candlelight", phereTime: "",
    },
    {
      id: "wedding", shortName: "Wedding", title: "Wedding — A promise of forever",
      start: "2026-12-14T23:15:00+05:30",
      venue: weddingVenue.name, address: weddingVenue.address, mapUrl: weddingMap,
      supportingLine: "Sacred vows, two hearts and the blessings of everyone who brought us here.",
      image: "/assets/wedding-floral-arch-v2.webp", scene: "fire", phereTime: "",
    },
  ] satisfies WeddingEvent[],
} as const;
