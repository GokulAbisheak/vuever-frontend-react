"use client";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const SelectSize = (props) => {
  const [selected, setSelected] = useState();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);  

  const handleAddCart = () => {
    props.item.selectedSize = selected;
    props.item.quantity = 1;

    const addItem = props.item;
    const newItem = [...cart, addItem]
    localStorage.setItem("cart", JSON.stringify(newItem));

    props.close();
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center fixed top-0 left-0 z-10">
        <div
          className="h-screen w-full bg-black bg-opacity-20 flex justify-center items-center fixed top-0 left-0 z-10"
          onClick={props.close}
        ></div>
        <div className="z-20">
          <div className="p-[32px] bg-white rounded text-left relative">
            <button
              className="absolute top-[5px] right-[10px]"
              onClick={props.close}
            >
              <FontAwesomeIcon
                className="text-3xl text-black hover:text-neutral-600"
                icon={faXmark}
              />
            </button>
            <div className="flex flex-wrap gap-[20px]">
              <div className="w-[135px] h-[150px] rounded overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src={props.item.image}
                />
              </div>
              <div>
                <div className="font-semibold">{props.item.name}</div>
                <div className="font-light">{`LKR ${props.item.price}`}</div>
                <div className="mt-[20px]">
                  <div>Sizes</div>
                  <div className="flex flex-wrap gap-[10px] mt-[5px]">
                    {props.item.sizes && props.item.sizes.length ? (
                      props.item.sizes.map((item) => (
                        <button
                          id={item.label}
                          key={item.label}
                          className={`uppercase border-2 border-black rounded font-semibold w-[50px] h-[50px] disabled:text-gray-200 disabled:border-gray-200 disabled:hover:bg-white ${
                            selected === item.label
                              ? `bg-black text-white hover:bg-black`
                              : `hover:bg-gray-200`
                          }`}
                          onClick={(e) => {
                            setSelected(e.target.id);
                          }}
                          disabled={item.quantity <= 0 ? true : false}
                        >
                          {item.label}
                          {/* { item.quantity <= 0 ? (
                            <div className="text-[7px] text-red-500">
                                Out of Stock
                            </div>
                        ):(
                            <>
                            </>
                        ) } */}
                        </button>
                      ))
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end w-full pt-[30px]">
              <button
                className="uppercase rounded-[20px] text-xs p-[10px] font-bold text-white bg-black hover:bg-gray-700 duration-300 disabled:bg-gray-200 hover:disabled:bg-gray-200"
                disabled={selected ? false : true}
                onClick={() => {
                  handleAddCart();
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectSize;
