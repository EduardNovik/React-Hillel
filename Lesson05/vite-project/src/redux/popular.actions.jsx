export const setSelectedLanguage = (payload) => ({
    type: 'SET_SELECTED_LANGUAGE',
    payload
})

export const getReposLoading = (payload) => ({
    type: 'GET_REPOS_LOADING',
    payload
})

export const getReposSuccess = (payload) => ({
    type: 'GET_REPOS_SUCCESS',
    payload
})

export const getReposFailure = (payload) => ({
    type: 'GET_REPOS_FAILURE',
    payload
})