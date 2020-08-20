import React from 'react';
import cx from 'classnames';

import {
  previousController,
  nextController,
  leftBottomDecoration,
  rightBottomDecoration,
} from './Controller.module.scss';

const Controlls = ({ previous, next, bottom, rightBottom }) => {
  const conditionalPositions = cx({
    [previousController]: previous,
    [nextController]: next,
    [leftBottomDecoration]: bottom,
    [rightBottomDecoration]: rightBottom,
  });

  return <div className={conditionalPositions} />;
};

export default Controlls;
