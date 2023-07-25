import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { FaSnapchatSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="py-16">
        <div className="container text-center">
          <div className="items-center flex justify-center mt-11 mb-3">
            <img
              src="https://rhythm.bestlooker.pro/rhythm-original/images/logo-footer.png"
              width="100px"
            />
          </div>
          <div className="flex justify-center items-center py-7">
            <AiOutlineFacebook size={30} />
            <AiOutlineTwitter size={30} />
            <AiFillLinkedin size={30} />
            <AiFillInstagram size={30} />
            <FaSnapchatSquare size={30} />
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xs">
          @ Rohit Sah
          <br />
          <span>Made with love for great people.</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
