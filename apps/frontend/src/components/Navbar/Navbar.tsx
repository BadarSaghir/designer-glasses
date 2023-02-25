import React from 'react';
import Appbar from './Appbar';
import Logo from './Logo';
import Menu from './Menu';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import ToolBar from '@mui/material/Toolbar';

type Props = {
  title?: string;
navitems?: { name: string; link: string }[];
};
const Navbar = ({
  title,
  navitems,
}: Props) => {
  const theme = useTheme();

  return (
    // {/* <Appbar /> */
    // }
    <Grid display={'none'} sx={{
      display:{
       sm:"flex"
      }  
    }} container bgcolor="blue" height={64} > 
      <Grid  item sm={1} xs={2} >
        <Logo height={"100%"} bgcolor={theme.navbar.bg_logo} />
      </Grid>
      <Grid item sm={11} xs={10}>
        <Menu items={navitems}  boxProps={{bgcolor:theme.navbar.bg,color:theme.navbar.text}} />
      </Grid>
    </Grid>
  );
};

export default Navbar;
