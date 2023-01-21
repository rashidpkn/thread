import React from 'react'
import { Link } from 'react-router-dom'

function SectionTwo() {
  return (
    <div className='w-full h-48 bg-[#E6E6E6] flex flex-col items-center justify-around'>
        <h1 className='text-2xl font-bold'>More To Explore</h1>
        <p>Head to our inspiration page to read our latest blog posts...</p>
        <Link to={'/GoogleReviews'} className='underline text-[#808080]'>
            INSPIRE ME
        </Link>
    </div>
  )
}

export default SectionTwo