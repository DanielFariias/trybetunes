import React from 'react';

import MusicCard from '../../components/MusicCard';
import Header from '../../components/Header';
import {
  getFavoriteSongs,
  addSong,
  removeSong,
} from '../../services/favoriteSongsAPI';

import * as C from './styles';

export default class Favorites extends React.Component {
  state = {
    loading: true,
    favoriteSongs: [],
  };

  componentDidMount() {
    getFavoriteSongs().then((favoriteSongs) => {
      this.setState({
        loading: false,
        favoriteSongs,
      });
    });
  }

  onFavoriteChange = ({ target }) => {
    const { favoriteSongs } = this.state;
    const { checked, value } = target;
    const song = favoriteSongs.find((m) => m.trackId === parseInt(value, 10));

    const updateFunction = checked ? addSong : removeSong;

    this.setState({
      loading: true,
    });

    updateFunction(song)
      .then(() => getFavoriteSongs())
      .then((favSongs) => this.setState({ favoriteSongs: favSongs, loading: false }));
  };

  render() {
    const { favoriteSongs, loading } = this.state;
    return (
      <C.Container>
        <Header />

        {loading
          ? <p> Carregando...</p>
          : (
            <C.Content>
              <h1>Músicas Favoritas</h1>
              {favoriteSongs.map((song) => (
                <div key={song.trackId}>

                  <MusicCard
                    music={song}
                    AddFavoriteSong={this.onFavoriteChange}
                    favorites={favoriteSongs}
                    isFavoritePage
                  />
                </div>
              ))}
            </C.Content>
          )}
      </C.Container>
    );
  }
}
