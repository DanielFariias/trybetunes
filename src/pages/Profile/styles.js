import styled from 'styled-components';

export const Container = styled.div`
  color: #858595;
`;

export const Profile = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 200px;

  img {
    width: 300px;
    border-radius: 50%;
    margin-bottom: 50px;
  }
`;

export const UserDescription = styled.div`
  width: 300px;

  p {
    display: flex;
    flex-direction: column;
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 20px;

    span {
      font-size: 16px;
      font-weight: 400;
      color: #85859590;
      margin-top: 5px;
      text-align:justify;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 10;
      -webkit-box-orient: vertical;
    }
  }
`;
