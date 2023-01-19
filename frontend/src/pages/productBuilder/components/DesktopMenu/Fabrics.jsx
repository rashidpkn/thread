import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setMenu } from '../../../../redux/slice/util'
import PatternFabrics from '../mobileMenu/Fabrics/PatternFabrics'
import PlainFabrics from '../mobileMenu/Fabrics/PlainFabrics'
import WallColor from '../mobileMenu/Fabrics/WallColor'

function Fabrics() {
    const [selector, setSelector] = useState(1)
    const dispatch = useDispatch()
  return (
    <div className='space-y-5'>
        <div className="p-5 w-full flex items-center justify-between gap-5">
            <p className='font-medium'>Choose your own color</p>
            <button className='h-8 w-20 rounded-3xl bg-[#B68D40] text-white' onClick={()=>dispatch(setMenu(2))}>Next</button>
        </div>
        <div className="flex justify-center gap-5">
            <button onClick={()=>setSelector(1)} className={`${selector === 1 && 'text-[#B68D40]'}`} >PLAIN FABRICS</button>
            <button onClick={()=>setSelector(2)} className={`${selector === 2 && 'text-[#B68D40]'}`} >PATTERNS</button>
            <button onClick={()=>setSelector(3)} className={`${selector === 3 && 'text-[#B68D40]'}`} >WALL COLORS</button>
        </div>
        
        {
            selector === 1 && <PlainFabrics/>
        }
        {
            selector === 2 && <PatternFabrics />
        }
        {
            selector === 3 && <WallColor />
        }
        
    </div>
  )
}

export default Fabrics