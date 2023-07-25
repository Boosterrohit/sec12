import React from "react";
import "../../style/Collection.css";
import { HiShoppingCart } from "react-icons/hi";

const Collection = () => {
  return (
    <>
      <div>
        <div className="container">
          <h3 className="font-[dosis] text-lg tracking-widest mt-24 font-normal">
            BESTSELLERS
          </h3>
          <div className="row pt-24 colect font-[dosis]">
            <div className="col-lg-3 col-md-3 col-12">
              <div className="image">
                <img
                  src="https://rhythm.bestlooker.pro/rhythm-original/images/shop/shop-prev-1.jpg"
                  width="100%"
                />
                <div className="sale bg-red-700 w-11 uppercase font-bold font-[dosis] rounded-sm text-center text-white">
                  Sale
                </div>
              </div>
              <h5 className="text-center">G-STAR POLO APPLIQUE JERSEY</h5>
              <p className="text-center">
                <del>$1500.00</del>
                <span className="font-bold">$94.75 </span>
              </p>
              <div className="flex justify-center">
                <button className="bg-gray-300 uppercase font-[dosis] py-1 px-4 rounded-sm flex items-center">
                  <HiShoppingCart />
                  add to cart
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className="image">
                <img
                  src="https://rhythm.bestlooker.pro/rhythm-original/images/shop/shop-prev-2.jpg"
                  width="100%"
                />
              </div>
              <h5 className="text-center">ONLY & SONS PIQUE POLO SHIRT</h5>
              <p className="text-center font-bold">$28.99</p>
              <div className="flex justify-center">
                <button className="bg-gray-300 uppercase font-[dosis] py-1 px-4 rounded-sm flex items-center">
                  <HiShoppingCart /> add to cart
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className="image">
                <img
                  src="https://rhythm.bestlooker.pro/rhythm-original/images/shop/shop-prev-3.jpg"
                  width="100%"
                />
              </div>
              <h5 className="text-center">LONGLINE LONG SLEEVE</h5>
              <p className="text-center font-bold">$39.99</p>
              <div className="flex justify-center">
                <button className="bg-gray-300 uppercase font-[dosis] py-1 px-4 rounded-sm flex items-center">
                  <HiShoppingCart /> add to cart
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className="image">
                <img
                  src="https://rhythm.bestlooker.pro/rhythm-original/images/shop/shop-prev-4.jpg"
                  width="100%"
                />
              </div>
              <h5 className="text-center">POLO SHIRT WITH FLORAL SLEEVES</h5>
              <p className="text-center font-bold">$85.99</p>
              <div className="flex justify-center">
                <button className="bg-gray-300 uppercase font-[dosis] py-1 px-4 rounded-sm flex items-center">
                  <HiShoppingCart /> add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
