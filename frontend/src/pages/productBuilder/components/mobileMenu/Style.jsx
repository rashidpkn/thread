import { KeyboardBackspace } from '@mui/icons-material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLook, setPanel } from '../../../../redux/slice/fabric'
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
                <div onClick={() => dispatch(setPanel('Single'))} className={`flex flex-col justify-center items-center relative w-20 h-20  rounded-md `}> <Single selected={panel===  'Single'} /> <p className='absolute -bottom-6 left-7'>Single</p> </div>
                <div onClick={() => dispatch(setPanel('Pair'))}   className={`flex flex-col justify-center items-center relative w-20 h-20  rounded-md `}>  <Pair  selected={panel === 'Pair'  } /> <p className='absolute -bottom-6 left-7'>Pair</p> </div>
            </div>
            <div className="">
                <p className='text-center mt-5'>What look are you going for?</p>
            </div>
            <div className="flex justify-center gap-7    flex-wrap">
                <div onClick={() => { dispatch(setLook('Double')) }} className={`w-20 h-20  rounded-md flex justify-center items-center relative flex-shrink-0`}><Double selected={look==='Double'} /> <p className='absolute -bottom-6 left-6'>Double</p> </div>
                <div onClick={() => { dispatch(setLook('Eyelet')) }} className={`w-20 h-20  rounded-md flex justify-center items-center relative flex-shrink-0`}><Eyelet selected={look==='Eyelet'} /> <p className='absolute -bottom-6 left-6'>Eyelet</p> </div>
                <div onClick={() => { dispatch(setLook('Pencil')) }} className={`w-20 h-20  rounded-md flex justify-center items-center relative flex-shrink-0`}><Pencil selected={look==='Pencil'} /> <p className='absolute -bottom-6 left-6'>Pencil</p> </div>
                <div onClick={() => { dispatch(setLook('Goblet')) }} className={`w-20 h-20  rounded-md flex justify-center items-center relative flex-shrink-0`}><Goblet selected={look==='Goblet'} /> <p className='absolute -bottom-6 left-6'>Goblet</p> </div>
                <div onClick={() => { dispatch(setLook('Triple')) }} className={`w-20 h-20  rounded-md flex justify-center items-center relative flex-shrink-0`}><Triple selected={look==='Triple'} /> <p className='absolute -bottom-6 left-6'>Triple</p> </div>
            </div>
            <div className="absolute w-full bottom-2 flex justify-between px-3 items-center">

                <button onClick={() => { dispatch(setMenu(2)) }} className=''><KeyboardBackspace/> Back </button>
                <button onClick={() => { dispatch(setMenu(4)) }} className='px-[18px] py-[16px] rounded-xl bg-[#B68D40]'>Next</button>
            </div>
        </div>
    )
}

export default Style