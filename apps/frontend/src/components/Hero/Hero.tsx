import React, { PropsWithChildren } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import glasses from '../../assets/hero.jpg';
import { INavItems } from '../../lib/navigation.interfaces';
import Link from 'next/link';
import { useTheme } from '@mui/material';
import IconButton from '@mui/material/Button';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

type Props = PropsWithChildren & {
  imgSrc?: string;
  imageText?: INavItems[];
};

const Hero = ({ imgSrc = '', imageText }: Props) => {
  const theme = useTheme();
  const leftText = imageText?.slice(0, 2);
  const rightText = imageText?.slice(2, 4);
  // console.log(imageText);
  return (
    <Box height="100%">
      <Grid container height="100%" direction="column">
        <Grid container direction="row" item xs={12}>
          <Grid
            container
            direction="column"
            className="h-[100%] w-[100%]"
            style={{
              backgroundImage: `url(${glasses.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center bottom'

            }}
          >
            <Grid
              xs={4}
              container
              item
              className="font-bold 2md:text-2xl  3md:text-lg  sm:text-base md:text-sm lg:text-lg text-white text-sm"
              direction="row"
              width={'100%'}
            >
              {/* <Grid
                container
                xs={5}
                gap={2}
                p={1}
                justifyContent="space-evenly"
                item
              >
                {leftText?.map((item, idx) => {
                  return (
                    <Grid item key={idx}>
                      <Link href={item.link}> {item.name}</Link>
                    </Grid>
                  );
                })}
              </Grid> */}
              <Grid item xs={2}></Grid>
              {/* <Grid
                container
                gap={1}
                justifyContent="space-evenly"
                xs={5}
                p={1}
                item
              >
                {rightText?.map((item, idx) => {
                  return (
                    <Grid item key={idx}>
                      <Link href={item.link}> {item.name}</Link>
                    </Grid>
                  );
                })}
              </Grid> */}
            </Grid>

            <Grid
              item
              container
              direction={'column'}
              xs={8}
              alignItems="center"
              position="relative"
              justifyContent={'center'}
              height="100%"
            >
              <Grid top="50%" item position="relative">
                <div
                  className="rounded-full"
                  style={{
                    WebkitBoxShadow: '4px 4px 11px 1px rgb(0 0 0 / 75%)',
                    MozBoxShadow: '4px 4px 11px 1px rgb(0 0 0 / 75%)',
                    boxShadow: '4px 4px 11px 1px rgb(0 0 0 / 75%)',
                  }}
                >
                  <IconButton
                    variant="contained"
                    className="font-bold rounded-full"


                    style={{
                      backgroundColor: theme.button.heroBtnBgColor,
                      color: theme.button.heroBtnTextColor,
                      WebkitBoxShadow: 'inset 0px 0px 10px 0px #00000092',
                      MozBoxShadow: 'inset 0px 0px 10px 0px #00000092',
                      boxShadow: 'inset 0px 0px 10px 0px #00000092',
                    }}
                  >
                    <div className='flex  h-[100%] w-[100%] items-center gap-2 text-sm'>
                      <div>SHOP NOW</div>

                    <PlayCircleFilledIcon fontSize='large'  />
                    </div>
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Hero;
