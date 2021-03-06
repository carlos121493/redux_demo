import React from 'react'
import {welcome} from '../actions/index'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const Welcome = React.createClass({

  handleClick() {
  	this.props.actions.welcome();
  	console.log('helloworld1');
  },

  render(){
    console.log(this.props);
    return (<div onClick={this.handleClick}>helloworld1{this.props.ceshi}</div>);
  }
})

const stateToProps = state => ({
	ceshi: state.welcome.ceshi
});

const dispatchToProps = dispatch => ({
	actions: bindActionCreators({ welcome }, dispatch)
});

export default connect(stateToProps, dispatchToProps)(Welcome);