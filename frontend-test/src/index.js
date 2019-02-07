import React from 'react';
import ReactDOM from 'react-dom';
import './common/js/dependencies'
import App from './main/app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
