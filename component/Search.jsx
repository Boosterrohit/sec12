import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import "../../src/component/allinone/Awesome.css";

const Search = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container text-center mt-52 base py-20">
          <div className="search-item">
            <h4 className="mb-4 font-[dosis] text-base ">
              STAY INFORMED WITH OUR NEWSLETTER
            </h4>
            <div className="order-section flex justify-center items-center">
              <input
                type="text"
                placeholder="ENTER YOUR EMAIL"
                className="font-[dosis]"
              />
              <div className="subscribe">
                <button className=" bg-gray-800 text-white px-2 py-2 mx-1 rounded-sm font-[dosis] tracking-widest">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
          <div className="info flex  justify-center mt-3">
            <div className="mt-1">
              <BsInfoCircleFill size={9} />
            </div>
            <p>Please trust us, we will never send you spam</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
