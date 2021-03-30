import React from 'react';
import { Typography, Button, Card, CardMedia, CardActions, CardContent } from '@material-ui/core';
import useStyles from '../styles';

const CartItem = ({item, onUpdateCartQty, onRemoveFromCart}) => {
    const classes = useStyles();
    return (
        <Card className="cart-item">
            <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
            <CardContent>
                <Typography className={classes.itemName} variant="h4">{item.name}</Typography>
                <Typography className={classes.itemPrice} variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.CardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button type="button" variant="contained" color="secondary" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>

            </CardActions>
        </Card>
    )
}

export default CartItem;