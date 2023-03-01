import React from 'react';
import Box from '@mui/material/Box';
import { Brands } from './Brands';
import Sellers from './Sellers';
import Grid from '@mui/material/Grid';
type Props = {
  brandsImagesSrc: string[],
  sellerImagesSrc: {new:string[],best:string[]},
  sellerUrl:{new:string,best:string},
  brandTitle:string[],
  brandUrl:string,
  sellerListTitles:string[],
};

const Features = ({brandTitle,brandUrl,sellerUrl,brandsImagesSrc,sellerImagesSrc,sellerListTitles}: Props) => {
  return (
    <div className="flex-col min-h-[100vh] ">

        <div className='h-[30vh] bg-red' >
          {' '}
          <Brands brandImagesSrc={brandsImagesSrc} brandTitles={brandTitle} />
        </div>
        <div className="md:h-[70vh]">
          <Sellers sectionTitles={sellerListTitles} sellerListSrc={sellerImagesSrc} sellerUrl={sellerUrl} />
        </div>

    </div>
  );
};

export default Features;
