"use client";

import Link from "next/link";
import Styles from "./Cart.module.css";

import { useCart } from "@/hooks/useCart";
import CartItem from "./CartItem";

const CartPage = () => {
  const { cart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className={Styles.empty}>
        <h1>Your Cart is Empty</h1>

        <p>Add some products to continue shopping.</p>

        <Link href="/products">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <main className={Styles.container}>
      <h1 className={Styles.heading}>Shopping Cart</h1>

      <div className={Styles.wrapper}>
        <div className={Styles.items}>
          {cart.map((item) => (
            <CartItem key={`${item.id}-${item.selectedSize}`} item={item} />
          ))}
        </div>

        <div className={Styles.summary}>
          <h2>Order Summary</h2>

          <div className={Styles.total}>
            <span>Total:</span>

            <strong>Rs. {cartTotal}</strong>
          </div>

          <button>Proceed To Checkout</button>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
