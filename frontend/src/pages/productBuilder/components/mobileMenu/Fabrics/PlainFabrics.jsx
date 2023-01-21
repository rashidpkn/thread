import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFabric, setPrice } from '../../../../../redux/slice/fabric'
import { setShow3D } from '../../../../../redux/slice/util'
import { fabric } from './Custom'

function PlainFabrics() {
  const dispatch = useDispatch()
  const { id } = useSelector(state => state.fabric.fabricType)
  return (
    <div className='h-[500px] overflow-y-scroll px-3 space-y-3'>
      <h6 className='block text-2xl '>£24 per metre</h6>
      <div className='flex flex-wrap justify-center gap-5 '>
        {fabric.map(e =>
        (e.patternNumber === '00' && e.group === 'C' && <div key={e.id} className={`${e.id === id && 'border border-[#b68d40] rounded-full p-1'} flex justify-center items-center`}>
          <button onClick={() => { dispatch(setFabric(e)); dispatch(setShow3D(true));dispatch(setPrice()) }} style={{ backgroundColor: e.color }} className={`w-12 h-12 rounded-full`}></button>
        </div>)
        )}
      </div>

      <h6 className='block text-2xl '>£27 per metre</h6>
      <div className='flex flex-wrap justify-center gap-5 '>
        {fabric.map(e =>
        (e.patternNumber === '00' && e.group === 'D' && <div key={e.id} className={`${e.id === id && 'border border-[#b68d40] rounded-full p-1'} flex justify-center items-center`}>
          <button onClick={() => { dispatch(setFabric(e)); dispatch(setShow3D(true));dispatch(setPrice()) }} style={{ backgroundColor: e.color }} className={`w-12 h-12 rounded-full`}></button>
        </div>)
        )}
      </div>

      <h6 className='block text-2xl '>£33 per metre</h6>
      <div className='flex flex-wrap justify-center gap-5 '>
        {fabric.map(e =>
        (e.patternNumber === '00' && e.group === 'E' && <div key={e.id} className={`${e.id === id && 'border border-[#b68d40] rounded-full p-1'} flex justify-center items-center`}>
          <button onClick={() => { dispatch(setFabric(e)); dispatch(setShow3D(true));dispatch(setPrice()) }} style={{ backgroundColor: e.color }} className={`w-12 h-12 rounded-full`}></button>
        </div>)
        )}
      </div>
    </div>
  )
}

export default PlainFabrics