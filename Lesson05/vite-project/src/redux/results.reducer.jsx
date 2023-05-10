const initialState = {
    loading: false,
    battleResultsData:[],
    error:null
}


export const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BATTLE_RESULTS_LOADING':
        
            return {
                ...state,
                loading: true,
                error:null
            }
        case 'GET_BATTLE_RESULTS_SUCCESS':
        
            return {
                ...state,
                loading: false,
                battleResultsData: action.payload
            }
        case 'GET_BATTLE_RESULTS_FAILURE':
        
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            
        default:
            return state
    }
}