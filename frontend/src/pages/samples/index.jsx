import React from 'react'
// import Cart from '../asset/icon/Cart'

import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import { fabric } from '../productBuilder/components/mobileMenu/Fabrics/Custom'

function Samples() {
    return (
        <div>
            <Navbar />
            <div className="p-[5%] flex flex-wrap justify-center gap-10">
                {
                    fabric.map(e => (
                        <div className="w-[270px] h-[400px] relative" style={{ backgroundImage: `url(${e.magnifyFabricPath})` }}>
                            <img src="/image/samples/book1.png" alt="" />
                            <div className="absolute bottom-[4.5rem] w-full h-10 flex justify-center items-center">
                                <button className='h-full w-1/2 border-2 border-white hover:border-black bg-black/20 hover:bg-white/50 text-white hover:text-black duration-500'>ADD SAMPLE</button>
                            </div>
                            <div className="absolute bottom-5 w-full h-12 flex justify-between items-center px-5">
                                <p className='font-medium'>{e.name}</p>
                                <img className='h-full bottom-2 relative' src="/image/common/logo.svg" alt="" />
                            </div>
                            {/* <div className="absolute right-8 top-5">
                                <Cart />
                            </div> */}
                            
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default Samples