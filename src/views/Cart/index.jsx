"use client";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const [subTotal, setSubTotal] = useState(0);
  const [totalItem, setTotalItem] = useState(0);

  const incrementQuantity = (pItem) => {
    const updatedCart = cart.map((item) => {
      if (item.id === pItem.id && item.selectedSize === pItem.selectedSize) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decrementQuantity = (pItem) => {
    const updatedCart = cart.map((item) => {
      if (
        item.id === pItem.id &&
        item.selectedSize === pItem.selectedSize &&
        item.quantity > 1
      ) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (pItem) => {
    const updatedCart = cart.filter(
      (item) =>
        !(item.id === pItem.id && item.selectedSize === pItem.selectedSize)
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const updatedCart = [];
    const seenItems = new Map();

    for (const item of cart) {
      const itemKey = `${item.id}-${item.selectedSize}`;
      if (seenItems.has(itemKey)) {
        seenItems.get(itemKey).quantity += item.quantity;
      } else {
        seenItems.set(itemKey, { ...item });
      }
    }

    seenItems.forEach((item) => {
      updatedCart.push(item);
    });

    let total = 0;
    let totalquantity = 0;

    updatedCart.map((item) => {
      total = total + item.price * item.quantity;
      totalquantity = totalquantity + item.quantity;
    });

    setSubTotal(total);
    setTotalItem(totalquantity);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }, [cart]);

  return (
    <div className="min-h-[calc(100vh-64px)] w-full flex-col justify-center items-center relative">
      <div className="p-[50px]">
        <div className="w-full grid grid-cols-12 gap-y-[10px]">
          <div className="text-left col-span-5 border-b-[1px] pb-[5px] text-gray-400 font-semibold">
            Product
          </div>
          <div className="text-center col-span-1 border-b-[1px] pb-[5px] text-gray-400 font-semibold">
            Size
          </div>
          <div className="text-center col-span-4 border-b-[1px] pb-[5px] text-gray-400 font-semibold">
            Quanity
          </div>
          <div className="text-center col-span-1 border-b-[1px] pb-[5px] text-gray-400 font-semibold">
            Remove
          </div>
          <div className="text-right col-span-1 border-b-[1px] pb-[5px] text-gray-400 font-semibold">
            Total (LKR)
          </div>
          {cart && cart.length ? (
            cart.map((item) => (
              <>
                <div className="grid col-span-12 grid-cols-12 py-[20px] border-b-[1px]">
                  <div className="text-left col-span-5 flex items-center gap-[20px]">
                    <img
                      className="h-[100px] w-[100px] object-cover rounded"
                      src={item.image}
                    />
                    <div>
                      <div className="text-lg font-semibold">{item.name}</div>
                      <div className="text-xs">{`Product Code: ${item.id}`}</div>
                    </div>
                  </div>
                  <div className="text-center col-span-1 flex justify-center cursor-default items-center">
                    <div className="flex justify-center uppercase items-center w-[40px] h-[40px] border-[1px] font-semibold text-center rounded">
                      {item.selectedSize}
                    </div>
                  </div>
                  <div className="text-center col-span-4 flex justify-center items-center">
                    <button
                      className="flex justify-center text-center items-center w-[40px] h-[40px] border-[1px] font-semibold bg-[#f2f2f2] hover:bg-black hover:text-white duration-300 hover:border-black rounded-[5px_0px_0px_5px]"
                      onClick={() =>
                        decrementQuantity({
                          id: item.id,
                          selectedSize: item.selectedSize,
                        })
                      }
                    >
                      -
                    </button>
                    <div className="flex justify-center text-center items-center w-[40px] h-[40px] border-[1px] font-semibold cursor-default">
                      {item.quantity}
                    </div>
                    <button
                      className="flex justify-center text-center items-center w-[40px] h-[40px] border-[1px] font-semibold bg-[#f2f2f2] hover:bg-black hover:text-white duration-300 hover:border-black rounded-[0px_5px_5px_0px]"
                      onClick={() =>
                        incrementQuantity({
                          id: item.id,
                          selectedSize: item.selectedSize,
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="text-center col-span-1 flex justify-center items-center">
                    <button
                      className="text-center col-span-1 flex justify-center uppercase items-center w-[40px] h-[40px] border-[1px] font-semibold rounded text-black bg-[#f2f2f2] hover:bg-black hover:text-white duration-300"
                      onClick={() =>
                        removeFromCart({
                          id: item.id,
                          selectedSize: item.selectedSize,
                        })
                      }
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                  <div className="text-right col-span-1 flex justify-end items-center">
                    {item.price * item.quantity}
                  </div>
                </div>
              </>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="bg-[#f2f2f2] w-full py-[10px] sticky bottom-0 flex justify-end px-[20px] items-center">
        <div className="grid gap-[10px]">
          <div className="flex justify-between gap-[40px] items-center">
            <div className="font-semibold">
              <div className="text-lg">Sub Total</div>
              <div className="text-xs text-gray-500">{`${totalItem} items`}</div>
            </div>
            <div className="font-semibold text-2xl">{`${subTotal} LKR`}</div>
          </div>
          <button className="uppercase text-white text-sm bg-black py-[10px] w-full rounded font-semibold hover:bg-gray-800 duration-300">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
