import React from "react";
import { TbBrandWechat } from "react-icons/tb";
import { CgBrowser } from "react-icons/cg";
import "../style/Work.css";
import { AiOutlineHeart } from "react-icons/ai";
const WorkProgress = () => {
  return (
    <div className="wp">
      <div className="container py-32">
        <div className="row items-center ">
          <div className="col-lg-3 col-md-3 col-12">
            <h3 className="mb-4 uppercase font-[dosis] font-light	">
              Work Progress
            </h3>
            <p className="wp1">
              Lorem ipsum dolor sit amet, c-r adipiscing elit. In maximus ligula
              semper metus pellentesque mattis. Maecenas volutpat, diam enim.
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <div className="flex justify-center">
              <TbBrandWechat size={80} />
            </div>
            <p className="text-center uppercase mt-3 font-normal text-sm dd ">
              1. Discuss
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <div className="flex justify-center">
              <CgBrowser size={80} />
            </div>
            <p className="text-center uppercase mt-3 font-normal text-sm dd">
              2. make
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <div className="flex justify-center">
              <AiOutlineHeart size={80} />
            </div>
            <p className="text-center uppercase mt-3 font-normal text-sm dd">
              3. product
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProgress;
