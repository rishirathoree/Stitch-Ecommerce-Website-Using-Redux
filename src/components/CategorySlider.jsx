import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import image1 from '../images/tshirt.jpg';
import imagea1 from '../images/shoe4.jpg';
import jeans1 from '../images/jeans.jpg';
import image4 from '../images/hoodies.jpg';
import jacket from '../images/jacket.jpg';
import image7 from '../images/shirt3.jpg';


import { Link } from "react-router-dom";

const CategorySlider = () => {

const clothingCategories = [
  { name: "Tshirts", image: image1 },
  { name: "Jeans", image: jeans1 },
  { name: "Shirts", image: image7 },
  { name: "shoes", image: imagea1 },
  { name: "Jackets", image: jacket },
  { name: "Hoodies", image: image4 },
];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < clothingCategories.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const sliderStyle = {
    transform: `translateX(-${currentSlide * 101}%)`,
  };

  return (
    <>
      <div className="category-wrapper lg:block md:block sm:block overflow-hidden relative w-full bg-purple  h-full ">
        
    <button
      disabled={currentSlide === 0}
      onClick={handlePrev}
      className={`absolute left-5 duration-700 lg:top-24 md:top-14 md:z-10 lg:z-10 ${currentSlide === 0 ? 'disabled opacity-0 scale-150' : 'disable opacity-100 scale-100'}`}
    >
      <i className="bx p-4 bg-gray-50 hover:bg-black hover:text-white duration-500 rounded-full bx-chevron-left"></i>
    </button>
    <button
      disabled={currentSlide === clothingCategories.length - 7}
      onClick={handleNext}
      className={`absolute right-5 duration-100 lg:top-24 md:top-14 md:z-10 lg:z-10 ${currentSlide >= clothingCategories.length - 7 ? 'disabled opacity-0 scale-150' : 'disable opacity-100 scale-100'}`}
    >
      <i className="bx p-4 bg-gray-50 hover:bg-black hover:text-white duration-500 rounded-full bx-chevron-right"></i>
    </button>

        <div className={`flex items-center gap-4 p-8`}>
          {clothingCategories.map((item, index) => {
            
            return (
              <Link to={`/category/${item.name}`} key={index}>
                <div className=" duration-500" style={sliderStyle}>
              <div className="lg:w-40 hover:shadow hover:scale-105 overflow-hidden duration-500 lg:h-40 md:w-20 md:h-20 sm:w-20 sm:h-20 bg-gray-100 rounded-full">
                <img src={item.image} className="h-full w-full object-cover" alt="" />
              </div>
              <p className="text-center font-semibold text-sm">{item.name}</p>
            </div></Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategorySlider;
