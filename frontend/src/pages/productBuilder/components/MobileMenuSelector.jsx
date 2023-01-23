import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMenu } from '../../../redux/slice/util'

function MobileMenuSelector() {
  const { showMenu, menu } = useSelector(state => state.util.productBuilder)
  const { item } = useSelector(state => state.fabric.measure)
  const dispatch = useDispatch()
  return (
    <div className={`${showMenu ? 'hidden' : 'flex'} lg:hidden fixed bottom-0 z-20 h-12 w-full bg-[#2b2b2b] gap-1 justify-center p-1 `}>
      
      <button onClick={() => dispatch(setMenu(1))} className={`${menu === 1 && 'text-black'} h-full ${item=== 'Blind' ? "w-1/3" : "w-1/4"}   bg-[#B68D40] text-white`}>Fabric</button>
      <button onClick={() => dispatch(setMenu(2))} className={`${menu === 2 && 'text-black'} h-full ${item=== 'Blind' ? "w-1/3" : "w-1/4"}   bg-[#B68D40] text-white`}>Measure</button>
      {item !== 'Blind' && <button onClick={() => dispatch(setMenu(3))} className={`${menu === 3 && 'text-black'} h-full w-1/4  bg-[#B68D40] text-white`}>Style</button>}
      <button onClick={() => dispatch(setMenu(4))} className={`${menu === 4 && 'text-black'} h-full ${item=== 'Blind' ? "w-1/3" : "w-1/4"}   bg-[#B68D40] text-white`}>Features</button>
    </div>
  )
}

export default MobileMenuSelector