import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../common/Navbar'
// import google from '../asset/icon/google.png'
// import GoogleLogin from 'react-google-login'


import { useDispatch, useSelector } from 'react-redux'
import { setEmail, setFname, setLoginStatus, setPassword } from '../../redux/slice/user'
import axios from 'axios'
import backendIP from '../../backendIP'
import { setSavedChange } from '../../redux/slice/util'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { email, password } = useSelector(state => state.user)

    const { savedChange } = useSelector(state => state.util.estimate)

    const onSuccess = (res) => {
        
        dispatch(setLoginStatus(true))
        if (savedChange === true) {
            navigate('/estimate')
            dispatch(setSavedChange(false))
        } else {
            navigate('/cart')
        }
        dispatch(setEmail(jwt_decode(res.credential).email))
    };

    const onFailure = (err) => {
        console.log('failed:', err);
        dispatch(setLoginStatus(false))
    };


    return (
        <div className="">
            <Navbar />
            <div className={`px-[10%] mt-36 mb-24`}>
                <h1 className='text-center text-xl md:text-4xl font-semibold'>Sign up or enter your account details below to receive your quotation by email</h1>

                <form className='w-full md:w-[500px] mx-auto   border-[#BABCBB] mt-5 space-y-5' onSubmit={e => {
                    e.preventDefault();
                    axios.post(`${backendIP}/user/login`, { email, password }).then(res => {
                        if (res.data.status) {
                            dispatch(setLoginStatus(true))
                            dispatch(setFname(res.data.fname))
                            if (savedChange) {
                                navigate('/estimate')
                                dispatch(setSavedChange(false))
                            } else {
                                navigate('/cart')
                            }
                        } else {
                            window.alert(res.data.reason)
                        }
                    })
                }}>

                    <div className="space-y-2">
                        <label htmlFor="">Email</label>
                        <div className="">
                            <input value={email} onChange={e => { dispatch(setEmail(e.target.value)) }} required className='h-12 w-full rounded-md border outline-none border-[#BABCBB] pl-3' placeholder='Email' type="email" />
                        </div>
                    </div>


                    <div className="space-y-2">
                        <label htmlFor="">Password</label>
                        <div className="">
                            <input value={password} onChange={e => dispatch(setPassword(e.target.value))} required className='h-12 w-full rounded-md border outline-none border-[#BABCBB] pl-3' placeholder='password' type="password" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center flex-wrap gap-5">
                        <p className='text-lg font-light text-[#03A1FA]'>Forgot Password ?</p>
                        <p className='text-lg font-light text-[#03A1FA]'><Link to={'/signup'}> Sign Up </Link></p>
                        <button type="submit" className='h-12 w-28 bg-[#5c896e] rounded-md  text-white'>Login</button>
                    </div>
                </form>
                <div className="flex justify-center items-center mt-5">
                    <GoogleLogin
                        buttonText="Sign in with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}                 
                    />
                    {/* <button className=' bg-blue-400 text-white p-2 rounded-md flex items-center mt-5'> <div className="h-12 w-12 bg-white rounded-md"> <img src={google} alt="" /> </div> <p className='px-8 font-medium text-lg'>Sign up with Google</p></button> */}
                </div>
            </div>
        </div>
    )
}

export default Login


