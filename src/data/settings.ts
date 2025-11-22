import { SettingsData } from "@/types";

export const settings: SettingsData = {
  site_title: "Suburbia Skateboards",
  meta_description:
    "Custom skateboards built for your style. Design your perfect board with our customizer.",
  fallback_og_image: {
    url: "/og-image.jpg",
    alt: "Suburbia Skateboards",
  },
  navigation: [
    { link: { url: "/", text: "Home" } },
    { link: { url: "/build", text: "Build" } },
    { link: { url: "/#team", text: "Team" } },
    { link: { url: "/#products", text: "Products" } },
  ],
  footer_image: {
    url: "/footer-bg.jpg",
    alt: "Skateboard footer background",
  },
  footer_skateboards: [
    { skateboard: { url: "/skateboard/Deck.webp", alt: "Skateboard 1" } },
    { skateboard: { url: "/skateboard/Deck.webp", alt: "Skateboard 2" } },
    { skateboard: { url: "/skateboard/Deck.webp", alt: "Skateboard 3" } },
  ],
};
