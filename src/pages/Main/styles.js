import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 10px 10px 10px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 90%;
  max-width: 400px;
  display: flex;
  justify-content: center;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    transition: border 0.5s;
    border: ${props => (props.repositoryError ? '5px solid #F00' : 0)};
  }

  button {
    height: 55px;
    width: 65px;
    margin-left: 10px;
    background-color: #54e6a9;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #52d89f;
    }
  }
`;
