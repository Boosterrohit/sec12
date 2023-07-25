import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../allinone/Awesome.css";
const Awesome = () => {
  return (
    <>
      <div className="py-26">
        <div className="container">
          <div className="row sliding flex justify-center items-center">
            <div className="col-lg-5 col-md-5 col-12">
              <h3 className="font-[dosis] mb-7">CLEAR DESIGN</h3>
              <p className="mb-7">
                Phasellus facilisis mauris vel velit molestie pellentesque.
                Donec rutrum, tortor ut elementum venenatis, purus magna
                bibendum nisl, ut accumsan ipsum erat eu sapien.
              </p>
              <button className="font-[dosis]">BUY NOW</button>
            </div>
            <div className="col-lg-7 col-md-7 col-12">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block flex justify-center mt-3 w-100"
                    src="https://rhythm.bestlooker.pro/rhythm-original/images/promo-4.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 mt-3 "
                    src="https://rhythm.bestlooker.pro/rhythm-original/images/portfolio/full-project-4.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Awesome;
