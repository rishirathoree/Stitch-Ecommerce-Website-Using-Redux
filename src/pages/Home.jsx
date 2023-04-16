import React from 'react';
import Slider from '../components/Slider';
import CategorySlider from '../components/CategorySlider';
import Jeansshow from '../components/Jeansshow';
import Hoodiescategory from '../components/Hoodiescategory';
import Shirtcategory from '../components/Shirtcategory';
import Tshirtcategory from '../components/Tshirtcategory';
const Home = () => {

  return (
    <>
      <Slider />
      <CategorySlider />
      <Jeansshow />
      <Hoodiescategory />
      <Shirtcategory />
      <Tshirtcategory />
    </>
  );
};

export default Home;
