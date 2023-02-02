import React, { useState } from 'react'
import { useEffect } from 'react'
// import Cart from '../asset/icon/Cart'

import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import { fabric } from '../productBuilder/components/mobileMenu/Fabrics/Custom'

function Samples() {
    const [showFilters, setShowFilters] = useState({
        yourSamples: false,
        style: false,
        price: false, 
        fabrics: false,
    })
    const [fabrics, setFabrics] = useState(fabric.sort((a, b) => a.price - b.price))
    const [sortState, setSortState] = useState('lowToHigh');
    const [patterns, setPatterns] = useState('')
    
    useEffect(() => {
      if(patterns==='01'){
            setFabrics(fabric.filter(e=>e.patternNumber === '01' && e))
        }
        else if(patterns==='00'){
            setFabrics(fabric.filter(e=>e.patternNumber === '00' && e))
        }else{
            setFabrics(fabric.filter(e=> e))
        }
        
    }, [patterns])
    
    useEffect(() => {

        if (sortState === 'lowToHigh') {
            setFabrics(fabric => [...fabric.sort((a, b) => a.price - b.price)])
        } else {
            setFabrics(fabric => [...fabric.sort((a, b) => -a.price + b.price)])
        }
        
        
    }, [sortState,patterns])
    
    const [cart, setCart] = useState([])
    
    
    return (
        <div>
            <Navbar />
            <div className="flex flex-wrap gap-10 justify-center p-[3%]">
                    
                {cart.map(e=> <div key={e.id} className="w-[270px] h-[400px] relative" style={{ backgroundImage: `url(${e.magnifyFabricPath})` }}>
                                <img src="/image/samples/book1.png" alt="" />
                                <div className="absolute bottom-[4.5rem] w-full h-10 flex justify-center items-center">
                                    <button className='h-full w-1/2 border-2 border-white hover:border-black bg-black/20 hover:bg-white/50 text-white hover:text-black duration-500'
                                        onClick={()=>{
                                            if(cart.length === 10){
                                                window.alert("Your maximum number of cart item is 10")
                                            }else{
                                                setCart([...cart,e])
                                            }
                                        }}
                                    >ADD SAMPLE</button>
                                </div>
                                <div className="absolute bottom-5 w-full h-12 flex justify-between items-center px-5">
                                    <p className='font-medium'>{e.name}</p>
                                    <img className='h-full bottom-2 relative' src="/image/common/logo.svg" alt="" />
                                </div>
                                <div className="absolute top-5 right-6">
                                    <p> £ &nbsp; {e.price} </p>
                                </div>
                            </div>
                            )}

                </div>
            <div className="p-[3%] flex w-full h-full gap-4 font-inter">
                
                <div className="w-80 h-auto  hidden lg:block space-y-5">
                    <div className="w-full h-10 ">
                        <p className='text-lg font-light text-[#232323]'>Filter by</p>
                    </div>

                    <img src="https://www.stitched.co.uk/css/assets/svg/horizontal-line-MRUTD5ZJ-d940d8a676e01f8f6b6dc401cae34870.svg?vsn=d" className='w-full' alt="" />
                    <button className='text-lg ' onClick={() => { setShowFilters({ ...showFilters, yourSamples: !showFilters.yourSamples }) }}>YOUR SAMPLES</button>
                    {
                        showFilters.yourSamples && <div className=" space-y-5 ">
                            <button className='h-14 w-full bg-black text-white'>Login in to see my sample</button>
                            <button className='h-14 w-full bg-black text-white'>ORDER YOUR PACK</button>
                        </div>
                    }




                    {/* <img src="https://www.stitched.co.uk/css/assets/svg/horizontal-line-MRUTD5ZJ-d940d8a676e01f8f6b6dc401cae34870.svg?vsn=d" className='w-full' alt="" />
                    <button className='text-lg ' onClick={() => { setShowFilters({ ...showFilters, price: !showFilters.price }) }}>PRICE</button>
                    {
                        showFilters.price && <div className="flex flex-wrap gap-5">
                            <button className='h-12 w-20 border'>£</button>
                            <button className='h-12 w-20 border'>££</button>
                            <button className='h-12 w-20 border'>£££</button>
                        </div>
                    } */}

                    <img src="https://www.stitched.co.uk/css/assets/svg/horizontal-line-MRUTD5ZJ-d940d8a676e01f8f6b6dc401cae34870.svg?vsn=d" className='w-full' alt="" />
                    <button className='text-lg ' onClick={() => { setShowFilters({ ...showFilters, fabrics: !showFilters.fabrics }) }}>FABRICS</button>
                    {
                        showFilters.fabrics && <div className="flex flex-wrap gap-5">
                            <button className='h-12 px-5 border' onClick={()=>{setPatterns('all')}}>All</button>
                            <button className='h-12 px-5 border' onClick={()=>{setPatterns('01')}}>Pattern Fabrics</button>
                            <button className='h-12 px-5 border' onClick={()=>{setPatterns('00')}}>Plain Fabrics</button>
                        </div>
                    }

                </div>

                <div className="w-full lg:w-[calc(95%-21rem)]  flex flex-wrap justify-center gap-10">
                    <div className="h-10 w-full flex justify-between items-center">
                        <p className='text-lg font-light text-[#232323]'>{fabric.length} Fabrics</p>

                        <select className='h-12 border-2 border-black'
                            onChange={e => {
                                setSortState(e.target.value)

                            }}>

                            <option value="lowToHigh"> Price Low to High </option>
                            <option value="highToLow"> Price High to Low </option>
                        </select>

                    </div>
                    {
                        fabrics.map(e => (
                            <div key={e.id} className="w-[270px] h-[400px] relative" style={{ backgroundImage: `url(${e.magnifyFabricPath})` }}>
                                <img src="/image/samples/book1.png" alt="" />
                                <div className="absolute bottom-[4.5rem] w-full h-10 flex justify-center items-center">
                                    <button className='h-full w-1/2 border-2 border-white hover:border-black bg-black/20 hover:bg-white/50 text-white hover:text-black duration-500'
                                        onClick={()=>{
                                            if(cart.length === 10){
                                                window.alert("Your maximum number of cart item is 10")
                                            }else{
                                                setCart([...cart,e])
                                            }
                                        }}
                                    >ADD SAMPLE</button>
                                </div>
                                <div className="absolute bottom-5 w-full h-12 flex justify-between items-center px-5">
                                    <p className='font-medium'>{e.name}</p>
                                    <img className='h-full bottom-2 relative' src="/image/common/logo.svg" alt="" />
                                </div>
                                <div className="absolute top-5 right-6">
                                    <p> £ &nbsp; {e.price} </p>
                                </div>
                            </div>
                        )
                        )
                    }

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Samples