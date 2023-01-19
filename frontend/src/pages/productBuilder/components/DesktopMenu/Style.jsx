import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLook, setPanel  } from '../../../../redux/slice/fabric'
import { setMenu } from '../../../../redux/slice/util'
import Double from '../../../asset/look/Double'
import Eyelet from '../../../asset/look/Eyelet'
import Goblet from '../../../asset/look/Goblet'
import Pencil from '../../../asset/look/Pencil'
import Triple from '../../../asset/look/Triple'
import Pair from '../../../asset/panel/Pair'
import Single from '../../../asset/panel/Single'


function Style() {
  const dispatch = useDispatch()
  const {panel,look} = useSelector(state=>state.fabric.style)
  return (
    <div className='space-y-5'>
      <div className="p-5 w-full flex items-center justify-center gap-5">
            {/* <button className='text-[#B68D40]' onClick={()=>dispatch(setMenu(2))}>Back</button> */}
            <p className='font-medium'>Choose Your Style</p>
            {/* <button className='h-8 w-20 rounded-3xl bg-[#B68D40] text-white' onClick={()=>dispatch(setMenu(4))}>Next</button> */}
        </div>
        <p className='text-center font-medium'>Single or Pair panel?</p>
        <div className="flex justify-center gap-5">
          <div onClick={()=>dispatch(setPanel('Single'))} className={`w-24 h-24 border rounded-md ${panel === 'Single' && 'border-[#B68D40]'}  flex justify-center items-center`}><Single selected={panel==='Single'} /></div>
          <div onClick={()=>dispatch(setPanel('Pair'))}   className={`w-24 h-24 border rounded-md ${panel === 'Pair'   && 'border-[#B68D40]'}  flex justify-center items-center`}><Pair selected={panel === 'Pair'} /></div>
        </div>
        <p className='text-center font-medium'>What looks are you going for ?</p>
        <div className="flex justify-center gap-5 flex-wrap">
          <div onClick={()=>{dispatch(setLook('Double'))}} className={`${look === 'Double' && 'border-[#B68D40]' } w-24 h-24 border rounded-md flex justify-center items-center`}><Double selected={look==='Double'} /></div>
          <div onClick={()=>{dispatch(setLook('Eyelet'))}} className={`${look === 'Eyelet' && 'border-[#B68D40]' } w-24 h-24 border rounded-md flex justify-center items-center`}><Eyelet selected={look==='Eyelet'} /></div>
          <div onClick={()=>{dispatch(setLook('Pencil'))}} className={`${look === 'Pencil' && 'border-[#B68D40]' } w-24 h-24 border rounded-md flex justify-center items-center`}><Pencil selected={look==='Pencil'} /></div>
          <div onClick={()=>{dispatch(setLook('Goblet'))}} className={`${look === 'Goblet' && 'border-[#B68D40]' } w-24 h-24 border rounded-md flex justify-center items-center`}><Goblet selected={look==='Goblet'} /></div>
          <div onClick={()=>{dispatch(setLook('Triple'))}} className={`${look === 'Triple' && 'border-[#B68D40]' } w-24 h-24 border rounded-md flex justify-center items-center`}><Triple selected={look==='Triple'} /></div>
        </div>
        <div className="flex justify-between items-center px-5">
            <button className='h-12 px-3  rounded-md ' onClick={() => dispatch(setMenu(2)) }>Back</button>
            <button className='h-12 px-3 bg-[#B68D40] rounded-md text-white' onClick={() => dispatch(setMenu(4))}>Next</button>
          </div>
    </div>
  )
}

export default Style