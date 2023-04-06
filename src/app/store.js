import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import rootReducer from '../store/rootReducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'tickets']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer)
let persistor = persistStore(store)

export { store, persistor }