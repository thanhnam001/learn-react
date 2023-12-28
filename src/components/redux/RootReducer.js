import { combineReducers } from 'redux'
import cakeReducer from './Cake/CakeReducer'
import userReducer from './User/userReducer'

const rootReducer = combineReducers({
  cake: cakeReducer,
  user: userReducer
})

export default rootReducer