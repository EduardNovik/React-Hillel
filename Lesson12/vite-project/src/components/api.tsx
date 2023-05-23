import axios from "axios";
import { PopularRepo } from "./Popular/Repositories";
import { SinglePlayerResult } from './Results/Results'

interface Response {
  [key:string]: any
}

interface Profile {
  [key:string]: any
}

export interface Repos {
  [key:string]: any
}

type Players = (string|null)[]


const handleError = (error: string): void => console.log(error);


const getProfile = async(username: string):Promise<Response|undefined>  => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`)

    if(response.status === 200){
      return response.data
    }
  } catch (error: any) {
    handleError(error)
    throw new Error(error.message)
  }
}

const getRepos = async(username: string):Promise<Response|undefined> => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)

    if(response.status === 200){
      return response.data
    }
  } catch (error: any) {
    handleError(error)
    throw new Error(error.message)
  }
}


const getStarCount = (repos: Repos[]): number => {
  return repos.reduce((acc: number, repo: Repos) => acc + repo.stargazers_count, 0)
}


const calculateScore = (profile: Profile, repos: Repos[]): number => {
  const followers = profile.followers
  const totalStars = getStarCount(repos)
  return followers * totalStars
}


const getUserData = async (
  username: string | null
): Promise<SinglePlayerResult | undefined> => {
  if (username) {
    try {
      const [profile, repos]: [Profile | undefined, any] = await Promise.all([
        getProfile(username),
        getRepos(username),
      ]);

      if (profile && repos) {
        return {
          profile,
          score: calculateScore(profile, repos),
        };
      }
    } catch (error: any) {
      handleError(error);
      throw new Error(error.message);
    }
  }
};

const sortPlayers = (players: SinglePlayerResult[]):SinglePlayerResult[] => players.sort((a, b) => b.score - a.score)


export const battle = async (players:Players):Promise<SinglePlayerResult[]|undefined> => {
  try {
    const battleResult: any[] = await Promise.all(players.map(getUserData))

    if(battleResult){
      return sortPlayers(battleResult)
    }
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const fetchPopularRepos =  (language: string):Promise<PopularRepo[]> => {

  const encodeURL:string = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

 return axios
    .get(encodeURL)
    .then((response) => response.data.items)
    .catch((error: any) => {throw new Error(error.message)});
};



