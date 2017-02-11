const React = require('react');
const Station = require('./station');

require('./style.scss');

const makeLines = () => {
    return [0, 0, 0, 0, 0, 0, 0, 0, 0].map((item, i) => {
        return <div key={i} className="station-timeline__minutes" style={{
            left: (((i + 1) / 10) * 100) + '%'
        }}><div className="station-timeline__label">{9 - i}</div></div>;
    });
};

export default (props) => {
    const stations = props.stations.map((station, i) => {
        return <Station station={station} key={station.date.format() + station.station}/>;
    });

    const minutes = makeLines();

    let secs = [];
    for (var i = 0; i < 60; i++) {
        secs.push(<div key={i} className="station-timeline__seconds" style={{
            left: (((i + 1) / 60) * 100) + '%'
        }}/>);
    }

    return <div className="station-timeline">
        {secs}
        {minutes}
        <ul>{stations}</ul>
    </div>;
};
