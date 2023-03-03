import React from 'react';
import { IStylesData } from '../data';

type Props = IStylesData

const Style = (props: Props) => {
  return (
    <div className="min-h-screen flex min-w-full ">
      <div className="flex-grow  ">
        <div className="h-full w-full  flex flex-col items-center">
          <div className="flex-1  flex items-center justify-center w-full">
            <div>A</div>
          </div>
          <div className="flex-1  flex items-center justify-center w-full">
            <div>B</div>
          </div>
          <div className="flex-1 flex  items-center justify-center w-full">
            <div>C</div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Style;
