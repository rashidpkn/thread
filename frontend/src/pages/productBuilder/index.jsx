
import React, { useState } from 'react'
// import { useSelector } from 'react-redux'

// import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import DesktopMenu from './components/DesktopMenu/DesktopMenu'
import MobileMenu from './components/mobileMenu/MobileMenu'
import MobileMenuSelector from './components/MobileMenuSelector'
import View from './components/View'


// import Magnifier from "react-magnifier";
import Footer from '../common/Footer'

function ProductBuilder() {
  // const {fabricPath,magnifyFabricPath,magnifyWavyFabricPath} = useSelector(state=>state.fabric.fabricType)
  const [show, setShow] = useState(true)
  return (
    <>
      <Navbar />
      <div className="font-inter w-full overflow-x-hidden" onClick={() => { setShow(false) }}>
        <div className="w-full flex  flex-col lg:flex-row justify-center lg:h-[calc(100vh-148px)] bg-[#F2F5F7] lg:bg-[#1E1E1E] lg:p-12">
          <View show={show} />
          <MobileMenu />
          <DesktopMenu />
        </div>
        <MobileMenuSelector />

      </div>
      <Footer />
    </>
  )
}

export default ProductBuilder