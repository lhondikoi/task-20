import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'bootstrap-icons/font/bootstrap-icons.min.css'


import App from './App';
import cartStore from './store/store.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={cartStore}>
        <App />
    </Provider>
)