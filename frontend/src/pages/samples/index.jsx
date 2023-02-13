import { Delete } from '@mui/icons-material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCart } from '../../redux/slice/sample'
// import Cart from '../asset/icon/Cart'

import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import { fabric } from '../productBuilder/components/mobileMenu/Fabrics/Custom'

function Samples() {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.sample)
    const navigate = useNavigate()
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
        if (patterns === '01') {
            setFabrics(fabric.filter(e => e.patternNumber === '01' && e))
        }
        else if (patterns === '00') {
            setFabrics(fabric.filter(e => e.patternNumber === '00' && e))
        } else {
            setFabrics(fabric.filter(e => e))
        }

    }, [patterns])

    useEffect(() => {

        if (sortState === 'lowToHigh') {
            setFabrics(fabric => [...fabric.sort((a, b) => a.price - b.price)])
        } else {
            setFabrics(fabric => [...fabric.sort((a, b) => -a.price + b.price)])
        }


    }, [sortState, patterns])

    return (
        <div>
            <Navbar />
            <div className="p-[3%] flex w-full h-full gap-4 font-inter">

                <div className="w-80 h-auto  hidden lg:block space-y-5">
                    <div className="w-full h-10 ">
                        <p className='text-lg font-light text-[#232323]'>Filter by</p>
                    </div>

                    <img src="https://www.stitched.co.uk/css/assets/svg/horizontal-line-MRUTD5ZJ-d940d8a676e01f8f6b6dc401cae34870.svg?vsn=d" className='w-full' alt="" />
                    <button className='text-lg ' onClick={() => { setShowFilters({ ...showFilters, yourSamples: !showFilters.yourSamples }) }}>YOUR SAMPLES</button>
                    {
                        showFilters.yourSamples && <div className=" space-y-5">

                            {/* <button className='h-14 w-full bg-black text-white'>Login in to see my sample</button> */}
                            <div className="flex gap-5 flex-wrap">
                                {
                                    cart.map(e => <div className="relative">
                                        <img src={e.magnifyFabricPath} className='w-16 h-16 border border-black rounded-full' alt={'curtains'} />
                                        <div className="delete absolute bg-[#1e1e1e] h-7 w-7 rounded-full -top-1 -right-1 flex justify-center items-center" onClick={() => {
                                            dispatch(setCart(cart.filter(ev => ev.id !== e.id)))
                                        }}>
                                            <Delete fontSize='small' className='text-white'/>
                                        </div>
                                    </div>)
                                }
                                {
                                    [...Array(10 - cart.length)].map(e => <div className="w-14 h-14 border border-black flex justify-center items-center text-3xl font-light">+</div>)
                                }
                            </div>
                            <button className='h-14 w-full bg-black text-white' onClick={()=>{
                                if(cart.length){
                                    navigate('/samples-checkout')
                                }else{
                                    window.alert('Please Select Any Fabrics')
                                }
                            }}>ORDER YOUR PACK</button>
                        </div>
                    }

                    <img src="https://www.stitched.co.uk/css/assets/svg/horizontal-line-MRUTD5ZJ-d940d8a676e01f8f6b6dc401cae34870.svg?vsn=d" className='w-full' alt="" />
                    <button className='text-lg ' onClick={() => { setShowFilters({ ...showFilters, fabrics: !showFilters.fabrics }) }}>FABRICS</button>
                    {
                        showFilters.fabrics && <div className="flex flex-wrap gap-5">
                            <button className='h-12 px-5 border' onClick={() => { setPatterns('all') }}>All</button>
                            <button className='h-12 px-5 border' onClick={() => { setPatterns('01') }}>Pattern Fabrics</button>
                            <button className='h-12 px-5 border' onClick={() => { setPatterns('00') }}>Plain Fabrics</button>
                        </div>
                    }

                </div>

                <div className="w-full lg:w-[calc(95%-21rem)]  flex flex-wrap justify-center gap-3 lg:gap-10">

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
                            <div key={e.id} className="w-[170px] lg:w-[270px] h-[270px] lg:h-[400px] relative" >
                                <img className='h-full w-full absolute -z-10' src="/image/samples/book1.png" alt="" loading={'lazy'} />
                                <img src={e.magnifyFabricPath} className='h-full w-full absolute -z-20' alt="" loading={'lazy'} />
                                <div className="absolute bottom-[4.5rem] w-full h-10 flex justify-center items-center ">
                                    <button className='h-full w-[90%] lg:w-1/2 border-2 border-white hover:border-black bg-black/20 hover:bg-white/50 text-white hover:text-black duration-500'
                                        onClick={() => {
                                            if (cart.length === 10) {
                                                window.alert("Your maximum number of cart item is 10")

                                            } else if (cart.find(ev => ev.id === e.id)) {
                                                window.alert("You are already added this sample")
                                            }
                                            else {
                                                dispatch(setCart([...cart, e]))
                                            }
                                        }}
                                    >ADD SAMPLE</button>
                                </div>
                                <div className="absolute bottom-5 w-full h-12 flex justify-between items-center px-5 ">
                                    <p className='font-medium'>{e.name}</p>
                                    <img className='h-full bottom-2 hidden lg:inline-block relative' src="/image/common/logo.svg" alt="" />
                                </div>
                                <div className="absolute top-5 right-6 ">
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