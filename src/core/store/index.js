import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { messageReceive } from './castomMiddleware/messageReceive';

const middleware = applyMiddleware(logger, thunk, messageReceive);

export const store = createStore(rootReducer, middleware);


