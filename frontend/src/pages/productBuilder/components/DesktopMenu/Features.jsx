import { ArrowRightAlt, KeyboardBackspace } from '@mui/icons-material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setAccessoriesPrice, setCorded, setGlide, setLining, setPole } from '../../../../redux/slice/fabric'
import { setMenu } from '../../../../redux/slice/util'

function Features() {
  const dispatch = useDispatch()
  const { glide, corded } = useSelector(state => state.fabric.feature?.accessories)
  const { lining,poleAndTrack } = useSelector(state => state.fabric.feature)
  const { item } = useSelector(state => state.fabric.measure)
  const [selector, setSelector] = useState(1)
  return (
    <div className='space-y-5'>
      {/* <div className="p-5 w-full flex items-center justify-between gap-5">
        
        <p className='font-medium'>Features</p>
        
      </div> */}
      <div className="flex justify-center gap-5">
        <button onClick={() => setSelector(1)} className={`${selector === 1 ? 'text-[#2B2B2B]' : 'hidden'} `} >Lining</button>
        
      </div>


      {
        selector === 1 && <div className="space-y-5">
          <p className='text-center font-medium'>The layer on the inside of the {item==='Curtain' ? 'curtain' :'blind' }, for insulation or a weightier look.</p>
          <div className="flex flex-col gap-5 items-center">
            <button onClick={() => dispatch(setLining('Unlined'))}                       className={`${lining === 'Unlined'                       ? 'bg-[#2B2B2B] text-white' : '' } h-7 w-72 border border-[#2B2B2B] rounded-lg`}>Unlined</button>
            <button onClick={() => dispatch(setLining('Bonded Fleece Blackout Lining'))} className={`${lining === 'Bonded Fleece Blackout Lining' ? 'bg-[#2B2B2B] text-white' : '' } h-7 w-72 border border-[#2B2B2B] rounded-lg`}>Blackout Lined</button>
            <button onClick={() => dispatch(setLining('Thermal Dim Out'))}               className={`${lining === 'Thermal Dim Out'               ? 'bg-[#2B2B2B] text-white' : '' } h-7 w-72 border border-[#2B2B2B] rounded-lg`}>Bounded Fleece Blackout Lining</button>
            <button onClick={() => dispatch(setLining('Blackout Lined'))}                className={`${lining === 'Blackout Lined'                ? 'bg-[#2B2B2B] text-white' : '' } h-7 w-72 border border-[#2B2B2B] rounded-lg`}>Thermal Dim Out</button>
            <button onClick={() => dispatch(setLining('Interlind'))}                     className={`${lining === 'Interlind'                     ? 'bg-[#2B2B2B] text-white' : '' } h-7 w-72 border border-[#2B2B2B] rounded-lg`}>Interlind</button>
          </div>
          
          <div className="flex  justify-between items-center mt-10">
            <button className='px-4 py-1 rounded-lg bg-white text-[#5C8984] flex justify-center items-center hover:shadow-2xl duration-200 hover:scale-110' onClick={() => item==='Blind' ? dispatch(setMenu(2)) :dispatch(setMenu(3))}> <KeyboardBackspace /> Back</button>
            <Link to={'/estimate'} >
                <button className='px-4 py-1 rounded-lg bg-white text-[#5C8984] flex justify-center items-center hover:shadow-2xl duration-200 hover:scale-110' >Estimate</button>
            </Link>
          </div>
        </div>
      }

    


    



    </div>
  )
}

export default Features