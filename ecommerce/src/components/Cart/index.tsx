import {Card, CardContent, Paper, Table, TableContainer, TableHead, TableBody, 
  TableRow, TableCell, Typography, Button, Grid, Container } from '@material-ui/core'

import React, { Fragment, memo, useCallback, useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ccyFormat, subtotal, generatorRandomId } from '../../shareds/functions/index';
import CartItem from './CartItem';
import useStales from './styles';
import {MainContext} from '../../contexts/MainContext';


const Cart = memo(() => {
  const value = useContext(MainContext);

  const classes = useStales();
  const { order, addOrder,  handleEmptyCart} = value;
  const TAX_FRETE = 10;  
  const id:string = generatorRandomId();
  //const auxOrder =  ;
  //const results  =  order || []  ;
  const invoiceSubtotal = subtotal(order);  
  console.log(order); 
  
  const handleFinishOrder = () => {    
    addOrder({id, order});    
  }  
  const invoiceFrete = TAX_FRETE * order.length;

  const handleCalFrete = () => {
    if(invoiceSubtotal>= 250){
      return(0);
    }   
    return(invoiceFrete);
  }
  const invoiceTotal = invoiceFrete  + invoiceSubtotal;

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">Você não tem itens no seu carrinho,
      <Link className={classes.link} to="/">Comece a adicionando alguns</Link>!
    </Typography>
  );  

  const renderCart = () => (
    <Fragment>
     <Card>
       <CardContent>
         <Grid container justify='space-between' alignItems='center' spacing={2}>
           <Grid item xs={12} sm={6} lg={4}>
             {/* <SearchField paginationParams={params} onChange={mergeParams} /> */}
           </Grid>
           <Grid item xs={12} sm={'auto'}>
            <div>
              <Button className={classes.emptyButton} 
                size="large" type="button" variant="contained" color="secondary"
                onClick={() => handleEmptyCart()}>Empty cart</Button>
                
              <Button className={classes.checkoutButton} 
                onClick={handleFinishOrder}
                component={Link} to="/checkout" size="large" type="button" variant="contained" 
                color="primary">Checkout</Button>
            </div>
             
           </Grid>
         </Grid>
       </CardContent>
       <TableContainer component={Paper}>
         <Table className={classes.table}>
           <TableHead>
             <TableRow>
               <TableCell align="center" colSpan={3}>
                 Detalhes
               </TableCell>
               <TableCell align="right">Preço</TableCell>
              </TableRow>
             <TableRow>               
               <TableCell align="left">Descrição</TableCell>
               <TableCell align="left">Score</TableCell>
               <TableCell align="left">Quantidade</TableCell>
               <TableCell align="left">Unidade</TableCell>
               <TableCell align="left">Total</TableCell>
               <TableCell align="left">Ações</TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             { order.map((item: any) => (
             
               <CartItem key={item.id} orderProduct={item}  /*  onDelete={handleRemoveFromCart}  */ />
             )) } 
             <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>  
             <TableRow>
                <TableCell>Frete*</TableCell>
               <TableCell align="right">{`R$ ${TAX_FRETE} por item `}</TableCell>
                <TableCell align="right">
                  {
                  (handleCalFrete() === 0)? 'Frete grátis' : ccyFormat(handleCalFrete())
                  }
                </TableCell>
            </TableRow>            

             <TableRow>
               <TableCell colSpan={2}>Total</TableCell>
               <TableCell align="right"> {ccyFormat(invoiceTotal)}</TableCell>
             </TableRow>
           </TableBody>
         </Table>
        </TableContainer>
       
     </Card>
     
   </Fragment>
  
  )
   
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { (order.length === 0 )? renderEmptyCart() : renderCart() } 
      
    </Container>
  );
}); export default Cart;



