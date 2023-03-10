import React from 'react'
import Navbar from '../common/Navbar'
import { setFname, setLname, setPhone, setState, setAddress, setEmail, setZipCode, setPassword, setLoginStatus } from '../../redux/slice/user'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import backendIP from '../../backendIP'
import { useNavigate } from 'react-router-dom'
import { setSavedChange } from '../../redux/slice/util'

function SignUp() {

  const states = [
    'Bedfordshire', 'Berkshire',
    'Buckinghamshire', 'Cambridgeshire',
    'Cheshire', 'Cornwall',
    'Cumbria', 'Derbyshire',
    'Devon', 'Dorset',
    'Durham', 'East Riding',
    'East Sussex', 'East Yorkshire',
    'Essex', 'Gloucestershire',
    'Greater London', 'Hampshire',
    'Hertfordshire', 'Huntingdonshire',
    'Kent', 'Lancashire',
    'Leicestershire', 'Lincolnshire',
    'Merseyside', 'Middlesex',
    'Norfolk', 'Northamptonshire',
    'Northumberland', 'Nottinghamshire',
    'Oxfordshire', 'Rutland',
    'Shropshire', 'Somerset',
    'South Yorkshire', 'Staffordshire',
    'Suffolk', 'Surrey',
    'Tyne and Wear', 'Warwickshire',
    'Westmorland', 'Wiltshire',
    'Worcestershire', 'West Sussex',
    'West Yorkshire',
  ]
  const dispatch = useDispatch()
  
  const { fname, lname, phone, state, address, email, zipCode, password, } = useSelector(state => state.user)
  const {savedChange} = useSelector(state=>state.util.estimate)

  const navigate = useNavigate()
  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center items-center mt-10 p-[5%]">
        <form onSubmit={e => { 
          e.preventDefault();
          axios.post(`${backendIP}/user/signup`,{fname, lname, phone, state, address, email, zipCode, password}).then(res=>{
            if(res.data?.status){
              dispatch(setLoginStatus(true))
              if(savedChange){
                navigate('/estimate')
                dispatch(setSavedChange(false))
            }else{
                navigate('/cart')
            }
            }else{
              window.alert(res.data.reason)
            }
          })
         }} className="space-y-2 w-96 lg:w-[450px] ">

          <div className="flex justify-between gap-[10%] flex-wrap">
            <div className="w-full lg:w-[50%] space-y-2">
              <label className='text-lg' htmlFor="">First Name</label>
              <input value={fname} onChange={e => { dispatch(setFname(e.target.value)) }} required className='h-10 w-full rounded-xl border outline-none border-[#BABCBB] pl-3' type="text" />
            </div>
            <div className="w-full lg:w-[40%] space-y-2">
              <label className='text-lg' htmlFor="">Last Name</label>
              <input value={lname} onChange={e => { dispatch(setLname(e.target.value)) }} required className='h-10 w-full rounded-xl border outline-none border-[#BABCBB] pl-3' type="text" />
            </div>
          </div>

          <div className="flex justify-between gap-[10%] flex-wrap">
            <div className="w-full lg:w-[50%] space-y-2">
              <label className='text-lg' htmlFor="">Phone</label>
              <input value={phone} onChange={e => dispatch(setPhone(e.target.value))} required className='h-10 w-full rounded-xl border outline-none border-[#BABCBB] pl-3' type={'tel'} />
            </div>
            <div className="w-full lg:w-[40%] space-y-2">
              <label className='text-lg' htmlFor="">State</label>
              <select value={state} onChange={e => dispatch(setState(e.target.value))} required className='h-10 w-full rounded-xl border outline-none border-[#BABCBB] pl-3'  >
                <option value="">Select State</option>

                {
                  states.map(e => <option key={e}>{e}</option>)
                }
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className='text-lg' htmlFor="">Address</label>
            <div className="">
              <textarea value={address} onChange={e => dispatch(setAddress(e.target.value))} required className='h-24 w-full rounded-xl border outline-none border-[#BABCBB] pl-3' />
            </div>
          </div>

          <div className="flex justify-between gap-[10%] flex-wrap">
            <div className="w-full lg:w-[50%] space-y-2">
              <label className='text-lg' htmlFor="">E-mail</label>
              <input value={email} onChange={e => dispatch(setEmail(e.target.value))} required className='h-10 w-full rounded-xl border outline-none border-[#BABCBB] pl-3' type={'email'} />
            </div>
            <div className="w-full lg:w-[40%] space-y-2">
              <label className='text-lg' htmlFor="">Post code</label>
              <input value={zipCode} onChange={e => { dispatch(setZipCode(e.target.value));  }} required className='h-10 w-full rounded-xl border outline-none border-[#BABCBB] pl-3' type={"number"} />
            </div>
          </div>


          <div className="flex justify-between gap-[10%] flex-wrap">
            <div className="w-full lg:w-[50%] space-y-2">
              <label className='text-lg' htmlFor="">Password</label>
              <input value={password} onChange={e => dispatch(setPassword(e.target.value))} required className='h-10 w-full rounded-xl border outline-none border-[#BABCBB] pl-3' type="password" />
            </div>
            <div className="w-full lg:w-[40%] space-y-2">
              <label className='text-lg' htmlFor="">Confirm Password</label>
              <input required className='h-10 w-full rounded-xl border outline-none border-[#BABCBB] pl-3' type="password" />
            </div>
          </div>

          <button type='submit' className='h-12 px-3 bg-[#B68d40] text-white rounded-xl text-xl hover:rounded-xl duration-200'>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp