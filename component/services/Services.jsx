import React, { useState } from "react";
import { GiHorseHead } from "react-icons/gi";
import { TiDeviceDesktop } from "react-icons/ti";
import { RiPencilRuler2Line } from "react-icons/ri";
import { VscSettingsGear } from "react-icons/vsc";
import { TfiCamera } from "react-icons/tfi";
import ServiceLink from "./ServiceLink";
import ServiceLink2 from "./ServiceLink2";
import ServiceLink3 from "./ServiceLink3";
import "../../style/Services.css";
import ServiceLink4 from "./ServiceLink4";
import ServiceLink5 from "./ServiceLink5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ServiceLink6 from "./ServiceLink6";
import { NavLink } from "react-router-dom";

const Services = (props) => {
  const [toggle, setToggle] = useState(1);
  function updateToggle(id) {
    setToggle(id);
  }
  return (
    <>
      <div>
        <div className="container font-[dosis]">
          <div>
            <h3 className="uppercase text-center text-lg font-normal leading-normal pt-28">
              services
            </h3>
          </div>
          <div className="container main-menu">
            <div className="row sub-menu flex justify-around">
              <div className="col-lg-2 col-md-2 col-4">
                <div
                  className={
                    toggle === 1
                      ? "active flex flex-col  items-center"
                      : "flex flex-col  items-center"
                  }
                  onClick={() => updateToggle(1)}
                >
                  <GiHorseHead size={60} />
                  <p className="uppercase">branding</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-4">
                <div
                  className={
                    toggle === 2
                      ? "active flex flex-col  items-center"
                      : "flex flex-col  items-center"
                  }
                  onClick={() => updateToggle(2)}
                >
                  <TiDeviceDesktop size={60} />
                  <p className="uppercase">web design</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-4">
                <div
                  className={
                    toggle === 3
                      ? "active flex flex-col  items-center"
                      : "flex flex-col  items-center"
                  }
                  onClick={() => updateToggle(3)}
                >
                  <RiPencilRuler2Line size={60} />
                  <p className="uppercase">graphical design</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 kt">
                <div
                  className={
                    toggle === 4
                      ? "active flex flex-col  items-center"
                      : "flex flex-col  items-center"
                  }
                  onClick={() => updateToggle(4)}
                >
                  <VscSettingsGear size={60} />
                  <p className="uppercase">development</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-6 kt">
                <div
                  className={
                    toggle === 5
                      ? "active flex flex-col  items-center"
                      : "flex flex-col  items-center"
                  }
                  onClick={() => updateToggle(5)}
                >
                  <TfiCamera size={60} />
                  <p className="uppercase">photography</p>
                </div>
              </div>
            </div>
          </div>

          <div className={toggle === 1 ? "show-content" : "content"}>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <ServiceLink2 />
                <p className="text2">JEFF BEZOS </p>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <ServiceLink />
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <ServiceLink3 />
              </div>
            </div>
          </div>
          <div className={toggle === 2 ? "show-content" : "content"}>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <ServiceLink4 />
                <p className="text2">STEVE KRUG</p>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <ServiceLink5 />
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <ServiceLink6 />
              </div>
            </div>
          </div>
          <div className={toggle === 3 ? "show-content" : "content"}>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <h3 className="leading font-light	text-3xl">
                  Never fall in love with an idea. They’re whores. If the one
                  you’re with isn’t doing the job, always another.
                </h3>
                <p className="text2">CHIP KIDD</p>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <p>
                  Lorem ipsum dolor sit semper amet, consectetur adipiscing
                  elit. In maximus ligula metus pellentesque mattis. Donec vel
                  ultricies purus. Nam dictum sem, ipsum aliquam . Praesent sed
                  nisi eleifend, fermentum orci amet, iaculis libero.
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <p>
                  Pellentesque suscipit ante at ullamcorper pulvinar neque
                  porttitor. Integer lectus. Etiam sit amet fringilla lacus.
                  Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed
                  id dolor consectetur fermentum volutpat nibh, accumsan purus.
                </p>
              </div>
            </div>
          </div>
          <div className={toggle === 4 ? "show-content" : "content"}>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <h3 className="leading font-light	text-3xl">
                  All that is valuable in human society depends upon the
                  opportunity for development accorded the individual.
                </h3>
                <p className="text2">ALBERT EINSTEIN</p>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <p>
                  Fusce hendrerit vitae nunc id gravida. Donec euismod quis ante
                  at mattis. Mauris dictum ante sit amet enim interdum semper.
                  Vestibulum odio justo, faucibus et dictum eu, malesuada nec
                  neque. Maecenas volutpat, diam enim sagittis.
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <p>
                  Pellentesque suscipit ante at ullamcorper pulvinar neque
                  porttitor. Sed id dolor consectetur fermentum volutpat nibh,
                  accumsan purus. Lorem ipsum dolor sit semper amet, consectetur
                  adipiscing elit. Inmed maximus ligula metus pellentesque.
                </p>
              </div>
            </div>
          </div>
          <div className={toggle === 5 ? "show-content" : "content"}>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <h3 className="leading font-light	text-3xl">
                  Photography is the simplest thing in the world, but it is
                  incredibly complicated to make it really work.
                </h3>
                <p className="text2">MARTIN PARR</p>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <p>
                  Donec vel ultricies purus. Nam dictum sem, ipsum aliquam .
                  Etiam sit amet fringilla lacus. Pelenteque suscipit ante at
                  ullamcorper pulvinar neque portor. Integer lectus. Praesent
                  sed nisi eleifend, fermetum orci amet, iaculis libero.
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <p>
                  Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed
                  id dolor consectetur fermentum volutpat nibh, accumsan purus.
                  Lorem ipsum dolor sit semper amet, consectetur adipiscing
                  elit. In maximus ligula metus pellentesque mattis.
                </p>
              </div>
            </div>
          </div>
          <p className="text-center aboup cursor-pointer pt-4 font-semibold">
            VIEW ALL SERVICES
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
