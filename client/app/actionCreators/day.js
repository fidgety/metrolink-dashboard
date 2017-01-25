export default (date) => {
    return {
        type: 'GET_DAY',
        $payload: {
            url: `http://139.59.169.252:3008/day/${date}`
        }
    };
};
