export default (start, end) => {
    return {
        type: 'GET_RANGE',
        $payload: {
            url: `http://139.59.169.252:3008/range/from/${start}/to/${end}`
        }
    };
};
