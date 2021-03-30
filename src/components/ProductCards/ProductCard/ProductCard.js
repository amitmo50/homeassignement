import React from 'react';
import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 208,
    maxHeight: 400,
    padding: '1px',
    margin: '10px',
  },
  btnContainer: {
      display:'flex',
      justifyContent: 'center'
  },
  btn: {
    width: 166,
  },
  cardInfo: {
    display:'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  img: {
      margin: '10px 10px 3px 10px',
      maxWidth: 166,
      maxHeight: 159,
  },
  producTitle: {
      padding: '10px',
  },
  title:{
    fontSize: '1rem'
  },
  price: {
      padding: '1px',
      margin: '0',
  },
  description: {
    padding: '1px',
    maxWidth: 200,
    fontSize: '0.7rem',
    margin: '0', 
  }
});

const ProductCard = ({product, onAddToCart}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.cardInfo}>
                <CardMedia className={classes.img}
                component="img"
                alt="product picture"
                height="159"
                image={product.media.source}
                />
                <CardContent className={classes.producTitle}>
                    <Typography className={classes.title} gutterBottom variant="h5">{product.name}</Typography>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description}} color="textSecondary" variant="body2" className={classes.description}/>
                    <p className={classes.price}>{product.price.formatted_with_symbol}</p>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.btnContainer}>
                <Button onClick={() => onAddToCart(product.id, 1)} className={classes.btn} variant="contained" color="primary">
                    Add To Cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard;