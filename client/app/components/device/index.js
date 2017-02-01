const React = require('react');
const { Pie } = require('react-chartjs-2');

export default (props) => {
    const data = {
        labels: [
            'iOS',
            'Android'
        ],
        datasets: [{
            data: [props.ios, props.android],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };
    return <Pie data={data} width={50} height={50} options={{
        maintainAspectRatio: false
    }}/>;
};
