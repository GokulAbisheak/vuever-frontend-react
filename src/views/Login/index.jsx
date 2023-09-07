import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/logos/text-black.png";
import rotatedLogo from "../../assets/logos/text-white-rotated.png";

const Login = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-64px)] w-full flex justify-center items-center">
        <div className="flex h-[500px] bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] rounded overflow-hidden">
          <div className="w-[300px] h-full bg-black p-[50px] flex justify-center items-center gap-[10px]">
            <img className="h-full opacity-60" src={rotatedLogo} />
            <img className="h-full opacity-40" src={rotatedLogo} />
            <img className="h-full opacity-20" src={rotatedLogo} />
          </div>
          <div className="w-[350px] p-[50px] text-xs flex justify-center items-center">
            <div className="grid w-full gap-[10px]">
              <div className="w-full flex justify-center items-center mb-[20px]">
                <img className="w-[150px]" src={logo} />
              </div>
              <div className="grid gap-[5px]">
                <input
                  className="w-full h-[40px] px-[10px] border-[1px] border-[#808080] rounded"
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="w-full h-[40px] px-[10px] border-[1px] border-[#808080] rounded"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div>
                <input
                  className="bg-black hover:bg-[#333333] text-white font-semibold w-full h-[40px] text-xs just1fy-center uppercase rounded cursor-pointer duration-300"
                  type="submit"
                  value="Login"
                />
              </div>
              <div className="grid">
                <Link className="hover:text-[#666666] py-[2px]" to="/signup">
                  Don't have an account?
                </Link>
                <Link className="hover:text-[#666666] py-[2px]" to="/forgot">
                  Forgot password?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
