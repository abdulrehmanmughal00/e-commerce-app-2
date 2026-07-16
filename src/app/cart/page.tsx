"use client";

import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

import { useCartContext } from "@/context/CartContext";
import Styles from "./Cart.module.css";

const CartPage = () => {
  const {
    cart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCartContext();

  const [isOrdering, setIsOrdering] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const orderOnWhatsApp = () => {
    if (
      !customer.name ||
      !customer.phone ||
      !customer.address ||
      !customer.city
    ) {
      toast.error("Please fill customer details");
      return;
    }

    if (!/^92\d{10}$/.test(customer.phone)) {
      toast.error("Please enter valid Pakistan phone number");
      return;
    }

    setIsOrdering(true);

    let message = "Hello, I want to place an order:\n\n";

    message += `Customer Name: ${customer.name}\n`;
    message += `Phone: ${customer.phone}\n`;
    message += `Address: ${customer.address}\n`;
    message += `City: ${customer.city}\n\n`;

    message += "Products:\n\n";

    cart.forEach((item) => {
      message += `Product: ${item.title}\n`;
      message += `Size: ${item.selectedSize}\n`;
      message += `Quantity: ${item.quantity}\n`;
      message += `Price: Rs. ${item.newPrice * item.quantity}\n`;
      message += `Product Link: ${window.location.origin}/product/${item.id}\n\n`;
    });

    message += `Total: Rs. ${cartTotal}`;

    const phoneNumber = "923332081678";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    const whatsappWindow = window.open(url, "_blank");

    if (whatsappWindow) {
      clearCart();
      toast.success("Order details sent to WhatsApp");
      setIsOrdering(false);
    } else {
      toast.error("Please allow popup to open WhatsApp");
      setIsOrdering(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className={Styles.empty}>
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className={Styles.container}>
      <h1 className={Styles.heading}>Shopping Cart</h1>

      <div className={Styles.wrapper}>
        <div className={Styles.items}>
          {cart.map((item) => (
            <div
              className={Styles.cartItem}
              key={`${item.id}-${item.selectedSize}`}
            >
              <div className={Styles.imageBox}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={150}
                  height={150}
                />
              </div>

              <div className={Styles.details}>
                <h3>{item.title}</h3>

                <p>Size: {item.selectedSize}</p>

                <p>Price: Rs. {item.newPrice}</p>

                <div className={Styles.quantity}>
                  <button
                    onClick={() => decreaseQuantity(item.id, item.selectedSize)}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id, item.selectedSize)}
                  >
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
          ))}
        </div>

        <div className={Styles.summary}>
          <h2>Customer Details</h2>

          <input
            name="name"
            placeholder="Full Name"
            value={customer.name}
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone Number (92XXXXXXXXXX)"
            value={customer.phone}
            onChange={handleChange}
          />

          <input
            name="address"
            placeholder="Address"
            value={customer.address}
            onChange={handleChange}
          />

          <input
            name="city"
            placeholder="City"
            value={customer.city}
            onChange={handleChange}
          />

          <div className={Styles.total}>
            <span>Total:</span>
            <strong>Rs. {cartTotal}</strong>
          </div>

          <button onClick={orderOnWhatsApp} disabled={isOrdering}>
            {isOrdering ? "Opening WhatsApp..." : "Order on WhatsApp"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
