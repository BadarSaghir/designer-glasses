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
    <Box className="min-h-screen">
      <Grid container direction={'column'} height="100%">
        <Grid item xs={3}>
          {' '}
          <Brands brandImagesSrc={brandsImagesSrc} brandTitles={brandTitle} />
        </Grid>
        <Grid item xs={9}>
          <Sellers />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
