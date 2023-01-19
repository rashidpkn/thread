import { AddShoppingCartOutlined, MenuOutlined, LocalPhone, Email } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className=' border-b shadow-md w-full text-[#B68D40] text-lg'>
      <nav className='h-20 w-full hidden lg:flex justify-between items-center px-20'>
        <img src="/image/common/logo.svg" width={100} alt="" />
        <ul className='flex gap-8'>
          <li className='cursor-pointer'>Curtain</li>
          <li className='cursor-pointer'><Link to={'/productbuilder'}> Customise Curtains </Link></li>
          <li className='cursor-pointer'>About Us</li>
          <li className='cursor-pointer'>Contact Us</li>
        </ul>
        <AddShoppingCartOutlined fontSize='large' />
      </nav>

      <nav className='h-20 w-full flex lg:hidden justify-between items-center px-5'>
        <MenuOutlined className='cursor-pointer' onClick={()=>setShowMenu(!showMenu)} />
        <img src="/image/common/logo.svg" width={100} alt="" />
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