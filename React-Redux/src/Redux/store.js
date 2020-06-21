// logger middleware

import {createStore,applyMiddleware} from 'redux'
import Bookreducer from './book/Bookreducer'
import logger from 'redux-logger'

const store=createStore(Bookreducer,applyMiddleware(logger))

export default store