import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters } from '../actions/potters'


const Potters = () => {
    const dispatch = useDispatch()
    const characters = useSelector(state => state.potters.characters)

    useEffect(() => {
        dispatch(getCharacters())
        //console.log(dispatch(getCharacters()))
    }, [])
    return (
        <div>
            Potters
            <br />
            <br />
            {characters.map(char => <p>{char.name}</p>)}
        </div>
    )
}

export default Potters