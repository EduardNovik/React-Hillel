/* eslint-disable react/prop-types */
import { FC, ReactElement } from "react";
import { SinglePlayerResult } from './Results'

interface PlayerInfoResult {
    player: SinglePlayerResult;
    index: number;
}

const BattleInfo: FC<PlayerInfoResult> = ({player, index}): ReactElement => {
    return (
        <ul style={{textAlign:'center'}}>
            <li>Company: {player.profile.company ? player.profile.company : "No information"}</li>
            <li>Location: {player.profile.location ? player.profile.location : "No information"}</li>
            <li>Followers: {player.profile.followers ? player.profile.followers : "No information"}</li>
            <li>Following: {player.profile.following ? player.profile.following : "No information"}</li>
            <li>Public repos: {player.profile.public_repos ? player.profile.public_repos : "No information"}</li>
            <li>Blog: {player.profile.blog ? player.profile.blog : "No information"}</li>
            <li>Score: {player.score}</li>
            { index === 0 ? <h2>Winner!</h2> : <h2>Losser!</h2> }
        </ul>
    );
};

export default BattleInfo;