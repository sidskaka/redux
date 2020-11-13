import { combineReducers } from 'redux'

import counter from './counter'
import potters from './potters'

export default combineReducers({
    counter,
    potters
})