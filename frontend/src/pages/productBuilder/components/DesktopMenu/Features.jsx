import { KeyboardBackspace } from '@mui/icons-material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCorded, setGlide, setLining, setPole } from '../../../../redux/slice/fabric'
import { setMenu } from '../../../../redux/slice/util'

function Features() {
  const dispatch = useDispatch()
  const { glide, corded } = useSelector(state => state.fabric.feature?.accessories)
  const { lining,poleAndTrack } = useSelector(state => state.fabric.feature)
  const { item } = useSelector(state => state.fabric.measure)
  const [selector, setSelector] = useState(1)
  return (
    <div className='space-y-5'>
      <div className="p-5 w-full flex items-center justify-between gap-5">
        <div className="">
          {/* <button className={`${(selector === 1 || selector === 3) && 'hidden'} text-[#B68D40]`} onClick={() => setSelector(selector - 1)}>Back</button> */}
        </div>
        <p className='font-medium'>Features</p>
        <div className="">


        </div>
      </div>
      <div className="flex justify-center gap-5">
        <button onClick={() => setSelector(1)} className={`${selector === 1 ? 'text-[#B68D40]' : 'hidden'} `} >Lining</button>
        <button onClick={() => setSelector(2)} className={`${selector === 2 ? 'text-[#B68D40]' : 'hidden'} `} >Pole/Track</button>
        <button onClick={() => setSelector(3)} className={`${selector === 3 ? 'text-[#B68D40]' : 'hidden'} `} >Accessories</button>
      </div>


      {
        selector === 1 && <div className="space-y-5">
          <p className='text-center font-medium'>The layer on the inside of the curtain, for insulation or a weightier look.</p>
          <div className="space-y-5 px-5">
            <button onClick={() => dispatch(setLining('Unlined'))} className={`${lining === 'Unlined' && 'border-2'}                       h-12 w-full border border-[#b68d40] rounded-md hover:text-[#B68D40]`}>Unlined</button>
            <button onClick={() => dispatch(setLining('Bonded Fleece Blackout Lining'))} className={`${lining === 'Bonded Fleece Blackout Lining' && 'border-2'} h-12 w-full border border-[#b68d40] rounded-md hover:text-[#B68D40]`}>Blackout Lined</button>
            <button onClick={() => dispatch(setLining('Thermal Dim Out'))} className={`${lining === 'Thermal Dim Out' && 'border-2'}               h-12 w-full border border-[#b68d40] rounded-md hover:text-[#B68D40]`}>Bounded Fleece Blackout Lining</button>
            <button onClick={() => dispatch(setLining('Blackout Lined'))} className={`${lining === 'Blackout Lined' && 'border-2'}                h-12 w-full border border-[#b68d40] rounded-md hover:text-[#B68D40]`}>Thermal Dim Out</button>
            <button onClick={() => dispatch(setLining('Interlind'))} className={`${lining === 'Interlind' && 'border-2'}                     h-12 w-full border border-[#b68d40] rounded-md hover:text-[#B68D40]`}>Interlind</button>
          </div>
          <div className="flex justify-center items-center">
            <button className='h-12 px-3 bg-[#B68D40] rounded-md text-white' onClick={() => setSelector(2)}>Pole/Track</button>
          </div>
          <button className='h-12 px-3  rounded-md text-[#B68D40]' onClick={() => item==='Blind' ? dispatch(setMenu(2)) :dispatch(setMenu(3)) }><KeyboardBackspace/> Back</button>
        </div>
      }

      {
        selector === 2 && <div className="space-y-5">
          
          <p className='text-justify font-medium px-5'>Pole used to suspend curtains above windows/Tracks are discreet and designed to blend with a wall.</p>

          <div className="flex justify-center gap-3  flex-wrap">
            <div className="flex items-center gap-3"> <input onClick={() => dispatch(setPole("I don't need one"))} defaultChecked className={`p-1 border h-5 w-5`} type="radio" name="pole" id="no" /> <label htmlFor="no">I don't need one</label> </div>
            <div className="flex items-center gap-3"> <input onClick={() => dispatch(setPole("Pole"))} className={`p-1 border h-5 w-5`} type="radio" name="pole" id="pole" /> <label htmlFor="pole">Pole</label> </div>
             
          </div>
          <div className="flex justify-center items-center">
            {
              poleAndTrack === "I don't need one" 
              ?  <button className='h-12 px-3 bg-[#B68D40] rounded-md text-white' > <Link to={'/estimate'}> Estimate </Link></button>
              :<button className='h-12 px-3 bg-[#B68D40] rounded-md text-white' onClick={() => setSelector(3)}>Accessories</button>
            }
            
          </div>
          <button className='h-12 px-3  rounded-md text-[#B68D40]' onClick={() => setSelector(1) }><KeyboardBackspace/> Back</button>
        </div>
      }


      {
        selector === 3 && <div className="space-y-5">
          <p className='text-justify font-medium px-5'>Please purchase a pole 50cm wider than your window to allow for stacking</p>
          <p className='text-center font-medium'>Uncorded swish supreme glide track </p>
          <div className="flex justify-center gap-10 gap-y-5  flex-wrap px-2 text-white">
            <div onClick={() => dispatch(setGlide(125))} className="flex justify-center items-center gap-1">  <input checked={glide === 125 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-[10px] h-10 rounded-xl'>125cm</button>  </div>
            <div onClick={() => dispatch(setGlide(150))} className="flex justify-center items-center gap-1">  <input checked={glide === 150 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-[10px] h-10 rounded-xl'>150cm</button>  </div>
            <div onClick={() => dispatch(setGlide(175))} className="flex justify-center items-center gap-1">  <input checked={glide === 175 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-[10px] h-10 rounded-xl'>175cm</button>  </div>
            <div onClick={() => dispatch(setGlide(200))} className="flex justify-center items-center gap-1">  <input checked={glide === 200 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-[10px] h-10 rounded-xl'>200cm</button>  </div>
            <div onClick={() => dispatch(setGlide(225))} className="flex justify-center items-center gap-1">  <input checked={glide === 225 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-[10px] h-10 rounded-xl'>225cm</button>  </div>
            <div onClick={() => dispatch(setGlide(250))} className="flex justify-center items-center gap-1">  <input checked={glide === 250 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-[10px] h-10 rounded-xl'>250cm</button>  </div>
            <div onClick={() => dispatch(setGlide(275))} className="flex justify-center items-center gap-1">  <input checked={glide === 275 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-[10px] h-10 rounded-xl'>275cm</button>  </div>
            <div onClick={() => dispatch(setGlide(300))} className="flex justify-center items-center gap-1">  <input checked={glide === 300 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-[10px] h-10 rounded-xl'>300cm</button>  </div>
          </div>
          <p className='text-center font-medium'>Universal, durable, extendable, corded steel tracks </p>
          <div className="flex justify-center gap-10 gap-y-5  flex-wrap px-2 text-white">
            <div onClick={() => dispatch(setCorded('100cm-175cm'))} className="flex justify-center items-center gap-1"> <input checked={corded === '100cm-175cm' ? true : false} type={'checkbox'} />  <button className='bg-[#B68D40] w-36 h-10 rounded-xl'>100cm-175cm</button> </div>
            <div onClick={() => dispatch(setCorded('175cm-300cm'))} className="flex justify-center items-center gap-1"> <input checked={corded === '175cm-300cm' ? true : false} type={'checkbox'} />  <button className='bg-[#B68D40] w-36 h-10 rounded-xl'>175cm-300cm</button> </div>
            <div onClick={() => dispatch(setCorded('250cm-400cm'))} className="flex justify-center items-center gap-1"> <input checked={corded === '250cm-400cm' ? true : false} type={'checkbox'} />  <button className='bg-[#B68D40] w-36 h-10 rounded-xl'>250cm-400cm</button> </div>
            <div onClick={() => dispatch(setCorded('300cm-400cm'))} className="flex justify-center items-center gap-1"> <input checked={corded === '300cm-400cm' ? true : false} type={'checkbox'} />  <button className='bg-[#B68D40] w-36 h-10 rounded-xl'>300cm-400cm</button> </div>
          </div>
          <div className="flex justify-between items-center px-5">
            <button className='h-12 px-3  rounded-md text-[#B68D40]' onClick={() => setSelector(2)}><KeyboardBackspace/> Back</button>
            <Link to={'/estimate'}>
              <button className={` h-8 w-20 rounded-md bg-[#B68D40] text-white`} >Estimate</button>
            </Link>
          </div>
        </div>
      }



    </div>
  )
}

export default Features