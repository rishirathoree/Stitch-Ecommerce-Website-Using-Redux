import React from 'react'

const Readarticle = () => {
    const mixingAndMatchingArticle = [
        "The Art of Mixing and Matching: How to Create Stylish Outfits with Your Wardrobe Basics",
        "Start with neutral basics, like a white t-shirt and black skinny jeans.",
      ];
      mixingAndMatchingArticle.sort((a, b) => a.localeCompare(b));
      console.log(mixingAndMatchingArticle);
  return (
  <>
  <div className='w-full p-12 h-full'>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>
        {mixingAndMatchingArticle.map((items,index)=>{
            return(
                <div key={index} className=''>
            <div className='w-full h-80 bg-gray-200'></div>
            <p className='article-title py-2 font-semibold text-sm'>{items}</p>
            <button className='p-3 border text-sm font-semibold hover:bg-slate-100 duration-700'>Read More</button>
        </div>
            )
        })}
      </div>
  </div>
  </>
  )
}

export default Readarticle