import React, { useState } from "react";
import latest from "../../assets/home/sample-latest.jpg";
import SelectSize from "../../components/SelectSize";

const LatestCollections = () => {
  const [isSelectSizeOpen, setIsSelectSizeOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const products = [
    {
      id: 1,
      name: "Product 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      price: 5000,
      image: latest,
      sizes: [
        { label: "xxs", quantity: 2 },
        { label: "xs", quantity: 2 },
        { label: "s", quantity: 2 },
        { label: "m", quantity: 2 },
        { label: "l", quantity: 2 },
        { label: "xl", quantity: 2 },
        { label: "xxl", quantity: 0 },
      ],
    },

    {
      id: 2,
      name: "Product 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      price: 5000,
      image: latest,
      sizes: [
        { label: "xxs", quantity: 2 },
        { label: "xs", quantity: 2 },
        { label: "s", quantity: 2 },
        { label: "m", quantity: 2 },
        { label: "l", quantity: 2 },
        { label: "xl", quantity: 2 },
        { label: "xxl", quantity: 0 },
      ],
    },

    {
      id: 3,
      name: "Product 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      price: 5000,
      image: latest,
      sizes: [
        { label: "xxs", quantity: 2 },
        { label: "xs", quantity: 2 },
        { label: "s", quantity: 2 },
        { label: "m", quantity: 2 },
        { label: "l", quantity: 2 },
        { label: "xl", quantity: 2 },
        { label: "xxl", quantity: 0 },
      ],
    },

    {
      id: 4,
      name: "Product 4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      price: 5000,
      image: latest,
      sizes: [
        { label: "xxs", quantity: 2 },
        { label: "xs", quantity: 2 },
        { label: "s", quantity: 2 },
        { label: "m", quantity: 2 },
        { label: "l", quantity: 2 },
        { label: "xl", quantity: 2 },
        { label: "xxl", quantity: 0 },
      ],
    },

    {
      id: 5,
      name: "Product 5",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      price: 5000,
      image: latest,
      sizes: [
        { label: "xxs", quantity: 2 },
        { label: "xs", quantity: 2 },
        { label: "s", quantity: 2 },
        { label: "m", quantity: 2 },
        { label: "l", quantity: 2 },
        { label: "xl", quantity: 2 },
        { label: "xxl", quantity: 0 },
      ],
    },

    {
      id: 6,
      name: "Product 6",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      price: 5000,
      image: latest,
      sizes: [
        { label: "xxs", quantity: 2 },
        { label: "xs", quantity: 2 },
        { label: "s", quantity: 2 },
        { label: "m", quantity: 2 },
        { label: "l", quantity: 2 },
        { label: "xl", quantity: 2 },
        { label: "xxl", quantity: 0 },
      ],
    },

    {
      id: 7,
      name: "Product 7",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      price: 5000,
      image: latest,
      sizes: [
        { label: "xxs", quantity: 2 },
        { label: "xs", quantity: 0 },
        { label: "s", quantity: 2 },
        { label: "m", quantity: 2 },
        { label: "l", quantity: 2 },
        { label: "xl", quantity: 2 },
        { label: "xxl", quantity: 0 },
      ],
    },

    {
      id: 8,
      name: "Product 8",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      price: 5000,
      image: latest,
      sizes: [
        { label: "xxs", quantity: 2 },
        { label: "xs", quantity: 2 },
        { label: "s", quantity: 2 },
        { label: "m", quantity: 2 },
        { label: "l", quantity: 2 },
        { label: "xl", quantity: 2 },
        { label: "xxl", quantity: 0 },
      ],
    },

    {
      id: 9,
      name: "Product 9",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      price: 5000,
      image: latest,
      sizes: [
        { label: "xxs", quantity: 2 },
        { label: "xs", quantity: 2 },
        { label: "s", quantity: 2 },
        { label: "m", quantity: 2 },
        { label: "l", quantity: 2 },
        { label: "xl", quantity: 2 },
        { label: "xxl", quantity: 0 },
      ],
    },

    {
      id: 10,
      name: "Product 10",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      price: 5000,
      image: latest,
      sizes: [
        { label: "xxs", quantity: 2 },
        { label: "xs", quantity: 2 },
        { label: "s", quantity: 2 },
        { label: "m", quantity: 2 },
        { label: "l", quantity: 2 },
        { label: "xl", quantity: 2 },
        { label: "xxl", quantity: 0 },
      ],
    },
  ];

  const displayProducts = products.slice(0, 8);

  const handleOpen = (item) => {
    setIsSelectSizeOpen(true);
    setSelectedItem(item)
  };

  const handleClose = () => {
    setIsSelectSizeOpen(false);
  };

  return (
    <>
      <div id="latest" className="min-h-[calc(100vh-64px)] w-full flex flex-col justify-center text-center py-[64px]">
        <div
          className="w-full uppercase font-bold mb-[50px] text-xl flex text-center items-center justify-center pt-[20px]"
        >
          Latest Collections
        </div>
        <div className="grid grid-cols-4 gap-[50px] px-[20px] w-fit mx-auto">
          {displayProducts && displayProducts.length ? (
            displayProducts.map((item) => (
              <>
                <div className="flex justify-center items-center h-full">
                  <div className="w-[270px] h-[450px] bg-white rounded-[10px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)] relative overflow-hidden hover:scale-[105%] transition ease-in-out">
                    <div className="bg-[#e2e2e2] w-full h-[300px] rounded-[10px]">
                      <img
                        src={item.image}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="overflow-hidden text-left p-[10px]">
                      <div className="w-full font-medium">{item.name}</div>
                      <div className="w-full h-[70px] mb-[10px] overflow-hidden font-light text-xs">
                        {item.description}
                      </div>
                      <div className="w-full flex justify-between items-center">
                        <div className="font-light">{`LKR ${item.price}`}</div>
                        <button
                          className="uppercase text-xs bg-black text-white hover:bg-gray-800 duration-300 py-[5px] px-[10px] rounded-[20px_0_10px_20px] font-semibold"
                          onClick={() => {
                            handleOpen(item);
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {isSelectSizeOpen ? (
                  <SelectSize item={selectedItem} close={handleClose} />
                ) : (
                  <></>
                )}
              </>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default LatestCollections;
