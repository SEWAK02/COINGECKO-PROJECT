import {combineReducers} from 'redux'
import {coinReducer} from './coingeckoReducers'

const rootReducer= combineReducers({
    coinReducer
})

export default rootReducer;