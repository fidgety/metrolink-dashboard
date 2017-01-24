import store from './store';

import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import Today from './pages/today';

// require('normalise.css');

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Today} />
        </Router>
    </Provider>
), document.getElementById('app'));
