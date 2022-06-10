import React from 'react';
import PropTypes from 'prop-types';

import { getUser } from '../../services/userAPI';
import Header from '../../components/Header';

import * as C from './styles';

import userImageDefault from '../../assets/images/userImageDefault.svg';
import { OutlinedButton } from '../../components/shared/OutlinedButton';
import Loader from '../../components/Loader';

export default class Profile extends React.Component {
  state = {
    loading: true,
    user: {},
  };

  async componentDidMount() {
    const user = await getUser();
    this.setState({ loading: false, user });
  }

  redirectToEdit = () => {
    const { history } = this.props;
    history.push('profile/edit');
  };

  render() {
    const { loading, user } = this.state;
    return (
      <C.Container>
        <Header />
        {loading
          ? <Loader />
          : (
            <C.Profile>
              <C.UserImage>
                <img src={user.image || userImageDefault} alt="your profile" />
                <OutlinedButton
                  type="button"
                  onClick={this.redirectToEdit}
                >
                  Editar Perfil
                </OutlinedButton>
              </C.UserImage>
              <C.UserDescription>
                <p>
                  Nome:
                  <span>{user.name}</span>
                </p>
                <p>
                  Email:
                  <span>{user.email}</span>
                </p>
                <p>
                  Descrição:
                  <span>{user.description}</span>
                </p>
              </C.UserDescription>
            </C.Profile>
          )}
      </C.Container>
    );
  }
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
