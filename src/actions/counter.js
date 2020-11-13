export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER_WITH_PARAM = 'DECREMENT_COUNTER_WITH_PARAM'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export const incrementCounter = () => ({
    type: INCREMENT_COUNTER
})

export const decrementCounter = decrementVal => ({
    type: DECREMENT_COUNTER_WITH_PARAM,
    payload: decrementVal
})

export const decrementCounterWithParam = () => ({
    type: DECREMENT_COUNTER
})