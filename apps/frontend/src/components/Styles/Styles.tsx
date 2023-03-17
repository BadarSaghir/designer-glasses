import Image from 'next/image';
import React from 'react';
import { IStylesData } from '../data';
import { TextGlasses, Title } from './components';
type Props = IStylesData;

const Style = (props: Props) => {
  return (
    <div className="min-h-screen flex justify-center py-12 px-2 items-center">
      <div className="flex-grow ">
        <div className="h-full w-full  gap-12 flex flex-col items-center">
          <div className=" flex items-center justify-center w-full">
            <Title className="text-lg sm:text-xl">{props.title}</Title>
          </div>
          <div className=" flex  items-center justify-center w-full">
            <div className="flex flex-wrap gap-2 sm:gap-0 flex-col items-center sm:flex-row w-full">
              {props.showcaseGlassess.map((item, idx) => (
                <div
                  className="flex shadow-md md:shadow-none pt-6  flex-col sm:flex-1 items-center pb-4 h-52 w-64 
                  gap-10"
                  key={idx}
                >
                  <div className={'h-[50%] w-[80%]'}>
                    <Image
                      src={item.imgSrc}
                      alt={item.name}
                      className={'h-[100%] w-[100%]'}
                      height={600}
                      width={900}
                    />
                  </div>
                  <TextGlasses className='text-lg'>{item.name}</TextGlasses>
                </div>
              ))}
            </div>
          </div>
          <div className=" flex  items-center justify-around w-full">
            {props.showcaseLenses.map((item, idx) => (
              <div className='flex items-center justify-center text-center gap-8  flex-col' key={idx}>
                <div className=' flex-1'>
                  <div></div>
                  <Image
                  style={{}}
                  className="h-[100%] w-[100%]"
                    src={item.imgSrc}
                    height={1200}
                    width={600}
                    alt={item.name}
                  />{' '}
                
                </div>
                <TextGlasses className='text-lg'>{item.name}</TextGlasses>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Style;
