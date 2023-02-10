import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart:localStorage.sample ? JSON.parse(localStorage.sample) : []
}

const sample = createSlice({
  name: 'sample',
  initialState,
  reducers: {
    setCart(state,{payload}){
        state.cart = payload
        
        localStorage.setItem('sample',JSON.stringify(payload))
    }
  }
});

export const {setCart} = sample.actions

export default sample.reducer