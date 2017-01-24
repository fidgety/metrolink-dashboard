import store from './store';

import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';

import { Router, Route, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import Today from './pages/today';

// require('normalise.css');

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Redirect from="/" to="/today" />
            <Route path="/today" component={Today} />
        </Router>
    </Provider>
), document.getElementById('app'));
