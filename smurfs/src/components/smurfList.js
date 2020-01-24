import React from 'react';
import { connect } from 'react-redux';
import {smurfReducer} from "../reducers/smurfReducer";
import {addNewSmurf, getSmurf} from "../actions/smurfActions";

class SmurfList extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: 0,
            height: ''
        }
    }
    // handleChanges = e => {
    //     this.setState(e.target.value)
    // };

    render() {
        return (
            <React.Fragment>
                <div>
                    <h2>Name</h2>
                    <input type={'text'} value={this.state.name} onChange={this.handleChanges}/>
                    <h2> Age</h2>
                    <input type={'text'} value={this.state.age} onChange={this.handleChanges}/>
                    <h2>Height</h2>
                    <input type={'text'} value={this.state.height} onChange={this.handleChanges}/>
                    <button onClick={() => this.props.addNewSmurf(this.state)}>Add Smurf</button>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfReducer.smurfs
    }
};

export default connect(
    mapStateToProps,
    {addNewSmurf}
)(SmurfList)