import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ViewButton from '../ViewButton';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import  FavoriteBorder  from '@mui/icons-material/FavoriteBorder';

type Props = {
  items?: { name: string; link: string }[];
  boxProps?: React.ComponentProps<typeof Box>;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  active: number;
};

function Menu({ items, boxProps, active, setActive }: Props) {
  const [search, setSearch] = useState('');
  const theme = useTheme();
  return (
    <Box
      className="flex text-xs sm:text-base font-bold justify-evenly items-center"
      style={{ color: theme.navbar.text }}
      height="100%"
      {...boxProps}
    >
      <div className="flex  flex-1 justify-evenly items-center">
        {items?.map((item, idx) => {
          return (
            <Link
              href={item.link}
              style={{
                color: active === idx ? theme.navbar.active : theme.navbar.text,
              }}
              onClick={() => {
                setActive(idx);
              }}
              key={idx}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="flex gap-2 justify-center items-center  pr-2">
        <div className=" rounded-2xl bg-indigo-500 text-xs  placeholder:text-white">
          <IconButton
            endIcon={<SearchIcon style={{ color: theme.navbar.text }} />}
            sx={{ p: '10px' }}
            aria-label="search"
          >
            <InputBase
             
              className=" rounded-2xl px-4 placeholder:text-white"
              style={
                {
                  height:"1px"
                  // backgroundColor:theme.navbar.bg_logo
                }
              }
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              size="small"
              placeholder="Search"
              inputProps={{ 'aria-label': 'search'}}
            />
          </IconButton>
        </div>
                    <FavoriteBorder />

                    <ShoppingCart />

        <div>
          <ViewButton bgColor={theme.paletes.tertiary} fontColor={theme.paletes.secondary} showIcon={false} route='' size='small' shadowColor='transparent' text='  Sign In' variant='outlined' fontSize={5} />
        
      
        </div>
        <div>
        <ViewButton bgColor={theme.paletes.tertiary} fontColor={theme.paletes.secondary} showIcon={false} route='' size='small' shadowColor='transparent' text=' Sign Up' variant='outlined' fontSize={5} />

        </div>
      </div>
    </Box>
  );
}

export default Menu;
