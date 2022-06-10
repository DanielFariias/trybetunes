import React from 'react';
import { Link } from 'react-router-dom';

import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import Header from '../../components/Header';

import searchIcon from '../../assets/images/searchIcon.svg';

import * as C from './styles';
import { Button } from '../../components/shared/Button';
import CardMusic from '../../components/CardMusic';
import Loader from '../../components/Loader';

export default class Search extends React.Component {
  state = {
    loading: false,
    artistFormName: '',
    artistName: '',
    artistAlbum: [],
    hasAlbum: true,
  };

  handleChangeForm = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  onButtonClick = (e) => {
    e.preventDefault();
    const { artistFormName } = this.state;

    this.setState(
      {
        loading: true,
        artistFormName: '',
        artistName: artistFormName,
      },
      async () => {
        const album = await searchAlbumsAPI(artistFormName);
        const foundAlbum = album.length > 0;

        this.setState({
          loading: false,
          artistAlbum: album,
          hasAlbum: foundAlbum,
        });
      },
    );
  };

  buttonDisabled = () => {
    const MIN_LENGTH_NAME = 2;
    const { artistFormName } = this.state;

    return artistFormName.length >= MIN_LENGTH_NAME;
  };

  render() {
    const {
      artistFormName,
      loading,
      artistAlbum,
      artistName,
      hasAlbum,
    } = this.state;
    return (
      <C.Container>
        <Header />
        <C.Content>
          <C.Form>
            <label htmlFor="search-artist-input">
              <input
                id="search-artist-input"
                type="text"
                name="artistFormName"
                value={artistFormName}
                placeholder="Nome do Artista"
                onChange={this.handleChangeForm}
              />
              <button
                type="button"
                disabled={!this.buttonDisabled()}
                onClick={this.onButtonClick}
              >
                <img src={searchIcon} alt="Search Icon" />
              </button>
            </label>
            <div>
              <Button
                type="submit"
                data-testid="search-artist-button"
                disabled={!this.buttonDisabled()}
                onClick={this.onButtonClick}
              >
                Pesquisar
              </Button>
            </div>
          </C.Form>

          { loading
            ? <Loader />
            : (
              <div>
                {artistAlbum.length > 0 && (
                <>
                  <h2>
                    Resultado de álbuns de:
                    {' '}
                    {artistName}
                  </h2>
                  <C.CardList>
                    { artistAlbum.map((music) => (
                      <Link
                        to={`/album/${music.collectionId}`}
                        key={music.collectionId}
                        data-testid={`link-to-album-${music.collectionId}`}
                      >
                        <CardMusic music={music} />
                      </Link>
                    ))}
                  </C.CardList>
                </>
                )}
                <div>
                  { hasAlbum ? null : <p>Nenhum álbum foi encontrado</p> }
                </div>
              </div>
            )}
        </C.Content>

      </C.Container>
    );
  }
}
