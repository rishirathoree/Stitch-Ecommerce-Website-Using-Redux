import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Shoes = () => {
  const shoes = useSelector((state) =>
    state.data.filter((item) => item.category === "Shoes")
  );
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className="w-full h-full mt-20 p-6 ">
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {shoes.map((items) => {
          return (
            <Link key={items.id} to={`/${items.category}/${items.name}`}>

              <div key={items.id} className="w-full h-full">
                <div className="w-full h-[400px] overflow-hidden  bg-gray-200">
                  <img
                    src={items.image}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold text-[10px]">{items.name}</p>
                    <p className="font-semibold text-[10px]">
                      Price : ${items.price}
                    </p>
                    <p className="font-semibold text-[10px]">
                      {items.category}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
        </div>
      </div>
    </>
  );
};

export default Shoes;
