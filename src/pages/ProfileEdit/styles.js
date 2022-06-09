import styled from 'styled-components';

export const Container = styled.div`
  color: #858595;
`;

export const Content = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 100px);
`;

export const FormUpdate = styled.form`

`;

export const ImageLabel = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80px;
    margin-right: 30px;
    border-radius: 50%;
    border: 2px solid #FF6584;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 800;


    input {
      width: 300px;
      height: 50px;
      border: 1px solid #858595;
      border-radius: 10px;
      padding-left: 15px;
      margin-top: 5px;
      color: #858595;
      background-color: #EDF2F4;

      ::placeholder {
        color: #858595;
      }
    }
  }
`;

export const InputLabel = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 800;
    margin-top: 20px;


    small {
      margin: 4px 0 10px;
      font-size: 14px;
      font-weight: 400;
      color: #85859595;
    }

    input {
      width: 412px;
      height: 50px;
      border: 1px solid #858595;
      border-radius: 10px;
      padding-left: 15px;
      color: #858595;
      background-color: #EDF2F4;

      ::placeholder {
        color: #858595;
      }
    }
`;
