export default () => {
    return {
	    type: 'GET_TODAY',
	    $payload: {
	        url: 'http://139.59.169.252:3008/calls/today'
    	}
    };
};
