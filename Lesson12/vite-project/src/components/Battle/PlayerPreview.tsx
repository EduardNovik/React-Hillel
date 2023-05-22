/* eslint-disable react/prop-types */
import { FC, ReactElement } from "react";

interface PlayerBattle {
    avatar: string;
    username: string;
    children: ReactElement
}


const PlayerPreview: FC<PlayerBattle>  = ({avatar, username, children}): ReactElement => {
    return (
        <div>
            <div className="column">
                <img className='avatar' src={avatar} alt='Avatar'></img>
                <h2 className="username">@{username}</h2>
            </div>
            {children}
        </div>
    );
};

export default PlayerPreview;