import { Button } from "@material-ui/core";

//Types
import { CartItemType } from "../App";

//Styles
import { Wrapper } from "./CartItem.styles";

type Props = {
   item: CartItemType;
   addToCart: (clickedItem: CartItemType) => void;
   removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = () => (
   <Wrapper>
   Cart Item
   </Wrapper>
)

export default CartItem;