import React from "react";

const OurServices = () => {
  const serviceListings = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1647996179012-66b87eba3d17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBwYWludGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      heading: "Interior Painting",
      text: "Smooth, even coverage with low-VOC paints for living rooms, kitchens, and bedrooms.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlJTIwZXh0ZXJpb3IlMjBwYWludGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      heading: "Exterior Painting",
      text: "Weather-resistant finishes and thorough prep for lasting curb appeal.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UmVzaWRlbnRpYWx8ZW58MHx8MHx8fDA%3D",
      heading: "Residential",
      text: "From single rooms to full-home repaints, done on schedule and on budget",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1576961453646-b4c376c7021b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE9mZmljZXN8ZW58MHx8MHx8fDA%3D",
      heading: "Commercial",
      text: "Offices, retail, and multi-unit properties with minimal downtime.",
    },
  ];
  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
          <h1 className="poppins-black text-2xl text-[#0B4D91]">Our Services</h1>
          <p className="text-sm mt-2 mb-1">
            Interior, exterior, and specialty coatings delivered with precision
            and care.
          </p>
            </div>
          <div className="gap-6 lg:gap-16 grid grid-cols-1 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:w-[1120px] rounded-[12px] p-1">
            {serviceListings.map((service) => (
              <div key={service.id} className="border-2 lg:w-[268px] lg:h-[253px] rounded-lg border-[#E6E8EA]">
                <img
                  src={service.image}
                  alt=""
                  className="lg:w-[266px] lg:h-[140px] rounded-t-lg"
                />
                <div className="p-2 gap-y-8">
                  <h1 className="h-[20px] inter-bold text-[#0B4D91]">{service.heading}</h1>
                  <p className="poppins-regular-italic">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
            <hr className="border-t-2 border-[#E6E8EA]"/>

    </>
  );
};

export default OurServices;
