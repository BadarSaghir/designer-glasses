import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { createStyles, styled, useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ViewButton from '../ViewButton';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { Theme } from '@mui/material';

type Props = {
  items?: { name: string; link: string }[];
  boxProps?: React.ComponentProps<typeof Box>;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  active: number;
};


const InputBG= styled('div')(({theme})=>({
  backgroundColor:`${theme.paletes.secondary}`,
  filter:"brightness(150%)"

 

}))


const styles = (theme: Theme) => createStyles({
  input: {
      '&::placeholder': {
        fontStyle: 'italic',
      },
    },
  });

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
        <InputBG className=" rounded-2xl text-xs  placeholder:text-white">
          <IconButton
            endIcon={<SearchIcon style={{ color: theme.navbar.text }} />}
            sx={{ p: '10px' }}
            aria-label="search"
          >
            <InputBase
            
             style={{
              height: '1px',
              color:"white",
            }}
           
              className="rounded-2xl px-4"
             
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
             
              placeholder="Search"
            />
          </IconButton>
        </InputBG>
        <FavoriteBorder />

        <ShoppingCart />

        <div>
          <ViewButton
            bgColor={theme.paletes.tertiary}
            fontColor={theme.navbar.bg_logo}
            showIcon={false}
            route=""
            size="small"
            shadowColor="transparent"
            text="  Sign In"
            variant="contained"
            fontSize={5}
          />
        </div>
        <div>
          <ViewButton
            bgColor={theme.paletes.tertiary}
            fontColor={theme.navbar.bg_logo}
            showIcon={false}
            route=""
            size="small"
            shadowColor="transparent"
            text=" Sign Up"
            variant="contained"
            fontSize={5}
          />
        </div>
      </div>
    </Box>
  );
}

export default Menu;
