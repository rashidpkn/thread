import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import backendIP from '../../backendIP'
import { setCart } from '../../redux/slice/sample'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'

function SampleCheckout() {
    const { cart } = useSelector(state => state.sample)
    const dispatch = useDispatch()
    const [data, setData] = useState({
        fName: '',
        lName: '',
        phoneNo: '',
        zipCode: '',
        address: '',
        email: '',
    })
    const navigate = useNavigate()
    return (
        <div>
            <Navbar />
            <div className="lg:px-[10%] py-[5%] space-y-10">
                <p className='text-center'>Free Sample Checkout</p>
                <div className="flex justify-center flex-wrap gap-5">
                    {
                        cart.map(e =>
                        (<div key={e.id} className="w-[170px] lg:w-[270px] h-[270px] lg:h-[400px] relative" >
                            <img className='h-full w-full absolute -z-10' src="/image/samples/book1.png" alt="" loading={'lazy'} />
                            <img src={e.magnifyFabricPath} className='h-full w-full absolute -z-20' alt="" loading={'lazy'} />
                            <div className="absolute bottom-[4.5rem] w-full h-10 flex justify-center items-center ">
                                <button className='h-full w-[90%] lg:w-3/4 border-2 border-white hover:border-black bg-black/20 hover:bg-white/50 text-white hover:text-black duration-500'
                                    onClick={() => {
                                        if (cart.find(ev => ev.id === e.id)) {

                                            dispatch(setCart(cart.filter(evt => evt !== e && e)))

                                        }
                                        else if (cart.length === 10) {
                                            window.alert("Your maximum number of cart item is 10")

                                        }
                                        else {
                                            dispatch(setCart([...cart, e]))
                                        }
                                    }}
                                >
                                    {cart.find(ev => ev.id === e.id) ? 'REMOVE SAMPLE' : 'ADD SAMPLE'}
                                </button>

                            </div>
                            <div className="absolute bottom-5 w-full h-12 flex justify-between items-center px-5 ">
                                <p className='font-medium'>{e.name}</p>
                                <img className='h-full bottom-2 hidden lg:inline-block relative' src="/image/common/logo.svg" alt="" />
                            </div>
                            <div className="absolute top-5 right-6 ">
                                <p> £ &nbsp; {e.price} </p>
                            </div>
                        </div>)
                        )
                    }
                </div>

                <div className="mt-10 flex flex-col justify-center items-center py-10">
                    <form className="w-96 lg:w-[500px] gap-y-3 flex flex-col items-center" onSubmit={e => {
                        e.preventDefault()
                        axios.post(`${backendIP}/email/order-sample`, { ...data, fabrics: cart }).then(res => {
                            if (res.data === true) {
                                window.alert("Your Order is on the way")
                                navigate('/productbuilder')
                                dispatch(setCart([]))
                            } else (
                                window.alert("Somthing is error , Please try Later")
                            )
                        })
                    }}>
                        <div className="flex w-full gap-[10%]"><div className="flex flex-col gap-2 w-[60%]">
                            <label for="">First Name</label>
                            <input onChange={e => { setData({ ...data, fName: e.target.value }) }} required="" type="text" className="w-full h-8 rounded-lg border border-[#B68D40] outline-none pl-2" />
                        </div>
                            <div className="flex flex-col gap-2 w-[30%]">
                                <label for="">Last Name</label>
                                <input onChange={e => { setData({ ...data, lName: e.target.value }) }} required="" type="text" className="w-full h-8 rounded-lg border border-[#B68D40] outline-none pl-2" />
                            </div>
                        </div>
                        <div className="flex w-full gap-[10%]">
                            <div className="flex flex-col gap-2 w-[60%]">
                                <label for="">Phone Number</label>
                                <input onChange={e => { setData({ ...data, phoneNo: e.target.value }) }} required="" type="text" className="w-full h-8 rounded-lg border border-[#B68D40] outline-none pl-2" />
                            </div>
                            <div className="flex flex-col gap-2 w-[30%]">
                                <label for="">Post Code</label>
                                <input onChange={e => { setData({ ...data, zipCode: e.target.value }) }} required="" type="text" className="w-full h-8 rounded-lg border border-[#B68D40] outline-none pl-2" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label for="">Address</label>
                            <textarea onChange={e => { setData({ ...data, address: e.target.value }) }} required="" type="text" className="w-full h-24 rounded-lg border border-[#B68D40] outline-none p-2">
                            </textarea>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label for="">E-mail</label>
                            <input onChange={e => { setData({ ...data, email: e.target.value }) }} required="" type="email" className="w-full h-12 rounded-lg border border-[#B68D40] outline-none p-2" />
                        </div>
                        <button className="h-12 w-48 rounded-md bg-[#B68D40] text-lg font-semibold" type="submit"> Confirm Your Order </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SampleCheckout