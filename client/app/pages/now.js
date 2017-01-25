import React from 'react';
import { connect } from 'react-redux';
import now from '../actionCreators/now';

require('react-dom');

const selectState = (state) => {
    return {
        total: state.today.total,
        stations: state.today.stations,
        device: state.today.device
    };
};

const buildStationList = stations => {
    return stations.map(station => {
        return <li key={station.station}>{station.station} - {station.total}</li>;
    });
};

export default connect(selectState)(React.createClass({
    componentWillMount() {
        this.props.dispatch(now(10));
    },
    render() {
        return <div>
            <div className="total">{this.props.total}</div>
            <ul>{buildStationList(this.props.stations)}</ul>
			<div>total stations today - {this.props.stations.length}</div>
            <div>android {this.props.device.android}, ios {this.props.device.ios}</div>
        </div>;
    }
}));
