import { KeyboardBackspace } from '@mui/icons-material'
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
                <div onClick={() => dispatch(setPanel('Single'))} className={` w-16 h-16 rounded-md flex justify-center items-center relative`}> <img className='w-full'  src={panel === 'Single' ? Single : dSingle} alt="" />    <p className='absolute -bottom-6 text-center'>Single</p> </div>
                <div onClick={() => dispatch(setPanel('Pair'))} className={` w-16 h-16 rounded-md flex justify-center items-center relative`}>   <img className='w-full'  src={panel === 'Pair' ? Pair : dPair} alt="" />          <p className='absolute -bottom-6 text-center'>Pair</p>   </div>

            </div>
            <div className="">
                <p className='text-center mt-5'>What look are you going for?</p>
            </div>
            <div className="flex justify-center gap-7    flex-wrap">
                <div onClick={() => { dispatch(setLook('Double'));dispatch(setPrice()) }} className={`w-16 h-16 rounded-md flex justify-center items-center relative`} ><img className='w-full' src={look === 'Double' ? Double : dDouble} alt="" /> <p className='absolute -bottom-6 text-center'>Double</p> </div>
                <div onClick={() => { dispatch(setLook('Eyelet'));dispatch(setPrice()) }} className={`w-16 h-16 rounded-md flex justify-center items-center relative`} ><img className='w-full' src={look === 'Eyelet' ? Eyelet : dEyelet} alt="" /> <p className='absolute -bottom-6 text-center'>Eyelet</p> </div>
                <div onClick={() => { dispatch(setLook('Pencil'));dispatch(setPrice()) }} className={`w-16 h-16 rounded-md flex justify-center items-center relative`} ><img className='w-full' src={look === 'Pencil' ? Pencil : dPencil} alt="" /> <p className='absolute -bottom-6 text-center'>Pencil</p> </div>
                <div onClick={() => { dispatch(setLook('Goblet'));dispatch(setPrice()) }} className={`w-16 h-16 rounded-md flex justify-center items-center relative`} ><img className='w-full' src={look === 'Goblet' ? Goblet : dGoblet} alt="" /> <p className='absolute -bottom-6 text-center'>Goblet</p> </div>
                <div onClick={() => { dispatch(setLook('Triple'));dispatch(setPrice()) }} className={`w-16 h-16 rounded-md flex justify-center items-center relative`} ><img className='w-full' src={look === 'Triple' ? Triple : dTriple} alt="" /> <p className='absolute -bottom-6 text-center'>Triple</p> </div>
            </div>
            <div className="absolute w-full bottom-2 flex justify-between px-3 items-center">

                <button onClick={() => { dispatch(setMenu(2)) }} className=''><KeyboardBackspace /> Back </button>
                <button onClick={() => { dispatch(setMenu(4)) }} className='px-[18px] py-[16px] rounded-xl bg-[#B68D40]'>Next</button>
            </div>
        </div>
    )
}

export default Style