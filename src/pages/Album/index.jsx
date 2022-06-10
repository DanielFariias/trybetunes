import React from 'react';
import PropTypes from 'prop-types';

import MusicCard from '../../components/MusicCard';
import getMusics from '../../services/musicsAPI';
import Header from '../../components/Header';
import {
  addSong,
  getFavoriteSongs,
  removeSong,
} from '../../services/favoriteSongsAPI';

import * as C from './styles';
import Loader from '../../components/Loader';

export default class Album extends React.Component {
  state = {
    musicList: [],
    favoriteSongs: [],
    album: {},
    loading: true,
    loadingFavorites: true,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;

    const request = await getMusics(id);
    const album = request[0];
    const musicList = request.filter((item) => item.kind === 'song');

    getFavoriteSongs().then((favoriteSongs) => this.setState({
      favoriteSongs,
      loadingFavorites: false,
    }));

    this.setMusics(musicList, album);
  }

  setFavoriteSongs = (favoriteSongs) => {
    this.setState({
      favoriteSongs,
      loadingFavorites: false,
    });
  };

  setMusics = (musicList, album) => {
    this.setState({
      musicList,
      album,
      loading: false,
    });
  };

  AddFavoriteSong = async ({ target: { value, checked } }) => {
    const { musicList } = this.state;

    const song = musicList.find((music) => music.trackId === parseInt(value, 10));

    const updateFunction = checked ? addSong : removeSong;
    this.setState({
      loadingFavorites: true,
    });
    updateFunction(song)
      .then(() => getFavoriteSongs())
      .then((favoriteSongs) => this.setFavoriteSongs(favoriteSongs));
  };

  render() {
    const {
      loading, musicList, album, favoriteSongs, loadingFavorites,
    } = this.state;

    return (
      <C.Container>
        <Header />

        { loading || loadingFavorites
          ? <Loader />
          : (
            <C.Content>
              <C.ArtistContent>
                <img src={album.artworkUrl100} alt="" />
                <h1>{album.collectionName}</h1>
                <h2>{album.artistName}</h2>
              </C.ArtistContent>

              <C.MusicListContent>
                {musicList.map((music) => (
                  <MusicCard
                    key={music.trackId}
                    music={music}
                    AddFavoriteSong={this.AddFavoriteSong}
                    favorites={favoriteSongs}
                    isFavoritePage={false}
                  />
                ))}
              </C.MusicListContent>
            </C.Content>
          )}
      </C.Container>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
