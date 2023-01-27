import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLining } from '../../../../../redux/slice/fabric'

function Lining() {
    const {lining} = useSelector(state=>state.fabric.feature)
    const dispatch = useDispatch()
    return (
        <>
            <p className='text-center px-5'>The layer on the inside of the curtain, for insulation or a weightier look.</p>
            <div className="flex flex-col justify-center gap-3  flex-wrap px-5">
                <div onClick={()=>dispatch(setLining('Unlined'))}                       className={`${lining === 'Unlined'                       && 'text-black border border-[#2b2b2b] rounded-xl p-1'} flex justify-center items-center`}> <button className='bg-[#2b2b2b] text-white w-full h-12 rounded-md'> Unlined                       </button></div>
                <div onClick={()=>dispatch(setLining('Bonded Fleece Blackout Lining'))} className={`${lining === 'Bonded Fleece Blackout Lining' && 'text-black border border-[#2b2b2b] rounded-xl p-1'} flex justify-center items-center`}> <button className='bg-[#2b2b2b] text-white w-full h-12 rounded-md'> Bonded Fleece Blackout Lining </button></div>
                <div onClick={()=>dispatch(setLining('Thermal Dim Out'))}               className={`${lining === 'Thermal Dim Out'               && 'text-black border border-[#2b2b2b] rounded-xl p-1'} flex justify-center items-center`}> <button className='bg-[#2b2b2b] text-white w-full h-12 rounded-md'> Thermal Dim Out               </button></div>
                <div onClick={()=>dispatch(setLining('Blackout Lined'))}                className={`${lining === 'Blackout Lined'                && 'text-black border border-[#2b2b2b] rounded-xl p-1'} flex justify-center items-center`}> <button className='bg-[#2b2b2b] text-white w-full h-12 rounded-md'> Blackout Lined                </button></div>
                <div onClick={()=>dispatch(setLining('Interlind'))}                     className={`${lining === 'Interlind'                     && 'text-black border border-[#2b2b2b] rounded-xl p-1'} flex justify-center items-center`}> <button className='bg-[#2b2b2b] text-white w-full h-12 rounded-md'> Interlind                     </button></div>
            </div>
        </>
    )
}

export default Lining