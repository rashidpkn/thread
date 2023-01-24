import { ArrowRightAlt, KeyboardBackspace } from '@mui/icons-material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLook, setPanel, setPrice } from '../../../../redux/slice/fabric'
import { setMenu } from '../../../../redux/slice/util'


import Single from '../../../asset/panel/Single.png'
import Pair from '../../../asset/panel/Pair.png'

import dSingle from '../../../asset/panel/dSingle.png'
import dPair from '../../../asset/panel/dPair.png'


import Double from '../../../asset/look/Double.png'
import Eyelet from '../../../asset/look/Eyelet.png'
import Goblet from '../../../asset/look/Goblet.png'
import Pencil from '../../../asset/look/Pencil.png'
import Triple from '../../../asset/look/Triple.png'

import dDouble from '../../../asset/look/dDouble.png'
import dEyelet from '../../../asset/look/dEyelet.png'
import dGoblet from '../../../asset/look/dGoblet.png'
import dPencil from '../../../asset/look/dPencil.png'
import dTriple from '../../../asset/look/dTriple.png'



function Style() {
  const dispatch = useDispatch()
  const { panel, look } = useSelector(state => state.fabric.style)
  return (
    <div className='space-y-5'>

      {/* <div className="p-5 w-full flex items-center justify-center gap-5">
        <p className='font-medium'>Choose Your Style</p>
      </div> */}

      <p className='text-center font-medium'>Single or Pair panel?</p>
      <div className="flex justify-center gap-5">

        <div onClick={() => dispatch(setPanel('Single'))} className={` w-24 h-24 rounded-md flex justify-center items-center relative`}> <img className='w-full' src={panel === 'Single' ? Single : dSingle} alt="" /> <p className='absolute -bottom-6 text-center'>Single</p> </div>
        <div onClick={() => dispatch(setPanel('Pair'))} className={` w-24 h-24 rounded-md flex justify-center items-center relative`}>  <img className='w-full' src={panel === 'Pair' ? Pair : dPair} alt="" /> <p className='absolute -bottom-6 text-center'>Pair</p> </div>

      </div>
      <p className='text-center font-medium'>What looks are you going for ?</p>
      <div className="flex justify-center gap-5 flex-wrap">
        <div onClick={() => { dispatch(setLook('Double')); dispatch(setPrice()) }} className={` w-24 h-24 rounded-md flex justify-center items-center relative`} ><img className='w-full' src={look === 'Double' ? Double : dDouble} alt="" /> <p className='absolute -bottom-6 text-center'>Double</p></div>
        <div onClick={() => { dispatch(setLook('Eyelet')); dispatch(setPrice()) }} className={` w-24 h-24 rounded-md flex justify-center items-center relative`} ><img className='w-full' src={look === 'Eyelet' ? Eyelet : dEyelet} alt="" /> <p className='absolute -bottom-6 text-center'>Eyelet</p></div>
        <div onClick={() => { dispatch(setLook('Pencil')); dispatch(setPrice()) }} className={` w-24 h-24 rounded-md flex justify-center items-center relative`} ><img className='w-full' src={look === 'Pencil' ? Pencil : dPencil} alt="" /> <p className='absolute -bottom-6 text-center'>Pencil</p></div>
        <div onClick={() => { dispatch(setLook('Goblet')); dispatch(setPrice()) }} className={` w-24 h-24 rounded-md flex justify-center items-center relative`} ><img className='w-full' src={look === 'Goblet' ? Goblet : dGoblet} alt="" /> <p className='absolute -bottom-6 text-center'>Goblet</p></div>
        <div onClick={() => { dispatch(setLook('Triple')); dispatch(setPrice()) }} className={` w-24 h-24 rounded-md flex justify-center items-center relative`} ><img className='w-full' src={look === 'Triple' ? Triple : dTriple} alt="" /> <p className='absolute -bottom-6 text-center'>Triple</p></div>
      </div>
      
      <div className="flex  justify-between items-center mt-10">
            <button className='px-4 py-1 rounded-lg bg-[#2B2B2B] text-white flex justify-center items-center' onClick={() => dispatch(setMenu(2))}> <KeyboardBackspace /> Back</button>
            <button className='px-4 py-1 rounded-lg bg-[#2B2B2B] text-white flex justify-center items-center' onClick={()=>  dispatch(setMenu(4))}>Next <ArrowRightAlt/></button>
          </div>
    </div>
  )
}

export default Style