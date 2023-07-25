import React from "react";
import { Link } from "react-router-dom";
import pr1 from "../../image/pr1.jpg";
import pr2 from "../../image/pr2.jpg";
import pr3 from "../../image/pr3.jpg";
import "../../style/Latest.css";
import LatestBorder from "./LatestBorder";

const Latest = () => {
  return (
    <div>
      <div className="container-fluid mt-24">
        <div className="text-center">
          <h3 className=" mb-16 font-[dosis] uppercase text-lg	font-normal	latest">
            latest works
          </h3>
          <p className="font-normal	">
            Curabitur eu adipiscing lacus, a iaculis diam. Nullam placerat
            blandit auctor. Nulla accumsan ipsum et
            <br /> nibh rhoncus, eget tempus sapien ultricies. Donec mollis
            lorem vehicula.
          </p>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <Link to="/">
              <div className="text-area">
                <div className="box">
                  <img src={pr1} width="100%" />

                  <div className="team-text text-center">
                    <p className="uppercase font-[dosis] tracking-widest	">
                      man <br /> <span>External page</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <Link to="">
              <div className="text-area">
                <div className="box">
                  <img src={pr2} width="100%" />

                  <div className="team-text text-center">
                    <p className="uppercase font-[dosis] tracking-widest	">
                      women <br /> <span>External page</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <Link to="">
              <div className="text-area">
                <div className="box">
                  <img src={pr3} width="100%" />

                  <div className="team-text text-center">
                    <p className="uppercase font-[dosis] tracking-widest">
                      men with bag <br /> <span>External page</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <LatestBorder />
    </div>
  );
};

export default Latest;
