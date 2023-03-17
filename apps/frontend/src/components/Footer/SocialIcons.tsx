import React from 'react';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Linkdelin from "@mui/icons-material/LinkedIn"
import style from "./Social.module.scss"
// import TickTokIcon from "@mui/icons-material/GM"

const SocialIconsContainer = styled('div')({
  display: 'flex',
  borderRadius: '8px',
  padding: '26px',
  justifyContent: 'center',
  color: 'white',
});

const SocialIcons = () => {
  return (
    <SocialIconsContainer >
      <IconButton>
        <FacebookIcon fontSize='large' className='text-primary-600' />
      </IconButton>
      <IconButton>
        <TwitterIcon  fontSize='large' className='text-[#00acee]' />
      </IconButton>
      <IconButton>
        <InstagramIcon  fontSize='large' className={style.insta} />
      </IconButton>
      <IconButton>
        <PinterestIcon  fontSize='large' className='text-[#E60023]' />
      </IconButton>
      <IconButton>
        <Linkdelin  fontSize='large' className='text-[#0e76a8]' />
      </IconButton>
    </SocialIconsContainer>
  );
};

export default SocialIcons;
