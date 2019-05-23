import React from 'react';

const BoardGameItem = (props) => {
  return (
    <div>
      {props.game.name}
    </div>
  );
};

export default BoardGameItem;