import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setWallColor } from '../../../../../redux/slice/fabric'

function WallColor() {
  const {wallColor} = useSelector(state=>state.fabric)
  const dispatch = useDispatch()
  return (
    <div>
      <div className='flex flex-wrap justify-center gap-5 px-5'>
        <div onClick={()=>dispatch(setWallColor('d7f4e0'))} className={`${wallColor=== 'd7f4e0' && 'border border-[#b68d40] rounded-full '} p-1 flex justify-center items-center`}> <button className='w-12 h-12 rounded-full bg-[#d7f4e0]'></button></div>
        <div onClick={()=>dispatch(setWallColor('d0e3b7'))} className={`${wallColor=== 'd0e3b7' && 'border border-[#b68d40] rounded-full '} p-1 flex justify-center items-center`}> <button className='w-12 h-12 rounded-full bg-[#d0e3b7]'></button></div>
        <div onClick={()=>dispatch(setWallColor('c8d6df'))} className={`${wallColor=== 'c8d6df' && 'border border-[#b68d40] rounded-full '} p-1 flex justify-center items-center`}> <button className='w-12 h-12 rounded-full bg-[#c8d6df]'></button></div>
        <div onClick={()=>dispatch(setWallColor('fae2e0'))} className={`${wallColor=== 'fae2e0' && 'border border-[#b68d40] rounded-full '} p-1 flex justify-center items-center`}> <button className='w-12 h-12 rounded-full bg-[#fae2e0]'></button></div>
        <div onClick={()=>dispatch(setWallColor('fdebd7'))} className={`${wallColor=== 'fdebd7' && 'border border-[#b68d40] rounded-full '} p-1 flex justify-center items-center`}> <button className='w-12 h-12 rounded-full bg-[#fdebd7]'></button></div>
        <div onClick={()=>dispatch(setWallColor('ffefce'))} className={`${wallColor=== 'ffefce' && 'border border-[#b68d40] rounded-full '} p-1 flex justify-center items-center`}> <button className='w-12 h-12 rounded-full bg-[#ffefce]'></button></div>
      </div>
    </div>
  )
}

export default WallColor