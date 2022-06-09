import styled from 'styled-components';

export const Container = styled.div`
  color: #858595;
`;

export const Content = styled.div`
  margin: 50px 500px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 40px;
  }

  div {
    width: 100%;
    display: flex;

    img {
      margin-right: 20px;
    }
  }
`;
