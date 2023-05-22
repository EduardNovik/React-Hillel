import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BattlePlayerPayload {
    id: string;
    userName: string
}

type BattlePlayerIdPayload = string;


interface BattleInitialState {
    playerData: {
        playerOneName: string;
        playerOneImage: string | null,
        playerTwoName: string;
        playerTwoImage: string | null,
      }
}

const initialState: BattleInitialState = {
    playerData: {
        playerOneName: "",
        playerOneImage: null,
        playerTwoName: "",
        playerTwoImage: null,
      }
}


const battleSlice = createSlice({
    name:'battle',
    initialState,
    reducers:{
        setPlayerData(state, action: PayloadAction<BattlePlayerPayload>){
            state.playerData = {
                ...state.playerData,
                [`${action.payload.id}Name`]:action.payload.userName, 
                [`${action.payload.id}Image`]:`https://github.com/${action.payload.userName}.png?size=200`
            }
        },
        resetPlayerData(state, action: PayloadAction<BattlePlayerIdPayload>){
            state.playerData = {
                ...state.playerData,
                [`${action.payload}Name`]:'', 
                [`${action.payload}Image`]:null
            }
        }

    }
})


const { actions, reducer} = battleSlice
export const { setPlayerData, resetPlayerData } = actions 
export default reducer