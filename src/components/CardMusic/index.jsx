import PropTypes from 'prop-types';
import React from 'react';

import * as C from './styles';

export default class CardMusic extends React.Component {
  render() {
    const { music } = this.props;
    return (
      <C.Container>
        <C.Image src={music.artworkUrl100} alt="" />
        <p className="title">{music.collectionName}</p>
        <p className="subtitle">{music.artistName}</p>
      </C.Container>
    );
  }
}

CardMusic.propTypes = {
  music: PropTypes.shape({
    artworkUrl100: PropTypes.string,
    collectionName: PropTypes.string,
    artistName: PropTypes.string,
  }).isRequired,
};
