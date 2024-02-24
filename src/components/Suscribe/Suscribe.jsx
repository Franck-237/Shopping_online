import React from 'react';
import Banner from '../../assets/img/orange-pattern.jpg';

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}; 

const Suscribe = () => {
  return (
    <div
    data-aos="zoom-in"
    className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
    style={BannerImg}
    >
      <div className="container px-2 backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
            <h1
            data-aos="fade-up"
            className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold"
            >Get Notified About New Products</h1>
            <input 
            data-aos="fade-up"
            className="w-full p-3 border-solid border-1 rounded-xl focus:outline-none focus:border focus:border-1 focus:border-yellow-800 text-gray-600 txt-xl font-serif"
            placeholder='Enter your email'
            type="text" />
        </div>
      </div>
    </div>
  )
};

export default Suscribe;