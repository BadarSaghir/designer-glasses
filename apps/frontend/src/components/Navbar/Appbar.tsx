import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import React from 'react';
import { INavItems } from '../../lib/navigation.interfaces';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

type Props = {
  appbar?: React.ComponentProps<typeof AppBar>;
  items?: INavItems[];
  logo?: string;
};

function Appbar({ appbar, items }: Props) {
  return (
    <AppBar position="static" elevation={0} {...appbar}>
      <Toolbar>
        <Grid
          container
          alignItems={'center'}
          justifyContent="space-between"
          // bgcolor="red"
        >
          <Grid item>
          <IconButton size="large" aria-label="Logo" disabled  sx={{":disabled":{
            color:"black"
          }}}>
          <Typography variant="h6" component="div">
             Logo Here
            </Typography>
          </IconButton>

          </Grid>
          <Grid item>
            <IconButton size="large" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
