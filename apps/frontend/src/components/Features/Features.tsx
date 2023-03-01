import React from 'react';
import Box from '@mui/material/Box';
import { Brands } from './Brands';
import Sellers from './Sellers';
import Grid from '@mui/material/Grid';
type Props = {
  brandsImagesSrc: string[],
  sellerImagesSrc: string[],
  brandTitle:string[],
  brandUrl:string,
  sellerUrl:string,
  sellerListTitles:string[],
};

const Features = ({brandTitle,brandUrl,sellerUrl,brandsImagesSrc,sellerImagesSrc,sellerListTitles}: Props) => {
  return (
    <div className="flex-col min-h-[100vh] sm:h-screen">

        <div className='h-[30vh] bg-red' >
          {' '}
          <Brands brandImagesSrc={brandsImagesSrc} brandTitles={brandTitle} />
        </div>
        <div className="sm:flex-1">
          <Sellers />
        </div>

    </div>
  );
};

export default Features;
