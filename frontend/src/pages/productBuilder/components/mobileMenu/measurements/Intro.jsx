import React from 'react'

function Intro({setSelector}) {
    return (
        <div className='space-y-5 '>
            <div className=" space-y-5">
                <h2 className='text-2xl text-center'>Get your <br /> Measurement</h2>
                <h3 className='text-lg text-center'>Input your measurement</h3>
            </div>
            <div className="flex justify-center">
                <button onClick={()=>{setSelector(1)}} className='bg-[#B68D40] px-[20px] py-[14px] rounded-2xl'>Add Measurements</button>
            </div>
        </div>
    )
}

export default Intro