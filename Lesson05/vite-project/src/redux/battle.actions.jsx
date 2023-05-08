export const setPlayerData = (id, userName) => ({
    type: 'SET_PLAYER_DATA',
    payload : {
        [`${id}Name`]:userName,
        [`${id}Image`]:`https://github.com/${userName}.png?size=200`
    }
})

export const resetPlayerData = (id) => ({
    type: 'RESET_PLAYER_DATA',
    payload : {
        [`${id}Name`]:'',
        [`${id}Image`]:null
    }
})


