import React from 'react';

// import Login from './pages/Login'; // Como criamos rotas nao usamos mais desta forma
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';

function App() {
  //  return <h1>Hello world</h1>;
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
