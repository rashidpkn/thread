import { MenuOutlined, LocalPhone, Email, SupportAgent } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from '../asset/icon/Cart'
// import {FaHome, FaHeart, FaShoppingCart, FaUserAlt } from'react-icons/fa';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const [showCurtains, setShowCurtains] = useState(false)

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
        <nav className='h-20 w-full hidden lg:flex justify-between items-center px-20 border-b'>
          <a href="https://my-thread.co.uk">
            <img src="/image/common/logo.svg" width={100} alt="" />
          </a>

          <ul className='flex gap-8 h-full'>
            <li className='cursor-pointer flex justify-center items-center h-full' onMouseEnter={() => setShowCurtains(!showCurtains)}>
              <Link to={'/curtains'}> Curtains Style </Link>
            </li>

            <li className='cursor-pointer flex justify-center items-center h-full'><Link to={'/productbuilder'}> Customise Curtains </Link></li>
            <li className='cursor-pointer flex justify-center items-center h-full'><Link to={'/productbuilder'}> Blinds Curtains </Link></li>
            <li className='cursor-pointer flex justify-center items-center h-full'><Link to={'/about-us'}> About Us </Link></li>
            <li className='cursor-pointer flex justify-center items-center h-full'><Link to={'/contact-us'}> Contact Us </Link></li>
          </ul>
          <Link to={'/cart'}>
            {/* <AddShoppingCartOutlined fontSize='large' /> */}
            <Cart />
          </Link>
        </nav>
        <div className={`${showCurtains ? 'h-[500px] px-[5%] py-2 hidden lg:inline-block' : 'h-0'} hidden lg:inline-block duration-200 w-full  bg-white/50  `}>
          <div className={` ${showCurtains ? 'flex' : 'hidden'}  gap-5`}>
            <h1>Shop Our Curtains</h1>
            <p>Our curtains are made to measure at the highest quality specification.</p>
          </div>
          <div className={` ${showCurtains ? 'hidden lg:flex' : 'hidden'} justify-between items-center h-full w-full`}>
            <Curtain backgroundImage={'/image/common/nav1.jpg'} zoom={true} />
            <Curtain backgroundImage={'/image/common/nav2.jpg'} zoom={true} />
            <Curtain backgroundImage={'/image/common/nav3.jpg'} zoom={true} />
            <Curtain backgroundImage={'/image/common/nav4.png'} zoom={true} />
            <Curtain backgroundImage={'/image/common/nav5.png'} zoom={true} />
            <Curtain backgroundImage={'/image/common/nav6.png'} zoom={true} />
          </div>
        </div>



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

const Curtain = ({backgroundImage,zoom}) => (
  <div className="h-[80%] w-[14%] relative" style={{ backgroundImage: `url(${backgroundImage})` }} >
    <div className="absolute bottom-0 right-0">
      <PlusSVG  zoom={zoom}/>
    </div>
  </div>
)





const PlusSVG = ({zoom}) => <svg
  className="corner"
  fill="#fff"
  width={zoom?100 :80}
  height={zoom?100 :80}
  viewBox="0 0 80 80"
  aria-hidden="true"
  role="img"

>
  <path d="M80,6.33543898 L80,80 L3.85686258,80 C11.3486253,76.7919283 16.597369,69.3522221 16.597369,60.6866061 L16.597369,50.6342576 C16.597369,33.4845191 30.499979,19.5819091 47.6497175,19.5819091 L60.4777554,19.5819091 C69.337167,19.5819091 76.9152239,14.095777 80,6.33543898 L80,6.33543898 Z" />
</svg>