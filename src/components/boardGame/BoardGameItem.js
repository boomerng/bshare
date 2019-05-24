import React from 'react';

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
    <div style={{...styles.container, ...styles.rowDirection }}>
      <img src={thumbnail} alt="image not available" style={styles.thumbnail} />
      <div style={{...styles.container, ...styles.colDirection } }>
        <div>
          {name}
        </div>
        <div>
          {`minPlayer:${minPlayers}   maxPlayers:${maxPlayers}`}
        </div>
        <div>
          {`playingTime:${playingTime}`}
        </div>
        <div>
          {`isExpansion:${isExpansion ? 'Yes': 'No'}`}
        </div>
      </div>
    </div>
  );
};

export default BoardGameItem;

const styles = {
  container: {
    display: 'flex',
    height: 200,
  },
  thumbnail: { 
    width: '200',
    height: '100%'
  },
  rowDirection: {
    flexDirection: 'row',
  },
  colDirection: {
    flexDirection: 'column',
  }
};