import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card/Card';
import GridTemplate from '../templates/GridTemplate';
import Index from '../components/Index/Index';

const HomePage = () => (
  <GridTemplate>
    <Link to="/right">
      <Card name="Right" collectionNumber="1" />
    </Link>

    <Link to="/nature">
      <Card name="Nature" collectionNumber="1" />
    </Link>

    <Index />
    <Index bottom />

    <Card name="Storm" collectionNumber="1" />
    <Card name="Valley" collectionNumber="1" />
  </GridTemplate>
);

export default HomePage;
