import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Import global styles
import './App.css';   // Import App-specific styles

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);