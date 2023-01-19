import {configureStore} from '@reduxjs/toolkit'
import util from './slice/util'
import fabric from './slice/fabric'
import user from './slice/user'
const store = configureStore({
    reducer:{
        util,
        fabric,
        user,
    }
})

export default store