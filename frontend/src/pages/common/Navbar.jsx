import { MenuOutlined, Close, Delete } from '@mui/icons-material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setCart } from '../../redux/slice/sample'
import Cart from '../asset/icon/Cart'
import Curtains from './components/Curtains'
import RollerBlinds from './components/RollerBlinds'
import RomanBlinds from './components/RomanBlinds'
// import {FaHome, FaHeart, FaShoppingCart, FaUserAlt } from'react-icons/fa';
import { setLogout } from '../../redux/slice/user'


//icon
import orderSampleIcon from '../asset/common/order-sample.svg'
import cartIcon from '../asset/common/cart.svg'



function Navbar() {
  const dispatch = useDispatch()
  const [showMenu, setShowMenu] = useState(false)
  const [showAccount, setShowAccount] = useState(false)
  const { cart } = useSelector(state => state.sample)
  const navigate = useNavigate()
  const { loginStatus } = useSelector(state => state.user)
  return (
    <>
      <div className="sticky top-0 z-20">
        {/* <div className="hidden lg:flex h-9 bg-[#2b2b2b]  justify-between items-center text-white px-5 font-inter relative">
          <h1>Make a free appointment</h1>

          <ul className="flex gap-5">
            <li className='flex justify-center items-center gap-2'><SupportAgent className='text-[#b68d40]' /> 0203 633 8622</li>
            <li className='flex justify-center items-center gap-2'><Email className='text-[#b68d40]' /> info@my-thread.co.uk</li>
            <li>Inspiration</li>
            <li className='cursor-pointer' onClick={() => { setShowAccount(!showAccount) }}>My Account</li>
          </ul>

          

        </div> */}

        {showAccount &&
          <div className="absolute z-20 top-[100px] right-0 bg-[#2b2b2b] w-48 rounded-bl-2xl flex flex-col justify-center items-center px-7 py-5 text-white gap-2">
            {
              loginStatus ? <h3 onClick={() => {
                navigate('/login')
                dispatch(setLogout())
              }}>Logout</h3> : <h3><Link to={'/login'}> Login </Link></h3>
            }

            <div className="w-full h-[1px] bg-white"></div>
            <h3><Link to={'/cart'}> Saved </Link></h3>
          </div>
        }


        <div className='shadow-md w-full text-[#B68D40] text-[16px]  bg-white '>
          <nav className='h-[110px] w-full hidden lg:flex justify-between items-center px-10 '>
            <a href="https://my-thread.co.uk">
              <img src="/image/common/logo.svg" width={100} alt="" />
            </a>

            <ul className='flex justify-center items-center   h-full font-inter gap-[50px]'>

              <li className='cursor-pointer hover:underline underline-offset-1 h-full group flex justify-center items-center'>
                <Link to={'/productBuilder'}>Shop Now</Link>
                <div className="fixed left-0 top-[100px] space-y-10 h-0 group-hover:h-[550px] overflow-hidden duration-500 w-full bg-white  px-[10%] ">
                  <div className={`flex  items-center justify-center gap-5 bg-white relative z-[99] text-black pt-10`}>
                    <h1 className='text-2xl'>Shop Our Curtains</h1>
                    <p>Our curtains are made to measure at the highest quality specification.</p>
                  </div>
                  <div className={`flex justify-center gap-5 items-center  w-full `}>
                    <Curtain submenu={2} path={'/productBuilder'} title={'Customise Curtains'} backgroundImage={'/image/common/nav4.png'} />
                    <Curtain submenu={2} path={'/productBuilder'} title={'Customise Blinds'} backgroundImage={'/image/common/megamenu-blinds.jpeg'} />
                  </div>
                </div>
              </li>

              <li className='cursor-pointer hover:underline underline-offset-1 h-full group flex justify-center items-center'>
                <Link to={'/curtains'}>Curtain Style</Link>
                <div className="fixed left-0 top-[100px] space-y-10 h-0 group-hover:h-[550px] overflow-hidden duration-500 w-full bg-white  px-[10%] ">
                  <div className={` flex items-center justify-center gap-5 bg-white relative z-[99] text-black pt-10`}>
                    <h1 className='text-2xl'>Shop Our Curtains</h1>
                    <p>Our curtains are made to measure at the highest quality specification.</p>
                  </div>
                  <div className={`flex justify-center gap-5 items-center w-full`}>
                    <Curtain submenu={4} path={'/PencilPleatCurtains'} title={'Pencil Pleat Curtains'} backgroundImage={'/image/common/nav1.jpg'} />
                    <Curtain submenu={4} path={'/EyeletCurtains'} title={'Eyelet Curtains'} backgroundImage={'/image/common/nav2.jpg'} />
                    <Curtain submenu={4} path={'/Goblet'} title={'Goblet Curtains'} backgroundImage={'/image/common/nav3.jpg'} />
                    <Curtain submenu={4} path={'/DoublePleatCurtains'} title={'Double Pleat Curtains'} backgroundImage={'/image/common/nav5.png'} />
                    <Curtain submenu={4} path={'/TriplePleatCurtains'} title={'Trible Pleat Curtains'} backgroundImage={'/image/common/nav4.png'} />
                    <Curtain submenu={4} path={'/curtains'} title={'Shop All Curtains'} />
                  </div>
                </div>
              </li>


              <li className='cursor-pointer hover:underline underline-offset-1 h-full group flex justify-center items-center'>
                <Link to={'/order-samples'}> Order Samples </Link>
                <div className="fixed left-0 top-[100px]  h-0 group-hover:h-[550px] overflow-hidden duration-500 w-full bg-white group-hover:pt-[5%] px-[10%] bg-no-repeat bg-cover space-y-10 text-white" style={{ backgroundImage: "url('/image/common/mega-menu.jpg')" }}>
                  <h2 className='text-4xl  font-medium'>Curtain + Blind Fabric Samples</h2>
                  <p className='text-sm '>
                    ORDER YOUR PACK from our large selection of eco-friendly fabrics all available in a range of classic <br />
                    heading and lining styles, including blackout and thermal. Choose up to eight free samples and <br />
                    we'll pop them in the post.
                  </p>
                  <div className="flex gap-5 text-black">
                    <Link to={'/order-samples'}>
                      <div className="h-40 w-40 border border-black bg-white hover:bg-[#D7C7BE] duration-200 flex flex-col justify-center items-center gap-5">
                        <p>ALL FABRICS</p>
                      </div>
                    </Link>

                    <Link to={'/order-samples'}>
                      <div className="h-40 w-40 border border-black bg-white hover:bg-[#D7C7BE] duration-200 flex flex-col justify-center items-center gap-2">
                        <Curtains />
                        <p>CURTAINS</p>
                      </div>
                    </Link>

                    <Link to={'/order-samples'}>
                      <div className="h-40 w-40 border border-black bg-white hover:bg-[#D7C7BE] duration-200 flex flex-col justify-center items-center gap-2">
                        <RomanBlinds />
                        <p>ROMAN BLINDS</p>
                      </div>
                    </Link>

                    <Link to={'/order-samples'}>
                      <div className="h-40 w-40 border border-black bg-white hover:bg-[#D7C7BE] duration-200 flex flex-col justify-center items-center gap-2">
                        <RollerBlinds />
                        <p>ROLLER BLINDS</p>
                      </div>
                    </Link>

                  </div>
                </div>
              </li>


              <li className='cursor-pointer hover:underline underline-offset-1 h-full group flex justify-center items-center'><Link to={'/about-us'}> About Us </Link></li>
              <li className='cursor-pointer hover:underline underline-offset-1 h-full group flex justify-center items-center'><Link to={'/contact-us'}> Contact Us </Link></li>


              {cart.length !== 0 &&
                <li className='cursor-pointer hover:underline underline-offset-1 h-full group flex justify-center items-center'>
                  <p className=''>Your Sample <p className='inline-flex justify-center items-center h-6 w-6 rounded-full bg-[#CD6600] text-white'>{cart.length}</p></p>
                  <div className="fixed left-0 top-[100px]  h-0 group-hover:h-[550px] overflow-hidden duration-500 w-full bg-white text-black group-hover:pt-[5%] px-[5%]  flex">
                    <div className="w-1/2 space-y-10">
                      <p className='text-4xl font-normal'>Sample pack</p>
                      <p>Select up to 8 fabric samples and we'll deliver them for free!</p>
                      <button className='border px-10 py-3 border-black bg-black text-white'
                        onClick={() => {
                          if (cart.length) {
                            navigate('/samples-checkout')
                          } else {
                            window.alert('Please Select Any Fabrics')
                          }
                        }}
                      >ORDER YOUR PACK</button>
                    </div>
                    <div className="w-1/2 flex justify-start gap-5 flex-wrap h-fit">
                      {
                        cart.map(e => <div className="relative w-28 h-28 ">
                          <img src={e.magnifyFabricPath} className='w-full h-full rounded-full  border border-black' alt='' />
                          <div className="delete absolute bg-[#1e1e1e] h-7 w-7 rounded-full top-1 right-1 flex justify-center items-center text-white" onClick={() => {
                            dispatch(setCart(cart.filter(ev => ev.id !== e.id)))
                          }}>
                            <Delete fontSize='small' />
                          </div>
                        </div>)
                      }
                      {
                        [...Array(10 - cart.length)].map(e => <div className="w-28 h-28 border border-black flex justify-center items-center text-5xl font-light">+</div>)
                      }
                    </div>
                  </div>
                </li>}
            </ul>
            <div className="flex gap-5">
              <Link to={'/cart'}>
                <Cart />
              </Link>
              <button onClick={()=>{setShowAccount(!showAccount)}}>Account</button >
            </div>

          </nav>
        </div>

        <nav className='h-20 w-full flex lg:hidden justify-between items-center px-5 bg-white'>
          <MenuOutlined className='cursor-pointer' onClick={() => setShowMenu(!showMenu)} />


          <a href="https://my-thread.co.uk">
            <img src="/image/common/logo.svg" width={100} alt="" />
          </a>

          <div className="flex gap-5 items-center">

            <div className="flex justify-center items-center relative">
              <span className='h-5 w-5 bg-[#cd6500] rounded-full absolute -top-2 -right-3 flex justify-center items-center text-white'>{cart.length}</span>
              <img src={orderSampleIcon} className='h-7 w-7' alt="" onClick={() => {
                if (cart.length) {
                  navigate('/samples-checkout')
                } else {
                  navigate('/order-samples')
                  window.alert('Please Select Any Fabrics')
                }
              }} />
            </div>
            <div className="flex justify-center items-center relative">
              <span className='h-5 w-5 bg-[#cd6500] rounded-full absolute -top-2 -right-3 flex justify-center items-center text-white'>0</span>
              <img src={cartIcon} className='h-7 w-7' alt="" />
            </div>

            {/* <LocalPhone />
            <Email /> */}
          </div>
        </nav>
        {
          showMenu && <ul className="flex lg:hidden flex-col w-full p-2 gap-3 ">
            <li className='cursor-pointer'><Link to={'/productBuilder'}> Shop Now </Link></li>
            <li className='cursor-pointer'><Link to={'/order-samples'}>Order Samples</Link></li>
            <li className='cursor-pointer'><Link to={'/about-us'}> About Us </Link></li>
            <li className='cursor-pointer'><Link to={'/contact-us'}> Contact Us </Link></li>
            {
              cart.length !== 0 && <li> <Link to={'/samples-checkout'}>Your Sample <p className='inline-flex justify-center items-center h-6 w-6 rounded-full bg-[#CD6600] text-white'>{cart.length}</p></Link></li>
            }

          </ul>
        }
      </div>

    </>
  )
}

export default Navbar

const Curtain = ({ backgroundImage, title, path, submenu }) => {
  const [zoom, setZoom] = useState(false)
  const navigate = useNavigate()
  return (

    <div onClick={() => { navigate(path) }} className={`group-hover:h-[360px] w-1/${submenu} relative rounded-xl duration-200 overflow-hidden`} style={{ background: !backgroundImage && '#7285a5' }} onMouseEnter={() => setZoom(true)} onMouseLeave={() => setZoom(false)}>
      {
        backgroundImage && <img src={backgroundImage} className='w-full h-[360px] object-cover' alt='' />
      }
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
