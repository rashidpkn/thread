import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFabric, setPrice } from '../../../../../redux/slice/fabric'
import { setShowMenu } from '../../../../../redux/slice/util'
import { fabric } from './Custom'

function PatternFabrics() {
  const dispatch = useDispatch()
  const { id } = useSelector(state => state.fabric.fabricType)
  return (
    <div className='px-3 h-[500px] lg:h-[300px] overflow-y-scroll space-y-3'>

      <h6 className='block  '>£30 per metre</h6>
      <div className='flex flex-wrap justify-start gap-5   '>
        {fabric.map(e =>
        (e.patternNumber === '01' && e.group === 'B' && <div className={`${e.id === id && 'border-2 border-black rounded-md '} flex justify-center items-center`}>
          <button onClick={() => { dispatch(setFabric(e)); dispatch(setPrice()); dispatch(setShowMenu(false)) }} style={{ backgroundImage: `url(${e.fabricPath})` }} className={`w-10 h-10 rounded-md`}></button>
        </div>)
        )}
      </div>

      <h6 className='block  '>£35 per metre</h6>
      <div className='flex flex-wrap justify-start gap-5   '>
        {fabric.map(e =>
        (e.patternNumber === '01' && e.group === 'C' && <div className={`${e.id === id && 'border-2 border-black rounded-md '} flex justify-center items-center`}>
          <button onClick={() => { dispatch(setFabric(e)); dispatch(setPrice()); dispatch(setShowMenu(false)) }} style={{ backgroundImage: `url(${e.fabricPath})` }} className={`w-10 h-10 rounded-md`}></button>
        </div>)
        )}
      </div>

      <h6 className='block  '>£39 per metre</h6>
      <div className='flex flex-wrap justify-start gap-5   '>
        {fabric.map(e =>
        (e.patternNumber === '01' && e.group === 'D' && <div className={`${e.id === id && 'border-2 border-black rounded-md '} flex justify-center items-center`}>
          <button onClick={() => { dispatch(setFabric(e)); dispatch(setPrice()); dispatch(setShowMenu(false)) }} style={{ backgroundImage: `url(${e.fabricPath})` }} className={`w-10 h-10 rounded-md`}></button>
        </div>)
        )}
      </div>

      <h6 className='block  '>£48 per metre</h6>
      <div className='flex flex-wrap justify-start gap-5   '>
        {fabric.map(e =>
        (e.patternNumber === '01' && e.group === 'E' && <div className={`${e.id === id && 'border-2 border-black rounded-md '} flex justify-center items-center`}>
          <button onClick={() => { dispatch(setFabric(e)); dispatch(setPrice()) }} style={{ backgroundImage: `url(${e.fabricPath})` }} className={`w-10 h-10 rounded-md`}></button>
        </div>)
        )}
      </div>

      <h6 className='block  '>£57 per metre</h6>
      <div className='flex flex-wrap justify-start gap-5   '>
        {fabric.map(e =>
        (e.patternNumber === '01' && e.group === 'F' && <div className={`${e.id === id && 'border-2 border-black rounded-md '} flex justify-center items-center`}>
          <button onClick={() => { dispatch(setFabric(e)); dispatch(setPrice()) }} style={{ backgroundImage: `url(${e.fabricPath})` }} className={`w-10 h-10 rounded-md`}></button>
        </div>)
        )}
      </div>

      <h6 className='block  '>£65 per metre</h6>
      <div className='flex flex-wrap justify-start gap-5   '>
        {fabric.map(e =>
        (e.patternNumber === '01' && e.group === 'G' && <div className={`${e.id === id && 'border-2 border-black rounded-md '} flex justify-center items-center`}>
          <button onClick={() => { dispatch(setFabric(e)); dispatch(setPrice()) }} style={{ backgroundImage: `url(${e.fabricPath})` }} className={`w-10 h-10 rounded-md`}></button>
        </div>)
        )}
      </div>

      <h6 className='block  '>£76 per metre</h6>
      <div className='flex flex-wrap justify-start gap-5   '>
        {fabric.map(e =>
        (e.patternNumber === '01' && e.group === 'H' && <div className={`${e.id === id && 'border-2 border-black rounded-md '} flex justify-center items-center`}>
          <button onClick={() => { dispatch(setFabric(e)); dispatch(setPrice()) }} style={{ backgroundImage: `url(${e.fabricPath})` }} className={`w-10 h-10 rounded-md`}></button>
        </div>)
        )}
      </div>


    </div>
  )
}

export default PatternFabrics