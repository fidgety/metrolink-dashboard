import React from 'react';
import { connect } from 'react-redux';
import rangeOfRequests from '../actionCreators/range';

import Device from '../components/device';
import StationSquares from '../components/stationSquares';

require('react-dom');

const selectState = (state) => {
    return {
        total: state.today.total,
        stations: state.today.stations,
        device: state.today.device,
        totalSessions: state.today.totalSessions
    };
};

export default connect(selectState)(React.createClass({
    componentWillMount() {
        this.props.dispatch(rangeOfRequests(this.props.params.start, this.props.params.end));
    },
    render() {
        return <div>
            <div className="total">total hits {this.props.total}</div>
            <div className="totalSessions">total sessions {this.props.totalSessions}</div>
			<div>total stations {this.props.stations.length}</div>
            <StationSquares stations={this.props.stations} />
            <Device ios={this.props.device.android} android={this.props.device.ios} />
        </div>;
    }
}));
