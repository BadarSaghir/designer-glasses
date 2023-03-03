import Image from 'next/image';
import React from 'react';
import { IStylesData } from '../data';
import { TextGlasses, Title } from './components';
type Props = IStylesData;

const Style = (props: Props) => {
  return (
    <div className="min-h-screen flex justify-center pt-12 items-center">
      <div className="flex-grow  ">
        <div className="h-full w-full  flex flex-col items-center">
          <div className=" flex items-center justify-center w-full">
            <Title className="text-lg sm:text-xl">{props.title}</Title>
          </div>
          <div className=" flex  items-center justify-center w-full">
            <div className="flex flex-wrap gap-2 sm:gap-0 flex-col items-center sm:flex-row w-full">
              {props.showcaseGlassess.map((item, idx) => (
                <div
                  className="flex shadow-md md:shadow-none  flex-col sm:flex-1 items-center pb-4 w-64    justify-between"
                  key={idx}
                >
                  <div className={'h-[50%] w-[80%]'}>
                    <Image
                      src={item.imgSrc}
                      alt={item.name}
                      className={'h-[100%] w-[100%]'}
                      height={1200}
                      width={2400}
                    />
                  </div>
                  <TextGlasses>{item.name}</TextGlasses>
                </div>
              ))}
            </div>
          </div>
          <div className=" flex  items-center justify-center w-full">
            {props.showcaseLenses.map((item, idx) => (
              <div className='flex flex-col' key={idx}>
                <div>
                  <Image
                    src={item.imgSrc}
                    height={800}
                    width={400}
                    alt={item.name}
                  />{' '}
                
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Style;
