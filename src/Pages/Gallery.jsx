import React from 'react'

const Gallery = () => {
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
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 bg-[#de898c7d]">
        <div className='flex-wrap md:flex-n justify-between'>
        <div className='flex space-x-2'>
          <p className='p-2 border-2 rounded-xl border-accent-content bg-white/40 text-red-500'>All</p>
          <p className='p-2 border-2 rounded-xl border-accent-content bg-white/40'>Interiors</p>
          <p className='p-2 border-2 rounded-xl border-accent-content bg-white/40'>Exteriors</p>
          <p className='p-2 border-2 rounded-xl border-accent-content bg-white/40'>Commercials</p>
        </div>

        <div className='flex p-2 space-x-1 border-2  rounded-xl border-accent-content md:w-[260px]  mt-2 md:mt-0 w-full'>
          <img src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1762371448/SVG_i8lnpj.png" alt="search-icon" className='w-[18px] h-[19px] mt-0.5'/>
          <p className='h-[18px] px-2 text-accent'>Search Projects...</p>
        </div>
        </div>
      </section>
    </>
  )
}

export default Gallery