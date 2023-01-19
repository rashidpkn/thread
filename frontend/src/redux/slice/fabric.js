import { createSlice } from '@reduxjs/toolkit'
// import { setShow3D } from './util';

const initialState = {
    fabricType:{
        id: 1,
        name: 'Azurite Black',
        color: '#333333',
        patternNumber: '00',
        fabricInitialPrice: 0,
        group: 'C',
        fabricPath: 'plains/Azurite_Black.jpg',
        magnifyFabricPath: 'magnify/Azurite_Black.jpg',
        magnifyWavyFabricPath: 'magnify/azurite_black_2.jpg',
        wavy:true
    },
    wallColor:'fff',
    measure:{
        item:'Curtain',
        installation:'Curtain Flat',
        room:'Bedroom',
        roomName:'Bedroom',
        isPole:true,
        height:50,
        width:50,
    },
    style:{
        panel:'Single',
        look:'Double',
    },
    feature:{
        lining:"Unlined",
        poleAndTrack:"I don't need one",
        accessories:{
            glide: 0,
            corded:'0cm-0cm'
        }

    },
    price:120.5
}

const fabric = createSlice({
  name: 'fabric',
  initialState,
  reducers: {
    setFabric(state,{payload}){state.fabricType = payload},
    setWallColor(state,{payload}){state.wallColor = payload},
    setRoom(state,{payload}){
        state.measure.room = payload
        if(payload!=='Other Rooms'){
            state.measure.roomName = payload
        }else{
            state.measure.roomName = ''
        }
    },
    setPrice   (state,{payload}) {state.price = payload},
    setItem    (state,{payload}) {state.measure.item     = payload},
    setInstallation (state,{payload}) {state.measure.installation  = payload},
    setPanel   (state,{payload}) {state.style.panel      = payload},
    setLook    (state,{payload}) {state.style.look       = payload},
    setRoomName(state,{payload}) {state.measure.roomName = payload},
    setIsPole  (state,{payload}) {state.measure.isPole   = payload},
    setHeight  (state,{payload}) {state.measure.height   = payload},
    setWidth   (state,{payload}) {state.measure.width    = payload},
    setLining  (state,{payload}) {state.feature.lining   = payload},
    setPole    (state,{payload}) {state.feature.poleAndTrack       = payload},
    setGlide   (state,{payload}) {state.feature.accessories.glide  = payload},
    setCorded  (state,{payload}) {state.feature.accessories.corded = payload}
}
});

export const {  setPrice,setFabric,setWallColor,setRoom,setRoomName,setIsPole,setHeight,
                setWidth,setLining,setPole,setGlide,setCorded,setPanel,setLook,
                setItem,setInstallation} = fabric.actions

export default fabric.reducer