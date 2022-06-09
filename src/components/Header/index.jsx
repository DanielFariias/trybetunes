import Proptypes from 'prop-types';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { getUser } from '../../services/userAPI';

import userIcon from '../../assets/images/userIcon.svg';

import * as C from './styles';

class Header extends React.Component {
  state = {
    user: undefined,
  };

  async componentDidMount() {
    const user = await getUser();

    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    const { history: { location: { pathname } } } = this.props;
    return (
      <C.Container data-testid="header-component">
        <nav>
          <Link
            to="/search"
            className={pathname === '/search' ? 'selected' : null}
          >
            Pesquisar
          </Link>
          <Link
            to="/favorites"
            className={pathname === '/favorites' ? 'selected' : null}
          >
            Favoritas
          </Link>
          <Link
            to="/profile"
            className={pathname === '/profile' ? 'selected' : null}
          >
            Meu Perfil
          </Link>
        </nav>

        {user
          ? (
            <C.User>
              <img src={user.image ? user.image : userIcon} alt="" />
              <p data-testid="header-user-name">{user.name}</p>
            </C.User>
          )
          : <p>Carregando...</p>}

      </C.Container>
    );
  }
}

export default withRouter(Header);

Header.propTypes = {
  history: Proptypes.shape({
    location: Proptypes.shape({
      pathname: Proptypes.string,
    }),
  }).isRequired,
};
