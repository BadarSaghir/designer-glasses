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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Theme } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountCircle';
import useMenu from '../../hooks/useMenu';
import MenuItem from '@mui/material/MenuItem';
import MenuMui from '@mui/material/Menu';
import { useRecoilState } from 'recoil';
import { modalState } from '../../recoil/atom/authAtom';
import AuthModal from './AuthModal/AuthModal';
type Props = {
  items?: { name: string; link: string }[];
  boxProps?: React.ComponentProps<typeof Box>;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  active: number;
};

const InputBG = styled('div')(({ theme }) => ({
  border: '0.5px solid gray',
}));

const styles = (theme: Theme) =>
  createStyles({
    input: {
      '&::placeholder': {
        fontStyle: 'italic',
      },
    },
  });

function Menu({ items, boxProps, active, setActive }: Props) {
  const [search, setSearch] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);

  const [modalValue, setModal] = useRecoilState(modalState);
  const handleOpenMenu = (event: {
    currentTarget: React.SetStateAction<SVGSVGElement | null>;
  }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  return (
    <Box
      className="flex text-xs sm:text-base font-bold justify-evenly items-center px-14"
      style={{ color: theme.paletes.secondary }}
      height="100%"
      {...boxProps}
    >
      <div className="flex  flex-1 justify-evenly items-center">
        {items?.map((item, idx) => {
          return (
            <Link
              href={item.link}
              style={{
                color:
                  active === idx
                    ? theme.navbar.active
                    : theme.paletes.secondary,
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
      <div className="flex gap-8 justify-center items-center  pr-2">
        <InputBG className=" rounded-2xl text-xs  placeholder:text-white">
          <IconButton
            endIcon={<SearchIcon style={{ color: theme.paletes.secondary }} />}
            sx={{ p: '10px' }}
            aria-label="search"
          >
            <InputBase
              style={{
                height: '1px',
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
        {/* <FavoriteBorder /> */}
        <FavoriteBorderIcon sx={{ color: theme.paletes.secondary }} />

        <ShoppingCart sx={{ color: theme.paletes.secondary }} />

        <div className="cursor-pointer">
          <AccountBoxIcon
          onClick={ ()=>setModal("login")}
          />

          <AuthModal />

        </div>
        <div className="hidden">
          <ViewButton
            bgColor={theme.paletes.secondary}
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
