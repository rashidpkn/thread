import { ArrowRightAlt, KeyboardBackspace } from '@mui/icons-material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setAccessoriesPrice, setCorded, setGlide, setLining, setPole } from '../../../../redux/slice/fabric'
import { setMenu } from '../../../../redux/slice/util'

function Features() {
  const dispatch = useDispatch()
  const { glide, corded } = useSelector(state => state.fabric.feature?.accessories)
  const { lining,poleAndTrack } = useSelector(state => state.fabric.feature)
  const { item } = useSelector(state => state.fabric.measure)
  const [selector, setSelector] = useState(1)
  return (
    <div className='space-y-5'>
      {/* <div className="p-5 w-full flex items-center justify-between gap-5">
        
        <p className='font-medium'>Features</p>
        
      </div> */}
      <div className="flex justify-center gap-5">
        <button onClick={() => setSelector(1)} className={`${selector === 1 ? 'text-[#2B2B2B]' : 'hidden'} `} >Lining</button>
        <button onClick={() => setSelector(2)} className={`${selector === 2 ? 'text-[#2B2B2B]' : 'hidden'} `} >Pole/Track</button>
        <button onClick={() => setSelector(3)} className={`${selector === 3 ? 'text-[#2B2B2B]' : 'hidden'} `} >Accessories</button>
      </div>


      {
        selector === 1 && <div className="space-y-5">
          <p className='text-center font-medium'>The layer on the inside of the {item==='Curtain' ? 'curtain' :'blind' }, for insulation or a weightier look.</p>
          <div className="flex flex-col gap-5 items-center">
            <button onClick={() => dispatch(setLining('Unlined'))}                       className={`${lining === 'Unlined'                       ? 'bg-[#2B2B2B] text-white' : '' } h-7 w-72 border border-[#2B2B2B] rounded-lg`}>Unlined</button>
            <button onClick={() => dispatch(setLining('Bonded Fleece Blackout Lining'))} className={`${lining === 'Bonded Fleece Blackout Lining' ? 'bg-[#2B2B2B] text-white' : '' } h-7 w-72 border border-[#2B2B2B] rounded-lg`}>Blackout Lined</button>
            <button onClick={() => dispatch(setLining('Thermal Dim Out'))}               className={`${lining === 'Thermal Dim Out'               ? 'bg-[#2B2B2B] text-white' : '' } h-7 w-72 border border-[#2B2B2B] rounded-lg`}>Bounded Fleece Blackout Lining</button>
            <button onClick={() => dispatch(setLining('Blackout Lined'))}                className={`${lining === 'Blackout Lined'                ? 'bg-[#2B2B2B] text-white' : '' } h-7 w-72 border border-[#2B2B2B] rounded-lg`}>Thermal Dim Out</button>
            <button onClick={() => dispatch(setLining('Interlind'))}                     className={`${lining === 'Interlind'                     ? 'bg-[#2B2B2B] text-white' : '' } h-7 w-72 border border-[#2B2B2B] rounded-lg`}>Interlind</button>
          </div>
          
          <div className="flex  justify-between items-center mt-10">
            <button className='px-4 py-1 rounded-lg bg-[#2B2B2B] text-white flex justify-center items-center' onClick={() => item==='Blind' ? dispatch(setMenu(2)) :dispatch(setMenu(3))}> <KeyboardBackspace /> Back</button>
            <button className='px-4 py-1 rounded-lg bg-[#2B2B2B] text-white flex justify-center items-center' onClick={()=>  setSelector(2)}>Next <ArrowRightAlt/></button>
          </div>
        </div>
      }

      {
        selector === 2 && <div className="space-y-5">
          
          <p className='text-justify font-medium px-5'>Pole used to suspend {item==='Curtain' ? 'curtain' :'blind' } above windows/Tracks are discreet and designed to blend with a wall.</p>

          <div className="flex justify-center gap-3  flex-wrap">
            <div className="flex items-center gap-3"> <input onClick={() => dispatch(setPole("I don't need one"))} defaultChecked className={`p-1 border h-5 w-5`} type="radio" name="pole" id="no" /> <label htmlFor="no">I don't need one</label> </div>
            <div className="flex items-center gap-3"> <input onClick={() => dispatch(setPole("Pole"))} className={`p-1 border h-5 w-5`} type="radio" name="pole" id="pole" /> <label htmlFor="pole">Pole</label> </div>
             
          </div>
          

          <div className="flex  justify-between items-center mt-10">
            <button className='px-4 py-1 rounded-lg bg-[#2B2B2B] text-white flex justify-center items-center' onClick={() => setSelector(1)}> <KeyboardBackspace /> Back</button>
            {
              poleAndTrack === "I don't need one" 
              ? <button className='px-4 py-1 rounded-lg bg-[#2B2B2B] text-white flex justify-center items-center' > <Link to={'/estimate'}>Estimate</Link></button>
              : <button className='px-4 py-1 rounded-lg bg-[#2B2B2B] text-white flex justify-center items-center' onClick={()=>  setSelector(3)}>Next <ArrowRightAlt/></button>
            }
            
          </div>

        </div>
      }


      {
        selector === 3 && <div className="space-y-5">
          <p className='text-justify font-medium px-5'>Please purchase a pole 50cm wider than your window to allow for stacking</p>
          <p className='text-center font-medium'>Uncorded swish supreme glide track </p>
          <div className="flex justify-center gap-10 gap-y-5  flex-wrap px-2 text-white">
            <div onClick={() => {dispatch(setGlide(125));dispatch(setAccessoriesPrice(34))}} className="flex justify-center items-center gap-1">  <input checked={glide === 125 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-2 h-10 rounded-lg'>125cm</button>  </div>
            <div onClick={() => {dispatch(setGlide(150));dispatch(setAccessoriesPrice(36))}} className="flex justify-center items-center gap-1">  <input checked={glide === 150 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-2 h-10 rounded-lg'>150cm</button>  </div>
            <div onClick={() => {dispatch(setGlide(175));dispatch(setAccessoriesPrice(42))}} className="flex justify-center items-center gap-1">  <input checked={glide === 175 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-2 h-10 rounded-lg'>175cm</button>  </div>
            <div onClick={() => {dispatch(setGlide(200));dispatch(setAccessoriesPrice(48))}} className="flex justify-center items-center gap-1">  <input checked={glide === 200 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-2 h-10 rounded-lg'>200cm</button>  </div>
            <div onClick={() => {dispatch(setGlide(225));dispatch(setAccessoriesPrice(53))}} className="flex justify-center items-center gap-1">  <input checked={glide === 225 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-2 h-10 rounded-lg'>225cm</button>  </div>
            <div onClick={() => {dispatch(setGlide(250));dispatch(setAccessoriesPrice(60))}} className="flex justify-center items-center gap-1">  <input checked={glide === 250 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-2 h-10 rounded-lg'>250cm</button>  </div>
            <div onClick={() => {dispatch(setGlide(275));dispatch(setAccessoriesPrice(62))}} className="flex justify-center items-center gap-1">  <input checked={glide === 275 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-2 h-10 rounded-lg'>275cm</button>  </div>
            <div onClick={() => {dispatch(setGlide(300));dispatch(setAccessoriesPrice(72))}} className="flex justify-center items-center gap-1">  <input checked={glide === 300 ? true : false} type={'checkbox'} />     <button className='bg-[#B68D40] px-2 h-10 rounded-lg'>300cm</button>  </div>
          </div>
          <p className='text-center font-medium'>Universal, durable, extendable, corded steel tracks </p>
          <div className="flex justify-center gap-10 gap-y-5  flex-wrap px-2 text-white">
            <div onClick={() => dispatch(setCorded('100cm-175cm'))} className="flex justify-center items-center gap-1"> <input checked={corded === '100cm-175cm' ? true : false} type={'checkbox'} />  <button className='bg-[#B68D40] h-10 px-2 rounded-lg'>100cm-175cm</button> </div>
            <div onClick={() => dispatch(setCorded('175cm-300cm'))} className="flex justify-center items-center gap-1"> <input checked={corded === '175cm-300cm' ? true : false} type={'checkbox'} />  <button className='bg-[#B68D40] h-10 px-2 rounded-lg'>175cm-300cm</button> </div>
            <div onClick={() => dispatch(setCorded('250cm-400cm'))} className="flex justify-center items-center gap-1"> <input checked={corded === '250cm-400cm' ? true : false} type={'checkbox'} />  <button className='bg-[#B68D40] h-10 px-2 rounded-lg'>250cm-400cm</button> </div>
            <div onClick={() => dispatch(setCorded('300cm-400cm'))} className="flex justify-center items-center gap-1"> <input checked={corded === '300cm-400cm' ? true : false} type={'checkbox'} />  <button className='bg-[#B68D40] h-10 px-2 rounded-lg'>300cm-400cm</button> </div>
          </div>
          
          <div className="flex  justify-between items-center mt-10">
            <button className='px-4 py-1 rounded-lg bg-[#2B2B2B] text-white flex justify-center items-center' onClick={() => setSelector(2)}> <KeyboardBackspace /> Back</button>
            <button className='px-4 py-1 rounded-lg bg-[#2B2B2B] text-white flex justify-center items-center' > <Link to={'/estimate'}>Estimate</Link></button>
          </div>
        </div>
      }



    </div>
  )
}

export default Features