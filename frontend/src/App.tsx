import React from 'react';

import GlobalStyles from './styles/global';

import Routes from './routes';

// import './App.css'

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
