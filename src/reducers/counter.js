import { INCREMENT_COUNTER, DECREMENT_COUNTER_WITH_PARAM, DECREMENT_COUNTER } from '../actions/counter'

const initialState = {
    counterVal: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER: 
            return {
                ...state,
                counterVal: state.counterVal + 1
            }
        case DECREMENT_COUNTER_WITH_PARAM:
            return {
                ...state,
                counterVal: state.counterVal - action.payload
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                counterVal: state.counterVal - 1
            }
        default:
            return state
    }
}