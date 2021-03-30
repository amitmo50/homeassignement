import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles'; 
import CartItem from './CartItem/CartItem';


const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
    const isEmpty = !cart.total_items;
    const classes = useStyles();

    const EmptyCart = () => {
        return (<Typography variant="subtitle1">You have no items in your shopping cart, <Link className={classes.link} to="/">start adding some</Link>!</Typography>)
    }
    
    const FilledCart = () => {
        return (<>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => {
                    return(<Grid item xs={12} sm={4} key={item.id}>
                        <CartItem onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} item={item}/>
                    </Grid>)
                })}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography style={{fontSize:"1.2rem"}} className={classes.totalPrice} variant="h5">
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button onClick={() => handleEmptyCart()} className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>)
    }

    return (
        <Container className={classes.cartContainer}>
            <div className={classes.toolbar}></div>
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            { isEmpty ? <EmptyCart/> : <FilledCart/>}
        </Container>
    )
}

export default Cart;