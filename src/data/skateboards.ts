import { SkateboardData } from "@/types";

export const skateboards: SkateboardData[] = [
  {
    id: "skateboard-1",
    uid: "street-legend",
    name: "Street Legend",
    image: {
      url: "/products/board-1.png",
      alt: "Street Legend Skateboard",
    },
    price: 12999, // in cents
    customizer_link: {
      url: "/build?deck=classic-deck",
      text: "Customize",
    },
  },
  {
    id: "skateboard-2",
    uid: "urban-warrior",
    name: "Urban Warrior",
    image: {
      url: "/products/board-2.png",
      alt: "Urban Warrior Skateboard",
    },
    price: 14999,
    customizer_link: {
      url: "/build?deck=urban-deck",
      text: "Customize",
    },
  },
  {
    id: "skateboard-3",
    uid: "night-rider",
    name: "Night Rider",
    image: {
      url: "/products/board-3.png",
      alt: "Night Rider Skateboard",
    },
    price: 15999,
    customizer_link: {
      url: "/build?deck=graffiti-deck",
      text: "Customize",
    },
  },
  {
    id: "skateboard-4",
    uid: "classic-cruiser",
    name: "Classic Cruiser",
    image: {
      url: "/products/board-4.png",
      alt: "Classic Cruiser Skateboard",
    },
    price: 11999,
    customizer_link: {
      url: "/build?deck=classic-deck",
      text: "Customize",
    },
  },
];

export function getSkateboardById(id: string): SkateboardData | undefined {
  return skateboards.find((board) => board.id === id);
}
