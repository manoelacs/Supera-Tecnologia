import { Card, CardMedia, IconButton, CardActions, 
   CardContent, CardHeader, Typography } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import React, { useEffect, useState, useContext } from 'react';
import Modal from '../../Modal/index';
import { ccyFormat, priceRow } from '../../../shareds/functions/index';
import useStyles from './styles';
import IItem from '../../../interfaces/models/item';
import IProduct from '../../../interfaces/models/product';

interface IProductProps{
  product: IItem,
  order: IProduct[], 
  onAddToCart: (product: IProduct) => void,
}
const Product = (props: IProductProps) => {  

  const { id, name, image, price, score} = props.product;
  const { onAddToCart } = props;

  const [open, setOpen] = React.useState(false);  
  const [quantity, setQuantity] = useState<number>(1);
  const [total, setTotal] = useState<number>(Number(parseFloat(String(price)).toFixed(2)));
  const classes = useStyles();

  const handleChange = () => {

    onAddToCart({id, quantity, price, total, name, score})      
  };
  
  useEffect(() => {
    setQuantity(quantity);
    setTotal( total );
   }, [quantity, total]); 
   
  const changeQuantity = (e: any) => {   
    let auxtotal = Number( ccyFormat(priceRow(e.target.value, price)));   
    setQuantity( e.target.value );  
    setTotal( auxtotal );      
  }; 
  const handleClickOpen = () => {
    setOpen(true);   
  };
  const resetState = () => {
    setTotal(Number(parseFloat(String(price)).toFixed(2)))
    setQuantity(1);
    setOpen(false);
  }
  const handleClose = () => {
    resetState();
  };  
  const handleAddClicked = () => {
    handleChange(); 
    resetState();
  } 
  return (
    <Card  className={classes.root}>
       <CardHeader
        title={name}
        // subheader={`Score: ${product.score}`}
      />
      <CardMedia
        className={classes.media}
        image={`${process.env.PUBLIC_URL}/assets/${image}`} 
        //image={(`../../../assets/${image}`)}
        title={name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Rating name="half-rating-read" defaultValue={score/100} precision={0.5} readOnly />
          <Typography gutterBottom variant="h5" component="h2">
            R${price}
          </Typography>

        </div>        
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions} > 
         
            <IconButton aria-label="Add to Cart" onClick={ handleClickOpen }>
                <AddShoppingCart />
            </IconButton> 
            <Modal open={open} 
                handleClose={handleClose} 
                onSave={handleAddClicked}
                onChangeQuantity={changeQuantity}
                quantity={quantity}
                total={total}
            />        
                   
       </CardActions>
    </Card>
  );
};

export default Product;