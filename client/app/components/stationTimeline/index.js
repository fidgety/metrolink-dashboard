const React = require('react');
import AnimatedNumber from 'react-animated-number';
const moment = require('moment');

require('./style.scss');

export default (props) => {
    console.log('render');
    const now = moment();
    const buildStationList = stations => {
        return stations.map((station, i) => {
            const secDiff = now.diff(station.date, 'seconds');
            const percentageOfWidth = (secDiff / 600) * 100;
            const reversed = 100 - percentageOfWidth;
            return <li className="station-timeline__time" key={station.date.format()} style={{
                left: reversed + '%'
            }}><div className="station-timeline__name" style={{
                top: (i * 20) % 200
            }}>{station.station}</div></li>;
        });
    };

    return <ul className="station-timeline">{buildStationList(props.stations)}</ul>;
};
