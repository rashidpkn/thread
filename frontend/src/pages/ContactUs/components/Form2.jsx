import React from 'react'

function Form2() {
    return (
        <div className='flex flex-col justify-center items-center py-[5%] lg:px-[10%]  gap-10 text-black'>
            <h2 className='text-center text-2xl'>Contact Form</h2>
            <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-[75%] ">
                <div className="w-full lg:w-1/2 shadow-2xl bg-white p-10 space-y-10">
                    <p className='text-2xl font-medium'>Get in touch</p>
                    <div className="flex justify-between">
                        <input className='h-12 border pl-3 w-[45%] outline-none' type="text" placeholder='Name' />
                        <input className='h-12 border pl-3 w-[45%] outline-none' type="text" placeholder='Email' />
                    </div>
                    <div className="flex">
                        <input className='h-12 border pl-3 w-full outline-none' type="text" placeholder='Subject' />
                    </div>
                    <textarea className='h-48 border p-3 w-full outline-none' type="text" placeholder='Message' />
                    <button className='bg-[#E1B980] px-3 py-2 rounded-lg'>Send Message</button>
                </div>
                <div className="lg:h-[650px] w-full lg:w-1/2 bg-[#E1B980] p-10 lg:p-20 flex flex-col justify-center gap-10 text-black">
                    <p className='text-3xl font-medium'>Contact Us</p>
                    <p>Address : 198 West 21th <br /> Street, Suite 721 New York NY <br /> 10016</p>
                    <p>Phone : +123456789</p>
                    <p>Email : info@example.com</p>
                    <p>Website : example.com</p>
                </div>
            </div>
        </div>
    )
}

export default Form2