const React = require('react');
const moment = require('moment');

module.exports = React.createClass({
    shouldComponentUpdate() {
        return false;
    },
    render() {
        const now = moment();
        const secDiff = now.diff(this.props.station.date, 'seconds');
        const percentageOfWidth = (secDiff / 600) * 100;
        const reversed = 100 - percentageOfWidth;
        return <li className="station-timeline__time" key={this.props.station.date.format()} style={{
            left: reversed + '%'
        }}><div className="station-timeline__name" style={{
            top: (this.props.index * 20) % 200
        }}>{this.props.station.station}<div className="station-timeline__circle"></div></div></li>;
    }
});
