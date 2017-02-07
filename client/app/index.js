import store from './store';

import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';

import { Router, Route, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import Today from './pages/today';
import Now from './pages/now';
import SpecificDay from './pages/day';
import Historical from './pages/historical';

require('./base.scss');

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Redirect from="/" to="/today" />
            <Route path="/day/:date" component={SpecificDay} />
            <Route path="/range/from/:start/to/:end" component={Historical} />
            <Route path="/range" component={Historical} />
            <Route path="/today" component={Today} />
            <Route path="/now" component={Now} />
        </Router>
    </Provider>
), document.getElementById('app'));
