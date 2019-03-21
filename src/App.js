import React, { Fragment } from 'react';

// Styles
import GlobalStyle from './styles/global';

// Pages
import Main from './pages/Main';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Main />
  </Fragment>
);

export default App;
