import React from "react";
import collections from "../../data/collections.json";

const Collections = () => {
  return (
    <>
      {collections && collections.length ? (
        collections.map((item, index) => (
          <>
            <div key={item.key} id={item.key} className={`min-h-[calc(100vh-64px)] w-full ${index != 0 ? 'pt-[64px]' : ''}`}>
              <div className="w-full h-[calc(100vh-64px)] relative">
                <img
                  src={`/${item.image}`}
                  className="object-cover w-full h-full"
                />
                <div className="w-full h-[calc(100vh-64px)] absolute bg-black bg-opacity-75 top-0 flex flex-col items-center justify-center gap-[50px]">
                  <div className="uppercase text-white font-bold text-6xl text-center">
                    {item.title}
                  </div>
                  <div className="max-w-[600px] px-[50px] text-center text-white">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
            <div className="min-h-[calc(100vh-64px)] w-full"></div>
          </>
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default Collections;
