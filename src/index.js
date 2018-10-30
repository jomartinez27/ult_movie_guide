import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './components/Root';
import configureStore from './store/store'


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store = configureStore();
    ReactDOM.render(<Root store={store}/>, root)
})
