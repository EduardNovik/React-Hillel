const initialState = {
  playerData: {
    playerOneName: "",
    playerOneImage: null,
    playerTwoName: "",
    playerTwoImage: null,
  }
};

export const battleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PLAYER_DATA":
      return {
        ...state,
        playerData: {
            ...state.playerData,
            ...action.payload, 
        }
      };
      
    case "RESET_PLAYER_DATA":
    return {
        ...state,
        playerData: {
            ...state.playerData,
            ...action.payload, 
        }
    };

    default:
      return state;
  }
};
