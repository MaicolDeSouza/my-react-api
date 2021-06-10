import React from 'react';
// IMportar as funcoes que o router vai utilizar
import { Switch, Route } from 'react-router-dom';

// Importar o componente que queremos fazer a rota
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

// Abaixo criamos a rota que acessa a raiz "/" quando o comp. Login for pressioando
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="*" component={Page404} />
    </Switch>
  );
}
