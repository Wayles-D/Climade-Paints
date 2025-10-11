import React from "react";

const About = () => {
  const firstCardContents = [
    { id: "1",
      cardTitle: "Professional Standards",
      cardText:
        "Licensed and insured teams, documented scopes, and detailed surface prep for dependable results. Every project is handled with structure and precision, ensuring consistent quality, safe work practices, and finishes that stand the test of time.",
    },
    { id: "2",
      cardTitle: "Client-Centered Process",
      cardText:
        "Clear timelines, tidy job sites, and daily updates from your dedicated project lead. We keep communication open and progress transparent, so you always know what’s happening and when your space will be ready.",
    },
    { id: "3",
      cardTitle: "Premium Materials",
      cardText:
        "Low-VOC, durable coatings matched to your surfaces and climate for long-lasting finishes. We use premium products that protect, perform, and preserve your space, without compromising air quality or appearance.",
    },
  ];
  return (
    <>
      <section>
        <section className="grid grid-cols-1 md-grid-cols-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 justify-items-center bg-[#dea8aa7d]">
          {/* left Image */}
          <div className="md:flex md:gap-x-8">
            <img
              className="rounded-2xl lg:shadow-gray-700 shadow-gray-500 shadow-lg lg:shadow-xl sm:w-full md:w-1/2"
              src="https://media.istockphoto.com/id/184104512/photo/man-at-work-20-series.jpg?s=612x612&w=0&k=20&c=XtXxqjAQbvkcug__P8bn63g_ZZouTil0wJBuKAvLvhY="
              alt=""
            />
            <div className="md:my-auto md:h-[200px]  md:w-[472.73px] sm:space-y-2">
              <h1 className="inter-bold text-2xl sm:text-3xl lg:text-4xl mt-2 lg:mt-0 text-[#CC323A]">
                About Us
              </h1>
              <p className="lora-normal text-base font-bold lg:w-[433.23px] ">
                We deliver premium residential and commercial painting with corporate-grade planning, clean execution, and respectful service across every project. From quality paints to expert application, we bring color and precision to your walls, creating lasting finishes that reflect care, skill, and attention to detail.
              </p>
            </div>
          </div>
        </section>
        <hr className="border-t-2 border-[#CC323A]" />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 justify-items-center bg-[#dea8aaa5]">
        <div className="text-center">
          <h1 className="poppins-black text-2xl text-[#CC323A]">Who We Are</h1>
          <h2>
            Experienced professionals focused on quality, safety, and
            accountability.
          </h2>
        </div>

        <div className=" mt-2 grid  grid-cols-1 md:grid-cols-3 gap-6">
            {firstCardContents.map((texts) => (
                <div key={texts.id} className="border-3 rounded-lg px-2 py-2 border-[#e77d81e1] space-y-2 shadow-gray-500 shadow-lg hover:">
                    <h1 className="poppins-black text-[#CC323A]">{texts.cardTitle}</h1>
                    <p className="lora-normal text-gray-950">{texts.cardText}</p>
                </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default About;
