import React from 'react'
import { useDispatch } from 'react-redux'
import { setPole } from '../../../../../redux/slice/fabric'

function Pole() {
    // const { poleAndTrack } = useSelector(state => state.fabric.feature)
    const dispatch = useDispatch()
    return (
        <>
            <p className='text-center px-5'>Pole used to suspend curtains above windows/Tracks are discreet and designed to blend with a wall.</p>
            <div className="flex justify-center gap-3  flex-wrap">

                <div onChange={()=>dispatch(setPole("I don't need one"))}  className="flex items-center gap-3"> <input defaultChecked className={`p-1 border h-5 w-5`} type="radio" name="pole-mobile" id="no" /> <label htmlFor="no">I don't need one</label> </div>
                <div onChange={()=>dispatch(setPole('Pole'))} className="flex items-center gap-3"> <input className={`p-1 border h-5 w-5`} type="radio" name="pole-mobile" id="pole" /> <label htmlFor="pole">Pole</label> </div>
                <div onChange={()=>dispatch(setPole('Track'))} className="flex items-center gap-3"> <input className={`p-1 border h-5 w-5`} type="radio" name="pole-mobile" id="track" /> <label htmlFor="track">Track</label> </div>


                {/* <div onClick={() => dispatch(setPole("I don't need one"))} className={`${poleAndTrack === "I don't need one" && 'border border-[#b68d40] rounded-xl p-1'} flex justify-center items-center`}>
                    <button className='bg-[#B68D40] px-[10px] py-[8px] rounded-xl'>I don't need one</button>
                </div>

                <div onClick={() => dispatch(setPole("Pole"))} className={`${poleAndTrack === "Pole" && 'border border-[#b68d40] rounded-xl p-1'} flex justify-center items-center`}>
                    <button className='bg-[#B68D40] px-[10px] py-[8px] rounded-xl'>Pole            </button>
                </div>

                <div onClick={() => dispatch(setPole("Track"))} className={`${poleAndTrack === "Track" && 'border border-[#b68d40] rounded-xl p-1'} flex justify-center items-center`}>
                    <button className='bg-[#B68D40] px-[10px] py-[8px] rounded-xl'>Track           </button>
                </div> */}

            </div>
        </>
    )
}

export default Pole