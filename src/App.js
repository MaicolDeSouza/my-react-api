import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

// import Login from './pages/Login'; // Como criamos rotas nao usamos mais desta forma
import Routes from './routes';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import history from './services/history';
import store, { persistor } from './store';

function App() {
  //  return <h1>Hello world</h1>;
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} className="toast-container" />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
