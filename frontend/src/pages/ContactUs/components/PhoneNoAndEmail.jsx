import React from 'react'

function PhoneNoAndEmail() {
  return (
      <div className="flex items-center justify-center main ">
        <div className='w-[55%]'>
              <div className="flex items-center w-full Firstsection h-36">
                  <div className="justify-center w-1/2 text-center phonenumber">
                  <h6 className='text-lg font-medium'>Phone</h6>
                  <h6 className='text-[#527BFF] pt-3'>0203 633 8622</h6>
                  </div>
                  <div className="justify-center w-1/2 text-center email">
                    <h6 className='text-lg font-medium'>E-mail</h6>
                    <h6 className='text-[#527BFF] pt-3'>info@my-thread.co.uk</h6>
                  </div>   
              </div>
              <hr className='bg-gray-400'/>
              <div className="flex flex-col items-center w-full h-full mb-24 secondsecton">
                    <h1 className='pt-20 text-4xl font-bold'>Need some help?</h1>
                    <p className='text-[#4A4A4A] pt-10'>If you need help choosing the perfect color, have questions about our</p>
                    <p className='text-[#4A4A4A]'>products, or anything in between, we’re here for you!</p>
              </div>
              
              
        </div>
    </div>
  )
}

export default PhoneNoAndEmail