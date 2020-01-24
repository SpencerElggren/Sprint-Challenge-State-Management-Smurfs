const initialState = {
    smurfs: []
};

export const smurfReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_SMURF':
            return {
                ...state,
                smurfs: [
                    ...state.smurfs,
                    action.payload
                ]
            }
        case 'FETCH_SMURF_START':
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case 'FETCH_SMURF_SUCCESS':
            return {
                ...state,
                smurfs: [
                    ...state.smurfs,
                    action.payload
                ]
            };
        case 'FETCH_SMURF_FAIL':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};