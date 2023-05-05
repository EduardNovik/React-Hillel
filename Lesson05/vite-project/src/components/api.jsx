import axios from "axios";

const handleError = (error) => console.log(error);



const getProfile = async(username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`)

    if(response.status === 200){
      return response.data
    }
  } catch (error) {
    handleError(error)
    throw new Error(error.message)
  }
}

const getRepos = async(username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)

    if(response.status === 200){
      return response.data
    }
  } catch (error) {
    handleError(error)
    throw new Error(error.message)
  }
}


const getStarCount = (repos) => {
  return repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)
}


const calculateScore = (profile, repos) => {
  const followers = profile.followers
  const totalStars = getStarCount(repos)

  return followers * totalStars
}


const getUserData = async (username) => {

  try {
    const [profile, repos] = await Promise.all([getProfile(username), getRepos(username)])

    if (profile && repos){ 
      return {
        profile,
        score: calculateScore(profile, repos)
      }
    }
    
  } catch (error) {
    handleError(error)
    throw new Error(error.message)
  }
}

const sortPlayers = (players) => players.sort((a, b) => b.score - a.score)


export const battle = async (players) => {
  try {
    const battleResult = await Promise.all(players.map(getUserData))

    if(battleResult){
      return sortPlayers(battleResult)
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

export const fetchPopularRepos =  (language) => {

  const encodeURL = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

 return axios
    .get(encodeURL)
    .then((response) => response.data.items)
    .catch(error => {throw new Error(error.message)});
};
