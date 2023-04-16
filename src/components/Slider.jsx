import React, { useEffect, useState } from 'react';
import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import slide3 from '../images/slide1.jpg'
import slide4 from '../images/slide2.jpg'
import 'boxicons/css/boxicons.min.css'

const slides = [slide1, slide2,slide3, slide4];

const Swiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      if (slides.length === 0) {
        // If there are no slides, do nothing
        return;
      }
  
      if (currentSlide === slides.length - 1) {
        // If the current slide is the last one, go back to the beginning
        setCurrentSlide(0);
      } else {
        // Otherwise, move to the next slide
        setCurrentSlide(currentSlide + 1);
      }
    }, 5000);
  
    // Return a cleanup function to clear the interval when the component unmounts or when the current slide changes
    return () => clearInterval(sliderInterval);
  }, [currentSlide, slides]);
  
  

// add the function onclick to slide the image by btn 
  // const handleNext = () => {
  //   if (currentSlide === slides.length) {
  //     setCurrentSlide(0);
  //   } else {
  //     setCurrentSlide(currentSlide + 1);
  //   }
  // };
  
  // const handlePrev = () => {
  //   if (currentSlide > 0) {
  //     setCurrentSlide(currentSlide - 1);
  //   }
  // }

  const slideStyle = {
    transform: `translateX(-${currentSlide * 100}%)`
  }
  
  return (
    <>
      <div className='w-full overflow-hidden lg:h-screen md:h-[500px] sm:h-[300px] flex'>
        {slides.map((items, index) => (
          <div key={index} className='w-full  flex-shrink-0 '>
            <img src={items} className='h-full duration-700 delay-100 w-full ' alt="" style={slideStyle} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Swiper;
