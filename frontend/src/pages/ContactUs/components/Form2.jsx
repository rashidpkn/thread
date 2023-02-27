import axios from 'axios'
import React, { useState } from 'react'
import backendIP from '../../../backendIP'

function Form2() {
    const [data, setData] = useState({
        name:'',
        email:'',
        subject:'',
        message:''
    })
    return (
        <div className='flex flex-col justify-center items-center py-[5%] lg:px-[10%]  gap-10 text-black'>
            <h2 className='text-center text-2xl'>Contact Form</h2>
            <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-[75%] ">
                <div className="w-full lg:w-1/2 shadow-2xl bg-white p-10 space-y-10">
                    <p className='text-2xl font-medium'>Get in touch</p>
                    <div className="flex justify-between">
                        <input className='h-12 border pl-3 w-[45%] outline-none' type="text" placeholder='Name' onChange={e=>{setData({...data,name:e.target.value})}} />
                        <input className='h-12 border pl-3 w-[45%] outline-none' type="text" placeholder='Email'onChange={e=>{setData({...data,email:e.target.value})}} />
                    </div>
                    <div className="flex">
                        <input className='h-12 border pl-3 w-full outline-none' type="text" placeholder='Subject' onChange={e=>{setData({...data,subject:e.target.value})}} />
                    </div>
                    <textarea className='h-48 border p-3 w-full outline-none' type="text" placeholder='Message' onChange={e=>{setData({...data,message:e.target.value})}} />
                    <button className='bg-[#E1B980] px-3 py-2 rounded-lg' onClick={()=>{if(data.name && data.email && data.subject && data.message){
                        axios.post(`${backendIP}/email/message`,{...data}).then(res=>{
                            window.alert("Your massage was recevied")
                        })
                    } else{
                        window.alert("Please provide all the above data")
                    }
                    }}>Send Message</button>
                </div>
                <div className="lg:h-[650px] w-full lg:w-1/2 bg-[#E1B980] p-10 lg:p-20 flex flex-col justify-center gap-10 text-black">
                    <p className='text-3xl font-medium'>Contact Us</p>
                    <p>Address : Thomas House, Easy Blinds & Curtains, <br /> 84 Eccleston Square, Pimlico, <br /> London SW1V 1PX, <br /> United Kingdom</p>
                    <p>Phone : 0203 633 8622</p>
                    <p>Email : info@my-thread.co.uk</p>
                    <p>Website : my-thread.co.uk</p>
                </div>
            </div>
        </div>
    )
}

export default Form2