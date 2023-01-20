import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productBuilder:{
        show3D : true,
        showMenu:false,
        menu:1
    },
    estimate:{
      savedChange:false
    }
}

const util = createSlice({
  name: 'utl',
  initialState,
  reducers: {
    setShow3D(state,{payload}){
      state.productBuilder.show3D = payload
      if(payload === true){
        state.productBuilder.showMenu = false
      }
    },
    setShowMenu(state,{payload}){
      
      state.productBuilder.showMenu = payload
      if(payload===false){
        state.productBuilder.show3D = true
      }
    },
    setMenu(state,{payload}){
      state.productBuilder.menu = payload
      state.productBuilder.showMenu = true
      if(payload === 1 || payload === 5){
        state.productBuilder.show3D = false
      }else{
        state.productBuilder.show3D = true
      }
    },
    setSavedChange(state,{payload}){state.estimate.savedChange=payload}
}
});

export const {setShow3D,setShowMenu,setMenu,setSavedChange} = util.actions

export default util.reducer