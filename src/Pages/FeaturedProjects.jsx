import React from "react";
import arrowY from "../assets/SVG.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const FeaturedProjects = () => {

   useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const beforeAfterSliders = [
    {
      id: 1,
      tag: "Modern Home Exterior",
      beforeImage:
        "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1760106311/IMG-20251010-WA0016_pe0dnn.jpg",
      afterImage:
        "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1760106282/IMG-20251010-WA0002_lx2nbe.jpg",
    },

    {
      id: 2,
      tag: "Living Room Refresh",
      beforeImage:
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1760106300/IMG-20251010-WA0012_xq7apl.jpg",
      afterImage:
      "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1760106282/IMG-20251010-WA0003_sc28up.jpg",
    },
  ];
  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-[#619ed79b]">
          <div data-aos="zoom-in">
          <div className="text-center space-y-4">
            <h1 className="text-2xl poppins-black text-[#0B4D91]">
              Featured Projects
            </h1>
            <p className="text-sm mt-2 mb-1">
             Move the Slider to see our Before and After highlights from recent jobs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-x-9">
            {beforeAfterSliders.map((slider) => (
              <div key={slider.id}>
                <div className="lg:h-[] rounded-xl border-2 bg-white border-[#536ec668] shadow-xl shadow-gray-500">
                  <div className="flex rounded-t-xl h-7 justify-between m-2 p-1">
                    <h2 className="text-black">{slider.tag}</h2>
                    <img className="h-5 w-5" src={arrowY} alt="xvxvxv" />
                  </div>
                  <figure
                    className="diff aspect-16/9 rounded-b-xl"
                    tabIndex={0}
                  >
                    <div className="diff-item-1" role="img" tabIndex={0}>
                      <img
                        src={slider.beforeImage}
                        alt="Before and After Images"
                      />
                      <p className="pl-3">Before</p>
                    </div>
                    <div className="diff-item-2" role="img">
                      <img
                        src={slider.afterImage}
                        alt="Before and After Images"
                      />
                      <p className="pr-3 text-end">After</p>
                    </div>
                    <div className="diff-resizer"></div>
                  </figure>
                </div>
              </div>
            ))}
          </div>
          {/* Centered buttons below the grid */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-x-2 mt-8">
            <Link to={'/Gallery'}>
            <button className="px-6 py-2 rounded-lg bg-[#0B4D91] text-white font-semibold shadow hover:bg-[#093a6c]">
              See Full Portfolio
            </button>
            </Link>
            <Link to={'/book-site-visit'}>
            <button className="px-6 py-2 rounded-lg bg-[#F2F5F4] text-[#0B4D91] font-semibold shadow border border-[#E6E8EA] hover:bg-[#e6e8ea]">
              Book a Site Visit
            </button>
            </Link>
          </div>
        </div>
        </div>
      </section>
            <hr className="border-t-2 border-[#7288cfb8]"/>

    </>
  );
};

export default FeaturedProjects;
