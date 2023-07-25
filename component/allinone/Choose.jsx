import React from "react";
import { SlFlag } from "react-icons/sl";
import { BsClockHistory } from "react-icons/bs";
import { GiAirBalloon } from "react-icons/gi";
import Choose2 from "./Choose2";
import "../../style/Choose.css";

const Choose = () => {
  return (
    <div className="choose">
      <div className="container">
        <h3 className="text-center font-[dosis] font-normal py-24 mt-11 text-lg">
          WHY CHOOSE US?
        </h3>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <div className="mainbox">
              <div className="icons flex justify-center">
                <SlFlag size={60} />
              </div>
              <h4 className="text-center py-3 mt-2 text-sm font-[dosis]">
                WE’RE CREATIVE
              </h4>
              <p>
                Lorem ipsum dolor sit amet, c-r adipiscing elit. In maximus
                ligula semper metus pellentesque mattis. Maecenas volutpat, diam
                enim.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="mainbox">
              <div className="icons flex justify-center">
                <BsClockHistory size={60} />
              </div>
              <h4 className="text-center py-3 mt-2 text-sm font-[dosis]">
                WE’RE PUNCTUAL
              </h4>
              <p>
                Proin fringilla augue at maximus vestibulum. Nam pulvinar vitae
                neque et porttitor. Praesent sed nisi eleifend, lorem fermentum
                orci sit amet, iaculis libero.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="mainbox">
              <div className="icons flex justify-center">
                <GiAirBalloon size={60} />
              </div>
              <h4 className="text-center py-3 mt-2 text-sm font-[dosis]">
                WE HAVE MAGIC
              </h4>
              <p>
                Curabitur iaculis accumsan augue, nec finibus mauris pretium eu.
                Duis placerat ex gravida nibh tristique porta. Nulla facilisi.
                Suspendisse ultricies eros blandit.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Choose2 />
        </div>
      </div>
    </div>
  );
};

export default Choose;
