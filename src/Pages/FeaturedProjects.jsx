import React from "react";
import arrowY from "../assets/SVG.svg";

const FeaturedProjects = () => {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-[#6b9fd054]">
          <div className="text-center space-y-4">
            <h1 className="text-2xl poppins-black text-[#0B4D91]">
              Featured Projects
            </h1>
            <p className="text-sm mt-2 mb-1">
              Before and after highlights from recent jobs.
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
                    </div>
                    <div className="diff-item-2" role="img">
                      <img
                        src={slider.afterImage}
                        alt="Before and After Images"
                      />
                    </div>
                    <div className="diff-resizer"></div>
                  </figure>
                </div>
              </div>
            ))}
          </div>
          {/* Centered buttons below the grid */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <button className="px-6 py-2 rounded-lg bg-[#0B4D91] text-white font-semibold shadow hover:bg-[#093a6c]">
              See Full Portfolio
            </button>
            <button className="px-6 py-2 rounded-lg bg-[#F2F5F4] text-[#0B4D91] font-semibold shadow border border-[#E6E8EA] hover:bg-[#e6e8ea]">
              Request Estimate
            </button>
          </div>
        </div>
      </section>
      <hr className="border-t-2 border-[#E6E8EA]" />
    </>
  );
};

export default FeaturedProjects;
