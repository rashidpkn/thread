import { KeyboardBackspace } from '@mui/icons-material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRoom } from '../../../../../redux/slice/fabric'

function Rooms({setSelector}) {
  const {room} = useSelector(state=>state.fabric.measure)
  const dispatch = useDispatch()
  return (
    <div className='space-y-5 relative h-full'>
        <h2 className='text-2xl text-center'>Now lets get some <br /> measurements in</h2>
        <div className="space-y-5">
            <p className='text-center'>What type of room is this?</p>
            <div className="flex justify-center  flex-wrap">
                    <div className={`${room==='Bedroom'     && 'border border-[#2b2b2b]  rounded-xl'} p-1`}> <button onClick={()=>dispatch(setRoom('Bedroom'))}     className={` bg-[#2b2b2b] text-white w-32 h-10 rounded-xl`}>Bedroom</button></div>
                    <div className={`${room==='Study'       && 'border border-[#2b2b2b]  rounded-xl'} p-1`}> <button onClick={()=>dispatch(setRoom('Study'))}       className={` bg-[#2b2b2b] text-white w-32 h-10 rounded-xl`}>Study</button></div>
                    <div className={`${room==='Bathroom'    && 'border border-[#2b2b2b]  rounded-xl'} p-1`}> <button onClick={()=>dispatch(setRoom('Bathroom'))}    className={` bg-[#2b2b2b] text-white w-32 h-10 rounded-xl`}>Bathroom</button></div>
                    <div className={`${room==='Balcony'     && 'border border-[#2b2b2b]  rounded-xl'} p-1`}> <button onClick={()=>dispatch(setRoom('Balcony'))}     className={` bg-[#2b2b2b] text-white w-32 h-10 rounded-xl`}>Balcony</button></div>
                    <div className={`${room==='Living Room' && 'border border-[#2b2b2b]  rounded-xl'} p-1`}> <button onClick={()=>dispatch(setRoom('Living Room'))} className={` bg-[#2b2b2b] text-white w-32 h-10 rounded-xl`}>Living Room</button></div>
                    <div className={`${room==='Dining Room' && 'border border-[#2b2b2b]  rounded-xl'} p-1`}> <button onClick={()=>dispatch(setRoom('Dining Room'))} className={` bg-[#2b2b2b] text-white w-32 h-10 rounded-xl`}>Dining Room</button></div>
                    <div className={`${room==='Kitchen'     && 'border border-[#2b2b2b]  rounded-xl'} p-1`}> <button onClick={()=>dispatch(setRoom('Kitchen'))}     className={` bg-[#2b2b2b] text-white w-32 h-10 rounded-xl`}>Kitchen</button></div>
                    <div className={`${room==='Other Rooms' && 'border border-[#2b2b2b]  rounded-xl'} p-1`}> <button onClick={()=>dispatch(setRoom('Other Rooms'))} className={` bg-[#2b2b2b] text-white w-32 h-10 rounded-xl`}>Other Rooms</button></div>
            </div>
        </div>
        <div className="absolute bottom-5 w-full h-12 flex justify-between items-center px-10">
        <button className="cursor-pointer flex justify-center items-center gap-1" onClick={()=>{setSelector(1)}}><KeyboardBackspace/> Back</button>
            
            <div className="cursor-pointer h-10 w-32 bg-[#2b2b2b] text-white flex justify-center items-center rounded-xl" onClick={()=>{setSelector(3)}}>Next</div>
        </div>
    </div>
  )
}

export default Rooms