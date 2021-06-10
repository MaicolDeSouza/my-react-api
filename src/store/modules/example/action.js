import * as types from '../types';

export function clicaBotao() {
  return {
    type: types.BOTAO_CLICADO, // Dispara acao para o reducer ouvir
  };
}
