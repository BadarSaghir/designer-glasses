import React from 'react';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

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
        <FacebookIcon />
      </IconButton>
      <IconButton>
        <TwitterIcon />
      </IconButton>
      <IconButton>
        <InstagramIcon />
      </IconButton>
      <IconButton>
        <PinterestIcon  />
      </IconButton>
    </SocialIconsContainer>
  );
};

export default SocialIcons;
