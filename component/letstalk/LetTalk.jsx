import React from "react";
import com from "../../image/com.png";
import "../../style/Lets.css";
const LetTalk = () => {
  return (
    <section>
      <div className="container pb-10">
        <div className="row items-center flex">
          <div className="col-lg-6 col-md-6 col-12 relative pt-8">
            <div className="media">
              <h3 className="uppercase font-[dosis] mb-6 font-light text-lg">
                LOOKING FOR EXCLUSIVE DIGITAL SERVICES?
              </h3>
              <p className="mb-9 font-normal text-base	">
                Proin fringilla augue at maximus vestibulum. Nam pulvinar vitae
                neque et porttitor. Integer non dapibus diam, ac eleifend
                lectus.
              </p>
              <button className="bg-gray-300 py-2 uppercase px-5 rounded-sm">
                lets talk
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6  col-12 mb-1 ">
            <img src={com} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetTalk;
