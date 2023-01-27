import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Accessories from './Features/Accessories'
import Lining from './Features/Lining'
import Pole from './Features/Pole'

function Features() {
    const [selector, setSelector] = useState(1)
    const { poleAndTrack } = useSelector(state => state.fabric.feature)
    return (
        <div className='space-y-5 h-96 overflow-y-scroll pb-10'>
            <div className="mt-5 space-y-5">
                <h2 className='text-2xl text-center'>Features</h2>
            </div>
            <div className="bg-[#624e27] flex justify-between items-center p-2 gap-2  rounded-lg text-white mx-5">
                <button onClick={() => setSelector(1)} className={`${selector === 1 && 'bg-[#2b2b2b] text-white'} ${poleAndTrack==="I don't need one" ? "w-[200px]" : "w-[115px]" }   h-[40px] rounded-md`} >Lining</button>
                <button onClick={() => setSelector(2)} className={`${selector === 2 && 'bg-[#2b2b2b] text-white'} ${poleAndTrack==="I don't need one" ? "w-[200px]" : "w-[115px]" }   h-[40px] rounded-md`} >Pole/Track</button>
                {poleAndTrack !=="I don't need one" 
                    && <button onClick={() => setSelector(3)} className={`${selector === 3 && 'bg-[#2b2b2b] text-white'}  w-[115px] h-[40px] rounded-md`} >Accessories</button>
                }
                
            </div>
            {
                selector === 1 && <Lining/>
            }
            {
                selector === 2 && <Pole/>
            }
            {
                selector === 3 && <Accessories/>
            }

        </div>
    )
}

export default Features