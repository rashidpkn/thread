import { createSlice } from '@reduxjs/toolkit'
import { priceList1, priceList10, priceList11, priceList12, priceList13, priceList14, priceList2, priceList3, priceList4, priceList5, priceList6, priceList7, priceList8, priceList9 } from './price';


// import { setShow3D } from './util';

const initialState = {
    fabricType: {
        id: 93,
        name: 'Acanthium Autumn',
        color: '',
        patternNumber: '01',
        fabricInitialPrice: 0,
        group: 'B',
        fabricPath: 'patterns/Acanthium_Autumn.jpg',
        magnifyFabricPath: 'magnify/acanthium_autumn_1.jpg',
        magnifyWavyFabricPath: 'magnify/acanthium_autumn_2.jpg',
        wavy: true,
        img: '/fabric_image/ACANTHIUM AUTUMN.jpg'
    },
    wallColor: 'fff',
    measure: {
        item: 'Curtain',
        installation: 'Curtain Flat',
        room: 'Bedroom',
        roomName: 'Bedroom',
        isPole: true,
        height: 100,
        width: 100,
    },
    style: {
        panel: 'Single',
        look: 'Double',
    },
    feature: {
        lining: "Unlined",
        poleAndTrack: "I don't need one",
        accessories: {
            glide: 0,
            corded: '0cm-0cm'
        }

    },
    price: 125.08
}

