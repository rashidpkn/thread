import {configureStore} from '@reduxjs/toolkit'
import util from './slice/util'
import fabric from './slice/fabric'
const store = configureStore({
    reducer:{
        util,
        fabric
    }
})

export default store