import React from "react";

const Material = () => {
  const materialListings = [
    {
      id: 1,
      productImage:
        "https://plus.unsplash.com/premium_photo-1681487367144-3ac7acfead6f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGFpbnQlMjBidWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      productName: "Premium Interior Paint - Satin",
      sizeAndType: "1 Gal • Low-VOC",
    },
    {
      id: 2,
      productImage:
        "https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFpbnQlMjBtYXR0ZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
      productName: "Exterior Weatherproof Paint - Matte",
      sizeAndType: "1 Gal • UV/Mildew Guard",
    },
    {
      id: 3,
      productImage:
        "https://plus.unsplash.com/premium_photo-1681487372049-015fdbb3608e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UGFpbnQlMjBidWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      productName: "Stain-Blocking Primer",
      sizeAndType: "1 Gal • High-Adhesion",
    },
    {
      id: 4,
      productImage:
        "https://plus.unsplash.com/premium_photo-1676322397244-8cdfecdbc07e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBhaW50JTIwYnJ1c2h8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      productName: "Pro Brush Set",
      sizeAndType: "3 pcs • Nylon/Poly",
    },
    {
      id: 5,
      productImage:
        "https://images.unsplash.com/photo-1652829069862-87874e119527?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGFpbnQlMjBidWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      productName: "Microfiber Roller Kit",
      sizeAndType: "9in • Tray + 2 Covers",
    },
    {
      id: 6,
      productImage: "https://images.unsplash.com/photo-1536356915696-c6bf1c01da46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hc2tpbmclMjB0YXBlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
      productName: "Masking Tape & Drop Covers",
      sizeAndType: "2 Rolls • 2 Covers",
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
              src="https://media.istockphoto.com/id/962884916/photo/blurred-paint-at-large-hardware-store-in-usa-customer-shopping.jpg?s=612x612&w=0&k=20&c=DsSNqLnj3DwwLlopep_BetwKEruFDjW1bLIsELpwaeY="
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
      <hr className="border-t-2 border-[#ef7d83c1]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 bg-[#dea8aa7d]">
        <div className="text-center">
          <h1 className="poppins-black text-2xl text-[#CC323A]">Product Gallery</h1>
          <p>Browse the materials we stock. Add to your list and request a tailored quote.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          {materialListings.map((material => (
            <div key={material.id}>
              <div className="border-2 border-[#cc323a65] rounded-lg p-2 gap-y-2 shadow-lg shadow-gray-500">
                <img src={material.productImage} alt="" className=" w-full rounded-lg"/>
                <div className="space-y-1 w-fit mt-1">
                <h2 className="poppins-bold text-[#CC323A]">{material.productName}</h2>
                <p>{material.sizeAndType}</p>
                </div>
              </div>
            </div>
          )))}
        </div>
      </section>
    </>
  );
};

export default Material;
