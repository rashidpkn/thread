
const Form = () => {

    // const dispatch = useDispatch()
    // const {contacts} = useSelector(state=>state.contacts)
    // const [contact, setContact] = useState({
    //   name: '',
    //   email: '',
    //   message: '',
    // })
    // const formHandler = () => {
    //   axios.post(`${backendIp}/contact/`,contact).then(res=>{
    //     if(res.data){
    //       window.alert("Your request sent successfully, we will get back to you soon.")
    //       window.location.href = '/'
          
    //   }else window.alert("Your message cannot be sent!")
    //   }).catch(err=>{
    //     console.log(err.message)
    //   })
    // }
    return(
//         <div className="max-w-6xl px-12 py-20 mx-auto mb-24 bg-white bg-gray-100 shadow-xl lg:px-24">
//  <form onSubmit={e => { e.preventDefault(); formHandler() }} >
//   <div className="flex flex-col px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
//     <div className="mb-6 -mx-3 md:flex">
//       <div className="px-3 md:w-full">
//         <label className="mb-2 text-xs tracking-wide text-gray-400 uppercase" for="application-link">
//           Name
//         </label>
//         <input value={contact.name} onChange={e=>{setContact({...contact,name:e.target.value})}} required className="w-full px-4 py-3 mb-3 text-black bg-gray-200 border border-gray-200 rounded" id="application-name" type="text"/>
//       </div>
//     </div>
//     <div className="mb-6 -mx-3 md:flex">
//       <div className="px-3 md:w-full">
//         <label className="mb-2 text-xs tracking-wide text-gray-400 uppercase" for="application-link">
//           Email
//         </label>
//         <input value={contact.email} onChange={e=>{setContact({...contact,email:e.target.value})}} required className="w-full px-4 py-3 mb-3 text-black bg-gray-200 border border-gray-200 rounded" id="application-email" type="text"/>
//       </div>
//     </div>
//     <div className="mb-6 -mx-3 md:flex">
//       <div className="px-3 md:w-full">
//         <label className="mb-2 text-xs tracking-wide text-gray-400 uppercase" for="application-link">
//           Message
//         </label>
//         <input value={contact.message} onChange={e=>{setContact({...contact,message:e.target.value})}} required className="w-full px-4 py-3 mb-3 text-black bg-gray-200 border border-gray-200 rounded" id="application-message" type="text"/>
//       </div>
//     </div>
//     <div className="items-center justify-center mt-2 -mx-3 md:flex">
//       <div className="px-3 md:w-[30%]">
//         <button onClick={()=>{dispatch(setContact(contact))}} className="px-4 py-2 font-bold text-white bg-gray-900 border-b-4 border-gray-500 rounded-full md:w-full hover:border-b-2 hover:border-gray-100">
//           SUBMIT
//         </button>
//       </div>
//     </div>
//   </div>
// </form>

// </div>
<div className="max-w-6xl px-12 py-20 mx-auto mb-24 bg-white bg-gray-100 shadow-xl lg:px-24">
  <form onSubmit={e => { e.preventDefault();
    //  formHandler() 
     }} >
  <div className="flex flex-col items-center justify-center w-full p-5 py-20 bg-[#3f7355]  min-h-1/2 lg:min-h-full gap-14">
        <input   placeholder='Your Name'  className='outline-none border-b bg-transparent w-full text-white text-2xl px-1 max-w-[643px]' type="text" />
        <input  placeholder='Your Email' className='outline-none border-b bg-transparent w-full text-white text-2xl px-1 max-w-[643px]' type="text" />
        <input placeholder='Your Phone' className='outline-none border-b bg-transparent w-full text-white text-2xl px-1 max-w-[643px]' type="text" />
        <textarea  className='outline-none border-b bg-transparent text-white text-2xl px-1 w-full max-w-[643px]' placeholder='Write us a message'></textarea>
        <div className="w-full max-w-[643px] flex gap-14  justify-center item-center">
            
            <button className="px-4 py-2 font-bold text-white bg-gray-900 border-b-4 border-gray-500 rounded-full md:w-1/2 hover:border-b-2 hover:border-gray-100">
              SUBMIT
            </button>
        </div>

    </div>
    </form>
  </div>
    
    )
}

export default Form;