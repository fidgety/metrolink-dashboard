import React from 'react';
import { connect } from 'react-redux';
import now from '../actionCreators/now';

import Device from '../components/device';
import CurrentUsers from '../components/currentUsers';
import StationTimeline from '../components/stationTimeline';

require('react-dom');

const selectState = (state) => {
    return {
        total: state.today.total,
        results: state.today.results,
        device: state.today.device
    };
};

export default connect(selectState)(React.createClass({
    componentWillMount() {
        setInterval(() => {
            this.props.dispatch(now(10));
        }, 1000);
        this.props.dispatch(now(10));
    },
    render() {
        return <div>
            <CurrentUsers currentUsers={this.props.total} />
            <StationTimeline stations={this.props.results} />
            android {this.props.device.android} ios {this.props.device.ios}
        </div>;
    }
}));
