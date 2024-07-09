import React, { useRef } from 'react';
import Weeklyad from './weeklyad.jsx'

export default function WeeklyadContainer() {
  const containerRef = useRef(null);
  const itemsPerPage = 4;

  const ads = [
    { price: '$10', details: "This is a momo so it is called momo", photo: './src/assets/pictures/momo.jpg' },
    { price: '$10', details: "This is a momo so it is called momo", photo: './src/assets/pictures/momo.jpg' },
    { price: '$10', details: "This is a momo so it is called momo", photo: './src/assets/pictures/momo.jpg' },
    { price: '$10', details: "This is a momo so it is called momo", photo: './src/assets/pictures/momo.jpg' },
    { price: '$10', details: "This is a momo so it is called momo", photo: './src/assets/pictures/momo.jpg' },
    { price: '$10', details: "This is a momo so it is called momo", photo: './src/assets/pictures/momo.jpg' },
  ];

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: containerRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -containerRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  return (

      <div className="relative w-4/5">
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10">
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300"
          >
            &#8592;
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10">
          <button
            onClick={handleNext}
            className="p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300"
          >
            &#8594;
          </button>
        </div>
        <div ref={containerRef} className="flex items-center justify-center gap-6 overflow-x-auto snap-x snap-mandatory">
          {ads.map((ad, index) => (
            <div key={index} className="snap-start">
              <Weeklyad price={ad.price} details={ad.details} photo={ad.photo} />
            </div>
          ))}
        </div>
      </div>
  );
}
