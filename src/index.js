import React from 'react';
import ReactDOM from 'react-dom';
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';
import './index.css';
import App from './App';

ReactDOM.render(
  
<React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App className="app" />
        </StateProvider></React.StrictMode>,
    document.getElementById('root')
); 