import styled from 'styled-components';

export const OutlinedButton = styled.button`
  width: 100%;
  height: 70px;
  background-color: #EDF2F4;
  border: 2px solid #FF6584;
  border-radius: 10px;
  color: #FF6584;
  font-size: 28px;
  margin-top: 50px;
  transition: all 0.2s ease-in;

  :hover {
    background-color: #fe4e66;
    color: #fff;
  }
  :active {
    background-color: #b20425;
  }

  :disabled {
    background-color: #fe4e6640;
    border: 2px solid #b2042520;

    color: #00000020;
    cursor: not-allowed;
  }
`;
