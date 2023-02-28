import { InfoOutlined, KeyboardBackspace } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLook, setPanel, setPrice } from '../../../../redux/slice/fabric'
import { setMenu, setShow3D } from '../../../../redux/slice/util'

import Single from '../../../asset/panel/Single.svg'
import Pair from '../../../asset/panel/Pair.svg'

import dSingle from '../../../asset/panel/dSingle.svg'
import dPair from '../../../asset/panel/dPair.svg'


import Double from '../../../asset/look/Double.svg'
import Eyelet from '../../../asset/look/Eyelet.svg'
import Goblet from '../../../asset/look/Goblet.svg'
import Pencil from '../../../asset/look/Pencil.svg'
import Triple from '../../../asset/look/Triple.svg'

import dDouble from '../../../asset/look/dDouble.svg'
import dEyelet from '../../../asset/look/dEyelet.svg'
import dGoblet from '../../../asset/look/dGoblet.svg'
import dPencil from '../../../asset/look/dPencil.svg'
import dTriple from '../../../asset/look/dTriple.svg'

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
        <div className=' pb-20 space-y-3 relative z-20'>
            <div className="mt-5 ">
                <h2 className='text-2xl text-center'>Choose your style</h2>
            </div>
            <div className="">
                <p className='text-center'>Single or Pair panel ?</p>
            </div>
            <div className="flex justify-center gap-5">
                {/* <div onClick={() => dispatch(setPanel('Single'))} className={`flex flex-col justify-center items-center relative w-20 h-20  rounded-md `}> <Single selected={panel===  'Single'} /> <p className='absolute -bottom-6 left-7'>Single</p> </div>
                <div onClick={() => dispatch(setPanel('Pair'))}   className={`flex flex-col justify-center items-center relative w-20 h-20  rounded-md `}>  <Pair  selected={panel === 'Pair'  } /> <p className='absolute -bottom-6 left-7'>Pair</p> </div> */}
                <div onClick={() => dispatch(setPanel('Single'))} className={` w-16 h-16 rounded-md flex justify-center items-center relative`}> <img className='w-full' src={panel === 'Single' ? Single : dSingle} alt="" />    <p className='absolute -bottom-6 text-center'>Single</p> </div>
                <div onClick={() => dispatch(setPanel('Pair'))} className={` w-16 h-16 rounded-md flex justify-center items-center relative`}>   <img className='w-full' src={panel === 'Pair' ? Pair : dPair} alt="" />          <p className='absolute -bottom-6 text-center'>Pair</p>   </div>

            </div>
            <div className="">
                <p className='text-center mt-5'>What look are you going for?</p>
            </div>
            <div className="flex justify-center gap-7    flex-wrap">
                <div onClick={() => { dispatch(setLook('Double')); dispatch(setPrice()); }} className={`w-16 h-16 rounded-md flex justify-center items-center relative`} >
                    <img className='w-full' src={look === 'Double' ? Double : dDouble} alt="" />
                    <p className='absolute -bottom-6 text-center'>Double</p>
                    <InfoOutlined onClick={() => dispatch(setShow3D(true))} fontSize='small' className='peer absolute top-1 right-1 bg-blue-500 text-white rounded-full' />
                    <p className='hidden peer-hover:block absolute -top-5 -right-24 bg-slate-200'>Let's try out 3D</p>
                </div>
                <div onClick={() => { dispatch(setLook('Eyelet')); dispatch(setPrice()); }} className={`w-16 h-16 rounded-md flex justify-center items-center relative`} >
                    <img className='w-full' src={look === 'Eyelet' ? Eyelet : dEyelet} alt="" />
                    <p className='absolute -bottom-6 text-center'>Eyelet</p>
                    <InfoOutlined onClick={() => dispatch(setShow3D(true))} fontSize='small' className='peer absolute top-1 right-1 bg-blue-500 text-white rounded-full' />
                    <p className='hidden peer-hover:block absolute -top-5 -right-24 bg-slate-200'>Let's try out 3D</p>
                </div>
                <div onClick={() => { dispatch(setLook('Pencil')); dispatch(setPrice()); }} className={`w-16 h-16 rounded-md flex justify-center items-center relative`} >
                    <img className='w-full' src={look === 'Pencil' ? Pencil : dPencil} alt="" />
                    <p className='absolute -bottom-6 text-center'>Pencil</p>
                    <InfoOutlined onClick={() => dispatch(setShow3D(true))} fontSize='small' className='peer absolute top-1 right-1 bg-blue-500 text-white rounded-full' />
                    <p className='hidden peer-hover:block absolute -top-5 -right-24 bg-slate-200'>Let's try out 3D</p>
                </div>
                <div onClick={() => { dispatch(setLook('Goblet')); dispatch(setPrice()); }} className={`w-16 h-16 rounded-md flex justify-center items-center relative`} >
                    <img className='w-full' src={look === 'Goblet' ? Goblet : dGoblet} alt="" />
                    <p className='absolute -bottom-6 text-center'>Goblet</p>
                    <InfoOutlined onClick={() => dispatch(setShow3D(true))} fontSize='small' className='peer absolute top-1 right-1 bg-blue-500 text-white rounded-full' />
                    <p className='hidden peer-hover:block absolute -top-5 -right-24 bg-slate-200'>Let's try out 3D</p>
                </div>
                <div onClick={() => { dispatch(setLook('Triple')); dispatch(setPrice()); }} className={`w-16 h-16 rounded-md flex justify-center items-center relative`} >
                    <img className='w-full' src={look === 'Triple' ? Triple : dTriple} alt="" />
                    <p className='absolute -bottom-6 text-center'>Triple</p>
                    <InfoOutlined onClick={() => dispatch(setShow3D(true))} fontSize='small' className='peer absolute top-1 right-1 bg-blue-500 text-white rounded-full' />
                    <p className='hidden peer-hover:block absolute -top-5 -right-24 bg-slate-200'>Let's try out 3D</p>
                </div>
            </div>
            <div className="absolute w-full bottom-2 flex justify-between px-3 items-center">

                <button onClick={() => { dispatch(setMenu(2)) }} className=''><KeyboardBackspace /> Back </button>
                <button onClick={() => { dispatch(setMenu(4)) }} className='cursor-pointer h-10 w-32 bg-[#2b2b2b] text-white flex justify-center items-center rounded-xl'>Next</button>
            </div>
        </div>
    )
}

export default Style