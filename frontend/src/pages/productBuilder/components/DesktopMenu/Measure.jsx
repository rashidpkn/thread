import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setHeight, setInstallation, setIsPole, setItem, setRoom, setRoomName,setWidth } from '../../../../redux/slice/fabric'
import { setMenu } from '../../../../redux/slice/util'

import Preload from 'image-preload'

import Bay from '../../../asset/measurment/Bay.png'
import Flat from '../../../asset/measurment/Flat.png'
import Inside from '../../../asset/measurment/Inside.png'
import OutSide from '../../../asset/measurment/Outside.png'


import dBay from '../../../asset/measurment/dBay.png'
import dFlat from '../../../asset/measurment/dFlat.png'
import dInside from '../../../asset/measurment/dInside.png'
import dOutSide from '../../../asset/measurment/dOutside.png'

Preload([Bay,Flat,Inside,OutSide,dBay,dFlat,dInside,dOutSide])



function Measure() {
  const dispatch = useDispatch()
  const { room, roomName, item ,installation} = useSelector(state => state.fabric.measure)

 

  const [selector, setSelector] = useState(1)
  return (
    <div className='space-y-5'>
      <div className="p-5 w-full flex items-center justify-between gap-5">
        <div className=''>
          <button className={`${selector !== 2 && 'hidden'} text-[#B68D40]`}  onClick={() => selector !==1 && setSelector(selector-1)}>Back</button>
        </div>
        <p className='font-medium text-center'>Get Your Measurements</p>
        <div className=""></div>
        {/* <button className='h-8 w-20 rounded-3xl bg-[#B68D40] text-white' onClick={() => dispatch(setMenu(3))}>Next</button> */}
      </div>
      {/* <div className="w-full px-5">
            <button className='h-12 w-full border border-[#b68d40] rounded-md hover:text-[#B68D40]'>Add a new measurements</button>
        </div> */}

      <div className="flex justify-center gap-5">
        <button onClick={() => setSelector(1)} className={`${selector === 1 ? 'text-[#B68D40]' : 'hidden' }  `} >Curtain/Blinds</button>
        <button onClick={() => setSelector(2)} className={`${selector === 2 ? 'text-[#B68D40]' : 'hidden' }  `} >Room Name</button>
        <button onClick={() => setSelector(3)} className={`${selector === 3 ? 'text-[#B68D40]' : 'hidden' }  `} >Measurment</button>
      </div>
      {
        selector === 1 && <div className="space-y-3">

          <p className='text-center font-medium'>What are you measuring for?</p>
          <div className="flex justify-center gap-5">
            <div onClick={() => { dispatch(setItem('Curtain')) }} className={` w-24 h-24 rounded-md flex justify-center items-center `}> <img className='w-full' src={item === 'Curtain' ? Flat : dFlat} alt="" /> </div>
            <div onClick={() => { dispatch(setItem('Blind')) }} className={` w-24 h-24 rounded-md flex justify-center items-center `}>  <img className='w-full' src={item === 'Blind' ? OutSide : dOutSide} alt="" /> </div>
          </div>
          {
            item === 'Curtain' && <div className="space-y-3">
              <p className='text-center font-medium'>What kind of window to you have?</p>
              <div className="flex justify-center gap-5">
                <div onClick={()=>{dispatch(setInstallation('Curtain Flat'))}}  className={` w-24 h-24 rounded-md flex justify-center items-center `}> <img className='w-full' src={installation === 'Curtain Flat' ? Flat : dFlat} alt="" /> </div>
                <div onClick={()=>{dispatch(setInstallation('Curtain Bay'))}} className={` w-24 h-24 rounded-md flex justify-center items-center `}> <img className='w-full' src={installation === 'Curtain Bay' ? Bay : dBay} alt="" /> </div>
              </div>
            </div>
          }

          {
            item === 'Blind' && <div className="space-y-3">
              <p className='text-center font-medium'>How will your blinds be installed?</p>
              <div className="flex justify-center gap-5">
                <div onClick={()=>{dispatch(setInstallation('Blind Inside'))}} className={`w-24 h-24 rounded-md flex justify-center items-center `}> <img className='w-full' src={installation === 'Blind Inside' ? Inside :dInside} alt="" /> </div>
                <div onClick={()=>{dispatch(setInstallation('Blind OutSide'))}} className={`w-24 h-24 rounded-md flex justify-center items-center `}> <img className='w-full' src={installation === 'Blind OutSide' ? OutSide : dOutSide} alt="" /> </div>
              </div>
            </div>
          }
          <div className="flex justify-center items-center">
            <button className='h-12 px-3 bg-[#B68D40] rounded-md text-white' onClick={() => setSelector(2) }>Name your room</button>
          </div>

        </div>
      }


      {
        selector === 2 && <div className="space-y-5">
          <p className='text-center font-medium'>The layer on the inside of the curtain, for insulation or a weightier look.</p>
          <div className="flex justify-center flex-wrap gap-3 px-2">
            <button onClick={() => dispatch(setRoom('Bedroom'))} className={` ${room === 'Bedroom' && 'border-2'} h-12 w-28 border border-[#b68d40] rounded-md hover:text-[#B68D40]`}>Bedroom</button>
            <button onClick={() => dispatch(setRoom('Study'))} className={` ${room === 'Study' && 'border-2'} h-12 w-28 border border-[#b68d40] rounded-md hover:text-[#B68D40]`}>Study</button>
            <button onClick={() => dispatch(setRoom('Bathroom'))} className={` ${room === 'Bathroom' && 'border-2'} h-12 w-28 border border-[#b68d40] rounded-md hover:text-[#B68D40]`}>Bathroom</button>
            <button onClick={() => dispatch(setRoom('Balcony'))} className={` ${room === 'Balcony' && 'border-2'} h-12 w-28 border border-[#b68d40] rounded-md hover:text-[#B68D40]`}>Balcony</button>
            <button onClick={() => dispatch(setRoom('Living Room'))} className={` ${room === 'Living Room' && 'border-2'} h-12 w-28 border border-[#b68d40] rounded-md hover:text-[#B68D40]`}>Living Room</button>
            <button onClick={() => dispatch(setRoom('Dining Room'))} className={` ${room === 'Dining Room' && 'border-2'} h-12 w-28 border border-[#b68d40] rounded-md hover:text-[#B68D40]`}>Dining Room</button>
            <button onClick={() => dispatch(setRoom('Kitchen'))} className={` ${room === 'Kitchen' && 'border-2'} h-12 w-28 border border-[#b68d40] rounded-md hover:text-[#B68D40]`}>Kitchen</button>
            <button onClick={() => dispatch(setRoom('Other Rooms'))} className={` ${room === 'Other Rooms' && 'border-2'} h-12 w-28 border border-[#b68d40] rounded-md hover:text-[#B68D40]`}>Other Rooms</button>
          </div>
          <p className='text-center font-medium'>Give this window a name!</p>
          <div className="flex justify-center px-10">
            <input  onChange={e => dispatch(setRoomName(e.target.value))} disabled={room === 'Other Rooms' ? false : true} value={roomName} className='bg-[#122620]/30 h-12 pl-2 w-full rounded-md' placeholder='Bedrooms' type="text" />
          </div>

          <div className="flex justify-center items-center">
            <button className='h-12 px-3 bg-[#B68D40] rounded-md text-white' onClick={() => setSelector(3) }>Add Measurment</button>
          </div>
        </div>
      }

      {
        selector === 3 && <div className="space-y-5">
          <p className='text-center font-medium'>Do you have a pole or track installed ?</p>
          <div className="can-toggle flex justify-center items-center right-12">
            <input id="a" onChange={e => e.target.checked ? dispatch(setIsPole(true)) : dispatch(setIsPole(false))} defaultChecked={true} type="checkbox" />
            <label htmlFor="a">
              <div className="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
            </label>
          </div>
          <p className='text-center font-medium'>Enter Height and Width</p>
          <div className="flex  justify-center gap-5">
            <div className="flex flex-col gap-3">
              <label htmlFor="">Height</label>
              <input min={50} max={200} placeholder='50 CM'  onChange={e => dispatch(setHeight(e.target.value))} className='bg-[#122620]/30 h-12 pl-2 w-28 rounded-md' type="number" />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="">Width</label>
              <input min={50} max={200} placeholder='50 CM' onChange={e => dispatch(setWidth(e.target.value))} className='bg-[#122620]/30 h-12 pl-2 w-28 rounded-md' type="number" />
            </div>

          </div>
          <div className="flex justify-between items-center px-5">
            <button className='h-12 px-3  rounded-md ' onClick={() => setSelector(2) }>Back</button>
            <button className='h-12 px-3 bg-[#B68D40] rounded-md text-white' onClick={() => dispatch(setMenu(3))}>Next</button>
          </div>
        </div>
      }


    </div>
  )
}

export default Measure