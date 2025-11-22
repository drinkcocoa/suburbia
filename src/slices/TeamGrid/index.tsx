import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { skaters } from "@/data";
import React from "react";
import { Skater } from "./Skater";
import { SlideIn } from "@/components/SlideIn";
import { TeamGridSliceData, getTextFromRichText } from "@/types";

export type TeamGridProps = {
  slice: TeamGridSliceData;
  index: number;
};

const TeamGrid = async ({ slice }: TeamGridProps): Promise<JSX.Element> => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-brand-navy"
    >
      <SlideIn>
        <Heading as="h2" size="lg" className="mb-8 text-center text-white">
          {getTextFromRichText(slice.primary.heading)}
        </Heading>
      </SlideIn>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {skaters.map((skater, index) => (
          <React.Fragment key={index}>
            {skater.first_name && (
              <SlideIn>
                <Skater index={index} skater={skater} />
              </SlideIn>
            )}
          </React.Fragment>
        ))}
      </div>
    </Bounded>
  );
};

export default TeamGrid;
