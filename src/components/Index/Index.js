import React from 'react';
import cx from 'classnames';

import { lines } from './arrayTest';
import {
  wrapper,
  arrow,
  collectionName,
  collectionNumber,
  liElement,
  conditionalWrapper,
} from './Index.module.scss';

const Index = ({ bottom }) => (
  <ul className={cx(wrapper, { [conditionalWrapper]: bottom })}>
    {lines.map((item, number) => (
      <li className={liElement}>
        <p className={collectionNumber}>Coll No. {number + 1} </p>
        <p className={collectionName}>{item} Line</p>
        <span className={arrow}>→</span>
      </li>
    ))}
  </ul>
);
export default Index;
