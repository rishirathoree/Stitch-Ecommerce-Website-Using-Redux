import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Category = () => {
  const data = useSelector((state) => state.data);
  const Uniquecategories = Array.from(new Set(data.map((item) => item.category)));

  return (
    <>
      <div className='w-full mt-24 p-6 h-full'>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 gap-4 sm:grid-cols-2'>
          {Uniquecategories.map((category) => {
            const items = data.filter((item) => item.category === category);
            return (
              <Link to={`/category/${category}`} key={category}>
                <div>
                  <div className='w-full lg:h-80 md:h-80 overflow-hidden sm:h-60 bg-gray-300'>
                    <img src={items[0].image} className='w-full h-full object-cover' alt='' />
                  </div>
                  <p className='font-semibold text-sm'>{category}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
