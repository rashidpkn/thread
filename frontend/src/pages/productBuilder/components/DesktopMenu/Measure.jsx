import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setHeight, setInstallation, setIsPole, setItem, setPrice, setRoom, setRoomName, setWidth } from '../../../../redux/slice/fabric'
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
import { ArrowRightAlt, KeyboardBackspace } from '@mui/icons-material'

Preload([Bay, Flat, Inside, OutSide, dBay, dFlat, dInside, dOutSide])



function Measure() {
  const dispatch = useDispatch()
  const { room, roomName, item, installation, height, width } = useSelector(state => state.fabric.measure)

  useEffect(() => {
    if (item === 'Curtain') {
      dispatch(setInstallation('Flat'))
    } else {
      dispatch(setInstallation('Inside'))
    }
    // eslint-disable-next-line
  }, [item])




  const [selector, setSelector] = useState(1)
  return (
    <div className='space-y-3'>
      <p className='font-medium text-center'>Input Your Measurements</p>
      <div className="flex justify-center gap-5">
        {/* <button onClick={() => setSelector(1)} className={`${selector === 1 ? 'text-[#B68D40]' : 'hidden'}  `} >Curtain/Blinds</button> */}
        <button onClick={() => setSelector(2)} className={`${selector === 2 ? 'text-[#B68D40]' : 'hidden'}  `} >Room Name</button>
        <button onClick={() => setSelector(3)} className={`${selector === 3 ? 'text-[#B68D40]' : 'hidden'}  `} >Measurment</button>
      </div>
      {
        selector === 1 && <div className="space-y-10">

          <p className='text-center font-medium'>What are you measuring for?</p>
          <div className="flex justify-center gap-5">
            <div onClick={() => { dispatch(setItem('Curtain')) }} className={` w-24 h-24 rounded-md flex justify-center items-center relative`}>
              <img className='w-full' src={item === 'Curtain' ? Flat : dFlat} alt="" />
              <p className='absolute -bottom-6 text-center w-full'>Curtain</p>
            </div>
            <div onClick={() => { dispatch(setItem('Blind')) }} className={` w-24 h-24 rounded-md flex justify-center items-center relative`}>
              <img className='w-full' src={item === 'Blind' ? OutSide : dOutSide} alt="" />
              <p className='absolute -bottom-6 text-center w-full'>Blind</p>
            </div>
          </div>
          {
            item === 'Curtain' && <div className="space-y-3">
              <p className='text-center font-medium'>What kind of window to you have?</p>
              <div className="flex justify-center gap-3">
                <div onClick={() => { dispatch(setInstallation('Flat')) }} className={` w-24 h-24 rounded-md flex justify-center items-center relative`}>
                  <img className='w-full' src={installation === 'Flat' ? Flat : dFlat} alt="" />
                  <p className='absolute -bottom-6 text-center'>Flat</p>
                </div>
                <div onClick={() => { dispatch(setInstallation('Bay')) }} className={` w-24 h-24 rounded-md flex justify-center items-center relative`}>
                  <img className='w-full' src={installation === 'Bay' ? Bay : dBay} alt="" />
                  <p className='absolute -bottom-6 text-center'>Bay</p>
                </div>
              </div>
            </div>
          }

          {
            item === 'Blind' && <div className="space-y-3">
              <p className='text-center font-medium'>How will your blinds be installed?</p>
              <div className="flex justify-center gap-7">
                <div onClick={() => { dispatch(setInstallation('Inside')) }} className={`w-24 h-24 rounded-md flex justify-center items-center relative`}>
                  <img className='w-full' src={installation === 'Inside' ? Inside : dInside} alt="" />
                  <p className='absolute -bottom-6 text-center'>Inside</p>
                </div>
                <div onClick={() => { dispatch(setInstallation('Outside')) }} className={`w-24 h-24 rounded-md flex justify-center items-center relative`}>
                  <img className='w-full' src={installation === 'Outside' ? OutSide : dOutSide} alt="" />
                  <p className='absolute -bottom-6 text-center'>Outside</p>
                </div>
              </div>
            </div>
          }
          {/* <div className="flex justify-center items-center">
            <button className='h-12 px-3 bg-[#B68D40] rounded-md text-white' onClick={() => setSelector(2)}>Name your room</button>
          </div> */}
          <div className="flex  justify-between items-center mt-10">
            <button className='px-4 py-1 rounded-lg bg-white text-[#5C8984] flex justify-center items-center hover:shadow-2xl duration-200 hover:scale-110' onClick={() => dispatch(setMenu(1))}> <KeyboardBackspace /> Back</button>
            <button className='px-4 py-1 rounded-lg bg-white text-[#5C8984] flex justify-center items-center hover:shadow-2xl duration-200 hover:scale-110' onClick={() => setSelector(2)}>Next <ArrowRightAlt /></button>
          </div>
        </div>
      }


      {
        selector === 2 && <div className="space-y-5">
          <p className='text-center font-medium'>The layer on the inside of the curtain, for insulation or a weightier look.</p>
          <div className="flex justify-center flex-wrap gap-3 px-2">
            <button onClick={() => dispatch(setRoom('Bedroom'))} className={` ${room === 'Bedroom' && 'border-[3px]'} h-10 px-2 border border-[#b68d40] rounded-md hover:text-[#B68D40]`}>Bedroom</button>
            <button onClick={() => dispatch(setRoom('Study'))} className={` ${room === 'Study' && 'border-[3px]'} h-10 px-2 border border-[#b68d40] rounded-md hover:text-[#B68D40]`}>Study</button>
            <button onClick={() => dispatch(setRoom('Bathroom'))} className={` ${room === 'Bathroom' && 'border-[3px]'} h-10 px-2 border border-[#b68d40] rounded-md hover:text-[#B68D40]`}>Bathroom</button>
            <button onClick={() => dispatch(setRoom('Balcony'))} className={` ${room === 'Balcony' && 'border-[3px]'} h-10 px-2 border border-[#b68d40] rounded-md hover:text-[#B68D40]`}>Balcony</button>
            <button onClick={() => dispatch(setRoom('Living Room'))} className={` ${room === 'Living Room' && 'border-[3px]'} h-10 px-2 border border-[#b68d40] rounded-md hover:text-[#B68D40]`}>Living Room</button>
            <button onClick={() => dispatch(setRoom('Dining Room'))} className={` ${room === 'Dining Room' && 'border-[3px]'} h-10 px-2 border border-[#b68d40] rounded-md hover:text-[#B68D40]`}>Dining Room</button>
            <button onClick={() => dispatch(setRoom('Kitchen'))} className={` ${room === 'Kitchen' && 'border-[3px]'} h-10 px-2 border border-[#b68d40] rounded-md hover:text-[#B68D40]`}>Kitchen</button>
            <button onClick={() => dispatch(setRoom('Other Rooms'))} className={` ${room === 'Other Rooms' && 'border-[3px]'} h-10 px-2 border border-[#b68d40] rounded-md hover:text-[#B68D40]`}>Other Rooms</button>
          </div>
          <p className='text-center font-medium'>Give this window a name!</p>
          <div className="flex justify-center px-10">
            <input onChange={e => dispatch(setRoomName(e.target.value))} disabled={room === 'Other Rooms' ? false : true} value={roomName} className='bg-[#122620]/30 h-12 pl-2 w-full rounded-md text-lg font-medium text-black placeholder:text-black' placeholder='Bedrooms' type="text" />
          </div>

          <div className="flex  justify-between items-center mt-10">
            <button className='px-4 py-1 rounded-lg bg-white text-[#5C8984] flex justify-center items-center hover:shadow-2xl duration-200 hover:scale-110' onClick={() => setSelector(1)}> <KeyboardBackspace /> Back</button>
            <button className='px-4 py-1 rounded-lg bg-white text-[#5C8984] flex justify-center items-center hover:shadow-2xl duration-200 hover:scale-110' onClick={() => setSelector(3)}>Next <ArrowRightAlt /></button>
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
              <label htmlFor="">Height CM</label>
              <input min={100} max={305}
                onChange={e => { dispatch(setHeight(Number(e.target.value))); dispatch(setPrice()) }} className='bg-[#122620]/30 h-12 pl-2 w-40 rounded-md text-black placeholder:text-black/50' placeholder='200 CM' type="number" />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="">Width CM</label>
              <input min={75} max={480}

                onChange={e => { dispatch(setWidth(Number(e.target.value))); dispatch(setPrice()) }} className='bg-[#122620]/30 h-12 pl-2 w-40 rounded-md text-black placeholder:text-black/50' placeholder='250 CM' type="number" />
            </div>

          </div>

          <div className="flex  justify-between items-center mt-10">
            <button className='px-4 py-1 rounded-lg bg-white text-[#5C8984] flex justify-center items-center hover:shadow-2xl duration-200 hover:scale-110' onClick={() => setSelector(2)}> <KeyboardBackspace /> Back</button>
            <button className='px-4 py-1 rounded-lg bg-white text-[#5C8984] flex justify-center items-center hover:shadow-2xl duration-200 hover:scale-110' onClick={() => {
              if ((Number(height) < 100 || Number(height) > 305)) {
                window.alert("Please Provide height between 100 - 480")
              }
              else if (Number(width) < 75 || Number(width) > 480) {
                window.alert("Please Provide width between 75 - 480")
              }
              else {
                item === 'Blind' ? dispatch(setMenu(4)) : dispatch(setMenu(3))
              }
            }}> Next <ArrowRightAlt /></button>
          </div>

        </div>
      }


    </div>
  )
}

export default Measure