import React,{useState,useEffect} from 'react';
import Appbar from './Appbar';
import Logo from './Logo';
import Menu from './Menu';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import ToolBar from '@mui/material/Toolbar';
import { INavItems } from '../../lib/navigation.interfaces';
import Link from "next/link"
import { useRouter } from 'next/router';
import  Box from '@mui/material/Box';

type Props = {
  logo: string,
  navitems?: INavItems[],
};
const Navbar = ({ logo, navitems }: Props) => {
  const theme = useTheme();
  // const route= 

  const [active, setActive]=useState(-1)
  const router= useRouter()
  console.log(router.pathname)
  useEffect(()=>{
    navitems?.forEach((item,idx)=>{
   if(router.pathname===item.link)setActive(idx)
  })
  })
  

  return (
    <Box bgcolor={theme.navbar.bg_logo} paddingBottom={5} className="shadow">
     
      <Appbar
      
      active={active}
      setActive={setActive}
      items={navitems}
      logo={
      <Logo className='cursor-pointer' height={'100%'} color="black" >{logo}</Logo>
      }
        appbar={{
          sx: {
            bgcolor: theme.navbar.bg,
            color:theme.navbar.text,
            padding:0,

            display: {
              sm: 'none',
            },
          },
        }}
      />
      <Grid
        sx={{

          display: {
            sm: 'flex',
            xs: 'none',
          },
          
        }}
        container
        bgcolor="blue"
        height={64}
      >
        <Grid item sm={2} xs={2}>
          <Logo className="cursor-pointer" height={'100%'} bgcolor={theme.navbar.bg_logo} onClick={()=>setActive(-1)} >
       <Link href="/"> {logo}</Link>
          </Logo>
        </Grid>
        <Grid item sm={10} xs={10}>
          <Menu
          active={active}
          setActive={setActive}
            items={navitems}
            boxProps={{ bgcolor: theme.navbar.bg, color: theme.navbar.text }}
          />
        </Grid>
      </Grid>
    </Box>
  
  );
};

export default Navbar;
