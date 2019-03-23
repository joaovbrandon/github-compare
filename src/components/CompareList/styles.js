import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 10px;

  @media (max-width: 539px) {
    width: 90%;
    min-width: 90%;
    max-width: 90%;
  }

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal:
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background-color: #F5F5F5;
      }
    }
  }
`;

export const Button = styled.button`
  height: 30px;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  cursor: pointer;
  margin-top: 1px;
  transition: background-color 0.3s;

  &.update {
    background-color: #54e6a9;

    &:hover {
      background-color: #52d89f;
    }
  }

  &.remove {
    background-color: #f00;

    &:hover {
      background-color: #ec0000;
    }
  }

  i {
    margin-right: 5px;
  }
`;
