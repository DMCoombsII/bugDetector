import React from 'react';
import './index.css';
import {Provider} from 'react-redux'
import {configureStore,combineReducers} from '@reduxjs/toolkit'
import App from './App';
import {createRoot} from 'react-dom/client'


//reducers
import authReducer from './controllers/redux/authSlice'
import bugReducer from './controllers/redux/bugSlice'
import userReducer from './controllers/redux/userSlice'

const reducer = combineReducers({
    auth:authReducer,
    bugs:bugReducer,
    user:userReducer,
})

const store = configureStore({
    reducer
})

const root= createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
);
