import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { battle } from '../components/api';
import { TotalPlayersResult } from '../components/Results/Results';
import { SinglePlayerResult } from '../components/Results/Results';


interface ResultInitialState {
    loading: boolean,
    battleResultsData:SinglePlayerResult[],
    error: string | null
}

const initialState: ResultInitialState = {
    loading: false,
    battleResultsData:[],
    error:null
}

export const getBattleResultsThunk = createAsyncThunk(
    "results/getBattleResultsThunk", 
    async (params: URLSearchParams, thunkAPI): Promise<TotalPlayersResult> => {
        try {
            const response = await battle([params.get("playerOneName"),params.get("playerTwoName")])
            return response as TotalPlayersResult
            
        } catch (error: any) {
          return thunkAPI.rejectWithValue(error.message) as any
        }
    }
);


const resultsSlice = createSlice({
    name:'results',
    initialState,
    reducers:{
    },
    extraReducers:(builder) => {
        builder.addCase(getBattleResultsThunk.fulfilled, (state, action: PayloadAction<SinglePlayerResult[]>) => {
            state.loading = false          
            state.battleResultsData = action.payload
        })
        builder.addCase(getBattleResultsThunk.pending, (state) => {        
            state.loading = true,
            state.error = null
        })
        builder.addCase(getBattleResultsThunk.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false,
            state.error = action.payload ? action.payload as string : 'Unknown error';
        })
      }
})


const { reducer } = resultsSlice
export default reducer
