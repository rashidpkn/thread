import React, { useState } from 'react'
import PatternFabrics from './Fabrics/PatternFabrics'
import PlainFabrics from './Fabrics/PlainFabrics'
import WallColor from './Fabrics/WallColor'
// import Details from './measurements/Details'

function Fabric() {
    const [selector, setSelector] = useState(1)
    return (
        <div className='space-y-5'>
            <div className="mt-5 space-y-5">
                <h2 className='text-2xl text-center'>Let's start by <br /> Choosing our fabrics</h2>

            </div>
            <div className="bg-[#624e27] flex justify-between items-center p-2 gap-2  rounded-lg text-white mx-5">
                <button onClick={()=>setSelector(1)} className={`${selector === 1 && 'bg-[#2b2b2b]'}  flex-1 h-[40px] rounded-md`} >Patterns</button>
                <button onClick={()=>setSelector(2)} className={`${selector === 2 && 'bg-[#2b2b2b]'}  flex-1 h-[40px] rounded-md`} >Plain Fabric</button>
                {/* <button onClick={()=>setSelector(3)} className={`${selector === 3 && 'bg-[#b68d40]'}  w-[115px] h-[40px] rounded-md`} >Wall Colors</button> */}
            </div>
            {
                selector === 1 && <PatternFabrics/>
            }
            {
                selector === 2  && <PlainFabrics/>
            }
            {
                selector === 3 && <WallColor />
            }
           
            
        </div>
    )
}

export default Fabric