import React from "react";
import PropTypes from 'prop-types';
class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          message: 'Quang đẹp trai nhất thế giới!!!',
          isShow:true
        };
      }
    toggle(){
          this.setState({isShow:!this.state.isShow});
      }
    render(){
        return(
        <div>
            <p>{this.state.isShow?this.state.message:''}</p>
            <button onClick={()=>this.toggle()}>Show/Hide message</button>
        </div>
    );
    }
}
export default Test;