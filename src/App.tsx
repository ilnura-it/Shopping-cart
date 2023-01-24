import { useState } from 'react';
import { useQuery } from 'react-query';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import { AddShoppingCart } from '@material-ui/icons';
import  Badge from '@material-ui/core/Badge';
import { Wrapper, StyledButton } from './App.styles';
import './App.css';
import Item from './Item/Item';

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
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[])
const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);

const getTotalItems = () => null;

const handleAddToCart = (clickedItem: CartItemType) => null;

const  handleRemoveFromCart = () => null;

if (isLoading) return <LinearProgress />
if (error) return <div>Something went wrong ...</div>

  return (
<Wrapper>
  <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
    Cart goes here
  </Drawer>

  <StyledButton onClick = {() => setCartOpen(true)}>
    
  </StyledButton>

   <Grid container spacing={3}>
        {data?.map((item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        )))}
      </Grid>
</Wrapper>
     

  );
}

export default App;
