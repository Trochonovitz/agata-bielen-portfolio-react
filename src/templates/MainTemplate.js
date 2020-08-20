import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cx from 'classnames';
import { routes } from '../routes';

import { title, seeAllOff, seeAllOn } from './MainTemplate.module.scss';
import Controller from '../components/Controller/Controller';
import SocialsBar from '../components/SocialslBar/SocialsBar';

const MainTemplate = ({ children }) => {
  const { pathname } = useLocation();

  const conditionalClass = cx(seeAllOn, {
    [seeAllOff]: pathname === routes.home,
  });

  return (
    <>
      <p className={title}>Agata Bieleń</p>

      <Controller previous />
      <Controller next />

      <Controller bottom />
      <Controller rightBottom />
      <SocialsBar />

      <Link to={routes.home} className={conditionalClass}>
        see all
      </Link>
      {console.log(pathname)}
      {children}
    </>
  );
};

export default MainTemplate;
