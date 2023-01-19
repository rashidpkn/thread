import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFabric } from '../../../../../redux/slice/fabric'
import { setShow3D } from '../../../../../redux/slice/util'
import { fabric } from './Custom'

function PatternFabrics() {
    const dispatch = useDispatch()
    const {id} = useSelector(state=>state.fabric.fabricType)
  return (
    <div>
      <div className='flex flex-wrap justify-center gap-5 h-[500px] overflow-y-scroll px-3'>
      {fabric.map(e=>
          (e.patternNumber ==='01' && <div className={`${e.id === id && 'border border-[#b68d40] rounded-full p-1'} flex justify-center items-center`}> 
             <button  onClick={()=>{dispatch(setFabric(e));dispatch(setShow3D(true))}} style={{backgroundImage:`url(${e.fabricPath})`}} className={`w-12 h-12 rounded-full`}></button>
          </div>)
        )}
      </div>
    </div>
  )
}

export default PatternFabrics