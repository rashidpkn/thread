import React from 'react'
// import Cart from '../asset/icon/Cart'

import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import { fabric } from '../productBuilder/components/mobileMenu/Fabrics/Custom'

function Samples() {
    return (
        <div>
            <Navbar />
            <div className="p-[3%] flex w-full h-full gap-4 font-inter">

                <div className="w-80 h-auto  hidden lg:block space-y-5">
                    <div className="w-full h-10 ">
                        <p className='text-lg font-light text-[#232323]'>Filter by</p>
                    </div>
                    
                    <img src="https://www.stitched.co.uk/css/assets/svg/horizontal-line-MRUTD5ZJ-d940d8a676e01f8f6b6dc401cae34870.svg?vsn=d" className='w-full' alt="" />
                    <button className='text-xl font-semibold'>YOUR SAMPLES</button>
                    <div className=""></div>

                    <img src="https://www.stitched.co.uk/css/assets/svg/horizontal-line-MRUTD5ZJ-d940d8a676e01f8f6b6dc401cae34870.svg?vsn=d" className='w-full' alt="" />
                    <button className='text-xl font-semibold'>COLOURS</button>
                    <div className=""></div>
                    
                    <img src="https://www.stitched.co.uk/css/assets/svg/horizontal-line-MRUTD5ZJ-d940d8a676e01f8f6b6dc401cae34870.svg?vsn=d" className='w-full' alt="" />
                    <button className='text-xl font-semibold'>STYLES</button>
                    <div className=""></div>
                    
                    <img src="https://www.stitched.co.uk/css/assets/svg/horizontal-line-MRUTD5ZJ-d940d8a676e01f8f6b6dc401cae34870.svg?vsn=d" className='w-full' alt="" />
                    <button className='text-xl font-semibold'>PRICE</button>
                    <div className=""></div>

                    <img src="https://www.stitched.co.uk/css/assets/svg/horizontal-line-MRUTD5ZJ-d940d8a676e01f8f6b6dc401cae34870.svg?vsn=d" className='w-full' alt="" />
                    <button className='text-xl font-semibold'>COMPOSITION</button>
                    <div className=""></div>

                    <img src="https://www.stitched.co.uk/css/assets/svg/horizontal-line-MRUTD5ZJ-d940d8a676e01f8f6b6dc401cae34870.svg?vsn=d" className='w-full' alt="" />
                    <button className='text-xl font-semibold'>FABRICS</button>
                    <div className=""></div>


                    <img src="https://www.stitched.co.uk/css/assets/svg/horizontal-line-MRUTD5ZJ-d940d8a676e01f8f6b6dc401cae34870.svg?vsn=d" className='w-full' alt="" />
                    <button className='text-xl font-semibold'>VEGAN</button>
                    <div className=""></div>

                    <img src="https://www.stitched.co.uk/css/assets/svg/horizontal-line-MRUTD5ZJ-d940d8a676e01f8f6b6dc401cae34870.svg?vsn=d" className='w-full' alt="" />
                    <button className='text-xl font-semibold'>AVAILABILITY</button>
                    <div className=""></div>

                </div>

                <div className="w-full lg:w-[calc(95%-21rem)]  flex flex-wrap justify-center gap-10">
                    <div className="h-10 w-full flex justify-between items-center">
                        <p className='text-lg font-light text-[#232323]'>{fabric.length} Fabrics</p>
                        <select className='h-12 border-2 border-black' name="" id="">
                            <option value=""> Price Low to High </option>
                            <option value=""> Price High to Low </option>
                        </select>
                    </div>
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
            </div>
            <Footer />
        </div>
    )
}

export default Samples