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
import { StaticImageData } from 'next/image';
import Image from  "next/image"
import FitbitIcon from '@mui/icons-material/Fitbit';

type Props = {
  logo: StaticImageData,
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
    <div className='shadow-lg'>
    <Box bgcolor={theme.navbar.bg_logo} sx={
      {
        paddingBottom:{
          md:3
        }

      }
    } >
     
      <Appbar
      
      active={active}
      setActive={setActive}
      items={navitems}
      logo={
        <FitbitIcon className='h-full'/>
      }
      bgColor={theme.navbar.bg}
        appbar={{
          sx: {
           
            bgcolor:"transparent",
            color:theme.navbar.text,
            padding:0,

            display: {
            md: 'none',
            },
          },
        }}
       

      />
      <Grid
        sx={{

          display: {
            md: 'flex',
            xs: 'none',
          },
          
        }}
        container
        height={54}
      >
        <Grid container item sm={2} xs={2} pt={2}>
       <Link className=' h-full' href="/"> <FitbitIcon className='h-full'/></Link>
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
    </div>
  );
};

export default Navbar;
