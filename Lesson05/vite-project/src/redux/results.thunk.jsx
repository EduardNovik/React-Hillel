import { getBattleResultsLoading, getBattleResultsSuccess, getBattleResultsFailure } from "./results.actions";
import { battle } from '../components/api';


export const getBattleResultsThunk = (params) => (dispatch) => {
  
  const getBattleResults = async () => {
    dispatch(getBattleResultsLoading(true));
    try {
      const players = await battle([
        params.get("playerOneName"),
        params.get("playerTwoName"),
      ]);
      dispatch(getBattleResultsSuccess(players));
    } catch (error) {
      dispatch(getBattleResultsFailure(error.message));
    }
  };
  getBattleResults();
};
