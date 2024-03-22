import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";
export default function CartIcon() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { cartItemCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer>
      <ShoppingIcon onClick={toggleIsCartOpen} />
      <ItemCount>{cartItemCount}</ItemCount>
    </CartIconContainer>
  );
}
