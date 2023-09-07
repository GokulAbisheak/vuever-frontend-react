import { faFacebook, faFacebookF, faInstagram, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap bg-black py-[50px] px-[100px] text-white text-sm">
        <div className="w-1/3 flex flex-col gap-[20px]">
          <div className="text-lg font-semibold">Quick Links</div>
          <div className="grid gap-[10px]">
            <Link to="/">Home</Link>
            <Link to="/collection">Collection</Link>
            <Link to="/giftcard">Gift Card</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-[20px]">
          <div className="text-lg font-semibold">Support</div>
          <div className="grid gap-[10px]">
            <Link to="/faq">FAQ</Link>
            <Link to="/security">Security</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-[20px]">
          <div className="text-lg font-semibold">Keep in Touch</div>
          <div className="flex flex-col gap-[10px]">
            Get the latest updates and information regarding VUEVER by following our socials
            <div className="flex gap-[15px]">
                <button className="hover:scale-125 transition text-3xl"><FontAwesomeIcon icon={faInstagram} /></button>
                <button className="hover:scale-125 transition text-3xl"><FontAwesomeIcon icon={faSquareFacebook} /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[40px] w-full flex justify-center items-center">
        Developed by Developers at&nbsp;<span className="font-semibold">VUEVER</span>
      </div>
    </>
  );
};

export default Footer;
