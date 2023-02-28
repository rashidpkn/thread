import { ArrowRightAlt, InfoOutlined, KeyboardBackspace } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLook, setPanel, setPrice } from '../../../../redux/slice/fabric'
import { setMenu, setShow3D } from '../../../../redux/slice/util'


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
  useEffect(() => {


    return () => {
      dispatch(setShow3D(false))
    }
    // eslint-disable-next-line
  }, [])

  const dispatch = useDispatch()
  const { panel, look } = useSelector(state => state.fabric.style)
  return (
    <div className='space-y-5'>

      

      <p className='text-center font-medium'>Single or Pair panel?</p>
      <div className="flex justify-center gap-5">

        <div onClick={() => dispatch(setPanel('Single'))} className={` w-24 h-24 rounded-md flex justify-center items-center relative`}> <img className='w-full' src={panel === 'Single' ? Single : dSingle} alt="" /> <p className='absolute -bottom-6 text-center'>Single</p> </div>
        <div onClick={() => dispatch(setPanel('Pair'))} className={` w-24 h-24 rounded-md flex justify-center items-center relative`}>  <img className='w-full' src={panel === 'Pair' ? Pair : dPair} alt="" /> <p className='absolute -bottom-6 text-center'>Pair</p> </div>

      </div>
      <p className='text-center font-medium'>What look are you going for ?</p>
      <div className="flex justify-center gap-5 flex-wrap">
        
        <div onClick={() => { dispatch(setLook('Double')); dispatch(setPrice()); }} className={` w-24 h-24 rounded-md flex justify-center items-center relative`} ><img className='w-full' src={look === 'Double' ? Double : dDouble} alt="" />
          <p className='absolute -bottom-6 text-center'>Double</p>
          <InfoOutlined onClick={()=>dispatch(setShow3D(true))}  fontSize='small' className='peer absolute top-1 right-1 bg-blue-500 text-white rounded-full' />
          <p className='hidden peer-hover:block absolute -top-5 -right-24 bg-slate-200'>Let's try out 3D</p>
        </div>

        <div onClick={() => { dispatch(setLook('Eyelet')); dispatch(setPrice()); }} className={` w-24 h-24 rounded-md flex justify-center items-center relative`} >
          <img className='w-full' src={look === 'Eyelet' ? Eyelet : dEyelet} alt="" />
          <p className='absolute -bottom-6 text-center'>Eyelet</p>
          <InfoOutlined onClick={()=>dispatch(setShow3D(true))}  fontSize='small' className='peer absolute top-1 right-1 bg-blue-500 text-white rounded-full' />
          <p className='hidden peer-hover:block absolute -top-5 -right-24 bg-slate-200'>Let's try out 3D</p>
        </div>
        
        <div onClick={() => { dispatch(setLook('Pencil')); dispatch(setPrice()); }} className={` w-24 h-24 rounded-md flex justify-center items-center relative`} >
          <img className='w-full' src={look === 'Pencil' ? Pencil : dPencil} alt="" />
          <p className='absolute -bottom-6 text-center'>Pencil</p>
          <InfoOutlined onClick={()=>dispatch(setShow3D(true))}  fontSize='small' className='peer absolute top-1 right-1 bg-blue-500 text-white rounded-full' />
          <p className='hidden peer-hover:block absolute -top-5 -right-24 bg-slate-200'>Let's try out 3D</p>
        </div>

        <div onClick={() => { dispatch(setLook('Goblet')); dispatch(setPrice()); }} className={` w-24 h-24 rounded-md flex justify-center items-center relative`} >
          <img className='w-full' src={look === 'Goblet' ? Goblet : dGoblet} alt="" />
          <p className='absolute -bottom-6 text-center'>Goblet</p>
          <InfoOutlined onClick={()=>dispatch(setShow3D(true))}  fontSize='small' className='peer absolute top-1 right-1 bg-blue-500 text-white rounded-full' />
          <p className='hidden peer-hover:block absolute -top-5 -right-24 bg-slate-200'>Let's try out 3D</p>
        </div>

        <div onClick={() => { dispatch(setLook('Triple')); dispatch(setPrice()); }} className={` w-24 h-24 rounded-md flex justify-center items-center relative`} >
          <img className='w-full' src={look === 'Triple' ? Triple : dTriple} alt="" />
          <p className='absolute -bottom-6 text-center'>Triple</p>
          <InfoOutlined onClick={()=>dispatch(setShow3D(true))}  fontSize='small' className='peer absolute top-1 right-1 bg-blue-500 text-white rounded-full' />
          <p className='hidden peer-hover:block absolute -top-5 -right-24 bg-slate-200'>Let's try out 3D</p>
        </div>

      </div>

      <div className="flex  justify-between items-center mt-10">
        <button className='px-4 py-1 rounded-lg bg-[#2B2B2B] text-white flex justify-center items-center' onClick={() => dispatch(setMenu(2))}> <KeyboardBackspace /> Back</button>
        <button className='px-4 py-1 rounded-lg bg-[#2B2B2B] text-white flex justify-center items-center' onClick={() => dispatch(setMenu(4))}>Next <ArrowRightAlt /></button>
      </div>
    </div>
  )
}

export default Style