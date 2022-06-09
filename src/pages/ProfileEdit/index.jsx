import React from 'react';
import PropTypes from 'prop-types';

import { getUser, updateUser } from '../../services/userAPI';
import Header from '../../components/Header';

import * as C from './styles';
import userImageDefault from '../../assets/images/userImageDefault.svg';
import { OutlinedButton } from '../../components/shared/OutlinedButton';

export default class ProfileEdit extends React.Component {
  state = {
    loading: true,
    user: {
      name: '',
      description: '',
      email: '',
      image: '',
    },
  };

  async componentDidMount() {
    const user = await getUser();
    this.setState({ loading: false, user });
  }

  handleChangeForm = ({ target: { name, value } }) => {
    const { user } = this.state;
    this.setState({ user: { ...user, [name]: value } });
  };

  isButtonDisabled = () => {
    const VALIDADE_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const { user } = this.state;

    const hasEmail = VALIDADE_EMAIL.test(String(user.email).toLowerCase());
    const notEmpty = (user.name !== ''
      && user.description !== ''
      && user.image !== '');

    return hasEmail && notEmpty;
  };

  isSubmitted = (e) => {
    e.preventDefault();

    const { user } = this.state;
    const { history } = this.props;

    this.setState(
      { loading: true },
      async () => {
        await updateUser(user);
        this.setState(
          { loading: false },
          () => history.push('/profile'),
        );
      },
    );
  };

  render() {
    const { loading, user } = this.state;

    return (
      <C.Container>
        <Header />
        {
          loading
            ? <p>Carregando...</p>
            : (
              <C.Content>
                <C.FormUpdate>
                  <C.ImageLabel>
                    <img src={user.image || userImageDefault} alt="" />
                    <label htmlFor="edit-input-image">
                      Insira um link:
                      <input
                        id="edit-input-image"
                        type="text"
                        name="image"
                        placeholder="Url de sua imagem"
                        data-testid="edit-input-image"
                        value={user.image}
                        onChange={this.handleChangeForm}
                      />
                    </label>
                  </C.ImageLabel>

                  <C.InputLabel htmlFor="edit-input-name">
                    Nome:
                    <small>
                      Fique à vontade para usar seu nome social
                    </small>
                    <input
                      id="edit-input-name"
                      type="text"
                      name="name"
                      data-testid="edit-input-name"
                      placeholder="Digite seu nome aqui"
                      value={user.name}
                      onChange={this.handleChangeForm}
                    />
                  </C.InputLabel>

                  <C.InputLabel htmlFor="edit-input-email">
                    Email:
                    <small>
                      Escolha seu melhor e-mail para utlizar aqui
                    </small>
                    <input
                      id="edit-input-email"
                      type="text"
                      name="email"
                      placeholder="usuario@usuario.com"
                      data-testid="edit-input-email"
                      value={user.email}
                      onChange={this.handleChangeForm}
                    />
                  </C.InputLabel>

                  <C.InputLabel htmlFor="edit-input-description">
                    Descrição:
                    <small>
                      Conte um pouco sobre quem é você
                    </small>
                    <input
                      id="edit-input-description"
                      type="text"
                      name="description"
                      data-testid="edit-input-description"
                      placeholder="Sobre você"
                      value={user.description}
                      onChange={this.handleChangeForm}
                    />
                  </C.InputLabel>

                  <OutlinedButton
                    type="submit"
                    data-testid="edit-button-save"
                    disabled={!this.isButtonDisabled()}
                    onClick={this.isSubmitted}
                  >
                    Salvar
                  </OutlinedButton>
                </C.FormUpdate>
              </C.Content>
            )
        }
      </C.Container>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
