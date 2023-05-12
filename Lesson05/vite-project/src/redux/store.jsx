import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger' 
import battleRedicer from './battleSlice'
import popularReducer from './popularSlice'
import resultsReducer from './resultsSlice'

const logger = createLogger({
        collapsed:true
    })

const store = configureStore ({
    reducer:{
        battle:battleRedicer,
        popular:popularReducer,
        results:resultsReducer
        
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store