import { useRef } from 'react';
import { FunctionComponent } from 'react';
import AOS from 'aos';

interface FeatureProps {
  headerImage: string;
  image: string;
  reverse?: boolean;
  text: string;
}

const Feature: FunctionComponent<FeatureProps> = (props) => {
  AOS.refresh();
  return (
    <div
      data-aos={`fade-${props.reverse ? 'left' : 'right'}`}
      data-aos-duration='1500'
      // data-aos-offset='300'
      data-aos-anchor-placement='center-bottom'
      data-aos-once='true'
    >
      <div className='flex flex-col justify-center my-20'>
        {/* <h2 className="mx-auto text-white text-5xl">СОБСТВЕННАЯ ЛАВКА</h2> */}
        <img className='max-h-12 mx-auto mb-8' src={props.headerImage} alt='' />
        <div
          className={`flex ${
            props.reverse ? 'flex-row-reverse' : 'flex-row'
          } flex-row justify-center align-middle`}
        >
          <img className='max-w-xl ' src={props.image} alt='' />
          <p
            className={`text-white font-semibold h-fit my-auto text-3xl ${
              props.reverse ? '-mr-14' : '-ml-14'
            }  max-w-sm`}
          >
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
