import React, { useState } from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BookmarkBorderOutlined } from '@mui/icons-material'
import bg from './bg.png'
import axios from 'axios'
import backendIP from '../../backendIP'
import { setEmail, setFname, setLname } from '../../redux/slice/user'

function Estimate() {
    const dispatch = useDispatch()
    const { name } = useSelector(state => state.fabric.fabricType)
    const { item, installation, height, width, roomName } = useSelector(state => state.fabric.measure)
    const { panel, look } = useSelector(state => state.fabric.style)
    const { poleAndTrack, lining } = useSelector(state => state.fabric.feature)
    const { accessoriesPrice } = useSelector(state => state.fabric.feature.accessories)
    const { price, installationNeeded } = useSelector(state => state.fabric)
    const { isLiveInDubai } = useSelector(state => state.util.productBuilder)   
    const {email} = useSelector(state=>state.user) 

    const navigate = useNavigate()

    const payNow = () => {
        axios.post(`${backendIP}/pay`, { 
            email, 
            amount: Math.floor(price + (installationNeeded ? 250 : 0) + 30 + accessoriesPrice)*130/100
        }).then(res => {
            const { client_secret } = res.data
            if (client_secret) {
                navigate(`/payment/${client_secret}`)
            }
        })
    }

    return (
        <>
            <Navbar />
            <div className="overflow-y-hidden top-0 left-0  z-50 font-light bg-cover " style={{ background: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="min-h-[calc(100vh-110px)]  w-full h-full  flex justify-center items-center backdrop-blur-lg">
                    <div className="bg-[#5C8984]/70 rounded-2xl backdrop-blur-[24px] p-10 flex lg:gap-[100px] justify-center text-white flex-wrap">
                        <div className="w-[370px]">
                            <p className='text-base font-bold font-inter text-center'>Estimate</p>

                            <div className="flex justify-between mt-6">
                                <p>Fabric</p>
                                <p>{name}</p>
                            </div>

                            <div className="flex justify-between mt-3">
                                <p>Item</p>
                                <p>{item}</p>
                            </div>


                            <div className="flex justify-between mt-3">
                                <p>Installation</p>
                                <p>{installation}</p>
                            </div>

                            <div className="flex justify-between mt-3">
                                <p>Pole</p>
                                <p>{poleAndTrack ? 'Yes' : 'No'}</p>
                            </div>

                            <div className="flex justify-between mt-3">
                                <p>Measurements</p>
                                <p>{width} W {height} H ({roomName})</p>
                            </div>

                            {item === 'Curtain' && <>
                                <div className="flex justify-between mt-3">
                                    <p>Panel</p>
                                    <p>{panel}</p>
                                </div>

                                <div className="flex justify-between mt-3">
                                    <p>Style</p>
                                    <p>{look}</p>
                                </div>
                            </>
                            }

                            <div className="flex justify-between mt-3">
                                <p>Lining</p>
                                <p>{lining}</p>
                            </div>

                            <div className="w-full h-[2px] border-dashed border mt-6"></div>


                            <div className="flex justify-between mt-6">
                                <p>Making Price</p>
                                <p>£ {price}</p>
                            </div>

                            <div className="flex justify-between mt-3">
                                <p>Accessories</p>
                                <p>£ {accessoriesPrice}</p>
                            </div>
                            <div className="flex justify-between mt-3">
                                <p>Boxed & Postage</p>
                                <p>£ 30</p>
                            </div>

                            <div className="flex justify-between mt-3">
                                <p>Installation</p>
                                <p>£  {installationNeeded ? 250 : 0} </p>
                            </div>

                            <div className="flex justify-between mt-3">
                                <p>VAT <small>(20%)</small> </p>
                                <p>£  {Math.floor(price + (installationNeeded ? 250 : 0) + 30 + accessoriesPrice)*20/100 } </p>
                            </div>

                            <div className="w-full h-[2px] border-dashed border mt-6"></div>

                            <div className="flex justify-between mt-3">
                                <p>Total Price <small>Inc VAT</small></p>
                                <p className='font-medium' >£ {Math.floor(price + (installationNeeded ? 250 : 0) + 30 + accessoriesPrice)*130/100}</p>
                            </div>
                            <Link to={'/login'}>
                                <p className='mt-6'><BookmarkBorderOutlined /> Save for later</p>
                            </Link>

                        </div>
                        <form className="w-[370px]" onSubmit={e => {
                            e.preventDefault()
                            payNow()
                        }}>
                            <p className='text-base font-bold font-inter text-center'>Payment</p>

                            <div className="flex  justify-between mt-6">
                                <div className="flex flex-col">
                                    <label htmlFor="fName">First Name</label>
                                    <input type="text" id='fName' className='w-44 h-8 rounded outline-none bg-white text-black pl-2' onChange={e=>{dispatch(setFname(e.target.value))}} required placeholder='George' />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="lName">Last Name</label>
                                    <input type="text" id='lName' className='w-36 h-8 rounded outline-none bg-white text-black pl-2' onChange={e=>{dispatch(setLname(e.target.value))}} required placeholder='Wilson' />
                                </div>
                            </div>

                            <div className="flex w-[370px] justify-between mt-6">

                                <div className="">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="flex gap-1">
                                        <input type="text" defaultValue={'+44'} className='w-12 h-8 outline-none rounded bg-white text-black text-center' required />
                                        <input type="tel" className='w-32 h-8 outline-none rounded bg-white text-black pl-2' required />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="">Post Code</label>
                                    <input type="text" className='w-36 h-8 outline-none rounded bg-white text-black pl-2' required placeholder='E1 7AA' />
                                </div>

                            </div>

                            <div className="mt-6">
                                <label htmlFor="address">Address</label>
                                <textarea name="" id="address" cols="30" rows="10" className='w-full h-[87px] outline-none rounded bg-white text-black p-2' required></textarea>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="address">E mail</label>
                                <input type='email' className='w-full h-8 outline-none rounded bg-white text-black p-2' required value={email} onChange={e => {
                                    
                                    dispatch(setEmail(e.target.value))
                                    }} />
                            </div>

                            

                            <div className="flex justify-center w-full items-center mt-6">

                                <button className='px-4 py-1 rounded-lg bg-white text-[#5C8984] flex justify-center items-center hover:shadow-2xl duration-200 hover:scale-110'>Continue to Pay</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Estimate