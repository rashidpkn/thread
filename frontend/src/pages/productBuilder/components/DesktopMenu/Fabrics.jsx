import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setMenu } from '../../../../redux/slice/util'
import PatternFabrics from '../mobileMenu/Fabrics/PatternFabrics'
import PlainFabrics from '../mobileMenu/Fabrics/PlainFabrics'

import {ArrowRightAlt} from '@mui/icons-material'

function Fabrics() {
    const [selector, setSelector] = useState(1)
    const dispatch = useDispatch()
  return (
    <div className='space-y-10'>
        
        <div className="flex justify-center gap-5">
            <button onClick={()=>setSelector(1)} className={`${selector === 1 ? 'text-white' : 'text-white/50'}`} >PATTERNS</button>
            <button onClick={()=>setSelector(2)} className={`${selector === 2 ? 'text-white' : 'text-[#2B2B2B]/50'}`} >PLAIN FABRICS</button>
            {/* <button onClick={()=>setSelector(3)} className={`${selector === 3 ? 'text-[#2B2B2B]' : 'text-[#2B2B2B]/50'}`} >WALL COLORS</button> */}
        </div>
        
        {
            selector === 1 && <PatternFabrics />
        }
        {
            selector === 2 && <PlainFabrics/>
        }
       
        
        <div className="p-5 w-full flex items-center justify-between gap-5">
            <p className='font-medium text-[#2B2B2B]'></p>
            <button className='px-4 py-1 rounded-lg bg-white text-[#5C8984] flex justify-center items-center hover:shadow-2xl duration-200 hover:scale-110' onClick={()=>dispatch(setMenu(2))}>Next <ArrowRightAlt/></button>
        </div>

    </div>
  )
}

export default Fabrics