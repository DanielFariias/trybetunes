import React from 'react';
import { Link } from 'react-router-dom';

import { getUser } from '../../services/userAPI';
import Header from '../../components/Header';

export default class Profile extends React.Component {
  state = {
    loading: true,
    user: {},
  };

  async componentDidMount() {
    const user = await getUser();
    this.setState({ loading: false, user });
  }

  render() {
    const { loading, user } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        {
          loading
            ? <p>Carregando...</p>
            : (
              <div className="profile">
                <span>
                  <img data-testid="profile-image" src={user.image} alt="" />
                  <Link to="profile/edit">Editar perfil</Link>
                </span>
                <p>
                  Nome:
                  {' '}
                  <span>{user.name}</span>
                </p>
                <p>
                  Descrição:
                  {' '}
                  <span>{user.description}</span>
                </p>
                <p>
                  Email:
                  {' '}
                  <span>{user.email}</span>
                </p>
              </div>
            )
        }
      </div>
    );
  }
}
