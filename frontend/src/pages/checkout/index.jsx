import React, { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
// import { NavigateBeforeOutlined, NavigateNextOutlined, ShoppingCart } from '@mui/icons-material'
// import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'

import Navbar from '../common/Navbar'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import backendIP from '../../backendIP'
import { Double } from '../productBuilder/components/model/Double'
import { Eyelet } from '../productBuilder/components/model/Eyelet'
import { Pencil } from '../productBuilder/components/model/Pencil'
import { Goblet } from '../productBuilder/components/model/Goblet'
import { Triple } from '../productBuilder/components/model/Triple'
import { Room } from '../productBuilder/components/Room'



function CheckOut() {

  const { name, color } = useSelector(state => state.fabric.fabricType)
  const { width, height, roomName, item, installation, isPole, } = useSelector(state => state.fabric.measure)
  const { panel, look } = useSelector(state => state.fabric.style)
  const { lining, poleAndTrack } = useSelector(state => state.fabric.feature)
  const { glide, corded } = useSelector(state => state.fabric.feature.accessories)
  const { price, wallColor } = useSelector(state => state.fabric)

  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  return (
    <div>
      <Navbar />
      <div className="gap-y-5 flex flex-col items-center justify-center">
        <h2 className='text-2xl text-center mt-5 font-medium'>Checkout</h2>
        <div className="h-72 w-96">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 14]} />

            <ambientLight intensity={0.5} />
            <directionalLight position={[-1, 5, 2]} />
            <Suspense fallback={null}>

              <Room wallColor={wallColor} />
              {
                look === 'Double' && <Double />
              }
              {
                look === 'Eyelet' && <Eyelet />
              }
              {
                look === 'Pencil' && <Pencil />
              }
              {
                look === 'Goblet' && <Goblet />
              }
              {
                look === 'Triple' && <Triple />
              }
            </Suspense>
          </Canvas>
        </div>
        <div className="space-y-3 text-lg font-medium relative left-8 lg:left-16">
          <div className="flex">  <p className='w-40 lg:w-64 text-xl'>Fabric          </p>  <p className='lg:ml-16 flex justify-center items-center gap-3'>{color && <div className='h-8 w-8 rounded-full ' style={{ backgroundColor: color }}></div>}{name}</p>   </div>
          <div className="flex">  <p className='w-40 lg:w-64 text-xl'>Item            </p>  <p className='lg:ml-16'>{item}</p>  </div>
          <div className="flex">  <p className='w-40 lg:w-64 text-xl'>Installation    </p>  <p className='lg:ml-16'>{installation}</p>  </div>
          <div className="flex">  <p className='w-40 lg:w-64 text-xl'>Is Pole         </p>  <p className='lg:ml-16'>{isPole ? 'Yes' : 'No'}</p>  </div>

          <div className="flex">  <p className='w-40 lg:w-64 text-xl'>Measurements    </p>  <p className='lg:ml-16'>{`${width} W ${height} H (${roomName})`}</p>  </div>
          <div className="flex">  <p className='w-40 lg:w-64 text-xl'>Panel           </p>  <p className='lg:ml-16'>{panel}</p>  </div>
          <div className="flex">  <p className='w-40 lg:w-64 text-xl'>Style           </p>  <p className='lg:ml-16'>{look}</p>  </div>
          <div className="flex">  <p className='w-40 lg:w-64 text-xl'>Lining          </p>  <p className='lg:ml-16'>{lining}</p>  </div>
          <div className="flex">  <p className='w-40 lg:w-64 text-xl'>Accessories   </p>  <p className='lg:ml-16'>{poleAndTrack}</p>  </div>
          {poleAndTrack === 'Pole' && <div className="flex">  <p className='w-40 lg:w-64 text-xl'>Glide           </p>  <p className='lg:ml-16'>{glide} CM</p>  </div>}
          {poleAndTrack === 'Pole' && <div className="flex">  <p className='w-40 lg:w-64 text-xl'>corded          </p>  <p className='lg:ml-16'>{corded}</p>  </div>}

          <div className="flex">  <p className='w-64 text-xl'>Making Price    </p>  <p className='ml-16'>{Math.floor(price)}</p>  </div>
          {/* {poleAndTrack === 'Pole' && <div className="flex">  <p className='w-64 text-xl'>Accessories Price     </p>  <p className='ml-16'>{Math.floor(price)}</p>  </div>} */}
          <div className="flex">  <p className='w-64 text-xl'>Boxed &  Postage</p>  <p className='ml-16'>{30}</p>  </div>
          <div className="flex">  <p className='w-64 text-xl'>Total Price     </p>  <p className='ml-16'>{Math.floor(price + 30)}</p>  </div>
          
        </div>
      </div>

      <div className="mt-10 flex flex-col justify-center items-center ">
        <form onSubmit={e => {
          e.preventDefault()
          axios.post(`${backendIP}/pay`, { email, amount: price }).then(res => {
            const { client_secret } = res.data
            if (client_secret) {
              navigate(`/payment/${client_secret}`)
            }
          })
        }} className='w-96 lg:w-[500px] gap-y-3 flex flex-col items-center px-[5%]'  >

          <div className="flex w-full gap-[10%]">
            <div className="flex flex-col gap-2 w-[60%]">
              <label htmlFor="">First Name</label>
              <input required type="text" className='w-full h-8 rounded-lg border border-[#B68D40] outline-none pl-2' />
            </div>
            <div className="flex flex-col gap-2 w-[30%]">
              <label htmlFor="">Last Name</label>
              <input required type="text" className='w-full h-8 rounded-lg border border-[#B68D40] outline-none pl-2' />
            </div>
          </div>

          <div className="flex w-full gap-[10%]">
            <div className="flex flex-col gap-2 w-[60%]">
              <label htmlFor="">Phone Number</label>
              <input required type="text" className='w-full h-8 rounded-lg border border-[#B68D40] outline-none pl-2' />
            </div>
            <div className="flex flex-col gap-2 w-[30%]">
              <label htmlFor="">Post Code</label>
              <input required type="text" className='w-full h-8 rounded-lg border border-[#B68D40] outline-none pl-2' />
            </div>
          </div>



          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="">Address</label>
            <textarea required type="text" className='w-full h-24 rounded-lg border border-[#B68D40] outline-none p-2' />
          </div>

          {/* <div className="w-full h-12 bg-[#B68D40]/30 rounded-md">
                  <input onChange={e=>e.target.setCustomValidity('Card number must contain 12 digit')} min={111111111111} max={999999999999}  required type="number" className='h-full w-2/4 bg-transparent outline-none pl-2' placeholder='CARD NUMBER' />
                  <input required type="number" className='h-full w-1/4 bg-transparent outline-none pl-2' placeholder='MM/YY' />
                  <input onChange={e=>e.target.setCustomValidity('CVV number must contain 3 digit')} min={100} max={999} required type="number" className='h-full w-1/4 bg-transparent outline-none pl-2' placeholder='CVV' />
                </div> */}

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="">Email</label>
            <input onChange={e => { setEmail(e.target.value) }} required type="email" className='w-full h-12 rounded-lg border border-[#B68D40] outline-none p-2' />
          </div>

          <button className='h-12 w-48 rounded-md bg-[#B68D40] text-lg font-semibold' type='submit'> Confirm Payment </button>

        </form>

      </div>
    </div>
  )
}

export default CheckOut


