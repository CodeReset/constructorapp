import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducerRoot from './reducers';
import {persistStore} from 'redux-persist';

export const store = createStore(reducerRoot, applyMiddleware(thunk));

// @ts-ignore
export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof reducerRoot>;
