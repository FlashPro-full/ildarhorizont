'use client';

import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';

interface Review {
  id: number;
  name: string;
  text: string;
  avatar: string;
  rating: number;
  source: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Jorge Ortiz",
    text: "Great work. Repaired my drywall issue instantly and professionally. Love his work and prompt communication.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUqMOd1lE5PkD3ODyS_cC4yMt68Por0HtgyfeowU7SI7KoU-mFbZA=w40-h40-c-rp-mo-br100",
    rating: 5,
    source: "Google"
  },
  {
    id: 2,
    name: "Alexander Kryzhanovski",
    text: "Great job by Ildar Horizont! They did an excellent drywall repair — fast, clean, and professional. Very polite and reliable team. Highly recommend!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUJMWvzIy4bOJNEr83TUjJgPAhRPlhCx6ncC1nwHS_3ys6fTg=w40-h40-c-rp-mo-br100",
    rating: 5,
    source: "Google"
  },
  {
    id: 3,
    name: "настик фантастик",
    text: "Ildar did very good job with my closet, and I am very satisfied with his skills and job! Very neatly done and looks clean. Very recommended!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUeINnuPuTp78En0kbMVbKIgzM016QNOCtQcOlhK-XZ6Rapu3s=w40-h40-c-rp-mo-br100",
    rating: 5,
    source: "Google"
  },
  {
    id: 4,
    name: "Ilnur Khaibulin",
    text: "Ildar did a great job fixing the ceiling in our home. The drywall repair was done professionally, quickly, and with great attention to detail. Very satisfied with the result — highly recommend!",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLIpVVj9b6Z-X3nqmxAd8fgi-Vvpxm0h9NpkOduPSQfcdgVnw=w40-h40-c-rp-mo-br100",
    rating: 5,
    source: "Google"
  },
  {
    id: 5,
    name: "Ekaterina Saifullina",
    text: "Ildar did a great job assembling our outdoor gazebo. He was on time, worked carefully, and made sure everything was done just the way we wanted. The gazebo feels solid and looks great — you can tell he knows what he’s doing. Really happy with the result. Thanks again, Ildar!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVJcPUNhb5pmWF9i2wZ8giqYmdBQnUYGNLq6vzFIcUcKdsBIMww=w40-h40-c-rp-mo-br100",
    rating: 5,
    source: "Google"
  },
  {
    id: 6,
    name: "паравозик томас -",
    text: "Very satisfied with the drywall repair! Fast, clean, and professional work. Looks like new. Highly recommend!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVFmnxKI1qSQa3JEyBHvnlrf9uObinYrxB2CtOlOsIENGtc7wAp=w40-h40-c-rp-mo-br100",
    rating: 5,
    source: "Google"
  }
];

const ReviewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(3);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= reviews.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - cardsToShow : prevIndex - 1
    );
  };

  const toggleExpanded = (reviewId: number) => {
    setExpandedReviews(prev => {
      const newSet = new Set(prev);
      if (newSet.has(reviewId)) {
        newSet.delete(reviewId);
      } else {
        newSet.add(reviewId);
      }
      return newSet;
    });
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % reviews.length;
      visible.push(reviews[index]);
    }
    return visible;
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < reviews.length - cardsToShow;

  // Responsive card count
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1440) {
        setCardsToShow(4);
      } else if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 660) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= reviews.length - cardsToShow ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length, cardsToShow]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div
      className="relative px-8 h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Navigation Arrows */}
      {canGoPrevious && (
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-[rgba(0,0,0,0.3)] cursor-pointer rounded-full shadow-md flex items-center justify-center hover:bg-[rgba(0,0,0,0.5)] transition-all duration-300"
          aria-label="Previous reviews"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {canGoNext && (
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-[rgba(0,0,0,0.3)] cursor-pointer rounded-full shadow-md flex items-center justify-center hover:bg-[rgba(0,0,0,0.5)] transition-all duration-300"
          aria-label="Next reviews"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Reviews Container */}
      <div className="overflow-hidden py-2">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="flex-shrink-0"
              style={{
                width: `${100 / cardsToShow}%`
              }}
            >
              <ReviewCard
                review={review}
                isExpanded={expandedReviews.has(review.id)}
                onToggleExpanded={toggleExpanded}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.max(1, reviews.length - cardsToShow + 1) }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
              ? 'bg-blue-600 w-8'
              : 'bg-gray-300 hover:bg-gray-400'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="flex justify-end mt-6 mr-20">
        <div
          className="flex justify-end relative"
          onMouseOver={() => setShowTooltip(true)}
          onMouseLeave={() => setTimeout(() => setShowTooltip(false), 500)}
        >
          <div className="bg-green-600 text-white px-3 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors cursor-pointer">
            <span className="text-sm font-medium">Verified by Trustindex</span>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div
            className="absolute bottom-full right-[-20px] mb-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50"
            style={{ display: showTooltip ? 'block' : 'none' }}
          >

            <div className="absolute bottom-[-26px] right-[36px] w-0 h-0 border-l-28 border-r-0 border-t-28 border-l-transparent border-r-transparent border-t-white"></div>
            <div className="text-black">
              <h4 className="font-bold text-md mb-2">
                Trustindex verified badge is the Universal Symbol of Trust.
              </h4>
              <p className="text-md text-gray-700 leading-relaxed">
                Only the greatest companies can get the verified badge who has a review score above 4.5, based on customer reviews over the past 12 months.
                <a className="text-blue-600 cursor-pointer hover:underline" href="https://www.trustindex.io/?a=sys&amp;c=wp-verified-badge&amp;url=/the-trustindex-verified-badge/" target="_blank"> Read more</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
