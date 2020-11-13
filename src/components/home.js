import React, { useState } from 'react'
import { useSelector } from 'react-redux'


const Home = () => {
    const counter = useSelector(state => state.counter.counterVal)
    return (
        <div>
            home
            <br />
            <br />
            {counter}
        </div>
    )
}

export default Home