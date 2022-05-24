import React from 'react';
import { Link } from 'react-router-dom';

import { getUser } from '../../services/userAPI';

export default class Header extends React.Component {
  state = {
    user: undefined,
  };

  async componentDidMount() {
    const user = await getUser();

    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <header data-testid="header-component">
        {user
          ? <p data-testid="header-user-name">{user.name}</p>
          : <p>Carregando...</p>}

        <Link to="/search" data-testid="link-to-search">Pesquisar</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favoritas</Link>
        <Link to="/profile" data-testid="link-to-profile">Meu Perfil</Link>
      </header>
    );
  }
}
