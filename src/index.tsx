import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dropdown from './Dropdown ';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode>
    <Dropdown/>
</React.StrictMode>);
reportWebVitals();
