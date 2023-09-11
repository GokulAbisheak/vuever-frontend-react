import React from "react";
import summer from "../../assets/home/hawai-shirt.png";
import winter from "../../assets/home/winter-style.png";
import collections from "../../data/collections.json"
import { Link } from "react-router-dom";

const NewCollections = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] w-full flex flex-col justify-center text-center">
      {collections && collections.length ? (
        collections.map((item, index) => (
          <div
            className={`flex justify-between px-[100px] min-h-[calc(100vh-64px)] items-center ${
              index % 2 == 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="w-[550px] h-[450px] bg-gray-100 rounded-[10px] overflow-hidden">
              <img
                src={item.image}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-[550px] h-[450px] rounded-[10px] flex flex-col justify-center items-center gap-[30px]">
              <div className="uppercase font-bold text-xl">{item.title}</div>
              <div className="font-medium">{item.description}</div>
              <Link to={item.link}>
                <button className="px-[20px] py-[10px] bg-black rounded-full uppercase font-bold text-md hover:bg-gray-700 text-white duration-300">
                  {`View ${item.title}`}
                </button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default NewCollections;
