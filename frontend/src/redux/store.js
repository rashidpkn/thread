import {configureStore} from '@reduxjs/toolkit'
import util from './slice/util'
import fabric from './slice/fabric'
import user from './slice/user'
import sample from './slice/sample'
const store = configureStore({
    reducer:{
        util,
        fabric,
        user,
        sample
    }
})

export default store