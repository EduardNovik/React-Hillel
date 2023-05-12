/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setPlayerData } from "../../redux/battleSlice";

const PlayerInput = ({label, id}) => {
    
    const [userName, setUserName] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(setPlayerData({id, userName}))
    }

    const handleInputChange = (event) => {
        setUserName(event.target.value)
    }
    
    return (
        <form className='column' onSubmit={handleSubmit}>
            <label className='header' htmlFor="userName">{label}</label>
            <input 
                id='userName'
                type="text"
                placeholder='Github username'
                autoComplete='off'
                value={userName}
                onChange={(event) => handleInputChange(event)} 
                />
            <button className='button' type='submit' disabled={!userName}>Submit</button>
        </form>
    );
};

export default PlayerInput;