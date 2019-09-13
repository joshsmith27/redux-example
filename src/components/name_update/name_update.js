import React, { Component } from 'react'
import {connect} from 'react-redux';

class name_update extends Component {
    handleChange = (e) => {
        this.props.dispatch({type:'UPDATE_NAME', payload:e.target.value})
    }
    render() {
        return (
            <div>
                <input type="text" name="name" value={this.props.name} onChange={this.handleChange}/>
                {this.props.name}
            </div>
        )
    }
}

export default connect((storeObject)=>{return storeObject})(name_update)
