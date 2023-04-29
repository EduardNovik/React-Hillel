/* eslint-disable react/prop-types */

const PlayerPreview = ({avatar, username, children}) => {
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