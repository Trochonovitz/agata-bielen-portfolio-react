import React from 'react';

import {
  wrapper,
  firstHalf,
  secondHalf,
  title,
  bigImage,
  descriptionClass,
  black,
} from './LinePageTemplate.module.scss';

class LinePageTemaplate extends React.Component {
  state = {
    andrzej: 0,
    kamil: ['coś tam', 'no i coś tam'],
  };

  addToState = () => {
    this.setState(
      (prevState) => ({
        kamil: [...prevState.kamil, 'andrzej', 'grażyna'],
      }),
      () => console.log(this.state)
    );
  };

  render() {
    const { collectionName, description, collectionNumber } = this.props;

    return (
      <div className={wrapper}>
        <div className={firstHalf}>
          <h1 onClick={this.addToState} className={title}>
            {collectionName} Line
          </h1>
          <p className={descriptionClass}>
            <div className={black} />
            {description}
          </p>
        </div>

        <div className={secondHalf}>
          <img
            className={bigImage}
            src={`img/img${collectionNumber}-big.png`}
          />
        </div>
      </div>
    );
  }
}

export default LinePageTemaplate;
