import { Close } from '@mui/icons-material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMenu, setShowMenu } from '../../../../redux/slice/util'
import Fabric from './Fabric'
import Features from './Features'
import Mesurement from './Mesurement'
import Estimate from './Estimate'
import Style from './Style'
import Image from './Image'

function MobileMenu() {
    const { showMenu, menu } = useSelector(state => state.util.productBuilder)
    const dispatch = useDispatch()
    return (
        <div className={`${!showMenu && 'hidden' } ${menu === 1 || menu===5 ? 'h-[calc(100vh-5rem)] ' : ''} lg:hidden  bg-[#E1B980] text-[#2b2b2b] fixed z-50 rounded-t-3xl bottom-0  w-full flex-shrink-0`}>
            <div className="flex justify-center">
                
            </div>
            <div className="flex h-12  justify-between items-center px-10">
                <div className=""></div>
                <div className='h-2 rounded-full w-28 bg-[#2b2b2b]' />
                <button onClick={() => dispatch(setShowMenu(false))}><Close className='text-[#2b2b2b]' /></button>
            </div>
            <div className={`flex flex-col lg:hidden justify-center items-center w-full  h-10`}>
                <div className="flex justify-center items-center gap-3 relative z-10 text-white">
                    <button onClick={()=>dispatch(setMenu(1))} className={`${menu === 1 ? 'bg-[#2b2b2b]' : 'bg-[#2b2b2b]/70'}  h-[30px] w-[30px] rounded-full flex justify-center items-center`}>1</button>
                    <button onClick={()=>dispatch(setMenu(2))} className={`${menu === 2 ? 'bg-[#2b2b2b]' : 'bg-[#2b2b2b]/70'}  h-[30px] w-[30px] rounded-full flex justify-center items-center`}>2</button>
                    <button onClick={()=>dispatch(setMenu(3))} className={`${menu === 3 ? 'bg-[#2b2b2b]' : 'bg-[#2b2b2b]/70'}  h-[30px] w-[30px] rounded-full flex justify-center items-center`}>3</button>
                    <button onClick={()=>dispatch(setMenu(4))} className={`${menu === 4 ? 'bg-[#2b2b2b]' : 'bg-[#2b2b2b]/70'}  h-[30px] w-[30px] rounded-full flex justify-center items-center`}>4</button>
                    <button onClick={()=>dispatch(setMenu(5))} className={`${menu === 5 ? 'bg-[#2b2b2b]' : 'bg-[#2b2b2b]/70'}  h-[30px] w-[30px] rounded-full flex justify-center items-center`}>5</button>
                </div>
                <div className="bg-[#2b2b2b]/50 h-[1px] w-36 relative bottom-4" />
            </div>
            {
                menu === 1 && <Fabric/>
            }
            {
                menu === 2 && <Mesurement/>
            }
            {
                menu === 3 && <Style/>
            }
            {
                menu === 4 && <Features/>
            }
            {
                menu  === 5 && <Estimate/>
            }
            {
                menu === 6 && <Image />
            }
            
        </div>
    )
}

export default MobileMenu