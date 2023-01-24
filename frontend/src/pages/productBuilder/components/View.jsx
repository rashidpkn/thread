import { NavigateBeforeOutlined, NavigateNextOutlined, ShoppingCart } from '@mui/icons-material'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMenu } from '../../../redux/slice/util'

import { Double } from './model/Double'
import { Eyelet } from './model/Eyelet'
import { Goblet } from './model/Goblet'
import { Pencil } from './model/Pencil'
import { Triple } from './model/Triple'
import { Room } from './Room'


import click from '../../asset/viewIcon/click.png'
import pinch from '../../asset/viewIcon/pinch.png'
import scroll from '../../asset/viewIcon/scroll.png'
import swipe from '../../asset/viewIcon/swipe.png'



function View({show}) {
  const { show3D } = useSelector(state => state.util.productBuilder)
  const { wallColor,price } = useSelector(state => state.fabric)
  const { look } = useSelector(state => state.fabric.style)
  
  return (
    <div className={`${!show3D && 'hidden lg:inline-block'}  h-[calc(100vh-5rem)] lg:h-full w-full lg:w-3/5  flex-shrink-0 relative`}>
      <div className="z-10 bg-white absolute top-5 right-5 w-28 h-10 rounded-full border flex justify-center items-center gap-3 text-lg font-medium text-[#B68D40]"> <ShoppingCart fontSize="large" />  <p>{price}</p></div>
      {
        show && <div className="absolute  z-10 h-48 w-72  bg-white/60 top-[30%] lg:top-[40%] left-[15%] lg:left-[30%] flex">
            <div className="h-full w-1/2 hidden lg:flex flex-col justify-center items-center">
                  <img src={click} alt="" />
                  <p className='text-center'>Click and Drag to rotate</p>
            </div>
            <div className="h-full w-1/2 hidden lg:flex flex-col justify-center items-center">
                  <img src={scroll} alt="" />
                  <p className='text-center'>Scroll in/out to zoom</p>
            </div>

            <div className="h-full w-1/2 flex lg:hidden  flex-col justify-center items-center">
                  <img src={swipe} alt="" />
                  <p className='text-center'>Swipe to rotate</p>
            </div>
            <div className="h-full w-1/2 flex lg:hidden  flex-col justify-center items-center">
                  <img src={pinch} alt="" />
                  <p className='text-center'>Pinch to zoom</p>
            </div>

        </div>
      }
      
      <div className="view h-full w-full" >

        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 14]} />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            maxDistance={20}
            minDistance={0}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={0.5}/>
          <directionalLight position={[-1,5,2]}/>
          <Suspense fallback={null}>

            <Room wallColor={wallColor}/>
            {
              look === 'Double' &&  <Double />
            }
            {
              look === 'Eyelet' && <Eyelet/>
            }
            {
              look === 'Pencil' && <Pencil/>
            }
            {
              look === 'Goblet' && <Goblet/>
            }
            {
              look === 'Triple' && <Triple />
            }
          </Suspense>
        </Canvas>
      </div>
      <Selector />
    </div>
  )
}

export default View


const Selector = () => {
  const dispatch = useDispatch()
  const { showMenu } = useSelector(state => state.util.productBuilder)
  const { color,name } = useSelector(state => state.fabric.fabricType)
  return (
    <div className={`${showMenu && 'hidden lg:flex'} z-10  absolute right-1 bottom-36 lg:bottom-1 w-[167px] h-[156px] rounded-3xl bg-[#F4EBD0]/50 py-5 flex flex-col justify-center gap-5 p-3`}>
      <h2 className='text-base'>Selected Fabric</h2>
      <div className="flex justify-between lg:justify-center items-center">
        <div className="text-[#b68d40] lg:hidden" onClick={() => { dispatch(setMenu(1)) }}><NavigateBeforeOutlined /></div>
        <div className="p-1 rounded-full border-2 border-[#B68D40]">
          <div className='bg-cover rounded-full w-9 h-9 hidden lg:block'  style={{ backgroundColor: color }} ></div>
          <div className='bg-cover rounded-full w-9 h-9 block lg:hidden' onClick={() => { dispatch(setMenu(6)) }} style={{ backgroundColor: color }} ></div>
        </div>
        <div className="text-[#b68d40] lg:hidden" onClick={() => { dispatch(setMenu(1)) }} ><NavigateNextOutlined /></div>
      </div>
      <h6 className='text-center'>{name}</h6>
    </div>
  )
}