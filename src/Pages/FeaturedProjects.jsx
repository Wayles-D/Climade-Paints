import React from "react";
import arrowY from "../assets/SVG.svg";

const FeaturedProjects = () => {
  const beforeAfterSliders = [
    {
      id: 1,
      tag: "Modern Home Exterior",
      beforeImage:
        "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp",
      afterImage:
        "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp",
    },

    {
      id: 2,
      tag: "Living Room Refresh",
      beforeImage:
        "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp",
      afterImage:
        "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp",
    },
  ];
  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ">
          <div className="text-center">
            <h1 className="text-2xl poppins-black text-[#0B4D91]">
              Featured Projects
            </h1>
            <p className="text-sm mt-2 mb-1 inter-bold">
              Before and after highlights from recent jobs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:gap-9">
            {beforeAfterSliders.map((slider) => (
              <div key={slider.id}>
                <div className="lg:h-[] rounded-xl border-2  border-[#E6E8EA]">
                  <div className="flex rounded-t-xl bg-white h-7 justify-between m-2 p-1">
                    <h2 className="text-black">{slider.tag}</h2>
                    <img className="h-5 w-5" src={arrowY} alt="xvxvxv" />
                  </div>
                  <figure className="diff aspect-16/9 rounded-b-xl" tabIndex={0}>
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
        </div>
      </section>
      <hr className="border-t-2 border-[#E6E8EA]" />
    </>
  );
};

export default FeaturedProjects;
