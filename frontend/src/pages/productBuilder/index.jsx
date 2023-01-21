
import React from 'react'
import { useSelector } from 'react-redux'

// import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import DesktopMenu from './components/DesktopMenu/DesktopMenu'
import MobileMenu from './components/mobileMenu/MobileMenu'
import MobileMenuSelector from './components/MobileMenuSelector'
import View from './components/View'


import Magnifier from "react-magnifier";
import Footer from '../common/Footer'

function ProductBuilder() {
  const {fabricPath,magnifyFabricPath,magnifyWavyFabricPath} = useSelector(state=>state.fabric.fabricType)
  return (
    <div className="font-inter w-full overflow-x-hidden">
        <Navbar />
        <div className="w-full flex  flex-col lg:flex-row justify-center lg:h-[calc(100vh-5rem)] lg:gap-2 bg-[#F2F5F7]">
          
          <View />
          <MobileMenu/>
          <DesktopMenu />
        </div>
        <MobileMenuSelector />
        <div className="hidden lg:block  w-full overflow-hidden  py-5 space-y-5">
          <h2 className='text-2xl font-medium text-center'>Fabric</h2>
          <div className="flex h-48 items-center gap-5 justify-center">
              <div className="border h-1/2 w-24"> <img src={fabricPath} alt="" /></div>
              {/* <div className="border h-full w-48"> <img src={magnifyFabricPath} alt="" /></div> */}
              <div className="border h-full w-48"> <Magnifier src={magnifyFabricPath}  /> </div>
              {/* <div className="border h-full w-48 "> <img src={magnifyWavyFabricPath} alt="" /></div> */}
              <div className="border h-full w-48 "> <Magnifier src={magnifyWavyFabricPath} alt="" /></div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ProductBuilder