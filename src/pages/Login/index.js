import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Titulo1, Titulo2 } from './styled';
import * as exampleActions from '../../store/modules/example/action'; // Importa tudo deste caminho

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <Titulo1>
        Login
        <small> Testando</small>
      </Titulo1>
      <Titulo2>loren ipsun dolor...</Titulo2>
      <button type="button" onClick={handleClick}>
        Submit
      </button>
    </Container>
  );
}
