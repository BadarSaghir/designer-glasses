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

type Props = {
  appbar?: React.ComponentProps<typeof AppBar>;
  items?: INavItems[];
  logo?: ReactNode;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  active: number;
};

function Appbar({ appbar, items, logo, active, setActive }: Props) {
  const [anchor, setAnchor] = useState(false);
  const theme = useTheme();

  function toggleDrawer(arg1: boolean) {
    setAnchor(!arg1);
  }

  return (
    <AppBar position="static" elevation={0} {...appbar}>
      
        <Grid
          container
          alignItems={'center'}
          justifyContent="space-between"
          height="100%"
          // bgcolor="red"
        >
          <Grid item bgcolor={theme.navbar.bg_logo} color="black" >
            <IconButton
              size="large"
              aria-label="Logo"
              disabled
              sx={{
                ':disabled': {
                 color:"black"
                },
              }}
            >
              <Typography variant="h6" component="div">
                {logo}
              </Typography>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer(anchor)}
            >
              <MenuIcon />
              <SwipeableDrawer
                anchor={'right'}
                open={anchor}
                onClose={() => toggleDrawer(anchor)}
                onOpen={() => toggleDrawer(anchor)}
              >
                {/* <Menu items={items} active={active} setActive={setActive} /> */}

                <Box width={'100vw'} height={'100vh'} bgcolor={theme.navbar.bg}>
                  <Grid container height={'100%'} direction={'column'}>
                    <Grid
                      item
                      container
                      alignItems={'center'}
                      paddingLeft={2}
                      xs={1}
                    >
                      <CloseIcon
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
        </Grid>
      
    </AppBar>
  );
}

export default Appbar;
