import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let store;
const dev = process.env.NODE_ENV === 'development';
if(dev) {
    store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );
} else {
    store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
};

export default store;