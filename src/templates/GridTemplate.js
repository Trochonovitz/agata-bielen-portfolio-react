import React from 'react';

import { wrapper } from './GridTemplate.module.scss';

const GridTemplate = ({ children }) => (
  <div className={wrapper}>{children}</div>
);

export default GridTemplate;
