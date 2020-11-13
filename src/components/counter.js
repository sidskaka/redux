import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementCounter, decrementCounter, decrementCounterWithParam } from '../actions/counter'
import {Link} from 'react-router-dom'

const Counter = () => {

    const counterState = useSelector(state => state.counter.counterVal)
    const dispatch = useDispatch()
    return (
        <div>
            {counterState}
            <button onClick={() => dispatch(incrementCounter())}>+</button>
            <button onClick={() => dispatch(decrementCounterWithParam())}>-</button>
            <button onClick={() => dispatch(decrementCounter(3))}>-</button>
            <Link to="/home">Home</Link>
        </div>        
    )
}

export default Counter