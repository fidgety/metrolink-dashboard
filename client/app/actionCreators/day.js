export default (date) => {
    return {
        type: 'GET_DAY',
        $payload: {
            url: `http://localhost:3008/day/${date}`
        }
    };
};
