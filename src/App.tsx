import { useState } from 'react';
import { useQuery } from 'react-query';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import { AddShoppingCart } from '@material-ui/icons';
import  Badge from '@material-ui/core/Badge';
import { Wrapper } from './App.styles';
import './App.css';

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amoun: number;
}

const getProducts = async (): Promise <CartItemType[]> => 
  await ( await fetch ('https://fakestoreapi.com/products')).json();
 
function App() {
const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);

console.log(data);

const getTotalItems = () => null;

const handleAddToCart = () => null;

const  handleRemoveFromCart = () => null;

if (isLoading) return <LinearProgress />


  return (
    <div className="App">
     <h1>Hi</h1>
    </div>
  );
}

export default App;
