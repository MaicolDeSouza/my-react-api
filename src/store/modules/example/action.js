import * as types from '../types';

export function clicaBotaoSucess() {
  return {
    type: types.BOTAO_CLICADO_SUCESS, // Dispara acao para o reducer ouvir
  };
}

export function clicaBotaoFailure() {
  return {
    type: types.BOTAO_CLICADO_FAILURE, // Dispara acao para o reducer ouvir
  };
}

export function clicaBotaoRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST, // Dispara acao para o reducer ouvir
  };
}
