export default (mins) => {
    return {
        type: 'GET_NOW',
        $payload: {
            url: `http://139.59.169.252:3008/now/${mins}`
        }
    };
};
