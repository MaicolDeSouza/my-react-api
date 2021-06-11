import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistReducers = persistReducer(
    {
      key: 'REACT-BASE', // qualuer nome da aplicacao
      storage,
      whitelist: ['example'], // Nome pego da "rootReducer"
    },
    reducers
  );
  return persistReducers;
};
