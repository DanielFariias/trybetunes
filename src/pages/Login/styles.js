import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  max-width: 1980px;
  height: 100vh;

  display: flex;
  align-items: center;
`;

export const Aside = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: calc(100% - 250px)
  }
`;

export const Content = styled.div`
  min-width: 40%;
  width: 40%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary.background};

  padding: 130px 50px 150px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 50px;
    font-weight: 800;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    label {
      display: flex;
      flex-direction: column;
      font-size: 18px;
      color: #ffffff90;

      input {
        height: 70px;
        margin: 10px 0 40px;
        outline: none;
        background-color: transparent;
        border: 2px solid #ffffff40;
        border-radius: 10px;
        color: #ffffff40;
        font-size: 24px;
        padding-left: 20px;
        transition: all 0.4s ease-in-out;

        ::placeholder {
          color: #ffffff40;
        }

        :hover {
          border: 2px solid #FF658480;
          color: #FF658480;
        }
        :focus {
          border: 2px solid #FF6584;
          color: #FF6584;
        }
      }
    }
  }
`;
