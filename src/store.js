import reducer from './reducer';


import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from
 
'redux';
import { composeWithDevTools } from
 
'redux-devtools-extension';
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = createStore(persistedReducer, composeWithDevTools());


export const persistor = persistStore(store)