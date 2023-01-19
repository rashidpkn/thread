import { BookmarkBorderOutlined } from '@mui/icons-material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../common/Navbar'

function Estimate() {
    const { name, color } = useSelector(state => state.fabric.fabricType)
    const { width, height, roomName, item, installation, isPole, } = useSelector(state => state.fabric.measure)
    const { panel, look } = useSelector(state => state.fabric.style)
    const { lining, poleAndTrack } = useSelector(state => state.fabric.feature)
    const { glide, corded } = useSelector(state => state.fabric.feature.accessories)
    const { price } = useSelector(state => state.fabric)
    return (
        <div>
            <Navbar />
            <div className="gap-y-5 flex flex-col items-center justify-center">
                <h2 className='text-2xl text-center mt-5 font-medium'>Estimate</h2>


                <div className="px-10 space-y-3 text-lg font-medium relative left-16">
                    <div className="flex">  <p className='w-64 text-xl'>Fabric          </p>  <p className='ml-16 flex justify-center items-center gap-3'><div className='h-8 w-8 rounded-full ' style={{ backgroundColor: color }}></div> {name}</p>  </div>
                    <div className="flex">  <p className='w-64 text-xl'>Item            </p>  <p className='ml-16'>{item}</p>  </div>
                    <div className="flex">  <p className='w-64 text-xl'>Installation    </p>  <p className='ml-16'>{installation}</p>  </div>
                    <div className="flex">  <p className='w-64 text-xl'>Is Pole         </p>  <p className='ml-16'>{isPole ? 'Yes' : 'No'}</p>  </div>

                    <div className="flex">  <p className='w-64 text-xl'>Measurements    </p>  <p className='ml-16'>{`${width} W ${height} H (${roomName})`}</p>  </div>
                    <div className="flex">  <p className='w-64 text-xl'>Panel           </p>  <p className='ml-16'>{panel}</p>  </div>
                    <div className="flex">  <p className='w-64 text-xl'>Style           </p>  <p className='ml-16'>{look}</p>  </div>
                    <div className="flex">  <p className='w-64 text-xl'>Lining          </p>  <p className='ml-16'>{lining}</p>  </div>
                    <div className="flex">  <p className='w-64 text-xl'>Pole or Track   </p>  <p className='ml-16'>{poleAndTrack}</p>  </div>
                    <div className="flex">  <p className='w-64 text-xl'>Glide           </p>  <p className='ml-16'>{glide} CM</p>  </div>
                    <div className="flex">  <p className='w-64 text-xl'>corded          </p>  <p className='ml-16'>{corded}</p>  </div>

                    <div className="flex">  <p className='w-64 text-xl'>Making Price    </p>  <p className='ml-16'>{price}</p>  </div>
                    <div className="flex">  <p className='w-64 text-xl'>Accessories     </p>  <p className='ml-16'>{price}</p>  </div>
                    <div className="flex">  <p className='w-64 text-xl'>Boxed &  Postage</p>  <p className='ml-16'>{price + 30}</p>  </div>
                </div>
                <div class="w-96  border border-[#b68d40] rounded-3xl h-10 flex justify-center items-center  font-bold text-[#686161]">

                    <button class="flex items-center justify-center w-1/2 h-full text-sm rounded-3xl  text-white bg-[#b68d40]">
                        <Link to={'/checkout'}>
                            Buy Now
                        </Link>
                    </button>
                    <button class="flex items-center justify-center w-1/2 text-sm">
                        <Link to={'/login'}>
                        <BookmarkBorderOutlined /> save for later
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Estimate