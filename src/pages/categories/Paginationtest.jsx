import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Pagination = () => {
  const [page,setpage] = useState(1)
  const data = useSelector((state) =>state.data);
  console.log('page'+ '' + Math.ceil(data.length/6));
  console.log(page);
  return (
    <>
      <div className="w-full h-full mt-20 p-6 ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {data.slice(page*6-6,page*6).map((items) => {
          return (
            <Link key={items.id} to={`/product/${items.name}`}>
              <div key={items.id} className="w-full h-full">
                <div className="w-full h-[200px] overflow-hidden  bg-gray-200">
                  <img
                    src={items.image}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                {/* <div className="flex justify-between">
                  <div>
                    <p className="font-semibold text-[10px]">{items.name}</p>
                    <p className="font-semibold text-[10px]">
                      Price : ${items.price}
                    </p>
                    <p className="font-semibold text-[10px]">
                      {items.category}
                    </p>
                  </div>
                </div> */}
              </div>
            </Link>
          );
        })}
        </div>
        {data.length > 0 && <>
          <div className="flex duration-700 my-4 items-center justify-center">
          <div>
          <button 
          disabled = {
            page === 1
          }
          onClick={()=>{
            setpage(page-1)
          }}
          className="p-2 border disabled:bg-gray-100 duration-700 mx-4"><i className="bx bx-chevron-left"></i></button>
          <span>{page}</span>
          <button
          onClick={()=>{
            setpage(page+1)
          }}
          disabled = {
            page === Math.ceil(data.length/6) 
          }
          className={`p-2 border mx-4 duration-1000 opacity-${ page === Math.ceil(data.length/6) ? 0 : 100
          }
          `}><i className="bx bx-chevron-right"></i></button>
        </div>
          </div>
        </>}
      </div>
    </>
  );
};

export default Pagination;
