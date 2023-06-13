import React from 'react'

import Lining from './Features/Lining'

import { Link } from 'react-router-dom'

function Features() {

    return (
        <div className='space-y-5 h-96 overflow-y-scroll pb-10'>
            <div className="mt-5 space-y-5">
                <h2 className='text-2xl text-center'>Features</h2>
            </div>
            <Lining/>
            <div className="flex justify-center">
            <Link to={'/estimate'} >
                <button className='px-4 py-1 rounded-lg bg-white text-[#5C8984] flex justify-center items-center hover:shadow-2xl duration-200 hover:scale-110' >Estimate</button>
            </Link>
            </div>
            
        </div>
    )
}

export default Features