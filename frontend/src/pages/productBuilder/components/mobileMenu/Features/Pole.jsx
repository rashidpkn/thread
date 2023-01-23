import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPole } from '../../../../../redux/slice/fabric'
import { setMenu } from '../../../../../redux/slice/util'

function Pole() {
    const { poleAndTrack } = useSelector(state => state.fabric.feature)
    const dispatch = useDispatch()
    return (
        <>
            <p className='text-center px-5'>Pole used to suspend curtains above windows/Tracks are discreet and designed to blend with a wall.</p>
            <div className="flex justify-center gap-3  flex-wrap">
                <div onChange={()=>dispatch(setPole("I don't need one"))}  className="flex items-center gap-3"> <input defaultChecked className={`p-1 border h-5 w-5`} type="radio" name="pole-mobile" id="no" /> <label htmlFor="no">I don't need one</label> </div>
                <div onChange={()=>dispatch(setPole('Pole'))} className="flex items-center gap-3"> <input className={`p-1 border h-5 w-5`} type="radio" name="pole-mobile" id="pole" /> <label htmlFor="pole">Pole</label> </div>    
            </div>
            {
                poleAndTrack === "I don't need one" && 
                <div className="flex justify-center items-center">
                    <button className='h-12 px-3 bg-[#B68D40] rounded-md text-white' onClick={()=>{dispatch(setMenu(5))}}>Estimate</button>
                </div>
            }
            
        </>
    )
}

export default Pole