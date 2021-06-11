import * as types from '../types';

// Estado inicial do estado
const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    // Acao vinda do login
    case types.BOTAO_CLICADO_SUCESS: {
      console.log('Requisicao OK');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState; // Retorna novo estado
    }

    case types.BOTAO_CLICADO_FAILURE: {
      // const newState = { ...state };
      // newState.botaoClicado = !newState.botaoClicado;
      // return newState; // Retorna novo estado
      console.log('Requisicao falhou');
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      // const newState = { ...state };
      // newState.botaoClicado = !newState.botaoClicado;
      // return newState; // Retorna novo estado
      console.log('Estou fazendo a requisicao');
      return state;
    }

    default: {
      return state;
    }
  }
}
