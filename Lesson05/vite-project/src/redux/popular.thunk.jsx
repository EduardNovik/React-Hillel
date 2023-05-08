import { fetchPopularRepos } from "../components/api";
import { getReposLoading, getReposSuccess, getReposFailure } from "./popular.actions";


export const getRepos = (selectedLanguage) => (dispatch) => {
    dispatch(getReposLoading(true))
    fetchPopularRepos(selectedLanguage)
    .then((data) => {dispatch(getReposSuccess(data))})
    .catch((error) => {dispatch(getReposFailure(error.message))});
}