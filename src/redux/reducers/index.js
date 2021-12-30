import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import carts from './carts'
import auth from './auth'
import products from './products'
import payment from './payment'
import history from './history'
import profile from './profile'
import chats from './chats'

const persistAuth = {
  storage,
  key: 'auth'
}
const rootReducer = combineReducers({
  carts,
  auth : persistReducer(persistAuth, auth),
  products,
  payment,
  history,
  profile,
  chats
})

export default rootReducer
