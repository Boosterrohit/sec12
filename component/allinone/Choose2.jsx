import React from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { SlGraph } from "react-icons/sl";
import { TbBrandWechat } from "react-icons/tb";
import "../../style/Choose.css";
const Choose2 = () => {
  return (
    <div className="choose">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <div className="mainbox">
              <div className="icons flex justify-center">
                <AiOutlineHeart size={60} />
              </div>
              <h4 className="text-center py-3 mt-2 text-sm font-[dosis]">
                WE LOVE MINIMALISM
              </h4>
              <p>
                Cras luctus interdum sodales. Quisque quis odio dui. Sedes sit
                amet neque malesuada, lobortis commodo magna ntesque pharetra
                metus vivera sagittis.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="mainbox">
              <div className="icons flex justify-center">
                <SlGraph size={60} />
              </div>
              <h4 className="text-center py-3 mt-2 text-sm font-[dosis]">
                WE’RE RESPONSIBLE
              </h4>
              <p>
                Fusce aliquet quam eget neque ultrices elementum. Nulla posuere
                felis id arcu blandit sagittis. Eleifender vestibulum purus, sit
                amet vulputate risus.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="mainbox">
              <div className="icons flex justify-center">
                <TbBrandWechat size={60} />
              </div>
              <h4 className="text-center py-3 mt-2 text-sm font-[dosis]">
                WE'RE FRIENDLY
              </h4>
              <p>
                Pulvinar vitae neque et porttitor. Integer non dapibus diam, ac
                eleifend lectus. Praesent sed nisi eleifend, fermentum orci sit
                amet, iaculis libero interdum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose2;
