import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {BookmarkBorderOutlined} from '@mui/icons-material'

function Estimate() {
    const {name,color} = useSelector(state=>state.fabric.fabricType)
    const {width,height,roomName} = useSelector(state=>state.fabric.measure)
    const {panel,type} = useSelector(state=>state.fabric.style)
    const {lining} = useSelector(state=>state.fabric.feature)
    const {price} = useSelector(state=>state.fabric)
    const { accessoriesPrice } = useSelector(state => state.fabric.feature.accessories)

    return (
        <div className='space-y-5   pb-10'>
            <div className="mt-5 space-y-5">
                <h2 className='text-2xl text-center'>Estimate</h2>
            </div>
            <div className="px-10">
                <div className="flex ">  <p className='w-40'>Fabric          </p>    <p className='flex justify-center items-center gap-3'>{color && <div className='h-8 w-8 rounded-full ' style={{ backgroundColor: color }} />} {name}</p> </div>
                <div className="flex ">  <p className='w-40'>Measurements    </p>    <p>{`${width} W ${height} H (${roomName})`}</p>  </div>
                <div className="flex ">  <p className='w-40'>Panel          </p>     <p>{panel}</p>  </div>
                <div className="flex ">  <p className='w-40'>Style           </p>    <p>{type}</p>  </div>
                <div className="flex ">  <p className='w-40'>Features        </p>    <p>{lining}</p>  </div>
                <div className="flex ">  <p className='w-40'>Making Price    </p>    <p>£ &nbsp; {price}</p>  </div>
                <div className="flex ">  <p className='w-40'>Accessories     </p>    <p>£ &nbsp; {accessoriesPrice}</p>  </div>
                <div className="flex ">  <p className='w-40'>Boxed &  Postage</p>    <p>£ &nbsp; { 30}</p>  </div>
                <div className="flex ">  <p className='w-40'>Total Price</p>    <p>£ &nbsp; {Math.floor(price + 30 + accessoriesPrice)}</p>  </div>

            </div>
            <div className="flex justify-center items-center gap-10">
                <Link to={'/login'}>
                    <button className='text-[#B68D40]'>
                            <BookmarkBorderOutlined /> save for later
                    </button>
                </Link>
                <Link to={'/checkout'}>
                    <button  className='bg-[#B68D40] w-32 h-10 rounded-2xl'>Buy Now</button>
                </Link>
            </div>
        </div>
    )
}

export default Estimate