import React from 'react';
import { Link } from 'react-router-dom';

import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import Header from '../../components/Header';

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
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="search-artist-input">
            <input
              id="search-artist-input"
              type="text"
              name="artistFormName"
              value={artistFormName}
              data-testid="search-artist-input"
              onChange={this.handleChangeForm}
            />
          </label>
          <button
            type="submit"
            data-testid="search-artist-button"
            disabled={!this.buttonDisabled()}
            onClick={this.onButtonClick}
          >
            Pesquisar
          </button>
        </form>

        { loading
          ? <p>Carregando...</p>
          : (
            <div className="album-list">
              {artistAlbum.length > 0 && (
                <>
                  <h2>
                    Resultado de álbuns de:
                    {' '}
                    {artistName}
                  </h2>
                  <div className="">
                    { artistAlbum.map(({ collectionId, collectionName }) => (
                      <Link
                        to={`/album/${collectionId}`}
                        key={collectionId}
                        data-testid={`link-to-album-${collectionId}`}
                      >
                        {collectionName}
                      </Link>
                    ))}
                  </div>
                </>
              )}
              <div>
                { hasAlbum ? null : <p>Nenhum álbum foi encontrado</p> }
              </div>
            </div>
          )}
      </div>
    );
  }
}
