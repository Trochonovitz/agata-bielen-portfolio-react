import React from 'react';

import { wrapper, socials, black } from './SocialsBar.module.scss';

const SocialsBar = () => (
  <div className={wrapper}>
    <a href="#" className={socials}>
      twitter
    </a>
    <a href="#" className={socials}>
      instagram
    </a>
    <div className={black} />
  </div>
);

export default SocialsBar;
