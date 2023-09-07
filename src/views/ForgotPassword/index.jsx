import React from "react";

const Forgot = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-64px)] w-full flex justify-center items-center">
        <div className="w-[400px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] rounded text-sm p-[40px]">
          <div className="grid w-full gap-[20px]">
            <div className="grid w-full">
              <div className="uppercase text-xl font-bold text-center">
                Reset your password
              </div>
              <div className="text-xs text-center text-[#808080]">
                (We will send you an OTP to your email)
              </div>
            </div>
            <div className="grid w-full gap-[10px]">
              <input
                className="w-full h-[40px] px-[10px] border-[1px] border-[#808080] rounded"
                type="text"
                placeholder="Email"
              />
              <input
                className="bg-black hover:bg-[#333333] text-white font-semibold w-full h-[40px] text-xs just1fy-center uppercase rounded cursor-pointer duration-300"
                type="submit"
                value="Confirm"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;
