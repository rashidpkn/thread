import React from 'react'

function SectionOne() {
  return (
    <div className='flex flex-col w-full h-full md:flex-row'>
        <div className="flex flex-col items-center w-full leftsection">
        <div className="w-5/6 pt-10 heading">
            <h1 className='text-5xl font-bold text-[#4A4A4A]'>The story behind Thread</h1>
        </div>
        <div className="w-5/6 pt-10 paragraph">
            <p className='leading-7'>
            We put great importance on customer service from our first day. 
            Our Thread Blinds and Curtains offer excellent value and high quality. 
            We have an installation service in London and were getting approached by 
            customers in other areas. 
            We made the decision to offer the same craftsmanship, 
            as we do with our bespoke London company, 
            to the whole of the UK. 
            We can reduce the cost by not offering home visits and 
            allowing you to order direct through our customisation tool. 
            So now everyone has the ability to access our service no matter where they live
            </p>
        </div>
        </div>
        <div className="w-full rightsection ">
        <img src="/image/about/img1.jpeg" alt="hello" />
        </div>
    </div>
  )
}

export default SectionOne