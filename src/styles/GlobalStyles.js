import styled, { createGlobalStyle } from 'styled-components';

// Define parametros CSS escopo global
export default createGlobalStyle`
  *{
    //background-color: pink
  }

  body {
    font-family: sans-serif;
    background-color: pink;
  }

  html , body, #root {
  height: 100%;
  }

  button{
    cursor: pointer;
    background-color: black;
    color: white;
    border: none;
    padding: 30px 30px;
    border-radius: 5px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;

// css para section criadas
export const Container = styled.section`
  max-width: 360px;
  background-color: white;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
`;
