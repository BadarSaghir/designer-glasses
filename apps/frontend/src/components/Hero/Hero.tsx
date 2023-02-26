import React, { PropsWithChildren } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import glasses from '../../assets/hero.jpg';
import { INavItems } from '../../lib/navigation.interfaces';
import Link from 'next/link';
import Brands from './Brands';
type Props = PropsWithChildren & {
  imgSrc?: string;
  imageText?: INavItems[];
};

const Hero = ({ imgSrc = '', imageText }: Props) => {
  const leftText = imageText?.slice(0, 2);
  const rightText = imageText?.slice(2, 4);
  // console.log(imageText);
  return (
    <Box height="100%">
      <Grid container height="100%" direction="column">
        <Grid item xs={8}>
          <div
            className="h-[100%] w-[100%]"
            style={{
              backgroundImage: `url(${glasses.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <Grid container className='font-bold 2md:text-2xl  3md:text-lg  sm:text-base md:text-sm lg:text-lg text-white text-sm' direction="row"  width={"100%"}>

              <Grid container xs={5} gap={2} p={1} justifyContent="space-evenly"  item>
                {leftText?.map((item, idx) => {
                  return (
                    <Grid  item key={idx}>
                 <Link href={item.link}>    {item.name}</Link> 
                    </Grid>
                  );
                })}
              </Grid>
             <Grid item xs={2}></Grid>
              <Grid container gap={1}  justifyContent="space-evenly" xs={5} p={1} item>
                {rightText?.map((item, idx) => {
                  return (
                    <Grid  item key={idx}>
                 <Link href={item.link}>    {item.name}</Link> 
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <div>Button</div>
          </div>
          
        </Grid>
        <Grid item  xs={2}  >
          <Box><Brands /></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
