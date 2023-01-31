import { MenuOutlined, LocalPhone, Email, SupportAgent, Close } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cart from '../asset/icon/Cart'
// import {FaHome, FaHeart, FaShoppingCart, FaUserAlt } from'react-icons/fa';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const [showCurtains, setShowCurtains] = useState(false)
  const [showShop, setShowShop] = useState(false)
  const [showAccount, setShowAccount] = useState(false)


  return (
    <>
      {/* bg-[#243029] */}
      <div className="hidden lg:flex h-9 bg-[#2b2b2b]  justify-between items-center text-white px-5 font-inter relative">
        <h1>Make a free appointment</h1>

        <ul className="flex gap-5">
          <li className='flex justify-center items-center gap-2'><SupportAgent className='text-[#b68d40]' /> 0203 633 8622</li>
          <li className='flex justify-center items-center gap-2'><Email className='text-[#b68d40]' /> info@my-thread.co.uk</li>
          <li>Inspiration</li>
          <li className='cursor-pointer' onClick={() => { setShowAccount(!showAccount) }}>My Account</li>
        </ul>

        {showAccount &&
          <div className="absolute top-9 right-0 bg-[#2b2b2b] w-48 rounded-bl-2xl flex flex-col justify-center items-center px-7 py-5 text-white gap-2">
            <h3><Link to={'/login'}> Login </Link></h3>
            <div className="w-full h-[1px] bg-white"></div>
            <h3><Link to={'/cart'}> Saved </Link></h3>
          </div>
        }

      </div>
      <div className='shadow-md w-full text-[#B68D40] text-lg'>
        <nav className='h-24 w-full hidden lg:flex justify-between items-center px-20 '>
          <a href="https://my-thread.co.uk">
            <img src="/image/common/logo.svg" width={100} alt="" />
          </a>

          <ul className='flex justify-center items-center gap-20 h-full font-medium'>

            <li className='cursor-pointer' onClick={() => {
              if (showShop) {
                setShowShop(false)
              } else {
                setShowShop(true)
                setShowCurtains(false)
              }

            }}>Shop No</li>
            <li className='cursor-pointer' onClick={() => {
              if (showCurtains) {
                setShowCurtains(false)
              } else {
                setShowShop(false)
                setShowCurtains(true)
              }

            }}>Curtain Style</li>
            <li className='cursor-pointer'>Order Sample</li>
            <li className='cursor-pointer'><Link to={'/about-us'}> About Us </Link></li>
            <li className='cursor-pointer'><Link to={'/contact-us'}> Contact Us </Link></li>
          </ul>
          <Link to={'/cart'}>
            <Cart />
          </Link>
        </nav>

        <div className={`${showCurtains ? 'h-[500px] px-[10%] py-2 hidden lg:inline-block' : 'h-0'} hidden lg:block duration-200 w-full  bg-white/50  `}>
          <div className={` ${showCurtains ? 'flex flex-col' : 'hidden'}  gap-5`}>
            <h1>Shop Our Curtains</h1>
            <p>Our curtains are made to measure at the highest quality specification.</p>
          </div>
          <div className={` ${showCurtains ? 'hidden lg:flex' : 'hidden'} justify-center gap-5 items-center h-full w-full`}>
            <Curtain path={'/PencilPleatCurtains'} title={'Pencil Pleat Curtains'} backgroundImage={'/image/common/nav1.jpg'} />
            <Curtain path={'/EyeletCurtains'} title={'Eyelet Curtains'} backgroundImage={'/image/common/nav2.jpg'} />
            <Curtain path={'/Goblet'} title={'Goblet Curtains'} backgroundImage={'/image/common/nav3.jpg'} />
            <Curtain path={'/DoublePleatCurtains'} title={'Double Pleat Curtains'} backgroundImage={'/image/common/nav5.png'} />
            <Curtain path={'/TriplePleatCurtains'} title={'Trible Pleat Curtains'} backgroundImage={'/image/common/nav4.png'} />
            <Curtain path={'/curtains'} title={'Shop All Curtains'} />
          </div>
        </div>

        <div className={`${showShop ? 'h-[500px] px-[10%] py-2 hidden lg:inline-block' : 'h-0'} hidden lg:block duration-200 w-full  bg-white/50  `}>
          <div className={` ${showShop ? 'flex flex-col' : 'hidden'}  gap-5`}>
            <h1>Shop Our Curtains</h1>
            <p>Our curtains are made to measure at the highest quality specification.</p>
          </div>
          <div className={` ${showShop ? 'hidden lg:flex' : 'hidden'} justify-center gap-5 items-center h-full w-full`}>

            <Curtain path={'/productBuilder'} title={'Customise Curtains'} backgroundImage={'/image/common/nav4.png'} />
            <Curtain path={'/productBuilder'} title={'Customise Blinds'} backgroundImage={'/image/common/nav2.jpg'} />


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
            <li className='cursor-pointer'><Link to={'/productBuilder'}> Shop Now </Link></li>
            <li className='cursor-pointer'>Order Sample</li>
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

    <div onClick={() => { navigate(path) }} className="h-[80%] w-[200px] relative rounded-xl duration-200" style={{ background: backgroundImage ? `url(${backgroundImage})` : '#7285a5' }} onMouseEnter={() => setZoom(true)} onMouseLeave={() => setZoom(false)}>
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