import * as React from "react";
import { FunctionComponent } from "react";

interface FeatureProps {
  headerImage: string;
  image: string;
  reverse?: boolean;
  text: string;
}

const Feature: FunctionComponent<FeatureProps> = (args) => {
  return (
    <>
      <div className="flex flex-col justify-center mb-20">
        {/* <h2 className="mx-auto text-white text-5xl">СОБСТВЕННАЯ ЛАВКА</h2> */}
        <img className="max-h-12 mx-auto mb-8" src={args.headerImage} alt="" />
        <div
          className={`flex ${
            args.reverse ? "flex-row-reverse" : "flex-row"
          } flex-row justify-center align-middle`}
        >
          <img className="max-w-xl " src={args.image} alt="" />
          <p
            className={`text-white font-semibold h-fit my-auto text-3xl ${
              args.reverse ? "-mr-14" : "-ml-14"
            }  max-w-sm`}
          >
            {args.text}
          </p>
        </div>
      </div>
    </>
  );
};

export default Feature;
