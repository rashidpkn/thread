import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFabric, setPrice } from '../../../../../redux/slice/fabric'
import { setMenu, setShow3D, setShowMenu } from '../../../../../redux/slice/util'
import { fabric } from './Custom'

function PlainFabrics() {
  const dispatch = useDispatch()
  const { id } = useSelector(state => state.fabric.fabricType)
  return (
    <div className='h-[500px] lg:h-[300px] overflow-y-scroll px-3 space-y-3'>
      <h6 className='block '>£24 per metre</h6>
      <div className='flex flex-wrap justify-center gap-5 '>
        {fabric.map(e =>
        (e.patternNumber === '00' && e.group === 'C' && <div key={e.id} className={`${e.id === id && 'border border-[#2B2B2B] rounded-full '} flex justify-center items-center p-1`}>
          <button onClick={() => { dispatch(setFabric(e)); dispatch(setPrice()); dispatch(setShowMenu(false)) }} style={{ backgroundColor: e.color }} className={`w-10 h-10 rounded-full`}></button>
        </div>)
        )}
      </div>

      <h6 className='block '>£27 per metre</h6>
      <div className='flex flex-wrap justify-center gap-5 '>
        {fabric.map(e =>
        (e.patternNumber === '00' && e.group === 'D' && <div key={e.id} className={`${e.id === id && 'border border-[#2B2B2B] rounded-full '} flex justify-center items-center p-1`}>
          <button onClick={() => { dispatch(setFabric(e)); dispatch(setPrice()); dispatch(setShowMenu(false)) }} style={{ backgroundColor: e.color }} className={`w-10 h-10 rounded-full`}></button>
        </div>)
        )}
      </div>

      <h6 className='block '>£33 per metre</h6>
      <div className='flex flex-wrap justify-center gap-5 '>
        {fabric.map(e =>
        (e.patternNumber === '00' && e.group === 'E' && <div key={e.id} className={`${e.id === id && 'border border-[#2B2B2B] rounded-full '} flex justify-center items-center p-1`}>
          <button onClick={() => { dispatch(setFabric(e)); dispatch(setPrice()); dispatch(setShowMenu(false)) }} style={{ backgroundColor: e.color }} className={`w-10 h-10 rounded-full`}></button>
        </div>)
        )}
      </div>
    </div>
  )
}

export default PlainFabrics