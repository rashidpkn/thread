import React from 'react'
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
                            <img src="/image/samples/book.png" alt="" />
                            <div className="absolute bottom-5 w-full h-12 flex justify-between items-center px-2">
                                <p className='font-medium'>{e.name}</p>
                                <img className='h-full bottom-2 relative' src="/image/common/logo.svg" alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default Samples