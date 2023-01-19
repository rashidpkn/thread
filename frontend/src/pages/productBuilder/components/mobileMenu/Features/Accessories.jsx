import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCorded, setGlide } from '../../../../../redux/slice/fabric'
import { setMenu } from '../../../../../redux/slice/util'

function Accessories() {
    const dispatch = useDispatch()
    const {glide,corded} = useSelector(state=>state.fabric.feature?.accessories)
    return (
        <>
            <p className='text-center px-5'>Uncorded swish supreme glide track</p>
            <div className="flex justify-center gap-2 gap-y-5  flex-wrap px-2">
                <div onClick={()=>dispatch(setGlide(125))} className="flex justify-center items-center gap-1">  <input  checked={glide===125 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-[10px] h-10 rounded-xl'>125cm</button>  </div>
                <div onClick={()=>dispatch(setGlide(150))} className="flex justify-center items-center gap-1">  <input  checked={glide===150 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-[10px] h-10 rounded-xl'>150cm</button>  </div>
                <div onClick={()=>dispatch(setGlide(175))} className="flex justify-center items-center gap-1">  <input  checked={glide===175 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-[10px] h-10 rounded-xl'>175cm</button>  </div>
                <div onClick={()=>dispatch(setGlide(200))} className="flex justify-center items-center gap-1">  <input  checked={glide===200 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-[10px] h-10 rounded-xl'>200cm</button>  </div>
                <div onClick={()=>dispatch(setGlide(225))} className="flex justify-center items-center gap-1">  <input  checked={glide===225 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-[10px] h-10 rounded-xl'>225cm</button>  </div>
                <div onClick={()=>dispatch(setGlide(250))} className="flex justify-center items-center gap-1">  <input  checked={glide===250 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-[10px] h-10 rounded-xl'>250cm</button>  </div>
                <div onClick={()=>dispatch(setGlide(275))} className="flex justify-center items-center gap-1">  <input  checked={glide===275 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-[10px] h-10 rounded-xl'>275cm</button>  </div>
                <div onClick={()=>dispatch(setGlide(300))} className="flex justify-center items-center gap-1">  <input  checked={glide===300 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-[10px] h-10 rounded-xl'>300cm</button>  </div>
            </div>
            <p className='text-center px-5'>Universal, durable, extendable, corded steel tracks</p>
            <div className="flex justify-center gap-3  flex-wrap">
                <div onClick={()=>dispatch(setCorded('100cm-175cm'))} className="flex justify-center items-center gap-1"> <input  checked={corded==='100cm-175cm' ? true : false} type={'checkbox'} />  <button className='bg-[#B68D40] w-36 h-10 rounded-xl'>100cm-175cm</button> </div>
                <div onClick={()=>dispatch(setCorded('175cm-300cm'))} className="flex justify-center items-center gap-1"> <input  checked={corded==='175cm-300cm' ? true : false} type={'checkbox'} />  <button className='bg-[#B68D40] w-36 h-10 rounded-xl'>175cm-300cm</button> </div>
                <div onClick={()=>dispatch(setCorded('250cm-400cm'))} className="flex justify-center items-center gap-1"> <input  checked={corded==='250cm-400cm' ? true : false} type={'checkbox'} />  <button className='bg-[#B68D40] w-36 h-10 rounded-xl'>250cm-400cm</button> </div>
                <div onClick={()=>dispatch(setCorded('300cm-400cm'))} className="flex justify-center items-center gap-1"> <input  checked={corded==='300cm-400cm' ? true : false} type={'checkbox'} />  <button className='bg-[#B68D40] w-36 h-10 rounded-xl'>300cm-400cm</button> </div>
            </div>
            <div className="flex justify-center">
                <button onClick={()=>{dispatch(setMenu(5))}} className='bg-[#B68D40] w-32 h-10 rounded-2xl'>Estimate</button>
            </div>
        </>
    )
}

export default Accessories