import React from "react";
import "../allinone/Awesome.css";

const News = () => {
  return (
    <>
      <div className="pt-20">
        <div className="container">
          <h3 className="font-[dosis] text-lg leading-6 lead">LATEST NEWS</h3>
          <div className="row pt-16 news ">
            <div className="col-lg-4 col-md-4 col-12 mt-4 py-5">
              <div className="mainimage">
                <img
                  src="https://rhythm.bestlooker.pro/rhythm-original/images/blog/post-prev-1.jpg"
                  width="100%"
                />
              </div>
              <div className="h-part">
                <h6 className="font-[dosis] mt-4">NEW WEB DESIGN TRENDS</h6>
                <p className="text-gray-400 font-semibold text-xs">
                  JOHN DOE | 10 DECEMBER
                </p>
              </div>
              <div className="head-section">
                <p className="leading-7">
                  Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed
                  id dolor consectetur fermentum nibh volutpat, accumsan purus.
                </p>
              </div>
              <button className="bg-gray-300 py-1 px-4 rounded-sm text-gray-600 uppercase font-[dosis] text-xs tracking-widest">
                Read more
              </button>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mt-4 py-5">
              <div className="mainimage">
                <img
                  src="https://rhythm.bestlooker.pro/rhythm-original/images/blog/post-prev-2.jpg"
                  width="100%"
                />
              </div>
              <div className="h-part">
                <h6 className="font-[dosis] mt-4">
                  MINIMALISTIC DESIGN FOREVER
                </h6>
                <p className="text-gray-400 font-semibold text-xs">
                  JOHN DOE | 9 DECEMBER
                </p>
              </div>
              <div className="head-section">
                <p className="leading-7">
                  Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed
                  id dolor consectetur fermentum nibh volutpat, accumsan purus.
                </p>
              </div>
              <button className="bg-gray-300 py-1 px-4 rounded-sm text-gray-600 uppercase font-[dosis] text-xs tracking-widest">
                Read more
              </button>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mt-4 py-5">
              <div className="mainimage">
                <img
                  src="https://rhythm.bestlooker.pro/rhythm-original/images/blog/post-prev-3.jpg"
                  width="100%"
                />
              </div>
              <div className="h-part">
                <h6 className="font-[dosis] mt-4">NEW WEB DESIGN TRENDS</h6>
                <p className="text-gray-400 font-semibold text-xs">
                  JOHN DOE | 10 DECEMBER
                </p>
              </div>
              <div className="head-section">
                <p className="leading-7">
                  Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed
                  id dolor consectetur fermentum nibh volutpat, accumsan purus.
                </p>
              </div>
              <button className="bg-gray-300 py-1 px-4 rounded-sm text-gray-600 uppercase font-[dosis] text-xs tracking-widest">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
