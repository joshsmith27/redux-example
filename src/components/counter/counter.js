import React, { Component } from 'react'
import {connect} from 'react-redux';

 class counter extends Component {
     updateCount = (upDown) => {
         if(upDown === '+'){
            this.props.dispatch({type:'add'})
        }else{
            this.props.dispatch({type:'subtract'})
         }
     }
    render() {
        return (
            <div>
                <button onClick={()=>{this.updateCount('+')}}>+</button>
                {this.props.count}
                <button onClick={()=>{this.updateCount('-')}}>-</button>
            </div>
        )
    }
}

export default connect((storeObject)=>{return storeObject})(counter)
