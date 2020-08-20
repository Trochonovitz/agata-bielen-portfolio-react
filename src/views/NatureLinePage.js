import React from 'react';
import LinePageTemaplate from '../templates/LinePageTemplate';

class RightLinePage extends React.Component {
  componentDidMount() {
    this.showConsole();
  }

  showConsole = () => {
    console.log('andrzej');
  };

  render() {
    return (
      <LinePageTemaplate
        collectionName="Nature"
        collectionNumber="2"
        description="The Nature Line Collection is, as the name suggests, mused by nature and the organic and seamless lines that result. Available in a sterling silver finish, all pieces are subtle lines of irregularly shaped geometries for adornment. The feint and light-weightedness of the collection is typical of Bieleń, and ther style, and this collection is no exception.
    
    This collection sees a launch from her traditional, more rigid geometries and sees her exploring natural materials and fauna as inspiration. Based in Poland, the emphasis is on roung and soft forms which opposes her traditional style."
      />
    );
  }
}

export default RightLinePage;
