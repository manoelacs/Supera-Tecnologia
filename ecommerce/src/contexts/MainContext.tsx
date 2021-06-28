import { ReactNode, useEffect, useState } from 'react'
import { createContext } from 'react';
import IOrder from '../interfaces/models/order';
import IProduct from '../interfaces/models/product';
import IItem from '../interfaces/models/item';
import productsList from '../data/products.json';

type MainContextType = {
    products: IItem[],
    order: IProduct[],
    cart: IOrder[],
    update: boolean,
    addOrder: (order:any) => void, 
    handleAddToCart: (product: IProduct) => void,
    handleUpdateCart: (orders: IProduct[]) => void,
   /*  handleRemoveFromCart: (id: number) => void, */
    handleEmptyCart: () =>  void,
    setUpdate: (isUpdate: boolean) => void,

}

type MainContextProviderProps = {
    children: ReactNode;
}

export const MainContext = createContext( {} as MainContextType);

export function MainContextProvider(props: MainContextProviderProps){
    const [products, setProducts] = useState( productsList as IItem[] );
    const [cart, setCart] = useState<IOrder[]>([]);
    const [order, setOrder] = useState<IProduct[]>([]);
    const [update, setUpdate] = useState<boolean>(false);
    
    

    const addOrder = (order: IOrder[]) => {    
        //console.log(order);   
          setCart(cart.concat(order));    
         // console.log(cart); 
    };
    const handleAddToCart = (product: IProduct) => {    
        setOrder([...order, product]);    
    };
    useEffect(() => {
       setCart(cart);
       setOrder(order) 
    },[cart, order, update])

    useEffect(() => {setProducts(productsList)}, []);
    const handleUpdateCart = (orders:IProduct[]) => {
        setOrder(orders);
    };

    const handleCaptureCheckout = () => {
        //console.log('checkout');
    }   
    
    const handleEmptyCart = () => {
        setOrder([]);
    }
      
    return(
        <MainContext.Provider 
        value={{ 
            products, 
            cart, 
            order, 
            update,
            addOrder,
            handleAddToCart,
            handleUpdateCart,  
            handleEmptyCart,  
            setUpdate,         
            
        }}>
            {props.children}
        </MainContext.Provider>

    )

}

