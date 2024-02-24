import React from 'react';

import Img1 from '../../assets/img/women.png';
import Img2 from '../../assets/img/women2.jpg';
import Img3 from '../../assets/img/women3.jpg';
import Img4 from '../../assets/img/women4.jpg';
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "white",
        aosDelay: "0",
    },{id: 2,
        img: Img2,
        title: "Women western",
        rating: 4.5,
        color: "Red",
        aosDelay: "200",
    },{id: 3,
        img: Img3,
        title: "Goggles",
        rating: 4.7,
        color: "white",
        aosDelay: "400",
    },{id: 4,
        img: Img4,
        title: "Printed T-Shirt",
        rating: 4.4,
        color: "yellow",
        aosDelay: "600",
    },{id: 5,
        img: Img2,
        title: "Fashin T-Shirt",
        rating: 4.5,
        color: "pink",
        aosDelay: "800",
    },
];

const Prods = () => {
  return (
    <div className="mt-14 m-12">
        <div className="container">
            {/*Header section*/}
            <div className="text-center mb-10 max-w-[600px] mx-auto">
                <p 
                data-aos="fade-up"
                className="text-sm text-primary">Top Selling Products for you</p>
                <h1 
                data-aos="fade-up"
                className="text-3xl font-bold">Products</h1>
                <p 
                data-aos="fade-up"
                className="text-xs text-gary-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iste numquam aspernatur iure vero non delectus perspiciatis eos maxime repellendus, pariatur doloribus debitis aliquid voluptatum excepturi dolores quibusdam, itaque saepe.
                </p>
            </div>
            {/*Body section */}
            <div className="">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                    {/*card section */}
                    {
                        ProductsData.map((data) => (
                            <div
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay} 
                            key={data.id}
                            className="space-y-3"
                            >
                                <img src={data.img} alt="" 
                                className="h-[220px] w-[150px] object-cover rounded-md"
                                />
                                <div>
                                    <h3
                                    className="font-semibold"
                                    >{data.title}</h3>
                                    <p
                                    className="text-sm text-gray-600"
                                    >{data.color}</p>
                                    <div className="flex items-center gap-1">
                                        <FaStar className="text-yellow-400"/>
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div
            onClick={() => alert("Calm down just be patient! We don't push all our products")}
            data-aos="fade-up"
            className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-center text-white text-xl font-semibold py-2 px-4 rounded-md mt-10 max-w-[200px] mx-auto cursor-pointer"
            >
                <a href=""
                className=""
                >
                    View all Products</a>
            </div>
        </div>
    </div>
  )
};

export default Prods;