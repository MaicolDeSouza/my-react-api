import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import propTypes from 'prop-types'; // Para validar "component" e "isClosed"

// isclosed e rest nos mesmos criamos
export default function MyRoute({ component: Component, isClosed, ...rest }) {
  // Variavel que informa se usuario esta logado ou nao
  const isLoggedIn = false;

  // Se a rota é fechada e usuario nao estiver logado
  // Redireciona o usuario para o login e depois retorna para a pag anterior
  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  // Se usuario estiver logado
  // A linha abaixo desabilita o erro do eslint apenas para a proxima linha
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

// Como "isClosed nao é requerido temos dar um valor padrao a variavel
MyRoute.defaultProps = {
  isClosed: false, // A rota é sempre aberta
};

MyRoute.propTypes = {
  component: propTypes.oneOfType([propTypes.element, propTypes.func])
    .isRequired,
  isClosed: propTypes.bool,
};
