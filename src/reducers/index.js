import {combineReducers} from 'redux'
import loginducers from './loginReducer'

export default combineReducers({
    login: loginducers
})