import React from "react";
import { Link } from "react-router-dom";
import ModernSlider from "../components/ModernSlider";

const Hero = () => {
  // Define slider content
  const heroSlides = [
    {
      image: "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1768635839/e0ba3863-018f-4191-bbd3-116a1c771308.png",
      tag: "Professional Service",
      title: "Premium Residential & Commercial Painting",
      description: "Trusted, professional craftsmanship with meticulous prep, clean lines, and durable finishes. Serving homes and businesses with a corporate-level experience.",
    },
    {
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2070&auto=format&fit=crop",
      tag: "Expert Craftsmanship",
      title: "Transform Your Space with Color",
      description: "20+ years of experience delivering stunning results. From consultation to final coat, we bring your vision to life with precision and care.",
    },
    {
      image: "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1768635822/c994ff64-6cce-4f49-a713-9b35a177be68.png",
      tag: "Quality Guaranteed",
      title: "Durable Finishes That Last",
      description: "Using premium materials and proven techniques, we ensure your paint job stands the test of time. Fully insured with background-checked crews.",
    },
  ];

  return (
    <>
      <section className="relative w-full">
        {/* Main Slider */}
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
          <ModernSlider slides={heroSlides} autoPlayInterval={6000} />
        </div>

        {/* CTA Section Below Slider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-b from-[#accbea5b] to-transparent">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200">
            {/* Left Side - Quick Info */}
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B4D91] inter-bold">
                Ready to Get Started?
              </h2>
              <p className="text-gray-700 lora-normal">
                Book a free site visit or explore our portfolio to see our work in action.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Background-Checked Crews</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Written Warranty</span>
                </div>
              </div>
            </div>

            {/* Right Side - CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link to="/book-site-visit" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#0B4D91] hover:bg-[#093a6c] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg poppins-bold flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book a Site Visit
                </button>
              </Link>
              <Link to="/Gallery" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#0B4D91] border-2 border-[#0B4D91] px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg poppins-bold flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  View Gallery
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-t-2 border-[#7288cfb8]" />
    </>
  );
};

export default Hero;
