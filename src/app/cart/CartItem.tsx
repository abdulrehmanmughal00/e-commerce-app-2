"use client";

import Image from "next/image";
import Styles from "./cartItem.module.css";
import type { CartItem as CartItemType } from "@/context/CartContext";
import { useCart } from "@/hooks/useCart";

interface Props {
  item: CartItemType;
}

const CartItem = ({ item }: Props) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className={Styles.item}>
      <div className={Styles.image}>
        <Image src={item.image} alt={item.title} width={120} height={120} />
      </div>

      <div className={Styles.details}>
        <h3>{item.title}</h3>

        <p>Size: {item.selectedSize}</p>

        <p>Price: Rs. {item.newPrice}</p>

        <div className={Styles.actions}>
          <button onClick={() => decreaseQuantity(item.id, item.selectedSize)}>
            -
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => increaseQuantity(item.id, item.selectedSize)}>
            +
          </button>
        </div>

        <button
          className={Styles.remove}
          onClick={() => removeFromCart(item.id, item.selectedSize)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
