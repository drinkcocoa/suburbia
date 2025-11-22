import { SkaterData } from "@/types";

export const skaters: SkaterData[] = [
  {
    id: "skater-1",
    uid: "tony-hawk",
    first_name: "Tony",
    last_name: "Hawk",
    photo_background: {
      url: "/skaters/skater-bg-1.jpg",
      alt: "Tony Hawk background",
    },
    photo_foreground: {
      url: "/skaters/skater-fg-1.png",
      alt: "Tony Hawk",
    },
    customizer_link: {
      url: "/build?deck=classic-deck&wheel=white-wheels",
      text: "Build their board",
    },
  },
  {
    id: "skater-2",
    uid: "rodney-mullen",
    first_name: "Rodney",
    last_name: "Mullen",
    photo_background: {
      url: "/skaters/skater-bg-2.jpg",
      alt: "Rodney Mullen background",
    },
    photo_foreground: {
      url: "/skaters/skater-fg-2.png",
      alt: "Rodney Mullen",
    },
    customizer_link: {
      url: "/build?deck=urban-deck&wheel=black-wheels",
      text: "Build their board",
    },
  },
  {
    id: "skater-3",
    uid: "nyjah-huston",
    first_name: "Nyjah",
    last_name: "Huston",
    photo_background: {
      url: "/skaters/skater-bg-3.jpg",
      alt: "Nyjah Huston background",
    },
    photo_foreground: {
      url: "/skaters/skater-fg-3.png",
      alt: "Nyjah Huston",
    },
    customizer_link: {
      url: "/build?deck=graffiti-deck&wheel=red-wheels",
      text: "Build their board",
    },
  },
  {
    id: "skater-4",
    uid: "sky-brown",
    first_name: "Sky",
    last_name: "Brown",
    photo_background: {
      url: "/skaters/skater-bg-4.jpg",
      alt: "Sky Brown background",
    },
    photo_foreground: {
      url: "/skaters/skater-fg-4.png",
      alt: "Sky Brown",
    },
    customizer_link: {
      url: "/build?deck=classic-deck&wheel=red-wheels",
      text: "Build their board",
    },
  },
];
