import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IOrder from './interfaces/models/order';
import IProduct from './interfaces/models/product';
import IItem from './interfaces/models/item';
import productsList from './data/products.json';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/index';
import Cart from './components/Cart/index';

import { MainContextProvider } from './contexts/MainContext';

function App() {
  
  //const [mobileOpen, setMobileOpen] = React.useState(false);
 /*  const [products, setProducts] = useState( productsList as IItem[] );
  const [cart, setCart] = useState<IOrder[]>([]);
  const [order, setOrder] = useState<IProduct[]>([]); */
  //const [errorMessage, setErrorMessage] = useState('');
 /*  let aux;
  //console.log(productsList, products)  
 

  const addOrder = (order:any) => {    
    //console.log(order);   
      setCart(cart.concat(order));    
     // console.log(cart); 
  };
  

  const handleAddToCart = (product: IProduct) => {  
    //console.log(order);  
    setOrder([...order, product]);    
   // console.log(order); 
  };

   const handleUpdateCart = (orders:any) => {
    setOrder(orders);
  };

  const handleRemoveFromCart = (id: number) => {    
    aux = order;
    for( var i = 0; i < aux.length; i++){     
      if ( aux[i].id === id) { 
        console.log(aux[i])  
        aux.splice(i, 1);
        handleUpdateCart(aux);
        console.log(order);
        console.log("alterado");
      }    
   }    
  };
  const handleCaptureCheckout = () => {
    //console.log('checkout');
  }

  const handleEmptyCart = () => {
    setOrder([]);
  }
  useEffect(() => {setCart(cart)},[cart])
  useEffect(() => {setOrder(order)},[order, aux]);  
  useEffect(() => {setProducts(productsList)}, []); */
  
  return (
    <BrowserRouter>
      <MainContextProvider>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar /* totalItems={order.length} */ /* handleDrawerToggle={() => setMobileOpen(!mobileOpen)} */ />
        <Switch>
          <Route exact path="/" component={Products}/>
          <Route exact path="/cart" component={Cart}/>     
          
          {/* <Route path="/checkout" exact>
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route> */} 
        </Switch>
      </div>
    </MainContextProvider>
  </BrowserRouter>
  );
}

export default App;