const fabric = createSlice({
    name: 'fabric',
    initialState,
    reducers: {
        setFabric(state, { payload }) { state.fabricType = payload },
        setWallColor(state, { payload }) { state.wallColor = payload },
        setRoom(state, { payload }) {
            state.measure.room = payload
            if (payload !== 'Other Rooms') {
                state.measure.roomName = payload
            } else {
                state.measure.roomName = ''
            }
        },

        setItem(state, { payload }) { state.measure.item = payload },
        setInstallation(state, { payload }) { state.measure.installation = payload },
        setPanel(state, { payload }) { state.style.panel = payload },
        setLook(state, { payload }) {
            state.style.look = payload



        },
        setRoomName(state, { payload }) { state.measure.roomName = payload },
        setIsPole(state, { payload }) { state.measure.isPole = payload },
        setHeight(state, { payload }) { state.measure.height = payload },
        setWidth(state, { payload }) { state.measure.width = payload },
        setLining(state, { payload }) { state.feature.lining = payload },
        setPole(state, { payload }) { state.feature.poleAndTrack = payload },
        setGlide(state, { payload }) { state.feature.accessories.glide = payload },
        setCorded(state, { payload }) { state.feature.accessories.corded = payload },
        setPrice(state, action) {

            const { width, height } = state.measure
            const { look } = state.style
            let widthIndex = 0
            let heightIndex = 0
            let Width = [0, 135, 205, 275, 342, 411, 480, 548]
            let Height = [0, 91, 122, 135, 157, 183, 213, 229, 244, 274, 305]
            widthIndex = Width.findIndex(e => (width + 50) <= e)
            heightIndex = Height.findIndex(e => height <= e)

            if (look === 'Pencil' && state.fabricType.group === 'C') {
                state.price = priceList3[heightIndex][widthIndex]
            } else if (look === 'Double' && state.fabricType.group === 'C') {
                state.price = priceList4[heightIndex][widthIndex]
            } else if (look === 'Eyelet' && state.fabricType.group === 'C') {
                state.price = priceList3[heightIndex][widthIndex]
            } else if (look === 'Goblet' && state.fabricType.group === 'C') {
                state.price = priceList4[heightIndex][widthIndex]
            } else if (look === 'Triple' && state.fabricType.group === 'C') {
                state.price = priceList4[heightIndex][widthIndex]
            }

            else if (look === 'Pencil' && state.fabricType.group === 'D') {
                state.price = priceList5[heightIndex][widthIndex]
            } else if (look === 'Eyelet' && state.fabricType.group === 'D') {
                state.price = priceList5[heightIndex][widthIndex]
            } else if (look === 'Double' && state.fabricType.group === 'D') {
                state.price = priceList6[heightIndex][widthIndex]
            } else if (look === 'Goblet' && state.fabricType.group === 'D') {
                state.price = priceList6[heightIndex][widthIndex]
            } else if (look === 'Triple' && state.fabricType.group === 'D') {
                state.price = priceList6[heightIndex][widthIndex]
            }

            else if (look === 'Pencil' && state.fabricType.group === 'E') {
                state.price = priceList7[heightIndex][widthIndex]
            } else if (look === 'Eyelet' && state.fabricType.group === 'E') {
                state.price = priceList7[heightIndex][widthIndex]
            } else if (look === 'Double' && state.fabricType.group === 'E') {
                state.price = priceList8[heightIndex][widthIndex]
            } else if (look === 'Goblet' && state.fabricType.group === 'E') {
                state.price = priceList8[heightIndex][widthIndex]
            } else if (look === 'Triple' && state.fabricType.group === 'E') {
                state.price = priceList8[heightIndex][widthIndex]
            }

            else if (look === 'Pencil' && state.fabricType.group === 'B') {
                state.price = priceList1[heightIndex][widthIndex]
            } else if (look === 'Eyelet' && state.fabricType.group === 'B') {
                state.price = priceList1[heightIndex][widthIndex]
            } else if (look === 'Double' && state.fabricType.group === 'B') {
                state.price = priceList2[heightIndex][widthIndex]
            } else if (look === 'Goblet' && state.fabricType.group === 'B') {
                state.price = priceList2[heightIndex][widthIndex]
            } else if (look === 'Triple' && state.fabricType.group === 'B') {
                state.price = priceList2[heightIndex][widthIndex]
            }

            else if (look === 'Pencil' && state.fabricType.group === 'F') {
                state.price = priceList9[heightIndex][widthIndex]
            } else if (look === 'Eyelet' && state.fabricType.group === 'F') {
                state.price = priceList9[heightIndex][widthIndex]
            } else if (look === 'Double' && state.fabricType.group === 'F') {
                state.price = priceList10[heightIndex][widthIndex]
            } else if (look === 'Goblet' && state.fabricType.group === 'F') {
                state.price = priceList10[heightIndex][widthIndex]
            } else if (look === 'Triple' && state.fabricType.group === 'F') {
                state.price = priceList10[heightIndex][widthIndex]
            }

            else if (look === 'Pencil' && state.fabricType.group === 'G') {
                state.price = priceList11[heightIndex][widthIndex]
            } else if (look === 'Eyelet' && state.fabricType.group === 'G') {
                state.price = priceList11[heightIndex][widthIndex]
            } else if (look === 'Double' && state.fabricType.group === 'G') {
                state.price = priceList12[heightIndex][widthIndex]
            } else if (look === 'Goblet' && state.fabricType.group === 'G') {
                state.price = priceList12[heightIndex][widthIndex]
            } else if (look === 'Triple' && state.fabricType.group === 'G') {
                state.price = priceList12[heightIndex][widthIndex]
            }

            else if (look === 'Pencil' && state.fabricType.group === 'H') {
                state.price = priceList13[heightIndex][widthIndex]
            } else if (look === 'Eyelet' && state.fabricType.group === 'H') {
                state.price = priceList13[heightIndex][widthIndex]
            } else if (look === 'Double' && state.fabricType.group === 'H') {
                state.price = priceList14[heightIndex][widthIndex]
            } else if (look === 'Goblet' && state.fabricType.group === 'H') {
                state.price = priceList14[heightIndex][widthIndex]
            } else if (look === 'Triple' && state.fabricType.group === 'H') {
                state.price = priceList14[heightIndex][widthIndex]
            }

        }
    }
});

export const { setPrice, setFabric, setWallColor, setRoom, setRoomName, setIsPole, setHeight,
    setWidth, setLining, setPole, setGlide, setCorded, setPanel, setLook,
    setItem, setInstallation } = fabric.actions

export default fabric.reducer