import * as React from "react";
import { FunctionComponent } from "react";
import lavkaImage from "./image 1.png";
import visitorsImage from "./image 1-2.png";
import craftImage from "./image 1-1.png";
import craftHeader from "./craft.png";
import visitorsHeader from "./visitors.png";
import lavkaHeader from "./lavka.png";
import Feature from "../Feature";

interface FeaturesProps {}

const Features: FunctionComponent<FeaturesProps> = (args) => {
  return (
    <>
      <Feature
        headerImage={lavkaHeader}
        image={lavkaImage}
        text={"Откройте свою собственную лавку монстроведа"}
      />
      <Feature
        headerImage={craftHeader}
        image={craftImage}
        reverse={true}
        text={
          "Изучите зельеварение, трансмутацию и шаманизм для создания предметов против монстров"
        }
      />
      <Feature
        headerImage={visitorsHeader}
        image={visitorsImage}
        text={
          "Помогайте посетителям справиться с монстрами при помощи своих знаний и навыков"
        }
      />
    </>
  );
};

export default Features;
