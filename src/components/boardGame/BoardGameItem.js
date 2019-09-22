import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import InputLabel from '@material-ui/core/InputLabel';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

// import '../../styles/boardGame/BoardGameItem.css';
const useStyles = makeStyles(() => ({
  left: {
    minWidth: 140
  },
  avatar: {
    width: 120,
    height: 120
  },
  title: {
    fontSize: 24,
    fontWeight: 600
  },
  label: {
    display: 'block'
  }
}));

const BoardGameItem = (props) => {
  const classes = useStyles();

  const {
    name,
    thumbnail,
    minPlayers,
    maxPlayers,
    playingTime,
    isExpansion
  } = props;
  return (
    <React.Fragment>
      <ListItem>
        <ListItemAvatar className={classes.left}>
          <Avatar className={classes.avatar} src={thumbnail} alt="image not available" />
        </ListItemAvatar>
        <div>
          <InputLabel className={classNames(classes.title, classes.label)}>{name}</InputLabel>
          <InputLabel className={classes.label}>{`Players:${minPlayers}-${maxPlayers}`}</InputLabel>
          <InputLabel className={classes.label}>{`PlayingTime:${playingTime}`}</InputLabel>
          <InputLabel className={classes.label}>{`Expansion: ${isExpansion ? 'Yes': 'No'}`}</InputLabel>
        </div>
      </ListItem>
      <Divider variant="inset" component="li"></Divider>
    </React.Fragment>
  );
};

export default BoardGameItem;