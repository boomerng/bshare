import React from 'react';
import { getBoardGames } from 'src/api/DataApi';
import BoardGameItem from './BoardGameItem';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: theme.palette.background.paper,
  },
}));

const BoardGameList = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {
        getBoardGames().map((game) => (
          <BoardGameItem key={game.gameId} {...game} />
        ))
      }
    </List>
  );
};

export default BoardGameList;