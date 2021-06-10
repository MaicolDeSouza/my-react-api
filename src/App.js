import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// import Login from './pages/Login'; // Como criamos rotas nao usamos mais desta forma
import Routes from './routes';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import history from './services/history';

function App() {
  //  return <h1>Hello world</h1>;
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  );
}

export default App;
