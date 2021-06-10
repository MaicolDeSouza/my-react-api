import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Titulo1, Titulo2 } from './styled';

export default function Login() {
  return (
    <Container>
      <Titulo1>
        Login
        <small> Testando</small>
      </Titulo1>
      <Titulo2>loren ipsun dolor...</Titulo2>
      <button type="button">Submit</button>
    </Container>
  );
}
