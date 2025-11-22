import { Metadata } from "next";
import { homepage } from "@/data";
import {
  HomepageSlice,
  TextAndImageSliceData,
} from "@/types";
import Hero from "@/slices/Hero";
import ProductGrid from "@/slices/ProductGrid";
import TeamGrid from "@/slices/TeamGrid";
import TextAndImage from "@/slices/TextAndImage";
import VideoBlock from "@/slices/VideoBlock";

export const metadata: Metadata = {
  title: homepage.meta_title,
  description: homepage.meta_description,
};

type TextAndImageBundleSlice = {
  id: string;
  slice_type: "text_and_image_bundle";
  slices: TextAndImageSliceData[];
};

function bundleTextAndImageSlices(slices: HomepageSlice[]) {
  const res: (HomepageSlice | TextAndImageBundleSlice)[] = [];

  for (const slice of slices) {
    if (slice.slice_type !== "text_and_image") {
      res.push(slice);
      continue;
    }

    const bundle = res.at(-1);
    if (bundle?.slice_type === "text_and_image_bundle") {
      bundle.slices.push(slice);
    } else {
      res.push({
        id: `${slice.id}-bundle`,
        slice_type: "text_and_image_bundle",
        slices: [slice],
      });
    }
  }
  return res;
}

function renderSlice(
  slice: HomepageSlice | TextAndImageBundleSlice,
  index: number
) {
  switch (slice.slice_type) {
    case "hero":
      return <Hero key={slice.id} slice={slice} index={index} />;
    case "product_grid":
      return <ProductGrid key={slice.id} slice={slice} index={index} />;
    case "team_grid":
      return <TeamGrid key={slice.id} slice={slice} index={index} />;
    case "video_block":
      return <VideoBlock key={slice.id} slice={slice} index={index} />;
    case "text_and_image":
      return <TextAndImage key={slice.id} slice={slice} index={index} />;
    case "text_and_image_bundle":
      return (
        <div key={slice.id}>
          {slice.slices.map((s, i) => (
            <TextAndImage key={s.id} slice={s} index={index + i} />
          ))}
        </div>
      );
    default:
      return null;
  }
}

export default async function Page() {
  const slices = bundleTextAndImageSlices(homepage.slices);

  return <>{slices.map((slice, index) => renderSlice(slice, index))}</>;
}
