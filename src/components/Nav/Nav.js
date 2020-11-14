import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Nav.css';

class Nav extends Component{

    render(){
            return(
                <div className="navBar">
                    <div className="topNavBar">
                        <h5>{`Username: ${this.props.username}`}</h5>
                        <button><Link className="navButton" to="/dashboard">Home</Link></button>
                        <button><Link className="navButton" to="/new">New Post</Link></button>
                    </div>
                    <button><Link className="navButton" to="/">Logout</Link></button>
                </div>
            )
        }
    
}
function mapStateToProps(state){
    return{
        username: state.username,
        picture: state.picture
    }
}
export default connect(mapStateToProps)(Nav);