import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ModernSlider = ({ slides, autoPlayInterval = 5000, showDots = true, showArrows = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [slides.length, isTransitioning]);

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [slides.length, isTransitioning]);

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, goToNext]);

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [goToNext, goToPrevious]);

  return (
    <div
      className="relative w-full h-full overflow-hidden group"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full relative"
          >
            <img
              src={slide.image}
              alt={slide.alt || `Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay gradient for text readability */}
            {(slide.title || slide.description) && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            )}

            {/* Slide Content */}
            {(slide.title || slide.description) && (
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                {slide.tag && (
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-sm rounded-full">
                    {slide.tag}
                  </span>
                )}
                {slide.title && (
                  <h2 className="text-2xl md:text-4xl font-bold mb-2 drop-shadow-lg">
                    {slide.title}
                  </h2>
                )}
                {slide.description && (
                  <p className="text-sm md:text-lg opacity-90 max-w-2xl drop-shadow-md">
                    {slide.description}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {showDots && slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`transition-all duration-300 rounded-full disabled:cursor-not-allowed ${
                currentIndex === index
                  ? 'w-8 md:w-10 h-2 bg-white shadow-lg'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/75 hover:scale-125'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
        {currentIndex + 1} / {slides.length}
      </div>
    </div>
  );
};

export default ModernSlider;
