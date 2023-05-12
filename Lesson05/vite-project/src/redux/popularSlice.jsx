import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPopularRepos } from "../components/api";



const initialState = {
    selectedLanguage:'All',
    loading: false,
    repos:[],
    error:null
}

export const getRepos = createAsyncThunk(
    "popular/getRepos", 
    async (lang, thunkAPI) => {
        try {
            const response = await fetchPopularRepos(lang)
            return response
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message)
        }
    }
);


const popularSlice = createSlice({
    name:'popular',
    initialState,
    reducers:{
        setSelectedLanguage(state, action){
            state.selectedLanguage = action.payload
        }
    },
    extraReducers:(builder) => {
        builder.addCase(getRepos.fulfilled, (state, action) => {
            state.loading = false
            state.repos = action.payload
        })
        builder.addCase(getRepos.pending, (state) => {        
            state.loading = true,
            state.error = null
        })
        builder.addCase(getRepos.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload ? action.payload : 'Unknown error';
        })
      }
})


const { actions, reducer} = popularSlice
export const { setSelectedLanguage, getReposLoading, getReposSuccess, getReposFailure} = actions 
export default reducer
