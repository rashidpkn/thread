import React from 'react'
import { KeyboardBackspace } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { setInstallation, setItem } from '../../../../../redux/slice/fabric'

import Bay from '../../../../asset/measurment/Bay.png'
import Flat from '../../../../asset/measurment/Flat.png'
import Inside from '../../../../asset/measurment/Inside.png'
import OutSide from '../../../../asset/measurment/Outside.png'


import dBay from '../../../../asset/measurment/dBay.png'
import dFlat from '../../../../asset/measurment/dFlat.png'
import dInside from '../../../../asset/measurment/dInside.png'
import dOutSide from '../../../../asset/measurment/dOutside.png'



function Type({ setSelector }) {
  const { item, installation } = useSelector(state => state.fabric.measure)
  const dispatch = useDispatch()
  return (
    <div className='space-y-5 relative h-full'>
      <h2 className='text-2xl text-center'>Now lets get some <br /> measurements in</h2>

      <p className='text-center font-medium'>What are you measuring for?</p>
      <div className="flex justify-center gap-5">

        <div onClick={() => { dispatch(setItem('Curtain')) }} className={`w-24 h-24 rounded-md relative`}>
          <img className='w-full' src={item === 'Curtain' ? Flat : dFlat} alt="" />
          <p className='absolute -bottom-7 w-full text-center'>Curtain</p>
        </div>

        <div onClick={() => { dispatch(setItem('Blind')) }} className={`w-24 h-24 rounded-md relative`}>
          <img className='w-full' src={item === 'Blind' ? OutSide : dOutSide} alt="" />
          <p className='absolute -bottom-7 w-full text-center'>Blind</p>
        </div>

      </div>
      {
        item === 'Curtain' && <div className="space-y-3">
          <p className='text-center font-medium'>What kind of window to you have?</p>
          <div className="flex justify-center gap-5">
            <div onClick={() => { dispatch(setInstallation('Curtain Flat')) }} className={`w-24 h-24 rounded-md relative`}>
              <img className='w-full' src={installation === 'Curtain Flat' ? Flat : dFlat} alt="" />
              <p className='absolute -bottom-7 w-full text-center'>Flat</p>
            </div>
            <div onClick={() => { dispatch(setInstallation('Curtain Bay')) }} className={`w-24 h-24 rounded-md relative`}>
              <img className='w-full' src={installation === 'Curtain Bay' ? Bay : dBay} alt="" />
              <p className='absolute -bottom-7 w-full text-center'>Bay</p>
            </div>
          </div>
        </div>
      }

      {
        item === 'Blind' && <div className="space-y-3">
          <p className='text-center font-medium'>How will your blinds be installed?</p>
          <div className="flex justify-center gap-5">
            <div onClick={() => { dispatch(setInstallation('Blind Inside')) }} className={`w-24 h-24 rounded-md relative`}>
              <img className='w-full' src={installation === 'Blind Inside' ? Inside : dInside} alt="" />
              <p className='absolute -bottom-7 w-full text-center'>Inside Blind</p>
            </div>
            <div onClick={() => { dispatch(setInstallation('Blind OutSide')) }} className={`w-24 h-24 rounded-md relative`}>
              <img className='w-full' src={installation === 'Blind OutSide' ? OutSide : dOutSide} alt="" />
              <p className='absolute -bottom-12 w-full text-center'>OutSide Blind</p>
            </div>
          </div>
        </div>
      }


      <div className="absolute bottom-5 w-full h-12 flex justify-between items-center px-10">
        <button className="cursor-pointer flex justify-center items-center gap-1" onClick={() => { setSelector(0) }}><KeyboardBackspace /> Back</button>
        <div className="cursor-pointer h-10 w-32 bg-[#2b2b2b] text-white flex justify-center items-center rounded-xl" onClick={() => { setSelector(2) }}>Next</div>
      </div>
    </div>
  )
}

export default Type