import { useState } from "react";

export function TwitterFollowCard({ formatUserName, userName, name, avatar, initialIsFollowing, children }) {
  //   const state = useState(false);
  //   const isFollowing = state[0];
  //   const setIsFollowing = state[1];
  // children es todo lo que esté dentro del conponente <TwitterFollowCard>{name}</TwitterFollowCard>

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const textButton = isFollowing ? "Siguiendo" : "Seguir";
  const classNameButton = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${avatar}`}
          alt="DarthVader"
        />
        <div className="tw-followCard-info">
          {/* <strong>{children}</strong> */}
          <strong>{name}</strong>
          <span className="tw-followCard-info-span">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside>
        <button className={classNameButton} onClick={handleClick}>
            <span className="tw-followCard-text">{textButton}</span>
            <span className="tw-followCard-stopFollow">Dejar de Seguir</span>        
        </button>
      </aside>
    </article>
  );
}
