import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMenu } from '../../../../../redux/slice/util'

function Details() {
    const dispatch = useDispatch()
    const { item } = useSelector(state => state.fabric.measure)
  return (
    <div className='space-y-5 '>
            <div className=" space-y-5 pt-10">
                {/* <h2 className='text-2xl text-center'>Get your <br /> Measurement</h2> */}
                <h3 className='text-lg text-center'>Measurements is Added !</h3>
            </div>
            <div className="flex justify-center">
              {item==='Blind' ? 
              <button  className='bg-[#2b2b2b] text-white px-[20px] py-[14px] rounded-2xl' onClick={()=>dispatch(setMenu(4))}>Choose Accessories</button> 
                :
              <button  className='bg-[#2b2b2b] text-white px-[20px] py-[14px] rounded-2xl' onClick={()=>dispatch(setMenu(3))}>Choose Style</button>
              }
                
            </div>
        </div>
  )
}

export default Details