import React from 'react';
// Importar as funcoes que o router vai utilizar
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
// Importar o componente que queremos fazer a rota
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

// Abaixo criamos a rota que acessa a raiz "/" quando o comp. Login for pressioando
export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
