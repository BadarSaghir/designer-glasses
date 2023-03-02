import React from 'react';
import Box from '@mui/material/Box';
import { Brands } from './Brands';
import Sellers from '../Sellers';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material';
import Glasses from '../Glasses';
type Props = {
  brandsImagesSrc: string[],
  brandTitle:string[],
  brandUrl:string,
  sellerImagesSrc: {new:string[],best:string[]},
  sellerUrl:{new:string,best:string},
  sellerListTitles:string[],
};

const Features = ({brandTitle,brandUrl,sellerUrl,brandsImagesSrc,sellerImagesSrc,sellerListTitles}: Props) => {
  const theme = useTheme()
  return (
    <div className="flex-col flex min-h-[100vh] ">

        <div className='h-[30vh] bg-red' >
          {' '}
          <Brands brandImagesSrc={brandsImagesSrc} brandTitles={brandTitle} />
        </div>
        <div className={`flex-grow flex`}>
          <Box className={" w-[100%]  flex flex-grow justify-center"} bgcolor={theme.sellerBg}>
          <Glasses  />
          </Box>
        </div>

    </div>
  );
};

export default Features;
