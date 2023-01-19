import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fname:'',
    lname:'',
    phone:'',
    state:'',
    address:'',
    email:'',
    zipCode:'',
    password:'',
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFname   (state,{payload}){state.fname    = payload},
    setLname   (state,{payload}){state.lname    = payload},
    setPhone   (state,{payload}){state.phone    = payload},
    setState   (state,{payload}){state.state    = payload},
    setAddress (state,{payload}){state.address  = payload},
    setEmail   (state,{payload}){state.email    = payload},
    setZipCode (state,{payload}){state.zipCode  = payload},
    setPassword(state,{payload}){state.password = payload},
  }
});

export const {setFname,setLname,setPhone,setState,setAddress,setEmail,setZipCode,setPassword} = user.actions

export default user.reducer