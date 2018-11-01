import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './components/Root';
import configureStore from './store/store'


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store = configureStore();
    console.log(process.env)
    ReactDOM.render(<Root store={store}/>, root)
})
