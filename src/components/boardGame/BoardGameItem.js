import React from 'react';
import classNames from 'classnames';

import '../../styles/boardGame/BoardGameItem.css';

const BoardGameItem = (props) => {
  const {
    name,
    thumbnail,
    minPlayers,
    maxPlayers,
    playingTime,
    isExpansion
  } = props;
  return (
    <div className={classNames(`container`, `rowDirection`)}>
      <img src={thumbnail} alt="image not available" className={classNames(`thumbnail`)} /> 
      <div className={classNames(`container`, `colDirection`)}>
        <div className={`title`}>
          {name}
        </div>
        <div>
          {`Players:${minPlayers}-${maxPlayers}`}
        </div>
        <div>
          {`PlayingTime:${playingTime}`}
        </div>
        <div>
          {`Expansion: ${isExpansion ? 'Yes': 'No'}`}
        </div>
      </div>
    </div>
  );
};

export default BoardGameItem;