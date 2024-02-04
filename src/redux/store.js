import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducer';

// Configuración básica de la tienda Redux sin dev tools
export const store = createStore(rootReducer, applyMiddleware(thunk));
