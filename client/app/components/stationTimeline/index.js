const React = require('react');
const Station = require('./station');

require('./style.scss');

const makeLines = () => {
    return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((item, i) => {
        return <div key={i} className="station-timeline__minutes" style={{
            left: ((i + 1) * 100)
        }}/>;
    });
};

export default (props) => {
    const stations = props.stations.map((station, i) => {
        return <Station station={station} index={i} key={station.date.format() + station.station}/>;
    });

    const minutes = makeLines();

    let secs = [];
    for (var i = 0; i < 60; i++) {
        secs.push(<div key={i} className="station-timeline__seconds" style={{
            left: ((i + 1) * (1000 / 60))
        }}/>);
    }

    return <div className="station-timeline">
        {secs}
        {minutes}
        <ul>{stations}</ul>
    </div>;
};
