import React from "react";
import "../allinone/Awesome.css";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { ImMail } from "react-icons/im";
import Discuss from "./Discuss";

const FindUs = () => {
  return (
    <>
      <div className="py-36 find">
        <div className="container">
          <h3 className="text-center font-[dosis] mb-16 text-gray-600">
            FINE US
          </h3>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12 check">
              <div className="flex justify-center ">
                <FaPhoneSquareAlt size={40} />
                <div>
                  <p className="px-2 font-[dosis]">
                    CALL US
                    <br />
                    <span className="font-bold"> +61 3 8376 6284</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 check">
              <div className="flex justify-center">
                <GrMapLocation size={40} />
                <div>
                  <p className="px-2 font-[dosis]">
                    ADDRESS <br />
                    <span className="font-bold">245 Quigley Blvd, Ste K</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 check">
              <div className="flex justify-center">
                <ImMail size={40} />
                <div>
                  <p className="px-2 font-[dosis]">
                    EMAIL <br />
                    <span className="font-bold">support@bestlooker.pro</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Discuss />
    </>
  );
};

export default FindUs;
