import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import React, { ReactNode, useState } from 'react';
import { INavItems } from '../../lib/navigation.interfaces';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import   {useTheme}  from '@mui/material/styles';
import Link from "next/link"
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  appbar?: React.ComponentProps<typeof AppBar>;
  items?: INavItems[];
  logo?: ReactNode;
  setActive:React.Dispatch<React.SetStateAction<number>>;
  active:number;

};

function Appbar({ appbar, items,logo,active,setActive }: Props) {

  const [anchor, setAnchor] = useState(false)
  const theme=useTheme()

  function toggleDrawer(arg1: boolean) {
    setAnchor(!arg1)
  }

  return (
    <AppBar position="static" elevation={0} {...appbar}>
      <Toolbar>
        <Grid
          container
          alignItems={'center'}
          justifyContent="space-between"
          // bgcolor="red"
        >
          <Grid item>
          <Link href="/" className='cursor-pointer font-bold'  aria-label="Logo" >
            <h1 className='text-base cursor-pointer'>          
            {logo}
            </h1>  
          </Link>

          </Grid>
          <Grid item>
            <IconButton size="large" color="inherit" aria-label="menu" onClick={()=>toggleDrawer(anchor)}>
              <MenuIcon />
              <SwipeableDrawer
      anchor={"right"}
      open={anchor}
      onClose={()=>toggleDrawer(anchor)}
      onOpen={()=>toggleDrawer(anchor)}
    >
      {/* <Menu items={items} active={active} setActive={setActive} /> */}

     <Box width={'100vw'} height={"100vh"} bgcolor={theme.navbar.bg}>
      <Grid container height={'100%'} direction={'column'}>
        <Grid item container alignItems={"center"} paddingLeft={2}  xs={1} >
          
          <CloseIcon className="cursor-pointer" sx={{color:"red"} } />
        </Grid>
        <Grid className='font-bold' item container  height="100%" xs={6} direction='column'alignItems="center" justifyContent={"space-evenly"}  >
      {items?.map((item, idx) => {
        return <Link href={item.link} style={{color:(active===idx)?theme.navbar.active:theme.navbar.text}} onClick={()=>{setActive(idx)}}  key={idx}>{item.name}</Link>;
      })}
      </Grid>
      </Grid>

</Box> 
    </SwipeableDrawer>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
