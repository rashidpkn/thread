import { BookmarkBorderOutlined } from '@mui/icons-material'
import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import backendIP from '../../backendIP'
import { setSavedChange } from '../../redux/slice/util'
import Navbar from '../common/Navbar'

function Estimate() {
    const { name, color } = useSelector(state => state.fabric.fabricType)
    const { width, height, roomName, item, installation, isPole, } = useSelector(state => state.fabric.measure)
    const { panel, look } = useSelector(state => state.fabric.style)
    const { lining, poleAndTrack } = useSelector(state => state.fabric.feature)
    const { glide, corded,accessoriesPrice } = useSelector(state => state.fabric.feature.accessories)
    const { price } = useSelector(state => state.fabric)

    const {loginStatus,email} = useSelector(state=>state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div>
            <Navbar />
            <div className="gap-y-5 flex flex-col items-center justify-center">
                <h2 className='text-2xl text-center mt-5 font-medium'>Estimate</h2>
                <div className="px-10 space-y-3 text-lg  relative left-16">
                    <div className="flex">  <p className='w-64 text-xl'>Fabric          </p>  <p className='ml-16 flex justify-center items-center gap-3'>
                        {color && <div className='h-8 w-8 rounded-full ' style={{ backgroundColor: color }} />} {name}</p>  </div>
                    <div className="flex">  <p className='w-64 text-xl'>Item            </p>  <p className='ml-16'>{item}</p>  </div>
                    <div className="flex">  <p className='w-64 text-xl'>Installation    </p>  <p className='ml-16'>{installation}</p>  </div>
                    <div className="flex">  <p className='w-64 text-xl'>Pole         </p>  <p className='ml-16'>{isPole ? 'Yes' : 'No'}</p>  </div>

                    <div className="flex">  <p className='w-64 text-xl'>Measurements    </p>  <p className='ml-16'>{`${width} W ${height} H (${roomName})`}</p>  </div>
                    <div className="flex">  <p className='w-64 text-xl'>Panel           </p>  <p className='ml-16'>{panel}</p>  </div>
                    <div className="flex">  <p className='w-64 text-xl'>Style           </p>  <p className='ml-16'>{look}</p>  </div>
                    <div className="flex">  <p className='w-64 text-xl'>Lining          </p>  <p className='ml-16'>{lining}</p>  </div>
                    <div className="flex">  <p className='w-64 text-xl'>Accessories  </p>  <p className='ml-16'>{poleAndTrack}</p>  </div>
                    {poleAndTrack === 'Pole' && <div className="flex">  <p className='w-40 lg:w-64 text-xl'>Glide           </p>  <p className='lg:ml-16'>{glide} CM</p>  </div>}
                    {poleAndTrack === 'Pole' && <div className="flex">  <p className='w-40 lg:w-64 text-xl'>corded          </p>  <p className='lg:ml-16'>{corded}</p>  </div>}

                    <div className="flex">  <p className='w-64 text-xl'>Making Price    </p>  <p className='ml-16'>£ &nbsp;{Math.floor(price)}</p>  </div>
                    {poleAndTrack==='Pole' && <div className="flex">  <p className='w-64 text-xl'>Accessories Price     </p>  <p className='ml-16'>£ &nbsp;{Math.floor(accessoriesPrice)}</p>  </div> }
                    <div className="flex">  <p className='w-64 text-xl'>Boxed &  Postage</p>  <p className='ml-16'>£ &nbsp;{ 30}</p>  </div>
                    <div className="flex font-medium">  <p className='w-64 text-xl'>Total Price     </p>  <p className='ml-16'>£ &nbsp;{ Math.floor(price+30 + accessoriesPrice)}</p>  </div>
                </div>
                <div class="w-96  border border-[#b68d40] rounded-3xl h-10 flex justify-center items-center  font-bold text-[#686161]">

                    <button class="flex items-center justify-center w-1/2 h-full text-sm rounded-3xl  text-white bg-[#b68d40]">
                        <Link to={'/checkout'}>
                            Buy Now
                        </Link>
                    </button>
                    <button class="flex items-center justify-center w-1/2 text-sm" onClick={()=>{
                            if(loginStatus){
                                axios.post(`${backendIP}/product/save`,{email,name,roomName,item,installation,isPole,height,width,panel,look,lining,poleAndTrack,glide,corded,price}).then(res=>{
                                    if(res.data.status){
                                        window.alert("Product is added to Cart")
                                        navigate('/cart')
                                    }else{
                                        window.alert(res.data.reason)
                                    }
                                })
                            }else{
                                dispatch(setSavedChange(true))
                                navigate('/login')

                            }
                        }}>
                       
                        <BookmarkBorderOutlined /> save for later
                        
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Estimate