"use client";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));

  return (
  <div>
    {cart && cart.length ? cart.map((item) => (
        <div>
            {cart.name}
        </div>
    )) : (<></>)}
  </div>
  );
};

export default Cart;
