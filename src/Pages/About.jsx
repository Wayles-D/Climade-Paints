import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const firstCardContents = [
    {
      id: "1",
      cardTitle: "Professional Standards",
      cardText:
        "Licensed and insured teams, documented scopes, and detailed surface prep for dependable results. Every project is handled with structure and precision, ensuring consistent quality, safe work practices, and finishes that stand the test of time.",
    },
    {
      id: "2",
      cardTitle: "Client-Centered Process",
      cardText:
        "Clear timelines, tidy job sites, and daily updates from your dedicated project lead. We keep communication open and progress transparent, so you always know what’s happening and when your space will be ready.",
    },
    {
      id: "3",
      cardTitle: "Premium Materials",
      cardText:
        "Low-VOC, durable coatings matched to your surfaces and climate for long-lasting finishes. We use premium products that protect, perform, and preserve your space, without compromising air quality or appearance.",
    },
  ];
  const byTheNumbersCard = [
    { id: "1", cardTitle: "20+", cardText: "Years in Business" },
    { id: "2", cardTitle: "1200+", cardText: "Projects Completed" },
    { id: "3", cardTitle: "100%", cardText: "Insured and bonded" },
  ];
  const values = [
    {
      id: "1",
      cardTitle: "Craftsmanship",
      cardText:
        "Surface prep, priming, and application techniques that stand up to scrutiny.",
    },
    {
      id: "2",
      cardTitle: "Communication",
      cardText: "Clear expectations, daily updates, and post-job walkthroughs.",
    },
    {
      id: "3",
      cardTitle: "Integrity",
      cardText: "Transparent pricing, reliable timelines, and tidy work sites.",
    },
  ];
  return (
    <>
      <section className="grid grid-cols-1 md-grid-cols-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 justify-items-center bg-[#dea8aa7d]">
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
                About Us
              </h1>
              <p className="lora-normal text-base font-bold lg:w-[433.23px]">
                We deliver premium residential and commercial painting with
                corporate-grade planning, clean execution, and respectful
                service across every project. From quality paints to expert
                application, we bring color and precision to your walls,
                creating lasting finishes that reflect care, skill, and
                attention to detail.
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
              Who We Are
            </h1>
            <h2>
              Experienced professionals focused on quality, safety, and
              accountability.
            </h2>
          </div>

          <div className=" mt-2 grid  grid-cols-1 md:grid-cols-3 gap-6">
            {firstCardContents.map((texts) => (
              <div
                key={texts.id}
                className="border-3 rounded-lg px-2 py-2 border-[#e77d81e1] space-y-2 shadow-gray-500 shadow-lg hover:"
              >
                <h1 className="poppins-black text-[#CC323A]">
                  {texts.cardTitle}
                </h1>
                <p className="lora-normal text-gray-950">{texts.cardText}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="border-t-2 border-[#ef7d83c1]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28  bg-[#dea8aa74]">
        <div data-aos="zoom-in">
          <div className="text-center ">
            <h1 className="poppins-black text-2xl text-[#CC323A]">
              By The Numbers
            </h1>
            <h2>Proven delivery at scale.</h2>
          </div>

          <div className=" mt-2 grid  grid-cols-1 md:grid-cols-3 gap-6 animate__animated animate__bounce">
            {byTheNumbersCard.map((byn) => (
              <div
                key={byn.id}
                className="border-3 rounded-lg px-2 py-2 border-[#e77d81e1] shadow-gray-500 shadow-lg hover:"
              >
                <h1 className="poppins-black text-[#CC323A]">
                  {byn.cardTitle}
                </h1>
                <p className="lora-normal text-gray-950">{byn.cardText}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="border-t-2 border-[#ef7d83c1]" />

      {/* Our Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28  bg-[#dea8aa74]">
        <div data-aos="zoom-in">
          <div className="text-center ">
            <h1 className="poppins-black text-2xl text-[#CC323A]">
              Our Values
            </h1>
            <h2>Principles that guide every project.</h2>
          </div>

          <div className=" mt-2 grid  grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.id}
                className="border-3 rounded-lg px-2 py-2 border-[#e77d81e1] shadow-gray-500 shadow-lg hover:"
              >
                <h1 className="poppins-black text-[#CC323A]">
                  {value.cardTitle}
                </h1>
                <p className="lora-normal text-gray-950">{value.cardText}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
