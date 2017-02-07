import React from 'react';
import { connect } from 'react-redux';
import todaysRequests from '../actionCreators/today';

import Device from '../components/device';
import StationSquares from '../components/stationSquares';

require('react-dom');

const selectState = (state) => {
    return {
        total: state.today.total,
        stations: state.today.stations,
        device: state.today.device,
        history: state.dateRange.totals
    };
};

export default connect(selectState)(React.createClass({
    componentWillMount() {
        this.props.dispatch(todaysRequests());
    },
    render() {
        return <div>
            <div className="total">{this.props.total}</div>
            <StationSquares stations={this.props.stations} />
			<div>total stations today - {this.props.stations.length}</div>
            <Device ios={this.props.device.android} android={this.props.device.ios} />
        </div>;
    }
}));
