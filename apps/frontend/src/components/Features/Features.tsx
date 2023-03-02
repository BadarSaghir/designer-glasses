import React from 'react';
import Box from '@mui/material/Box';
import { Brands } from './Brands';
import Sellers from '../Sellers';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material';
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
    <div className="flex-col h-[100%] min-h-[100vh] ">

        <div className='h-[30vh] bg-red' >
          {' '}
          <Brands brandImagesSrc={brandsImagesSrc} brandTitles={brandTitle} />
        </div>
        {/* <div className={`flex-grow min-h-[70vh] `}>
          <Box className={"h-[100%] w-[100%] min-h-[70vh] flex items-center"} bgcolor={theme.sellerBg}>
          <Sellers sectionTitles={sellerListTitles} sellerListSrc={sellerImagesSrc} sellerUrl={sellerUrl} />
          </Box>
        </div> */}

    </div>
  );
};

export default Features;
