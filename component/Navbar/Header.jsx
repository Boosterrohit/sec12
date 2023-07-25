import React from "react";
import Carousel from "react-bootstrap/Carousel";
import s1 from "../../image/sk1.jpg";
import s2 from "../../image/sk2.jpg";
import s3 from "../../image/sk3.jpg";
import "../../style/Style.css";

const Header = () => {
  return (
    <div className="headermain">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 relative h-screen bg-black/80"
            src={s1}
            alt="First slide"
          />
          <Carousel.Caption className="leading-5">
            <p className="font-[dosis] tracking-widest text-base font-normal z-10 uppercase mb-8 text-white">
              HELLO & WELCOME
            </p>
            <div className="font-[dosis] mb-8 div">WE ARE RHYTHM</div>
            <div>
              <button>PRICING</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block kk w-100" src={s2} alt="Second slide" />

          <Carousel.Caption>
            <p className="font-[dosis] tracking-widest text-base font-normal	uppercase mb-8 z-10 text-white">
              WE ARE JUST CREATIVE PEOPLE
            </p>
            <div className="font-[dosis] mb-8 div">RHYTHM STUDIO</div>

            <div>
              <button>PRICING</button>
              <button className="px-4 uppercase text-white mx-2">SHOW</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={s3} alt="Third slide" />

          <Carousel.Caption>
            <p className="font-[dosis] tracking-widest text-base font-normal mb-8  z-10 text-white uppercase">
              Create your dream with
            </p>
            <div className="font-[dosis] mb-8 div">AMAZING DESIGN</div>

            <div>
              <button>PRICING</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
