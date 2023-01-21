import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div className='hidden md:block'>
    <div className='h-[700px] w-full bg-[#1E1E1F] flex flex-col md:flex-row pt-[100px] text-white'>
      <div className="flex justify-center h-full md:w-1/4">
        <img className='w-[102px] h-[71px]' src="/image/common/Thread-White.png" alt="logo" />
      </div>
      <div className="h-full divide-y md:w-3/4">
        <div className="flex flex-col justify-between w-full border-white md:flex-row md:h-2/3">
          <ul className="flex flex-col h-full gap-3 text-lg font-medium text-center md:text-left md:w-1/4">
          <li><Link to="/curtains">Curtains</Link></li>
            <li><Link to="/PencilPleatCurtains">Pencil Pleat Curtains</Link></li>
            <li><Link to="/EyeletCurtains">Eyelet Curtains</Link></li>
            <li><Link to="/Goblet">Goblet Curtains</Link></li>
            <li><Link to="/DoublePleatCurtains">Double Pleat Curtains</Link></li>
            <li><Link to="/TriplePleatCurtains">Triple Pleat Curtains</Link></li>
          </ul>
          <ul className="flex flex-col h-full gap-3 text-lg font-medium text-center md:w-1/4 md:text-left">
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
          <div className="flex flex-col items-center justify-center h-full gap-3 p-1 md:w-2/4">
            {/* <span> Subscribe for our latest offers and promotions!Subscribe with email</span>
                <div className="h-12 w-[430px] rounded-md bg-white"></div> */}
                <p className="text-lg font-bold text-center text-white md:pb-5 md:text-left">Subscribe for our latest offers and promotions!</p>
                <div className="md:pt-3 md:pb-3 md:pr-3 bg-[rgba(245,244,238,.12)] rounded-md">
                <div className="flex flex-col justify-between md:flex-row">
                  <input className="text-lg text-center text-white bg-transparent rounded shadow-inner md:text-left md:px-3 md:mr-3" placeholder="Enter your email" type="text"/>
                  <button className="md:px-5 md:py-5 md:pt-4 md:pb-4 text-lg font-bold text-gray-700 hover:text-white bg-white rounded shadow-2xl hover:bg-[#3f7355]">Submit</button>
                </div>
                </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-full p-1 md:flex-row md:h-1/3">
            <div className="flex gap-3">
              <div className="w-12 h-12"><a href="https://www.facebook.com/My-Thread-curtains-105982962222299"><img src="/image/common/facebook.png" alt=''/></a></div>
              <div className="w-12 h-12"><a href="https://www.youtube.com/channel/UCcUjybZ6g0zCWxApaa2PQHA"><img src="/image/common/youtube.png" alt=''/></a></div>
              <div className="w-12 h-12"><a href="https://www.instagram.com/mythreadcurtains/"><img src="/image/common/insta.png" alt=''/></a></div>
            </div>
            <span className='text-center'>© 2023 Thread & Co. All Rights Reserved.</span>
            <div className=""></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer