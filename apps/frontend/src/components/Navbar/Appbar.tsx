import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import React, { ReactNode, useState } from 'react';
import { INavItems } from '../../lib/navigation.interfaces';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
type Props = {
  appbar?: React.ComponentProps<typeof AppBar>;
  items?: INavItems[];
  logo?: ReactNode;
  bgColor: string;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  active: number;
};

function Appbar({ appbar, bgColor, items, logo, active, setActive }: Props) {
  const [anchor, setAnchor] = useState(false);
  const theme = useTheme();

  function toggleDrawer(arg1: boolean) {
    setAnchor(!arg1);
  }

  return (
    <AppBar position="static" {...appbar}>
      <Grid
        container
        alignItems={'stretch'}
        justifyContent="space-between"
        height="100%"
        pr={2}
        // bgcolor="red"
      >
        <Grid
          item
          bgcolor={bgColor}
          className="flex justify-center min-w-[45px] "
          xs={1}
        >
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon             onClick={() => toggleDrawer(false)}
 />
            <SwipeableDrawer
              anchor={'left'}
              open={anchor}
              onClose={() => toggleDrawer(false)}
              onOpen={() => toggleDrawer(true)}
            >
              {/* <Menu items={items} active={active} setActive={setActive} /> */}

              <Box width={'50vw'} height={'100vh'} bgcolor={theme.navbar.bg}>
                <Grid container height={'100%'} direction={'column'}>
                  <Grid
                    item
                    container
                    alignItems={'center'}
                    paddingLeft={2}
                    xs={1}
                  >
                    <CloseIcon
                      onClick={() => toggleDrawer(true)}
                      className="cursor-pointer"
                      sx={{ color: 'red' }}
                    />
                  </Grid>
                  <Grid
                    item
                    container
                    height="100%"
                    xs={6}
                    direction="column"
                    alignItems="center"
                    justifyContent={'space-evenly'}
                  >
                    {items?.map((item, idx) => {
                      return (
                        <div key={idx}>
                          <Link
                            className="font-bold border-solid border-red border-b-2"
                            href={item.link}
                            style={{
                              color:
                                active === idx
                                  ? theme.navbar.active
                                  : theme.navbar.text,
                            }}
                            onClick={() => {
                              setActive(idx);
                            }}
                            key={idx}
                          >
                            {item.name}
                          </Link>
                        </div>
                      );
                    })}
                  </Grid>
                </Grid>
              </Box>
            </SwipeableDrawer>
          </IconButton>
        </Grid>

        <Grid
          item
          xs={3}
          className="h-[100%] w-[100%]  min-w-[75px]"
          bgcolor={theme.navbar.bg_logo}
          color="black"
        >
          <div className="h-full w-full flex items-center justify-center pt-3">
            <div>{logo}</div>
          </div>
        </Grid>
        <Grid className="pb-3 flex-1" color={theme.paletes.primary}>
          <div className="h-full w-full flex items-center gap-3 justify-end  pt-3 ">
            <SearchIcon />
            <ShoppingCartIcon />
            <FavoriteBorderIcon />
            <button type="button">SignIn</button>
            <button type="button">Register</button>
          </div>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default Appbar;
