import * as React from 'react';
import { FunctionComponent } from 'react';
import lavkaImage from '../assets/image 1.png';
import visitorsImage from '../assets/image 1-2.png';
import craftImage from '../assets/image 1-1.png';
import craftHeader from '../assets/craft.png';
import visitorsHeader from '../assets/visitors.png';
import lavkaHeader from '../assets/lavka.png';
import Feature from './Feature';

interface FeaturesProps {}

const Features: FunctionComponent<FeaturesProps> = (args) => {
  return (
    <>
      <Feature
        headerImage={lavkaHeader}
        image={lavkaImage}
        text={'Откройте свою собственную лавку монстроведа'}
      />
      <Feature
        headerImage={craftHeader}
        image={craftImage}
        reverse={true}
        text={
          'Изучите зельеварение, трансмутацию и шаманизм для создания предметов против монстров'
        }
      />
      <Feature
        headerImage={visitorsHeader}
        image={visitorsImage}
        text={
          'Помогайте посетителям справиться с монстрами при помощи своих знаний и навыков'
        }
      />
    </>
  );
};

export default Features;
