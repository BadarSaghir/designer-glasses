import React from 'react';
import Box from '@mui/material/Box';
type Props = {
  items?: { name: string; link: string }[];
  boxProps?: React.ComponentProps<typeof Box>;
};

function Menu({ items, boxProps }: Props) {
  return (
    <Box className='flex text-xs sm:text-base font-bold justify-evenly items-center' height="100%" {...boxProps}>
      {items?.map((item, idx) => {
        return <div key={idx}>{item.name}</div>;
      })}
    </Box>
  );
}

export default Menu;
