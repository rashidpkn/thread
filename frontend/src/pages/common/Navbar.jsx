import { MenuOutlined, LocalPhone, Email, SupportAgent } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from '../asset/icon/Cart'
// import {FaHome, FaHeart, FaShoppingCart, FaUserAlt } from'react-icons/fa';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <div className="hidden lg:flex h-9 bg-[#243029] justify-between items-center text-white px-5 font-inter">
        <h1>Make a free appointment</h1>

        <ul className="flex gap-5">
          <li className='flex justify-center items-center gap-2'><SupportAgent className='text-[#b68d40]' /> 0203 633 8622</li>
          <li className='flex justify-center items-center gap-2'><Email className='text-[#b68d40]' /> info@my-thread.co.uk</li>
          <li>Inspiration</li>
          <li>My Account</li>
        </ul>

      </div>
      <div className=' border-b shadow-md w-full text-[#B68D40] text-lg'>
        <nav className='h-20 w-full hidden lg:flex justify-between items-center px-20'>
          <a href="https://my-thread.co.uk">
            <img src="/image/common/logo.svg" width={100} alt="" />
          </a>

          <ul className='flex gap-8'>
            <li className='cursor-pointer'>Curtain</li>
            <li className='cursor-pointer'><Link to={'/productbuilder'}> Customise Curtains </Link></li>
            <li className='cursor-pointer'><Link to={'/about-us'}> About Us </Link></li>
            <li className='cursor-pointer'>Contact Us</li>
          </ul>
          <Link to={'/cart'}>
            {/* <AddShoppingCartOutlined fontSize='large' /> */}
            <Cart />
          </Link>
        </nav>

        <nav className='h-20 w-full flex lg:hidden justify-between items-center px-5'>
          <MenuOutlined className='cursor-pointer' onClick={() => setShowMenu(!showMenu)} />
          <a href="https://my-thread.co.uk">
            <img src="/image/common/logo.svg" width={100} alt="" />
          </a>

          <div className="flex gap-3">
            <LocalPhone />
            <Email />
          </div>
        </nav>
        {
          showMenu && <ul className="flex lg:hidden flex-col w-full p-2 gap-3 ">
            <li className='cursor-pointer'>Curtain</li>
            <li className='cursor-pointer'>Customise Curtains</li>
            <li className='cursor-pointer'>About Us</li>
            <li className='cursor-pointer'>Contact Us</li>
          </ul>
        }
      </div>
      {/* <div className='h-[60px] w-full bg-[#29434E] flex flex-row pt-[20px] text-white justify-around  lg:hidden'>
        <div className='text-[24px]'>
          <FaHome />
        </div>
        <div className='text-[24px]'>
          <FaHeart />
        </div>
        <div className='text-[24px]'>
          <FaShoppingCart />
        </div>
        <div className='text-[24px]'>
          <FaUserAlt />
        </div>

      </div> */}
    </>
  )
}

export default Navbar