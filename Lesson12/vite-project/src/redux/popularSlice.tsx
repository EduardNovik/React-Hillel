import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPopularRepos } from "../components/api";
import { PopularRepo } from '../components/Popular/Repositories'

interface PopularInitialState {
    selectedLanguage: string,
    loading: boolean,
    repos:PopularRepo[],
    error: string | null
}

const initialState: PopularInitialState = {
    selectedLanguage:'All',
    loading: false,
    repos:[],
    error:null
}

export const getRepos = createAsyncThunk(
    "popular/getRepos", 
    async (lang: string, thunkAPI): Promise<PopularRepo[]>  => {
        try {
            const response = await fetchPopularRepos(lang)
            return response
        } catch (error: any) {
          return thunkAPI.rejectWithValue(error.message) as any
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
        builder.addCase(getRepos.fulfilled, (state, action: PayloadAction<PopularRepo[]>) => {
            state.loading = false
            state.repos = action.payload
        })
        builder.addCase(getRepos.pending, (state) => {        
            state.loading = true,
            state.error = null
        })
        builder.addCase(getRepos.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false,
            state.error = action.payload ? action.payload as string : 'Unknown error';
        })
      }
})


const { actions, reducer} = popularSlice
export const { setSelectedLanguage } = actions 
export default reducer
