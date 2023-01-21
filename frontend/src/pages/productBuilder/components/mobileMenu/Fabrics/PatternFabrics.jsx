import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFabric, setPrice } from '../../../../../redux/slice/fabric'
import { setShow3D } from '../../../../../redux/slice/util'
import { fabric } from './Custom'

function PatternFabrics() {
    const dispatch = useDispatch()
    const {id} = useSelector(state=>state.fabric.fabricType)
  return (
    <div className='px-3 h-[500px] overflow-y-scroll space-y-3'>

        <h6 className='block text-2xl '>£30 per metre</h6>
      <div className='flex flex-wrap justify-center gap-5   '>
      {fabric.map(e=>
          (e.patternNumber ==='01' && e.group==='B' && <div className={`${e.id === id && 'border border-[#b68d40] rounded-full p-1'} flex justify-center items-center`}> 
             <button  onClick={()=>{dispatch(setFabric(e));dispatch(setShow3D(true));dispatch(setPrice())}} style={{backgroundImage:`url(${e.fabricPath})`}} className={`w-12 h-12 rounded-full`}></button>
          </div>)
        )}
      </div>

        <h6 className='block text-2xl '>£35 per metre</h6>
      <div className='flex flex-wrap justify-center gap-5   '>
      {fabric.map(e=>
          (e.patternNumber ==='01' &&  e.group==='C' && <div className={`${e.id === id && 'border border-[#b68d40] rounded-full p-1'} flex justify-center items-center`}> 
             <button  onClick={()=>{dispatch(setFabric(e));dispatch(setShow3D(true));dispatch(setPrice())}} style={{backgroundImage:`url(${e.fabricPath})`}} className={`w-12 h-12 rounded-full`}></button>
          </div>)
        )}
      </div>

        <h6 className='block text-2xl '>£39 per metre</h6>
      <div className='flex flex-wrap justify-center gap-5   '>
      {fabric.map(e=>
          (e.patternNumber ==='01' &&  e.group==='D' && <div className={`${e.id === id && 'border border-[#b68d40] rounded-full p-1'} flex justify-center items-center`}> 
             <button  onClick={()=>{dispatch(setFabric(e));dispatch(setShow3D(true));dispatch(setPrice())}} style={{backgroundImage:`url(${e.fabricPath})`}} className={`w-12 h-12 rounded-full`}></button>
          </div>)
        )}
      </div>

        <h6 className='block text-2xl '>£48 per metre</h6>
      <div className='flex flex-wrap justify-center gap-5   '>
      {fabric.map(e=>
          (e.patternNumber ==='01' &&  e.group==='E' && <div className={`${e.id === id && 'border border-[#b68d40] rounded-full p-1'} flex justify-center items-center`}> 
             <button  onClick={()=>{dispatch(setFabric(e));dispatch(setShow3D(true));dispatch(setPrice())}} style={{backgroundImage:`url(${e.fabricPath})`}} className={`w-12 h-12 rounded-full`}></button>
          </div>)
        )}
      </div>

        <h6 className='block text-2xl '>£57 per metre</h6>
      <div className='flex flex-wrap justify-center gap-5   '>
      {fabric.map(e=>
          (e.patternNumber ==='01' &&  e.group==='F' && <div className={`${e.id === id && 'border border-[#b68d40] rounded-full p-1'} flex justify-center items-center`}> 
             <button  onClick={()=>{dispatch(setFabric(e));dispatch(setShow3D(true));dispatch(setPrice())}} style={{backgroundImage:`url(${e.fabricPath})`}} className={`w-12 h-12 rounded-full`}></button>
          </div>)
        )}
      </div>

        <h6 className='block text-2xl '>£65 per metre</h6>
      <div className='flex flex-wrap justify-center gap-5   '>
      {fabric.map(e=>
          (e.patternNumber ==='01' &&  e.group==='G' && <div className={`${e.id === id && 'border border-[#b68d40] rounded-full p-1'} flex justify-center items-center`}> 
             <button  onClick={()=>{dispatch(setFabric(e));dispatch(setShow3D(true));dispatch(setPrice())}} style={{backgroundImage:`url(${e.fabricPath})`}} className={`w-12 h-12 rounded-full`}></button>
          </div>)
        )}
      </div>

        <h6 className='block text-2xl '>£76 per metre</h6>
      <div className='flex flex-wrap justify-center gap-5   '>
      {fabric.map(e=>
          (e.patternNumber ==='01' &&  e.group==='H' && <div className={`${e.id === id && 'border border-[#b68d40] rounded-full p-1'} flex justify-center items-center`}> 
             <button  onClick={()=>{dispatch(setFabric(e));dispatch(setShow3D(true));dispatch(setPrice())}} style={{backgroundImage:`url(${e.fabricPath})`}} className={`w-12 h-12 rounded-full`}></button>
          </div>)
        )}
      </div>


    </div>
  )
}

export default PatternFabrics