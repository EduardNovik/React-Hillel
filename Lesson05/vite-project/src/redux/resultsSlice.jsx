import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { battle } from '../components/api';


const initialState = {
    loading: false,
    battleResultsData:[],
    error:null
}


export const getBattleResultsThunk = createAsyncThunk(
    "results/getBattleResultsThunk", 
    async (params, thunkAPI) => {
        try {
            const response = await battle([params.get("playerOneName"),params.get("playerTwoName")])
            return response
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message)
        }
    }
);


const resultsSlice = createSlice({
    name:'results',
    initialState,
    reducers:{
    },
    extraReducers:(builder) => {
        builder.addCase(getBattleResultsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.battleResultsData = action.payload
        })
        builder.addCase(getBattleResultsThunk.pending, (state) => {        
            state.loading = true,
            state.error = null
        })
        builder.addCase(getBattleResultsThunk.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload ? action.payload : 'Unknown error';
        })
      }
})


const { reducer } = resultsSlice
export default reducer
