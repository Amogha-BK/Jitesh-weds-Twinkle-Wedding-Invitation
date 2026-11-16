import { invitationConfig as original } from "../invitationConfig";
import type { WeddingRecord } from "./schema";

/** Adapt the invitation details to the shared template. */
export const customerRecord: WeddingRecord = {
  version: 1,
  templateId: "botanical",
  language: "en",
  weddingDate: original.countdownTarget.slice(0, 10),
  city: "Kutch",
  scratchLocation: "Kotada Jadodar, Kutch",
  couple: { ...original.couple },
  countdownTarget: original.countdownTarget,
  memorialLine: original.memorialLine,
  memorialNames: [...original.memorialNames],
  invitationLine: original.invitationLine,
  blessingLine: original.blessingLine,
  homeAddress: original.homeAddress,
  hosts: original.hosts,
  rsvp: original.rsvp,
  wishesFrom: original.wishesFrom,
  venue: { ...original.venue },
  contacts: [...original.contacts],
  contactNames: [...original.contactNames],
  optional: { ...original.optional },
  media: {
    portraitUrl: "/assets/couple-illustration-v1.png",
    portraitAlt: "An illustrated couple in a teal lehenga and navy sherwani, standing together",
    venueArtworkUrl: original.artwork,
  },
  wording: {
    devotionalLine: "॥ जय मालन माँ ॥",
    heroMessage: "Two hearts, one journey, bound by love and forever.",
    heroFootnote: "Your presence and blessings mean the world to us.",
    celebrationsIntro: "Three days of cherished traditions, music and joy. Join the Waghmar Family as we celebrate Jitesh and Twinkle.",
    closingNote: "Our celebration is complete with you.",
  },
  celebrations: original.celebrations.map((event) => ({ ...event, phereTime: "" })),
};
