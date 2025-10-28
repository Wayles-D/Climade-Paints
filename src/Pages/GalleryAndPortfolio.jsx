import React from 'react'

const GalleryAndPortfolio = () => {
    const galleryImages = [
        {image: "https://plus.unsplash.com/premium_photo-1706140675031-1e0548986ad1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"},
        {image: "https://images.unsplash.com/photo-1624352908259-ec0b31e421ee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBhaW50ZWQlMjBob3VzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"},
        {image: "https://plus.unsplash.com/premium_photo-1694030763033-613b0b7a3f92?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNvbG9yZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"},
        {image: "https://images.unsplash.com/photo-1624352908259-ec0b31e421ee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBhaW50ZWQlMjBob3VzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"},
        {image: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXh0ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"},
        {image: "https://images.unsplash.com/photo-1624352908259-ec0b31e421ee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBhaW50ZWQlMjBob3VzZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"},
        {image: "https://plus.unsplash.com/premium_photo-1694030762810-06f5b9906cbc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNvbG9yZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"},
        {image: "https://images.unsplash.com/photo-1754329715452-c97a206b86d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbG9yZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"}
    ]
  return (
    <>
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-[#6b9fd054]'>
        <div>
        <div className="text-center">
            <h1 className="poppins-black text-2xl text-[#0B4D91]">
              Gallery & Portfolio
            </h1>
            <p className="text-sm mt-2 mb-1">
              Recent transformations across homes and businesses.
            </p>
          </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center'>
        {galleryImages.map((image, imageIndex) => (
            <div key={imageIndex} className=''>
                <img src={image.image} alt="" className='md:h-full lg:h-[160px] lg:w-[300px] rounded-lg'/>
            </div>
        ))}
        </div>
        </div>

         <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <button className="px-6 py-2 rounded-lg bg-[#0B4D91] text-white font-semibold shadow hover:bg-[#093a6c]">
              View Gallery
            </button>
          </div>

    </section>
    </>
  )
}

export default GalleryAndPortfolio