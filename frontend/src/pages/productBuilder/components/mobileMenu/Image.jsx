import React from 'react'
import Magnifier from 'react-magnifier';
import { useDispatch, useSelector } from 'react-redux'
import { setFabric } from '../../../../redux/slice/fabric';
import { setShow3D } from '../../../../redux/slice/util';
import { fabric } from './Fabrics/Custom';

function Image() {
    const {magnifyFabricPath,id,magnifyWavyFabricPath} = useSelector(state=>state.fabric.fabricType)
    const dispatch = useDispatch()
  return (
    <div className='inline-block lg:hidden h-96 space-y-5 pt-5'>
        <h2 className='text-center text-3xl font-medium'>Frabric</h2>
        <div className=" flex justify-center items-center gap-5">
          <div className='w-28 h-28'>
            <Magnifier  src={magnifyFabricPath} />
          </div>
          <div className='w-28 h-28'>
            <Magnifier  src={magnifyWavyFabricPath} />
          </div>
            {/* <img src={magnifyFabricPath} alt="" className='w-28 h-28'/>
            <img src={magnifyWavyFabricPath} alt="" className='w-28 h-28'/> */}
        </div>
        <div className='flex flex-wrap justify-center gap-5 h-[500px] overflow-y-scroll px-3'>
        {fabric.map(e=>
          (e.patternNumber==='00' && <div className={`${e.id === id && 'border border-[#b68d40] rounded-full p-1'} flex justify-center items-center`}> 
            <button  onClick={()=>{dispatch(setFabric(e));dispatch(setShow3D(true))}} style={{backgroundColor:e.color}} className={`w-12 h-12 rounded-full`}></button>
          </div>)
        )}
      </div>
    </div>
  )
}

export default Image