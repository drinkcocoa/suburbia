import { BoardCustomizerData } from "@/types";

export const customizerData: BoardCustomizerData = {
  wheels: [
    {
      uid: "white-wheels",
      texture: { url: "/skateboard/SkateWheel1.png", alt: "White wheels" },
    },
    {
      uid: "black-wheels",
      texture: { url: "/skateboard/SkateWheel1.png", alt: "Black wheels" },
    },
    {
      uid: "red-wheels",
      texture: { url: "/skateboard/SkateWheel1.png", alt: "Red wheels" },
    },
  ],
  decks: [
    {
      uid: "classic-deck",
      texture: { url: "/skateboard/Deck.webp", alt: "Classic deck" },
    },
    {
      uid: "urban-deck",
      texture: { url: "/skateboard/Deck.webp", alt: "Urban deck" },
    },
    {
      uid: "graffiti-deck",
      texture: { url: "/skateboard/Deck.webp", alt: "Graffiti deck" },
    },
  ],
  metals: [
    { uid: "silver", color: "#C0C0C0" },
    { uid: "gold", color: "#FFD700" },
    { uid: "black", color: "#1a1a1a" },
    { uid: "chrome", color: "#6F6E6A" },
  ],
};
