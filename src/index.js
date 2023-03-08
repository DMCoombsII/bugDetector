import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux'
import {configureStore,combineReducers} from '@reduxjs/toolkit'
import App from './App';

//reducers
import authReducer from './controllers/redux/bugSlice'
import bugReducer from './controllers/redux/bugSlice'
import userReducer from './controllers/redux/userSlice'

const reducer = combineReducers({
    auth:authReducer,
    bug:bugReducer,
    user:userReducer,
})

const store = configureStore({
    reducer
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);
