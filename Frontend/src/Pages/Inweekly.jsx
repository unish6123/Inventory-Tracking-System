import React from 'react';
import Navout from './components/navout';
import Footer from './components/Footer';

export default function InWeekly({photo,description,perlb,price,totallb}) {
  return (
    <>
    <Navout />
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        src={photo}
        alt="photo"
        className="w-full h-48 object-cover"
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-lg mb-2">{description}</h3>
        <p className="text-gray-700 text-base">{perlb}</p>
        <p className="text-gray-700 text-base">{price}</p>
        <p className="text-gray-700 text-base">{totallb}</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Log In to Add
        </button>
      </div>
    </div>
    <Footer />
    </>
  );
}