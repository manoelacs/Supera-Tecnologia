import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart, Home } from '@material-ui/icons';

import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/commerce.png';
import useStyles from './styles';
import {MainContext} from '../../contexts/MainContext';

const PrimarySearchAppBar = () => {

  const {order} = useContext(MainContext);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';
 
  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} 
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
      id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} 
      open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={order.length} color="secondary" showZero>
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> GameStore
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' && (
          <div>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={order.length} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
          {location.pathname === '/cart' && (
          <div >
            <IconButton component={Link} to="/" aria-label="Show cart items" color="inherit">              
                <Home/>               
            </IconButton> Início
          </div>
          )}
          
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
