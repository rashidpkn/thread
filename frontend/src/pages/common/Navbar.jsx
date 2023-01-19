import { AddShoppingCartOutlined, MenuOutlined, LocalPhone, Email } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className=' border-b shadow-md w-full text-[#B68D40] text-lg'>
      <nav className='h-20 w-full hidden lg:flex justify-between items-center px-20'>
      <a href="https://my-thread.co.uk">
          <img src="/image/common/logo.svg" width={100} alt="" />
      </a>
        
        <ul className='flex gap-8'>
          <li className='cursor-pointer'>Curtain</li>
          <li className='cursor-pointer'><Link to={'/productbuilder'}> Customise Curtains </Link></li>
          <li className='cursor-pointer'>About Us</li>
          <li className='cursor-pointer'>Contact Us</li>
        </ul>
        <Link to={'/cart'}>
          <AddShoppingCartOutlined fontSize='large' />
        </Link>
      </nav>

      <nav className='h-20 w-full flex lg:hidden justify-between items-center px-5'>
        <MenuOutlined className='cursor-pointer' onClick={()=>setShowMenu(!showMenu)} />
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
  )
}

export default Navbar