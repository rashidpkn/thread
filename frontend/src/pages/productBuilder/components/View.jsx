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

function View() {
  const { show3D } = useSelector(state => state.util.productBuilder)
  const { wallColor } = useSelector(state => state.fabric)
  const { look } = useSelector(state => state.fabric.style)
  return (
    <div className={`${!show3D && 'hidden lg:inline-block'}  h-[calc(100vh-5rem)] lg:h-full w-full lg:w-[900px] border flex-shrink-0 relative`}>
      <div className="z-10 bg-white absolute top-5 right-5 w-28 h-10 rounded-full border flex justify-center items-center gap-3 text-lg font-medium text-[#B68D40]"> <ShoppingCart fontSize="large" />  <p>{125.5}</p></div>
      <div className="view h-full w-full">
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
          <div className='bg-cover rounded-full w-9 h-9 ' onClick={() => { dispatch(setMenu(6)) }} style={{ backgroundColor: color }} ></div>
        </div>
        <div className="text-[#b68d40] lg:hidden" onClick={() => { dispatch(setMenu(1)) }} ><NavigateNextOutlined /></div>
      </div>
      <h6 className='text-center'>{name}</h6>
    </div>
  )
}