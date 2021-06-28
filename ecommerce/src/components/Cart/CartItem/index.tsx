import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import IProduct from '../../../interfaces/models/product';
import React, { memo, useContext} from 'react';

import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {MainContext} from '../../../contexts/MainContext';

interface IProps {
  orderProduct: IProduct;  
  //onDelete: (id: number) => void;
}

const CartItem = memo((props: IProps) => {
  const { orderProduct} = props;
  
  
  const { handleUpdateCart, order,  setUpdate, update} = useContext(MainContext); 

  const handleRemoveFromCart = (id: number) => {    
    let aux = order;
    for( var i = 0; i < aux.length; i++){     
      if ( aux[i].id === id) { 
        console.log(aux[i])  
        aux.splice(i, 1);
        console.log(aux);
        handleUpdateCart(aux);
      }    
   } 
   setUpdate(!update);
  };
  console.log(orderProduct);

  return (
    <TableRow>      
        <TableCell align="left">{orderProduct.name}</TableCell>
        <TableCell align="left">{orderProduct.score}</TableCell>
        <TableCell align="left">{orderProduct.quantity}</TableCell>
        <TableCell align="left">{orderProduct.price}</TableCell>
        <TableCell align="left">{orderProduct.total}</TableCell>
        <TableCell align="left" > 
            <IconButton aria-label="Add to Cart"  >
                <DeleteIcon onClick={() => handleRemoveFromCart(orderProduct.id)} />
            </IconButton> 
        </TableCell>
    </TableRow>
  );
});

export default CartItem;


