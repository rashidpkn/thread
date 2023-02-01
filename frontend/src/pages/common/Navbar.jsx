import { MenuOutlined, LocalPhone, Email, SupportAgent, Close } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cart from '../asset/icon/Cart'
// import {FaHome, FaHeart, FaShoppingCart, FaUserAlt } from'react-icons/fa';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  const [showAccount, setShowAccount] = useState(false)

  return (
    <>
      <div className="sticky top-0 z-20">
        <div className="hidden lg:flex h-9 bg-[#2b2b2b]  justify-between items-center text-white px-5 font-inter relative">
          <h1>Make a free appointment</h1>

          <ul className="flex gap-5">
            <li className='flex justify-center items-center gap-2'><SupportAgent className='text-[#b68d40]' /> 0203 633 8622</li>
            <li className='flex justify-center items-center gap-2'><Email className='text-[#b68d40]' /> info@my-thread.co.uk</li>
            <li>Inspiration</li>
            <li className='cursor-pointer' onClick={() => { setShowAccount(!showAccount) }}>My Account</li>
          </ul>

          {showAccount &&
            <div className="absolute z-20 top-9 right-0 bg-[#2b2b2b] w-48 rounded-bl-2xl flex flex-col justify-center items-center px-7 py-5 text-white gap-2">
              <h3><Link to={'/login'}> Login </Link></h3>
              <div className="w-full h-[1px] bg-white"></div>
              <h3><Link to={'/cart'}> Saved </Link></h3>
            </div>
          }

        </div>

        <div className='shadow-md w-full text-[#B68D40] text-lg  bg-white '>
          <nav className='h-24 w-full hidden lg:flex justify-between items-center px-10 '>
            <a href="https://my-thread.co.uk">
              <img src="/image/common/logo.svg" width={100} alt="" />
            </a>

            <ul className='flex justify-center items-center gap-12  h-full font-inter'>

              <li className='cursor-pointer hover:underline underline-offset-1 h-full group flex justify-center items-center'>
                <Link to={'/productBuilder'}>Shop Now</Link>
                <div className="fixed left-0 top-32  h-0 group-hover:h-[550px] overflow-hidden duration-500 w-full bg-white  px-[10%]">
                  <div className={` flex flex-col gap-5`}>
                    <h1>Shop Our Curtains</h1>
                    <p>Our curtains are made to measure at the highest quality specification.</p>
                  </div>
                  <div className={`flex justify-center gap-5 items-center h-full w-full pb-5`}>
                    <Curtain path={'/productBuilder'} title={'Customise Curtains'} backgroundImage={'/image/common/nav4.png'} />
                    <Curtain path={'/productBuilder'} title={'Customise Blinds'} backgroundImage={'/image/common/nav2.jpg'} />
                  </div>
                </div>
              </li>

              <li className='cursor-pointer hover:underline underline-offset-1 h-full group flex justify-center items-center'>
                <Link to={'/curtains'}>Curtain Style</Link>
                <div className="fixed left-0 top-32  h-0 group-hover:h-[550px] overflow-hidden duration-500 w-full bg-white px-[10%]">
                  <div className={` flex flex-col gap-5`}>
                    <h1>Shop Our Curtains</h1>
                    <p>Our curtains are made to measure at the highest quality specification.</p>
                  </div>
                  <div className={`flex justify-center gap-5 items-center h-full w-full pb-5`}>
                    <Curtain path={'/PencilPleatCurtains'} title={'Pencil Pleat Curtains'} backgroundImage={'/image/common/nav1.jpg'} />
                    <Curtain path={'/EyeletCurtains'} title={'Eyelet Curtains'} backgroundImage={'/image/common/nav2.jpg'} />
                    <Curtain path={'/Goblet'} title={'Goblet Curtains'} backgroundImage={'/image/common/nav3.jpg'} />
                    <Curtain path={'/DoublePleatCurtains'} title={'Double Pleat Curtains'} backgroundImage={'/image/common/nav5.png'} />
                    <Curtain path={'/TriplePleatCurtains'} title={'Trible Pleat Curtains'} backgroundImage={'/image/common/nav4.png'} />
                    <Curtain path={'/curtains'} title={'Shop All Curtains'} />
                  </div>
                </div>
              </li>

              <li className='cursor-pointer hover:underline underline-offset-1 h-full group flex justify-center items-center'><Link to={'/order-samples'}> Order Samples </Link></li>
              <li className='cursor-pointer hover:underline underline-offset-1 h-full group flex justify-center items-center'><Link to={'/about-us'}> About Us </Link></li>
              <li className='cursor-pointer hover:underline underline-offset-1 h-full group flex justify-center items-center'><Link to={'/contact-us'}> Contact Us </Link></li>
            </ul>
            <Link to={'/cart'}>
              <Cart />
            </Link>
          </nav>
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
            <li className='cursor-pointer'><Link to={'/productBuilder'}> Shop Now </Link></li>
            <li className='cursor-pointer'>Order Samples</li>
            <li className='cursor-pointer'><Link to={'/about-us'}> About Us </Link></li>
            <li className='cursor-pointer'><Link to={'/contact-us'}> Contact Us </Link></li>
          </ul>
        }
      </div>

    </>
  )
}

export default Navbar

const Curtain = ({ backgroundImage, title, path }) => {
  const [zoom, setZoom] = useState(false)
  const navigate = useNavigate()
  return (

    <div onClick={() => { navigate(path) }} className="group-hover:h-[400px] w-[200px] relative rounded-xl duration-200" style={{ background: backgroundImage ? `url(${backgroundImage})` : '#7285a5' }} onMouseEnter={() => setZoom(true)} onMouseLeave={() => setZoom(false)}>
      <div className="absolute bottom-0 right-0">
        <PlusSVG zoom={zoom} />
      </div>
      <div className="absolute bottom-10 left-2 text-white w-[60%]">{title}</div>
      <Close className='absolute bottom-5 right-5' />
    </div>

  )
}

const PlusSVG = ({ zoom }) => <svg
  className="corner duration-200"
  fill="#fff"
  width={zoom ? 100 : 80}
  height={zoom ? 100 : 80}
  viewBox="0 0 80 80"
  aria-hidden="true"
  role="img"

>
  <path d="M80,6.33543898 L80,80 L3.85686258,80 C11.3486253,76.7919283 16.597369,69.3522221 16.597369,60.6866061 L16.597369,50.6342576 C16.597369,33.4845191 30.499979,19.5819091 47.6497175,19.5819091 L60.4777554,19.5819091 C69.337167,19.5819091 76.9152239,14.095777 80,6.33543898 L80,6.33543898 Z" />
</svg>
