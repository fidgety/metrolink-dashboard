import React from 'react';
import { connect } from 'react-redux';
import day from '../actionCreators/day';

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
        this.props.dispatch(day(this.props.params.date));
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
