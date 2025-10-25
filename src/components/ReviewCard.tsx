'use client';

import React from 'react';

interface Review {
  id: number;
  name: string;
  text: string;
  avatar: string;
  rating: number;
  source: string;
}

interface ReviewCardProps {
  review: Review;
  isExpanded: boolean;
  onToggleExpanded: (reviewId: number) => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, isExpanded, onToggleExpanded }) => {
  return (
    <div className="px-2">
      <div className="w-full relative group cursor-pointer pb-6 pt-2">
        {/* Review Card */}
        <div className="bg-white rounded-lg shadow-lg relative max-h-80 flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-2 group-hover:bg-gray-50">
          {/* Speech bubble pointer */}
          <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-10 border-r-10 border-t-10 border-l-transparent border-r-transparent border-t-white group-hover:border-t-gray-50 transition-colors duration-300"></div>

          <div className="p-5 flex-1 flex flex-col">
            {/* Rating and Google Logo */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center">
                {/* Google G Logo */}
                <div className="w-5 h-5 relative">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 4.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.09 14.97 0 12 0 7.7 0 3.99 2.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Review Text */}
            <div className="flex-1 flex flex-col">
              <div className={`text-gray-800 text-[15px] mb-2 review-text ${!isExpanded ? 'line-clamp-4 h-[87px]' : 'min-h-[87px]'}`}>
                {review.text}
              </div>

              <div className="h-[30px]">
                {review.text.length > 150 && (
                  <button
                    onClick={() => onToggleExpanded(review.id)}
                    className="text-blue-600 text-sm hover:text-blue-800 transition-colors self-start"
                  >
                    {isExpanded ? 'Hide' : 'Read more'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Reviewer Info - Positioned below the card */}
        <div className="mt-6 flex items-center group-hover:translate-x-1 group-hover:-translate-y-2 transition-transform duration-300">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 flex items-center justify-center overflow-hidden group-hover:ring-4 group-hover:ring-blue-300 group-hover:ring-opacity-50 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg">
            <img src={review.avatar} alt={review.name} width={40} height={40} className="object-cover" />
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 group-hover:bg-blue-600 transition-colors duration-300"></div>
            <div>
              <p className="font-semibold text-gray-900 text-sm group-hover:text-blue-900 transition-colors duration-300">{review.name}</p>
              <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">3 months ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
