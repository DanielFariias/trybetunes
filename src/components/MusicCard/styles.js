import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-top: 2px solid #85859550;

  img {
    margin-right: 50px;
    border-radius: 10px;
  }

  audio {
    width: 500px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  label {
    display: flex;
    align-items: center;

    cursor: pointer;

    input {
      display: none;
    }
  }
`;
