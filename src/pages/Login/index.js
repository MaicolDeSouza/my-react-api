import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Titulo1, Titulo2 } from './styled';

export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch({
      type: 'BOTAO_CLICADO', // Dispara acao para o reducer ouvir
    });
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
