import styled from 'styled-components';

export const Container = styled.div`
  color: #858595;
`;

export const Content = styled.div`
  margin: 135px 350px 0;
  display: flex;
  justify-content: space-between;
`;

export const ArtistContent = styled.div`
  img {
    width: 300px;
    border-radius: 20px;

    box-shadow: 8px 8px 20px #00000090;
  }

  h1 {
    margin-top: 35px;
  }

  h2 {
    margin-top: 20px;
    opacity: 40%;
  }
`;

export const MusicListContent = styled.div`
  width: 600px;
  margin-bottom: 135px;
`;
