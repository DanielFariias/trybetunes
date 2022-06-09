import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.primary.background};
  border-radius: 10px;

  .title {
    font-size: 22px;
    font-weight: 800;
    color: #ffffff;
    padding: 15px 15px 0;
  }

  .subtitle {
    font-size: 18px;
    color: #ffffff80;
    padding: 5px 0 0 15px;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 200px;
  background: url(${(props) => props.src});
  background-size: cover;
  border-radius: 10px 10px 0 0;
  border-bottom: 2px solid #ffffff40;
`;
