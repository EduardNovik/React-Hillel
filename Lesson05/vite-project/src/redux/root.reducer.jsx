import { combineReducers } from 'redux'
import { popularReducer } from './popular.reducer'
import { battleReducer } from './battle.reducer'
import { resultsReducer } from './results.reducer'


export default combineReducers ({
    popular: popularReducer,
    battle: battleReducer,
    results: resultsReducer
})