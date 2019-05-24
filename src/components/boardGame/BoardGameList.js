import React from 'react';
import { getBoardGames } from 'src/api/DataApi';
import BoardGameItem from './BoardGameItem';

const BoardGameList = () => {
  return (
    <div>
      {
        getBoardGames().map((game) => (
          <BoardGameItem key={game.gameId} {...game} />
        ))
      }
    </div>
  );
};

export default BoardGameList;