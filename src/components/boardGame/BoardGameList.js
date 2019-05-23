import React from 'react';
import { getBoardGames } from '../../api/DataApi';
import BoardGameItem from './BoardGameItem';

const BoardGameList = () => {
  return (
    <div>
      {
        getBoardGames().map((game) => (
          <BoardGameItem game={game} />
        ))
      }
    </div>
  );
};

export default BoardGameList;