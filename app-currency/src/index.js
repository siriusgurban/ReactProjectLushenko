import * as ReactDOMClient from 'react-dom/client';
import React from 'react';


import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

let nav = {main: "index", header: "header", footer: "footer"}


const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(<App nav={nav}/>);