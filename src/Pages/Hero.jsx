import React from "react";

const Hero = () => {
  return (
    <>
      <section className="grid grid-cols-1 md-grid-cols-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 justify-items-center bg-[#accbea5b]">
        {/* left Image */}
        <div className="md:flex md:gap-x-8">
          <img
            className="rounded-2xl lg:shadow-gray-700 shadow-gray-500 shadow-lg lg:shadow-xl sm:w-full md:w-1/2"
            src="https://media.istockphoto.com/id/184104512/photo/man-at-work-20-series.jpg?s=612x612&w=0&k=20&c=XtXxqjAQbvkcug__P8bn63g_ZZouTil0wJBuKAvLvhY="
            alt=""
          />
          <div className="lg:my-16 lg:h-[272px]  md:w-[472.73px] sm:space-y-2">
            <h1 className="inter-bold text-2xl sm:text-3xl lg:text-4xl mt-2 lg:mt-0 text-[#0B4D91]">
              Premium Residential & Commercial Painting
            </h1>
            <p className="lora-normal text-base font-bold lg:w-[433.23px]">
              Trusted, professional craftsmanship with meticulous prep, clean
              lines, and durable finishes. Serving homes and businesses with a
              corporate-level experience.
            </p>

            <div className="flex gap-x-2 mt-2 poppins-bold">
            <button className="bg-[#0B4D91] w-[141.8px] h-[39px] rounded-2xl text-white hover:cursor-pointer">Book a Site visit</button>
            <button className="bg-gray-200 w-[141.8px] h-[39px] rounded-2xl hover:cursor-pointer">View Portfolio</button>
          </div>

            <div className="mt-1">
              <p className="text-xs lora-normal text-[#6B7280]">Fully insured • Background-checked crews • Written warranty</p>
            </div>
          </div>

        </div>
      </section>
      <hr className="border-t-2 border-[#E6E8EA]"/>
    </>
  );
};

export default Hero;
