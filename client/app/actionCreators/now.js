export default (mins) => {
    return {
        type: 'GET_NOW',
        $payload: {
            url: `http://139.59.169.252:3008/now/${mins}`
        }
    };
};


// export default () => ({
//     type: 'GET_NOW_SUCCESS',
//     data: [
//         {
//             station: 'Deansgate-Castlefield',
//             date: '2017-01-31T19:54:33.006Z',
//             device: 'ios'
//         },
//         {
//             station: 'Market-Street',
//             date: '2017-01-31T19:54:38.904Z',
//             device: 'ios'
//         },
//         {
//             station: 'Piccadilly-Gardens',
//             date: '2017-01-31T19:54:45.690Z',
//             device: 'ios'
//         },
//         {
//             station: 'Cornbrook',
//             date: '2017-01-31T19:56:10.273Z',
//             device: 'ios'
//         },
//         {
//             station: 'Northern-Moor',
//             date: '2017-01-31T19:56:16.161Z',
//             device: 'ios'
//         },
//         {
//             station: 'Northern-Moor',
//             date: '2017-01-31T19:58:19.320Z',
//             device: 'ios'
//         },
//         {
//             station: 'Piccadilly-Gardens',
//             date: '2017-01-31T19:58:19.510Z',
//             device: 'ios'
//         },
//         {
//             station: 'Northern-Moor',
//             date: '2017-01-31T19:59:32.763Z',
//             device: 'ios'
//         },
//         {
//             station: 'Northern-Moor',
//             date: '2017-01-31T20:00:04.637Z',
//             device: 'ios'
//         },
//         {
//             station: 'Northern-Moor',
//             date: '2017-01-31T20:02:16.965Z',
//             device: 'ios'
//         },
//         {
//             station: 'Northern-Moor',
//             date: '2017-01-31T20:02:59.917Z',
//             device: 'ios'
//         }
//     ]
// });
