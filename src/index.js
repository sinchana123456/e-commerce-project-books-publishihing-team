import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './components/store/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <AuthContextProvider>
    <BrowserRouter>
    <React.StrictMode>
        <App /> 
        </React.StrictMode>
    </BrowserRouter>
    </AuthContextProvider>
    );
