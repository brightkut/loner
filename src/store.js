import rootReducer from './reducers'
import { createStore,applyMiddleware ,compose} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage,
}

const middleware = [thunk]

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore =() => {
    let store = createStore(persistedReducer, compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    ))
    let persistor = persistStore(store)
    return { store, persistor }
}

export default configureStore

