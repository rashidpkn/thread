import { KeyboardBackspace } from '@mui/icons-material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setHeight, setIsPole, setPrice, setWidth } from '../../../../../redux/slice/fabric'

function Pole({ setSelector }) {
    const {  height, width } = useSelector(state => state.fabric.measure)
    const dispatch = useDispatch()
    return (
        <div className='space-y-3 relative h-full'>
            
            <div className="flex flex-col gap-3 items-center pt-10">
                <p className='text-center'>Do you have a pole or track installed ?</p>
                {/* <div className="flex justify-center gap-5">
                <div onClick={()=>{dispatch(setIsPole(false) )}} className={`${isPole === false && 'border border-[#B68D40]  rounded-xl'} p-1`}><button className='px-[18px] py-[16px] rounded-lg bg-[#B68D40]'>No </button></div>
                <div onClick={()=>{dispatch(setIsPole(true)  )}} className={`${isPole === true  && 'border border-[#B68D40]  rounded-xl'} p-1`}><button className='px-[18px] py-[16px] rounded-lg bg-[#B68D40]'>Yes</button></div>
            </div> */}
                    <div className="can-toggle flex justify-center items-center right-12">
                        <input id="a" onChange={e=>e.target.checked ? dispatch(setIsPole(true)) : dispatch(setIsPole(false)) } defaultChecked={true} type="checkbox" />
                        <label htmlFor="a">
                            <div className="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                        </label>
                    </div>
                <div className="flex  justify-center gap-5">
                    <div className="flex flex-col">
                        <label htmlFor="">Height CM</label>
                        <input  min={100} max={480} placeholder='100 CM to 305 CM' onBlur={e=>{
                            if(Number(e.target.value)<100 || Number(e.target.value)>305 ){
                                window.alert("Please Provide Height between 100 and 305")
                            }
                        }} onChange={e => {dispatch(setHeight(Number(e.target.value)));dispatch(setPrice())}} className='bg-[#122620]/30 h-12 pl-2 w-24' type="number" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Width CM</label>
                        <input  min={75} max={480} placeholder='75 CM to 480 CM' onBlur={e=>{
                            if(Number(e.target.value)<75 || Number(e.target.value)>480 ){
                                window.alert("Please Provide Height between 100 and 480")
                            }
                        }}  onChange={e => {dispatch(setWidth(Number(e.target.value)));dispatch(setPrice())}} className='bg-[#122620]/30 h-12 pl-2 w-24' type="number" />
                    </div>

                </div>
            </div>
            <div className="absolute bottom-5 w-full h-12 flex justify-between items-center px-10">
            <button className="cursor-pointer flex justify-center items-center gap-1" onClick={()=>{setSelector(3)}}><KeyboardBackspace/> Back</button>
                <div className="cursor-pointer h-10 w-32 bg-[#2b2b2b] text-white flex justify-center items-center rounded-xl" onClick={() => { setSelector(5) }}>Next</div>
            </div>
        </div>
    )
}

export default Pole