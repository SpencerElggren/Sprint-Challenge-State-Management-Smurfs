import React, { useState } from 'react';
import { connect } from 'react-redux';
import {addNewSmurf, getSmurf} from "../actions/smurfActions";

const Smurff = props => {

    const fetchSmurfs = e => {
        e.preventDefault();
        props.getSmurf()
    };

    return (
        <>
            <button onClick={fetchSmurfs}>Get More Smurfs!</button>
            <div>
                {props.smurfs.map(smurf => (
                    <h2 key={smurf.id}>{smurf.name}, {smurf.age}, {smurf.height}</h2>
                ))}
            </div>
        </>
    )


};

const mapStateToProps = state => {
    console.log(state.smurfReducer.smurfs);
    return {
        smurfs: state.smurfReducer.smurfs
    }
};

export default connect(
    mapStateToProps,
    {getSmurf}
)(Smurff)