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
    <div className="flex-col min-h-[100vh] sm:h-screen">

        <div className='h-[40vh] bg-red' >
          {' '}
          <Brands brandImagesSrc={brandsImagesSrc} brandTitles={brandTitle} />
        </div>
        <div className="sm:h-[60vh]">
          <Sellers sectionTitles={sellerListTitles} sellerListSrc={sellerImagesSrc} sellerUrl={sellerUrl} />
        </div>

    </div>
  );
};

export default Features;
