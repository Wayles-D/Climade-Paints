import React from "react";

const Gallery = () => {
  const projects = [
    {
      id: 1,
      projectImage:
        "https://plus.unsplash.com/premium_photo-1723901831135-782c98d8d8e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbSUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
      projectName: "Parkside Living Room",
      tags: ["Interior", "Matte + Semi-Gloss"],
    },
    {
      id: 2,
      projectImage:
        "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG91c2UlMjBFeHRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
      projectName: "Oakridge Exterior",
      tags: ["Exterior", "Weatherproof"],
    },
    {
      id: 3,
      projectImage:
        "https://images.unsplash.com/photo-1604328702728-d26d2062c20b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      projectName: "Beacon Office Suite",
      tags: ["Commercial", "Low Odour"],
    },

    {
      id: 4,
      projectImage:
        "https://plus.unsplash.com/premium_photo-1723901831135-782c98d8d8e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbSUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
      projectName: "Parkside Living Room",
      tags: ["Interior", "Matte + Semi-Gloss"],
    },
    {
      id: 5,
      projectImage:
        "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG91c2UlMjBFeHRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
      projectName: "Oakridge Exterior",
      tags: ["Exterior", "Weatherproof"],
    },
    {
      id: 6,
      projectImage:
        "https://images.unsplash.com/photo-1604328702728-d26d2062c20b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      projectName: "Beacon Office Suite",
      tags: ["Commercial", "Low Odour"],
    },
    {
      id: 7,
      projectImage:
        "https://plus.unsplash.com/premium_photo-1723901831135-782c98d8d8e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbSUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
      projectName: "Parkside Living Room",
      tags: ["Interior", "Matte + Semi-Gloss"],
    },
    {
      id: 7,
      projectImage:
        "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG91c2UlMjBFeHRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
      projectName: "Oakridge Exterior",
      tags: ["Exterior", "Weatherproof"],
    },
    {
      id: 9,
      projectImage:
        "https://images.unsplash.com/photo-1604328702728-d26d2062c20b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      projectName: "Beacon Office Suite",
      tags: ["Commercial", "Low Odour"],
    },
  ];
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 justify-items-center bg-[#de898c7d]">
        <div>
          {/* left Image */}
          <div className="md:flex md:gap-x-8">
            <img
              className="rounded-2xl lg:shadow-gray-700 shadow-gray-500 shadow-lg lg:shadow-xl sm:w-full md:w-1/2 md:animate__animated md:animate__backInLeft"
              src="https://media.istockphoto.com/id/184104512/photo/man-at-work-20-series.jpg?s=612x612&w=0&k=20&c=XtXxqjAQbvkcug__P8bn63g_ZZouTil0wJBuKAvLvhY="
              alt=""
            />
            <div className="md:my-auto md:h-[200px]  md:w-[602.8px] sm:space-y-2  md:animate__animated md:animate__backInRight">
              <h1 className="inter-bold text-2xl sm:text-3xl lg:text-4xl mt-2 lg:mt-0 text-[#CC323A] lg:w-[541.88px]">
                Premium Paints & Materials, Expertly Supplied
              </h1>
              <p className="lora-normal text-base font-bold lg:w-[433.23px]">
                We’re specialists in both painting and supply. Explore
                contractor-grade paints, primers, tools, and
                accessories—handpicked for lasting results.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-t-2 border-[#CC323A]"/>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 bg-[#de898c7d]">
        <div className="flex-wrap md:flex justify-between">
          <div className="flex flex-wrap gap-y-2 justify-evenly space-x-3 text-xs sm:text-[16px]">
            <p className="p-2 border-2 rounded-xl border-accent-content bg-white/40 text-red-500">
              All
            </p>
            <p className="p-2 border-2 rounded-xl border-accent-content bg-white/40">
              Interiors
            </p>
            <p className="p-2 border-2 rounded-xl border-accent-content bg-white/40">
              Exteriors
            </p>
            <p className="p-2 border-2 rounded-xl border-accent-content bg-white/40">
              Commercials
            </p>
          </div>

          <div className="flex p-2 space-x-3 rounded-xl border-2 border-black w-auto mt-2 md:mt-0 focus-within:border-red-500 transition-colors">
            <img
              src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1762371448/SVG_i8lnpj.png"
              alt="search-icon"
              className="w-[18px] h-[19px] mt-0.5 text-black"
            />
            <input
              type="search"
              placeholder="Search Projects..."
              className="border-none outline-none bg-transparent w-full over"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          {projects.map((project) => (
            <div key={project.id}>
              <div className="border-2 border-[#cc323a65] rounded-lg p-2 gap-y-2 shadow-lg shadow-gray-500">
                <img
                  src={project.projectImage}
                  alt=""
                  className=" w-full rounded-lg"
                />
                <div className="mt-1 justify-between">
                  <div className="space-y-1 w-fit">
                    <h2 className="poppins-bold text-[#CC323A]">
                      {project.projectName}
                    </h2>
                  </div>

                  <div className="flex gap-2 w-fit">
                    {project.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        className="p-1 bg-white/50 border-1 border-accent text-[#CC323A] rounded-2xl"
                      >
                        <p className="px-1 text-xs">{tag}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="join flex justify-center items-center mt-3 text-[#CC323A] gap-x-1">
          <button className="join-item btn rounded-l-lg">Prev</button>
          <button className="join-item btn rounded-sm">1</button>
          <button className="join-item btn btn-active rounded-sm">2</button>
          <button className="join-item btn rounded-sm">3</button>
          <button className="join-item btn rounded-r-lg">Next</button>
        </div>
      </section>
    </>
  );
};

export default Gallery;
