import { HomepageData, HomepageSlice } from "@/types";

export const homepage: HomepageData = {
  meta_title: "Suburbia Skateboards - Custom Boards Built for You",
  meta_description:
    "Design your perfect skateboard with our customizer. Premium quality boards for street, park, and everything in between.",
  slices: [
    {
      slice_type: "hero",
      id: "hero-1",
      variation: "default",
      primary: {
        heading: [{ type: "heading1", text: "Skate the Suburbia Way" }],
        body: [
          {
            type: "paragraph",
            text: "Custom skateboards crafted for your unique style. Build your dream board with our interactive customizer.",
          },
        ],
        button: { url: "/build", text: "Build Your Board" },
        skateboard_deck_texture: { url: "/skateboard/Deck.webp", alt: "Deck" },
        skateboard_wheel_texture: {
          url: "/skateboard/SkateWheel1.png",
          alt: "Wheel",
        },
        skateboard_truck_color: "#6F6E6A",
        skateboard_bolt_color: "#6F6E6A",
      },
    },
    {
      slice_type: "product_grid",
      id: "products-1",
      variation: "default",
      primary: {
        heading: [{ type: "heading2", text: "Our Boards" }],
        body: [
          {
            type: "paragraph",
            text: "Check out our latest collection of premium skateboards.",
          },
        ],
        product: [
          { skateboard: { id: "skateboard-1" } },
          { skateboard: { id: "skateboard-2" } },
          { skateboard: { id: "skateboard-3" } },
          { skateboard: { id: "skateboard-4" } },
        ],
      },
    },
    {
      slice_type: "text_and_image",
      id: "text-image-1",
      variation: "default",
      primary: {
        theme: "Blue",
        heading: [{ type: "heading2", text: "Built for Performance" }],
        body: [
          {
            type: "paragraph",
            text: "Every board is crafted with premium materials for maximum durability and performance. Whether you're hitting the streets or the park, our boards deliver.",
          },
        ],
        button: { url: "/build", text: "Start Building" },
        background_image: { url: "/sections/performance-bg.jpg", alt: "" },
        foreground_image: { url: "/sections/performance-fg.png", alt: "" },
      },
    },
    {
      slice_type: "text_and_image",
      id: "text-image-2",
      variation: "imageOnLeft",
      primary: {
        theme: "Orange",
        heading: [{ type: "heading2", text: "Express Your Style" }],
        body: [
          {
            type: "paragraph",
            text: "Choose from dozens of deck designs, wheel colors, and truck finishes to create a board that's uniquely yours.",
          },
        ],
        button: { url: "/build", text: "Customize Now" },
        background_image: { url: "/sections/style-bg.jpg", alt: "" },
        foreground_image: { url: "/sections/style-fg.png", alt: "" },
      },
    },
    {
      slice_type: "video_block",
      id: "video-1",
      variation: "default",
      primary: {
        youtube_video_id: "dQw4w9WgXcQ",
      },
    },
    {
      slice_type: "team_grid",
      id: "team-1",
      variation: "default",
      primary: {
        heading: [{ type: "heading2", text: "Meet the Team" }],
      },
    },
  ],
};

// Helper to get slice by id
export function getSliceById(id: string): HomepageSlice | undefined {
  return homepage.slices.find((slice) => slice.id === id);
}
