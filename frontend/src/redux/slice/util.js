import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productBuilder:{
        show3D : false,
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
    setShow3D(state,{payload}){state.productBuilder.show3D = payload},
    setShowMenu(state,{payload}){state.productBuilder.showMenu = payload},
    setMenu(state,{payload}){
      state.productBuilder.menu = payload
      state.productBuilder.showMenu = true
    },
    setSavedChange(state,{payload}){state.estimate.savedChange=payload}
}
});

export const {setShow3D,setShowMenu,setMenu,setSavedChange} = util.actions

export default util.reducer