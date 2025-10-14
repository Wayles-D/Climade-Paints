import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const whatWeDoCard = [
    {
      id: "1",
      icon: "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1760229416/Group_1_ktwixk.svg",
      cardTitle: "Interior Painting",
      cardText:
        "Walls, ceilings, trim, cabinets. Dust control, clean masking, and low-VOC systems.",
      tags: ["Color matching", "Cabinet Refinishing", "Stain & Seal"],
    },
    {
      id: "2",
      icon: "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1760229586/Group_2_zyxpii.svg",
      cardTitle: "Exterior Painting",
      cardText:
        "Power wash, scrape, prime, and weather-rated coatings for lasting curb appeal.",
      tags: ["Weather Proof", "Wood & Stucco", "Decks & Fences"],
    },
    {
      id: "3",
      icon: "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1760229760/iconify-icon_zqdves.svg",
      cardTitle: "Commercial Projects",
      cardText:
        "Office, retail, and common areas with after-hours scheduling and safety-first ops.",
      tags: ["After Hours", "Low Odor", "Site Safety"],
    },
  ];
  const planningCards = [
    {
      id: "1",
      cardTitle: "Prep & Protection",
      cardIcon:
        "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1760227069/Group_kqtp86.svg",
      cardTexts: [
        "Detailed surface inspection, patching, sanding, and priming.",
        "Floor, furniture, and fixture protection; HEPA dust control.",
        "Color sampling and sheen guidance for each room or facade.",
      ],
    },
    {
      id: "2",
      cardTitle: "Materials & Coatings",
      cardIcon:
        "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1760227069/Group_kqtp86.svg",
      cardTexts: [
        "Low-VOC paints for healthy interiors; specialty primers for problem areas.",
        "Weather-rated finishes for exteriors: UV, moisture, and mildew resistant.",
        "Industrial coatings for commercial high-traffic zones.",
      ],
    },
  ];

  const ourProcessCard = [
    {
      id: "1",
      no: 1,
      cardTitle: "Site Visit & Estimate",
      cardText: "Measure, document, and provide a clear line-item proposal.",
    },
    {
      id: "2",
      no: 2,
      cardTitle: "Color & Plan",
      cardText: "Finalize colors, schedule, and job site protections.",
    },
    {
      id: "3",
      no: 3,
      cardTitle: "Prep & Paint",
      cardText: "Surface repairs, priming, and professional application.",
    },
    {
      id: "4",
      no: 4,
      cardTitle: "Walkthrough & Warranty",
      cardText: "Detailed inspection, touch-ups, and documented warranty.",
    },
  ];
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 justify-items-center bg-[#dea8aa7d]">
        <div>
          {/* left Image */}
          <div className="md:flex md:gap-x-8">
            <img
              className="rounded-2xl lg:shadow-gray-700 shadow-gray-500 shadow-lg lg:shadow-xl sm:w-full md:w-1/2 md:animate__animated md:animate__backInLeft"
              src="https://media.istockphoto.com/id/184104512/photo/man-at-work-20-series.jpg?s=612x612&w=0&k=20&c=XtXxqjAQbvkcug__P8bn63g_ZZouTil0wJBuKAvLvhY="
              alt=""
            />
            <div className="md:my-auto md:h-[200px]  md:w-[472.73px] sm:space-y-2  md:animate__animated md:animate__backInRight">
              <h1 className="inter-bold text-2xl sm:text-3xl lg:text-4xl mt-2 lg:mt-0 text-[#CC323A]">
                Painting Services
              </h1>
              <p className="lora-normal text-base font-bold lg:w-[433.23px]">
                End-to-end residential and commercial painting with precise
                prep, premium coatings, and clean finishes—delivered on time.
                From the first consultation to the final touch, we handle every
                step with care and expertise to ensure results that last and
                impress.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-t-2 border-[#ef7d83c1]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28  bg-[#dea8aaa5]">
        <div data-aos="zoom-in">
          <div className="text-center">
            <h1 className="poppins-black text-2xl text-[#CC323A]">
              What We Do
            </h1>
            <h2>Core offerings tailored to your property and schedule.</h2>
          </div>

          <div className=" mt-2 grid  grid-cols-1 md:grid-cols-3 gap-6">
            {whatWeDoCard.map((wwdCard) => (
              <div
                key={wwdCard.id}
                className="border-3 rounded-lg px-2 py-2 border-[#e77d81e1] space-y-2 shadow-gray-500 shadow-lg hover:scale-105 transition-transform duration-200
"
              >
                <div className="flex gap-x-1">
                  <img src={wwdCard.icon} alt="" />
                  <h1 className="font-bold text-[#CC323A]">
                    {wwdCard.cardTitle}
                  </h1>
                </div>
                <p className="lora-normal text-gray-950">{wwdCard.cardText}</p>
                <div className="space-x-2 space-y-2 space-">
                  {wwdCard.tags.map((tag, tagIndex) => (
                    <button
                      key={tagIndex}
                      className="bg-[#CC323A] px-2 h-[29px] rounded-xl text-white font-semibold"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="md:flex items-center md:justify-between backdrop-blur-xl bg-white/60 shadow-xl p-6 space-y-4 border-[#CC323A] border-2">
            <div className="space-y-1">
              <h1 className="text-2xl poppins-bold text-[#CC323A]">
                We don't just Paint — we also supply painting Materials.
              </h1>
              <p className="lora-normal">
                From paint buckets to brushes and accessories, we provide
                everything you need for your next project.
              </p>
            </div>

            <div>
              <button className="text-white bg-[#CC323A] p-2 rounded-lg poppins-bold">
                View Materials
              </button>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:flex gap-2 justify-between space-y-3 sm:space-y-0">
          {planningCards.map((card) => (
              <div key={card.id} className="w-full border-2 border-[#CC323A] border-rounded p-2 rounded-lg bg-white/60">
                <h1 className="text-[#CC323A] font-bold">{card.cardTitle}</h1>
                <div>
                  {card.cardTexts.map((text, textIndex) => (
                    <div key={textIndex} className="flex space-x-2">
                      <img src={card.cardIcon} alt="checkmark-icon"/>
                      <div>
                        <p className="text-xs">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
          ))}
        </section>
      </section>
      <hr className="border-t-2 border-[#ef7d83c1]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28  bg-[#dea8aa74]">
        <div data-aos="zoom-in">
          <div className="text-center ">
            <h1 className="poppins-black text-2xl text-[#CC323A]">
              Our Process
            </h1>
            <h2>Structured steps to deliver a clean, reliable finish.</h2>
          </div>

          <div className=" mt-2 grid  grid-cols-1 md:grid-cols-4 gap-6 animate__animated animate__bounce">
            {ourProcessCard.map((processCard) => (
              <div
                key={processCard.id}
                className="border-3 rounded-lg px-2 py-2 border-[#e77d81e1] shadow-gray-500 shadow-lg hover:scale-105 transition-transform duration-200
"
              >
                <h6 className="text-[#CC323A] font-bold">{processCard.no}</h6>
                <h1 className="poppins-black text-[#CC323A]">
                  {processCard.cardTitle}
                </h1>
                <p className="lora-normal text-gray-950">
                  {processCard.cardText}
                </p>
              </div>
            ))}
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="md:flex items-center md:justify-between backdrop-blur-xl bg-white/20 shadow-xl p-6 space-y-4">
            <div className="space-y-1">
              <h1 className="text-2xl poppins-bold text-[#CC323A]">
                Tell us about your project
              </h1>
            </div>

            <div className="space-x-2 space-y-2">
              <button className="text-[#CC323A] border-[#CC323A] border-2 border-rounded bg-white p-2 rounded-lg poppins-bold">
                Request an Estimate
              </button>
              <button className="text-white bg-[#CC323A] border-white border-2 border-rounded p-2 rounded-lg poppins-bold">
                Book a Site visit
              </button>
            </div>
          </div>
        </section>
      </section>

      <hr className="border-t-2 border-[#ef7d83c1]" />
    </>
  );
};

export default Services;
