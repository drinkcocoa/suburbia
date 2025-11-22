// Static data types (replacing Prismic types)

// Image field type
export interface ImageField {
  url: string;
  alt?: string;
  dimensions?: {
    width: number;
    height: number;
  };
}

// Link field type
export interface LinkField {
  url: string;
  text?: string;
}

// Rich text field type (simplified as string array for paragraphs)
export type RichTextField = { type: string; text: string }[];

// Title field type
export type TitleField = { type: string; text: string }[];

// Navigation item
export interface NavigationItem {
  link: LinkField;
}

// Footer skateboard item
export interface FooterSkateboardItem {
  skateboard: ImageField;
}

// Settings data
export interface SettingsData {
  site_title: string;
  meta_description: string;
  fallback_og_image: ImageField;
  navigation: NavigationItem[];
  footer_image: ImageField;
  footer_skateboards: FooterSkateboardItem[];
}

// Wheel item for customizer
export interface WheelItem {
  texture: ImageField;
  uid: string;
}

// Deck item for customizer
export interface DeckItem {
  texture: ImageField;
  uid: string;
}

// Metal item for customizer
export interface MetalItem {
  color: string;
  uid: string;
}

// Board customizer data
export interface BoardCustomizerData {
  wheels: WheelItem[];
  decks: DeckItem[];
  metals: MetalItem[];
}

// Skateboard data
export interface SkateboardData {
  id: string;
  uid: string;
  name: string;
  image: ImageField;
  price: number;
  customizer_link: LinkField;
}

// Skater data
export interface SkaterData {
  id: string;
  uid: string;
  first_name: string;
  last_name: string;
  photo_background: ImageField;
  photo_foreground: ImageField;
  customizer_link: LinkField;
}

// Slice types
export type SliceTheme = "Blue" | "Orange" | "Navy" | "Lime";

export interface HeroSliceData {
  slice_type: "hero";
  id: string;
  variation: "default";
  primary: {
    heading: TitleField;
    body: RichTextField;
    button: LinkField;
    skateboard_deck_texture: ImageField;
    skateboard_wheel_texture: ImageField;
    skateboard_truck_color: string;
    skateboard_bolt_color: string;
  };
}

export interface ProductGridSliceData {
  slice_type: "product_grid";
  id: string;
  variation: "default";
  primary: {
    heading: TitleField;
    body: RichTextField;
    product: { skateboard: { id: string } }[];
  };
}

export interface TeamGridSliceData {
  slice_type: "team_grid";
  id: string;
  variation: "default";
  primary: {
    heading: RichTextField;
  };
}

export interface TextAndImageSliceData {
  slice_type: "text_and_image";
  id: string;
  variation: "default" | "imageOnLeft";
  primary: {
    theme: SliceTheme;
    heading: TitleField;
    body: RichTextField;
    button: LinkField;
    background_image: ImageField;
    foreground_image: ImageField;
  };
}

export interface VideoBlockSliceData {
  slice_type: "video_block";
  id: string;
  variation: "default";
  primary: {
    youtube_video_id: string;
  };
}

export type HomepageSlice =
  | HeroSliceData
  | ProductGridSliceData
  | TeamGridSliceData
  | TextAndImageSliceData
  | VideoBlockSliceData;

export interface HomepageData {
  meta_title: string;
  meta_description: string;
  meta_image?: ImageField;
  slices: HomepageSlice[];
}

// Helper function to get text from rich text field
export function getTextFromRichText(field: RichTextField | TitleField): string {
  return field.map((item) => item.text).join(" ");
}

// Helper function to render rich text as JSX (simple version)
export function renderRichText(field: RichTextField): string {
  return field.map((item) => item.text).join("\n");
}
