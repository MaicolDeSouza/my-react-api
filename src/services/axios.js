import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3001/', // link para acesso a aplicacao
});
