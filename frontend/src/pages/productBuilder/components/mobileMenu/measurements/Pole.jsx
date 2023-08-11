import { KeyboardBackspace } from '@mui/icons-material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setHeight, setIsPole, setPrice, setWidth } from '../../../../../redux/slice/fabric'
import { setMenu } from '../../../../../redux/slice/util'

function Pole({ setSelector }) {
    const {  height, width,item } = useSelector(state => state.fabric.measure)
    const dispatch = useDispatch()
    return (
        <div className='space-y-3 relative h-full'>
            
            <div className="flex flex-col gap-3 items-center pt-10">
                
                <p className='text-center font-medium'>Enter Height and Width</p>
                <div className="flex  justify-center gap-5">
                    <div className="flex flex-col">
                        <label htmlFor="">Height CM</label>
                        <input  min={100} max={480}   onChange={e => {dispatch(setHeight(Number(e.target.value)));dispatch(setPrice())}} className='bg-[#122620]/30 h-12 pl-2 w-32 ' type="number" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Width CM</label>
                        <input  min={75} max={480}  onChange={e => {dispatch(setWidth(Number(e.target.value)));dispatch(setPrice())}} className='bg-[#122620]/30 h-12 pl-2 w-32 ' type="number" />
                    </div>

                </div>
            </div>
            <div className="absolute bottom-5 w-full h-12 flex justify-between items-center px-10">
            <button className="cursor-pointer flex justify-center items-center gap-1" onClick={()=>{setSelector(3)}}><KeyboardBackspace/> Back</button>
                <div className="cursor-pointer h-10 w-32 bg-[#2b2b2b] text-white flex justify-center items-center rounded-xl" 
                onClick={() => { 
                    if( (Number(height)<100 || Number(height)>305)){
                        window.alert("Please Provide height between 100 - 480 ")
                    }
                    else if(Number(width)<75 || Number(width)>480){
                        window.alert("Please Provide width between 75 - 480")
                    }
                    else{
                        item==='Blind' ? dispatch(setMenu(4)) : dispatch(setMenu(3))
                    }
                }}
                >Next</div>
            </div>
        </div>
    )
}

export default Pole