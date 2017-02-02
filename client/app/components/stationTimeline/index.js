const React = require('react');
const Station = require('./station');

require('./style.scss');

export default (props) => {
    const stations = props.stations.map((station, i) => {
        return <Station station={station} index={i} key={station.date.format() + station.station}/>;
    });

    return <ul className="station-timeline">{stations}</ul>;
};
