import React from 'react';
import Box from '@mui/material/Box';
import Link from "next/link";
import   {useTheme}  from '@mui/material/styles';

type Props = {
  items?: { name: string, link: string }[];
  boxProps?: React.ComponentProps<typeof Box>;
  setActive:React.Dispatch<React.SetStateAction<number>>;
  active:number;
};

function Menu({ items, boxProps,active, setActive }: Props) {

  const theme=useTheme()
  return (
    <Box className='flex text-xs sm:text-base font-bold justify-evenly items-center' height="100%" {...boxProps}>
      {items?.map((item, idx) => {
        return <Link  href={item.link} style={{color:(active===idx)?theme.navbar.active:theme.navbar.text}} onClick={()=>{setActive(idx)}}  key={idx}>{item.name}</Link>;
      })}
    </Box>
  );
}

export default Menu;
