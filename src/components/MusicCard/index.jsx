import React from 'react';
import PropTypes from 'prop-types';

export default class MusicCard extends React.Component {
  render() {
    const { music, AddFavoriteSong, favorites } = this.props;
    return (
      <div>
        <p>
          {music.trackName}
        </p>
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
        <label
          htmlFor={`favorite-${music.trackId}`}
          data-testid={`checkbox-music-${music.trackId}`}
        >
          Favorita
          {' '}
          <input
            name="favorite"
            id={`favorite-${music.trackId}`}
            value={music.trackId}
            type="checkbox"
            checked={favorites.some((s) => s.trackId === music.trackId)}
            onChange={AddFavoriteSong}
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
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
