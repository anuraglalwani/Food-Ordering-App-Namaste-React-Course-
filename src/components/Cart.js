import React from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/store/cartSlice";
function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-wrapper">
      <h2>Cart</h2>
      <span onClick={handleClearCart}>Clear Cart</span>
      {cartItems.length == 0 && <p>Cart is empty! Please add items.</p>}
      <CategoryList cards={cartItems} />
    </div>
  );
}

export default Cart;
