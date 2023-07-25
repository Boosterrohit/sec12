import React from "react";
import "../style/About.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const About = () => {
  return (
    <div>
      <div className="container font-[dosis] py-32">
        <div className="flex items-center justify-between respons">
          <h4 className="font-thin">ABOUT STUDIO</h4>
          <p className="mt-3 cursor-pointer font-normal aboup flex">
            MORE ABOUT US <MdOutlineKeyboardArrowRight size={15} />
          </p>
        </div>
        <div className="row flex items-center">
          <div className="col-lg-4 col-md-4 col-12">
            <div className="experience-items py-5">
              <div className="experience-item py-2">
                <div className="progress-line" data-percent="90%">
                  <span style={{ width: "90%" }}></span>
                </div>
                <div className="experience-info flex justify-between items-center">
                  <p className="back-progress font-semibold tracking-widest">
                    BRANDING, %
                  </p>
                  <p className="per mx-12">90</p>
                </div>
              </div>
              <div className="experience-item py-2">
                <div className="progress-line" data-percent="80%">
                  <span style={{ width: "80%" }}></span>
                </div>
                <div className="experience-info flex justify-between items-center">
                  <p className="back-progress font-semibold tracking-widest">
                    DESIGN, %
                  </p>
                  <p className="per mx-20">80</p>
                </div>
              </div>
              <div className="experience-item py-2">
                <div className="progress-line" data-percent="85%">
                  <span style={{ width: "85%" }}></span>
                </div>
                <div className="experience-info flex justify-between items-center">
                  <p className="back-progress font-semibold tracking-widest">
                    DEVELOPMENT, %
                  </p>
                  <p className="per mx-16">85</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <p className="text1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              maximus ligula semper metus pellentesque mattis. Maecenas
              volutpat, diam enim sagittis quam, id porta quam.sam fermentum
              nibh volutpat, accumsan purus. Sed id dolor consectetur fermentum
              nibh volutpat, accumsan purus.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <p className="text1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              maximus ligula semper metus pellentesque mattis. Maecenas
              volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
              consectetur fermentum nibh volutpat, accumsan purus. nibh
              volutpat, accumsan purus Utilities for controlling the tracking
              (letter spacing) of an element.
            </p>
          </div>
        </div>
      </div>
      <hr className="text-gray-500" />
    </div>
  );
};

export default About;
