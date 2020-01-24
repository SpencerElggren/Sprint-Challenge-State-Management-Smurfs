import axios from 'axios'

export const addNewSmurf = newSmurf => {
    return { type: 'ADD_SMURF', payload: newSmurf}
};

export const getSmurf = () => dispatch => {
    dispatch({type: 'FETCH_SMURFS_START'});
    axios
        .get('http://localhost:3333/smurfs')
        .then(response =>
        dispatch({type: 'FETCH_SMURF_SUCCESS', payload: response.data})
        )
        .catch(err => dispatch({type: 'FETCH_SMURF_FAIL', payload: err}))
};