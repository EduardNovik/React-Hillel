/* eslint-disable react/prop-types */
import { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux'
import { setPlayerData } from "../../redux/battleSlice";
import { FC, ReactElement } from "react";
import { AppDispatch } from "../../redux/store";

interface PlayerInput {
    label: string;
    id: string;
}

const PlayerInput: FC<PlayerInput> = ({label, id}): ReactElement => {
    
    const [userName, setUserName] = useState<string>('')
    const dispatch: AppDispatch = useDispatch()

    const handleSubmit = (event: FormEvent<HTMLFormElement>):void => {
        event.preventDefault()
        dispatch(setPlayerData({id, userName}))
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>):void => {
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