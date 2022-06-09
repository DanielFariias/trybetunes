import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 70px;
  background-color: #FF6584;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 28px;
  transition: all 0.2s ease-in;

  :hover {
    background-color: #fe4e66;
  }
  :active {
    background-color: #b20425;
  }

  :disabled {
    background-color: #ffe2ed;
    color: #00000040;
    cursor: not-allowed;
  }
`;
