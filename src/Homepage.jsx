import React from 'react'
import SEO from './components/SEO'
import Hero from './Pages/Hero'
import OurServices from './Pages/OurServices'
import FeaturedProjects from './Pages/FeaturedProjects'
import GalleryAndPortfolio from './Pages/GalleryAndPortfolio'

const Homepage = () => {
  return (
    <>
    <SEO 
      title="Home - Expert Painters & Decorators"
      description="Larr Medas Decorations - Professional residential and commercial painting services with premium materials, expert craftsmanship, and 20+ years of experience."
      keywords="painting services, professional painters, residential painting, commercial painting, interior painting, exterior painting, Larr Medas"
      canonical="https://www.larrmedas.com/"
    />
    <Hero /> 
    <OurServices />
    <GalleryAndPortfolio />
    <FeaturedProjects />
    </>
  )
}

export default Homepage