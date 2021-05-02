import React from 'react';
import { Typography, AppBar, Toolbar } from '@material-ui/core';

const Header = ({ title }) => (
    <AppBar position="relative">
        <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          {title}
        </Typography>
        </Toolbar>
    </AppBar>
)

export default Header;