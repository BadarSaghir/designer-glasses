import React, { useState, useEffect } from 'react';
import Appbar from './Appbar';
import Logo from './Logo';
import Menu from './Menu';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import ToolBar from '@mui/material/Toolbar';
import { INavItems } from '../../lib/navigation.interfaces';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import FitbitIcon from '@mui/icons-material/Fitbit';

type Props = {
  logo?: StaticImageData;
  navitems?: INavItems[];
};
const Navbar = ({ logo, navitems }: Props) => {
  const theme = useTheme();
  // const route=

  const [active, setActive] = useState(-1);
  const router = useRouter();
  // console.log(router.pathname)
  useEffect(() => {
    navitems?.forEach((item, idx) => {
      if (router.pathname === item.link) setActive(idx);
    });
  });

  return (
    <div className="shadow-lg md:h-[52px] h-[100%]">
      <Box
        bgcolor={theme.navbar.bg_logo}
        sx={{
          paddingY: {
            md: 3,
          },
        }}
      >
        <Appbar
          active={active}
          setActive={setActive}
          items={navitems}
          logo={<FitbitIcon className="h-full" />}
          bgColor={theme.navbar.bg}
          appbar={{
            sx: {
              bgcolor: 'transparent',
              color: theme.navbar.text,
              padding: 0,

              display: {
                md: 'none',
              },
            },
          }}
        />
        <Box
          className="w-[100%]  h-[32px]"
          sx={{
            padding:0,
            display: {
              md: 'flex',
              xs: 'none',
            },
          }}
        >
          <div className="flex w-[100%] items-center h-[32px]">
            <div className="flex pl-12 justify-around mb-6 ">
              <Link className=" h-full" href="/">
                <FitbitIcon className="h-full" />
              </Link>
            </div>
            <div className='flex-1 mb-6'>
              <Menu
                active={active}
                setActive={setActive}
                items={navitems}
                boxProps={{
                  bgcolor: theme.navbar.bg_logo,
                  color: theme.navbar.bg,
                }}
              />
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
