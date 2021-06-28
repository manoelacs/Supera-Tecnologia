import { Grid } from '@material-ui/core';
import React, {useContext} from 'react';
import Product from './Product';
import useStyles from './styles';
import IProduct from '../../../src/interfaces/models/product';
import IItem from '../../../src/interfaces/models/item';
import IOrder from '../../interfaces/models/order';
import {MainContext} from '../../contexts/MainContext';

/* interface IProductsProps{
  products: IItem[],
  order: IProduct[],
  cart: IOrder[],
  handleAddToCart: (product: IProduct) => void,
  handleUpdateCart: (orders:any) => void,
  addOrder: (order:any) => void,
  
} */

const Products = ( )=> {

  const classes = useStyles();

  const value = useContext(MainContext);
  const { products, handleAddToCart, order } = value;
  
  console.log(value);
  
  
  return (
   

    <main className={classes.content}>
    <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            { products.map((product: any) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                  <Product product={ product } onAddToCart={handleAddToCart} order= {order} />
              </Grid>

            ))}
        </Grid>
    </main>
  );
};

export default Products;