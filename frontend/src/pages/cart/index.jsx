import React from 'react'
import Navbar from '../common/Navbar'

function Cart() {
    return (
        <div className='pb-10'>
            <Navbar />
            <h1 className='text-center text-2xl font-medium my-5'>Cart</h1>
            <div className="flex gap-5 mt-10 flex-wrap justify-center items-center">
                <ItemCard name={'Azoor'} item={'Curtain'} installation='Bay' isPole={'Yes'} width='100' height={'100'} roomName='BedRoom' panel={'Single'} look='Trible' lining={'Unilind'} poleAndTrack="Pole" glide='100' corded={'200cm-250cm'} color='#b68d40' price={120} />
                <ItemCard name={'Azoor'} item={'Curtain'} installation='Bay' isPole={'Yes'} width='100' height={'100'} roomName='BedRoom' panel={'Single'} look='Trible' lining={'Unilind'} poleAndTrack="Pole" glide='100' corded={'200cm-250cm'} color='#b68d40' price={120} />
                <ItemCard name={'Azoor'} item={'Curtain'} installation='Bay' isPole={'Yes'} width='100' height={'100'} roomName='BedRoom' panel={'Single'} look='Trible' lining={'Unilind'} poleAndTrack="Pole" glide='100' corded={'200cm-250cm'} color='#b68d40' price={120} />
            </div>
        </div>
    )
}

export default Cart



const ItemCard = ({name,item,installation,isPole,width,height,roomName,panel,look,lining,poleAndTrack,glide,corded,price,color,}) => {
    return (
        <div className=" space-y-3 text-lg font-medium w-[22rem] border rounded-xl p-5">
            <h2 className='text-center py-5 text-2xl'>{roomName}</h2>
            <div className="flex">  <p className='w-36 text-xl'>Fabric          </p>  <p className='ml-8 flex justify-center items-center gap-3'><div className='h-8 w-8 rounded-full ' style={{ backgroundColor: color }}></div> {name}</p>  </div>
            <div className="flex">  <p className='w-36 text-xl'>Item            </p>  <p className='ml-8'>{item}</p>  </div>
            <div className="flex">  <p className='w-36 text-xl'>Installation    </p>  <p className='ml-8'>{installation}</p>  </div>
            <div className="flex">  <p className='w-36 text-xl'>Is Pole         </p>  <p className='ml-8'>{isPole ? 'Yes' : 'No'}</p>  </div>

            <div className="flex">  <p className='w-36 text-xl'>Measurements    </p>  <p className='ml-8'>{`${width} W ${height} H (${roomName})`}</p>  </div>
            <div className="flex">  <p className='w-36 text-xl'>Panel           </p>  <p className='ml-8'>{panel}</p>  </div>
            <div className="flex">  <p className='w-36 text-xl'>Style           </p>  <p className='ml-8'>{look}</p>  </div>
            <div className="flex">  <p className='w-36 text-xl'>Lining          </p>  <p className='ml-8'>{lining}</p>  </div>
            <div className="flex">  <p className='w-36 text-xl'>Pole or Track   </p>  <p className='ml-8'>{poleAndTrack}</p>  </div>
            <div className="flex">  <p className='w-36 text-xl'>Glide           </p>  <p className='ml-8'>{glide} CM</p>  </div>
            <div className="flex">  <p className='w-36 text-xl'>corded          </p>  <p className='ml-8'>{corded}</p>  </div>

            <div className="flex">  <p className='w-36 text-xl'>Making Price    </p>  <p className='ml-8'>{price}</p>  </div>
            <div className="flex">  <p className='w-36 text-xl'>Accessories     </p>  <p className='ml-8'>{price}</p>  </div>
            <div className="flex">  <p className='w-36 text-xl'>Boxed &  Postage</p>  <p className='ml-8'>{price + 30}</p>  </div>
            <div className="flex justify-center items-center"> <button className='h-12 w-36 bg-[#b68d40] rounded-2xl text-white'>Checkout</button></div>
            
        </div>
    )
}



