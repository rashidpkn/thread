// import { NavigateBeforeOutlined, NavigateNextOutlined, ShoppingCart } from '@mui/icons-material'
import { ShoppingCart } from '@mui/icons-material'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


import { Double } from './model/Double'
import { Eyelet } from './model/Eyelet'
import { Goblet } from './model/Goblet'
import { Pencil } from './model/Pencil'
import { Triple } from './model/Triple'
import { Room } from './Room'


// import click from '../../asset/viewIcon/click.png'
// import pinch from '../../asset/viewIcon/pinch.png'
// import scroll from '../../asset/viewIcon/scroll.png'
// import swipe from '../../asset/viewIcon/swipe.png'
import Magnifier from 'react-magnifier'



function View({ show }) {
  const { show3D } = useSelector(state => state.util.productBuilder)
  const { wallColor, price } = useSelector(state => state.fabric)
  const { look } = useSelector(state => state.fabric.style)
  const { img } = useSelector(state => state.fabric.fabricType)

  const { name,composition } = useSelector(state => state.fabric.fabricType)
  const { magnifyFabricPath, magnifyWavyFabricPath } = useSelector(state => state.fabric.fabricType)
  const [bigImage, setBigImage] = useState(img)

  useEffect(() => {
      setBigImage(img)
  }, [name])
  
  return (
    <div className={`${!true && 'hidden lg:inline-block'}  h-[calc(100vh-5rem)] lg:overflow-hidden lg:h-full w-full lg:w-3/5  flex-shrink-0 relative`}>
      <div className="z-10 bg-white absolute top-5 right-5 w-28 h-10 rounded-full border flex justify-center items-center gap-3 text-lg font-medium text-[#B68D40]"> <ShoppingCart fontSize="large" />  <p>{price}</p></div>
      {/* {
        show && <div className="absolute  z-10 h-48 w-72  bg-white/60 top-[30%] lg:top-[30%] left-[15%] lg:left-[30%] flex">
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
      } */}

      <div className="view h-full w-full bg-[#2b2b2b] flex justify-center items-center flex-col gap-5 p-5 lg:p-0" >
        {show3D === false ?
          <>
            <div className="lg:hidden">
              <Magnifier src={bigImage} className='object-contain' />
            </div>
            <div className="hidden lg:block">
              <Magnifier src={bigImage} className='h-full w-full' />
            </div>
            {/* <img src={img}  className='lg:object-cover object-contain lg:w-full lg:h-full' />  */}

            <div className="lg:hidden w-full  bg-[#E1B980] rounded-lg text-[#2b2b2b] text-center py-3 px-4 space-y-3">
              {/* <p>Selected Fabric</p> */}
              <h6 className='text-center '>{name}</h6>
              <p className='text-center'>({composition})</p>
              <div className="flex justify-center items-center gap-3 h-20">

              <div className="w-20 h-full ">
                  <img onClick={()=>setBigImage(img)}  src={img} className='h-full w-full rounded-lg' alt='' />
                </div>

                <div className="w-20 h-full ">
                  <img onClick={()=>setBigImage(magnifyFabricPath)}  src={magnifyFabricPath} className='h-full w-full rounded-lg' alt='' />
                </div>
                <div className="w-20 h-full ">
                  <img onClick={()=>setBigImage(magnifyWavyFabricPath)}  src={magnifyWavyFabricPath} className='h-full w-full rounded-lg' alt='' />
                </div>
                
              </div>
            </div>
          </>
          :
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
        }

      </div>
      <Selector setBigImage={setBigImage} />
    </div>
  )
}

export default View


const Selector = ({ setBigImage }) => {
  // const dispatch = useDispatch()
  // const { showMenu } = useSelector(state => state.util.productBuilder)
  const { name,composition } = useSelector(state => state.fabric.fabricType)
  const { magnifyFabricPath, magnifyWavyFabricPath, img } = useSelector(state => state.fabric.fabricType)
  return (
    <div className="z-10 hidden lg:block absolute right-1  bottom-1   bg-[#2b2b2b]/70 rounded-lg text-white text-center py-3 px-4 space-y-3">
      {/* <p>Selected Fabric</p> */}
      <h6 className='text-center'>{name}</h6>
      <p className='text-center text-sm'>({composition})</p>
      <div className="flex gap-3 h-20">
        
        <div className="w-20 h-full ">
          {/* <Magnifier src={magnifyWavyFabricPath} className='h-full w-full rounded-lg' /> */}
          <img onClick={() => setBigImage(img)} src={img} className='h-full w-full rounded-lg' alt="" />
        </div>

        <div className="w-20 h-full ">
          <img onClick={() => setBigImage(magnifyFabricPath)} src={magnifyFabricPath} className='h-full w-full rounded-lg' alt="" />
          {/* <Magnifier src={magnifyFabricPath} className='h-full w-full rounded-lg' /> */}
        </div>

        <div className="w-20 h-full ">
          {/* <Magnifier src={magnifyWavyFabricPath} className='h-full w-full rounded-lg' /> */}
          <img onClick={() => setBigImage(magnifyWavyFabricPath)} src={magnifyWavyFabricPath} className='h-full w-full rounded-lg' alt="" />
        </div>


      </div>
    </div>
  )
}