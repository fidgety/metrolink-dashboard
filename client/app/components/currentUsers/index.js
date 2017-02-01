const React = require('react');
import AnimatedNumber from 'react-animated-number';

require('./style.scss');

export default (props) => {
    return <div className="current-users">
        <div className="current-users__title">last 10 mins</div>
        <AnimatedNumber component="text" value={props.currentUsers}
            duration={300}
            stepPrecision={0}
        />
    </div>;
};
