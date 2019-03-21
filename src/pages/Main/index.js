import React from 'react';
import { Container, Form } from './styles';

// Assets
import logo from '../../assets/images/github-compare-logo.png';

const Main = () => (
  <Container>
    <img src={logo} alt="GitHub Compare" />

    <Form>
      <input type="text" placeholder="user/repository" />
      <button type="submit">OK</button>
    </Form>
  </Container>
);

export default Main;
