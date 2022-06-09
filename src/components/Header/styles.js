import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.primary.background};
  height: 100px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;

  nav {
    a {
      text-decoration: none;
      color: #ffffff;
      font-size: 18px;
      padding: 5px 20px 5px 0;
      transition: all 0.2s ease-in;

      & + a {
        border-left: 2px solid #ffffff;
        padding-left: 20px;
      }

      :hover {
        color: #FF658480;
        }
      :focus {
        color: #FF6584;
      }

      &.selected {
        color: #FF6584;
      }
    }
  }
`;

export const User = styled.div`
  font-size: 18px;
  color: #ffffff;

  display: flex;
  align-items: center;

  img {
    margin-right: 5px;
    width: 50px;
    border-radius: 25px;
  }
`;
