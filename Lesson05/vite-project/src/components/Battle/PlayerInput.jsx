/* eslint-disable react/prop-types */
import { useState } from 'react';

const PlayerInput = ({label, onSubmit, id}) => {
    
    const [userName, setUserName] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(id, userName)
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
                onChange={(event) => setUserName(event.target.value)} 
            />
            <button className='button' type='submit' disabled={!userName}>Submit</button>
        </form>
    );
};

export default PlayerInput;