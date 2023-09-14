import { Link } from "react-router-dom";
import logo from "../../assets/logos/text-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCartShopping,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Header = (props) => {
  const [isDrop, setIsDrop] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    if(cart.length) {
      let count = 0;
      cart.map((item) => {
        count = count + item.quantity;
      })

      setCount(count);
    }
  }, []);

  return (
    <>
      <div className="h-[64px] w-full bg-black sticky top-0 text-white flex justify-between items-center px-[20px] z-50">
        <div>
          <Link to="/">
            <img className="h-[24px]" src={logo} />
          </Link>
        </div>
        <div className="flex gap-[30px] text-sm items-center">
          <Link className="hover:scale-125 transition" to="/">
            Home
          </Link>
          <div
            className="flex gap-[5px] h-[64px] items-center relative cursor-pointer"
            onMouseOver={() => {
              setIsDrop(true);
            }}
            onMouseOut={() => {
              setIsDrop(false);
            }}
          >
            Collections
            <FontAwesomeIcon icon={faCaretDown} />
            {isDrop ? (
              <div className="absolute top-[64px] left-[-20px] bg-[#212121] flex flex-col w-max">
                <Link
                  to="/collections/#summer"
                  className="p-[20px] hover:bg-neutral-900 duration-300"
                >
                  Summer Collections
                </Link>
                <Link
                  to="/collections/#winter"
                  className="p-[20px] hover:bg-neutral-900 duration-300"
                >
                  Winter Collections
                </Link>
              </div>
            ) : (
              <></>
            )}
          </div>
          <Link className="hover:scale-125 transition" to="/giftcard">
            Gift Card
          </Link>
          <Link className="hover:scale-125 transition" to="/about">
            About
          </Link>
          <Link className="hover:scale-125 transition" to="/contact">
            Contact
          </Link>
        </div>
        <div className="flex gap-[10px] items-center">
          <div className="h-[40px] w-[200px] bg-[#212121] rounded-full flex items-center">
            <input
              className="h-[40px] rounded-[20px_0px_0px_20px] w-[160px] mr-[10px] bg-transparent text-white text-xs px-[16px] outline-0"
              placeholder="Search Products..."
            />
            <FontAwesomeIcon className="cursor-pointer" icon={faSearch} />
          </div>
          <Link to="/cart">
            <button className="hover:bg-white hover:bg-opacity-10 w-[40px] h-[40px] rounded-full flex items-center justify-center relative">
              <FontAwesomeIcon
                className="cursor-pointer text-lg"
                icon={faCartShopping}
              />
              {count > 0 ? (
                <div className="absolute rounded-[20px] bg-red-600 text-white text-[10px] w-[15px] h-[15px] absolute top-[0px] right-[0px] items-center justify-center">
                  {props.count || count}
                </div>
              ) : (
                <></>
              )}
            </button>
          </Link>
          {isLogged ? (
            <button className="hover:bg-white hover:bg-opacity-10 w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                className="cursor-pointer text-lg"
                icon={faUser}
              />
            </button>
          ) : (
            <div className="text-sm hover:text-[#bbbbbb] transition">
              <Link to="/login">Login</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
