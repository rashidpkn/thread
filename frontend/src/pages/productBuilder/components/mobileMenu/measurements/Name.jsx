import { KeyboardBackspace } from '@mui/icons-material'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRoomName } from '../../../../../redux/slice/fabric'

function Name({setSelector}) {
  const {roomName,room} = useSelector(state=>state.fabric.measure)
  const dispatch = useDispatch()

  const Mobilename =  useRef(null)
  
  useEffect(() => {
    Mobilename.current.focus()
  }, [])
  
  return (
    <div className='space-y-5 relative h-full'>
        {/* <h2 className='text-2xl text-center'>Now lets get some <br /> measurements in</h2> */}
        <div className="flex flex-col gap-5 items-center pt-10">
            <p className='text-center'>Give Window a Name ?</p>
            <input ref={Mobilename} onChange={e=>dispatch(setRoomName(e.target.value))} disabled={room=== 'Other Rooms' ? false : true} value={roomName} className='bg-[#122620]/30 h-12 pl-2    text-lg font-medium' placeholder='Bedrooms' type="text" />
        </div>
        <div className="absolute bottom-5 w-full h-12 flex justify-between items-center px-10">
        <button className="cursor-pointer flex justify-center items-center gap-1" onClick={()=>{setSelector(2)}}><KeyboardBackspace/> Back</button>
            <div className="cursor-pointer h-10 w-32 bg-[#2b2b2b] text-white flex justify-center items-center rounded-xl" onClick={()=>{setSelector(4)}}>Next</div>
        </div>
    </div>
  )
}

export default Name