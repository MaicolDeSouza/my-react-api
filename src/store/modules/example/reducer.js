// Estado inicial do estado
const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    // Acao vinda do login
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState; // Retorna novo estado
    }

    default: {
      return state;
    }
  }
}
