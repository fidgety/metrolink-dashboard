const React = require('react');

require('./style.scss');

const buildStationList = stations => {
    return stations.map(station => {
        return <li className={`station-square ${station.route}`} key={station.station}>
            <div className="station-square__name">{station.station}</div>
            <div className="station-square__total">{station.total}</div>
        </li>;
    });
};

export default props => {
    return <ul className="station-squares">{buildStationList(props.stations)}</ul>;
};
