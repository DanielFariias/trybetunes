import React from 'react';
import PropTypes from 'prop-types';

import * as C from './styles';

import heartEmpty from '../../assets/images/heartEmpty.svg';
import heartFull from '../../assets/images/heartFull.svg';

export default class MusicCard extends React.Component {
  render() {
    const {
      music, AddFavoriteSong, favorites, isFavoritePage,
    } = this.props;
    return (
      <C.Container>
        {
          isFavoritePage && (
            <img
              src={music.artworkUrl60}
              alt={`Collection music ${music.artistName}`}
            />
          )
        }

        <C.Content>
          <label
            htmlFor={`favorite-${music.trackId}`}
          >
            {
          favorites.some((s) => s.trackId === music.trackId)
            ? (<img src={heartFull} alt="Heart icon full" />)
            : (<img src={heartEmpty} alt="Heart icon empty" />)
          }
            <input
              name="favorite"
              id={`favorite-${music.trackId}`}
              value={music.trackId}
              type="checkbox"
              checked={favorites.some((s) => s.trackId === music.trackId)}
              onChange={AddFavoriteSong}
            />
          </label>

          <p>
            {music.trackName}
          </p>
        </C.Content>
        <audio
          data-testid="audio-component"
          src={music.previewUrl}
          controls
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>

      </C.Container>
    );
  }
}

MusicCard.propTypes = {
  isFavoritePage: PropTypes.bool.isRequired,
  music: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
    artworkUrl60: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
  }).isRequired,
  AddFavoriteSong: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      trackName: PropTypes.string.isRequired,
      previewUrl: PropTypes.string.isRequired,
      trackId: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
