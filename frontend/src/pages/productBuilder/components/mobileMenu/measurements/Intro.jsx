import React from 'react'

function Intro({setSelector}) {
    return (
        <div className='space-y-10 '>
            <div className="pt-10">
                <h3 className='text-lg text-center'>Input your measurements</h3>
            </div>
            <div className="flex justify-center">
                <button onClick={()=>{setSelector(1)}} className='bg-[#2b2b2b] text-white px-[20px] py-[14px] rounded-2xl'>Add Measurements</button>
            </div>
        </div>
    )
}

export default Intro