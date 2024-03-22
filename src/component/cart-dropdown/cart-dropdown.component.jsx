import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Link to="/checkout">
        <Button style={{ fontSize: "12px" }}>GO TO CHECKOUT</Button>
      </Link>
    </CartDropdownContainer>
  );
}
