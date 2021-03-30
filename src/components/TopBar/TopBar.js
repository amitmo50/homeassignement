import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StoreIcon from '@material-ui/icons/Store';
import { Link, useLocation } from 'react-router-dom';
import './TopBar.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const TopBar = ({cart}) => {
    const classes = useStyles();
    const location = useLocation();

    if(location.pathname)

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton component={Link} to="/" edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <StoreIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        E-Commerce
                    </Typography>
                    {location.pathname === '/' && (
                        <Button component={Link} to="/cart" color="inherit">
                            <ShoppingCartIcon style={{fontSize:'24px'}}/>
                            <span className='badge badge-warning' id='lblCartCount'>{cart.total_items}</span>
                        </Button>
                    )}
                    
                </Toolbar>
            </AppBar>
        </div>
    
  );
}

export default TopBar;