import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router';
import { firebaseConnect, helpers } from 'react-redux-firebase'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import LoginForm from './components/auth/LoginForm';

import { incrementCounter, decrementCounter } from './redux/actions'
const { pathToJS } = helpers

const mapStateToProps = ({ counter, firebase }) => ({
  counter,
  authError: pathToJS(firebase, 'authError'),
  auth: pathToJS(firebase, 'auth'),
  profile: pathToJS(firebase, 'profile')
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  incrementCounter: () => {
    dispatch(incrementCounter())
  },
  decrementCounter: () => {
    dispatch(decrementCounter())
  },
  addFiveToCounter: () => {
    dispatch(incrementCounter(5))
  },
  subtractFiveFromCounter: () => {
    dispatch(decrementCounter(5))
  }
})

@firebaseConnect(['/courts'])
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  render() {
    console.log('this.props.profile', this.props.profile); // eslint-disable-line no-console
    console.log('this.props.auth', this.props.auth); // eslint-disable-line no-console
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="Mob Justice"
            iconElementRight={<FlatButton label="Sign out" />}
          />
          {/* <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Countertown: {this.props.counter}</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload :(
          </p>
          <button onClick={this.props.incrementCounter}>Increment</button>
          <button onClick={this.props.decrementCounter}>Decrement</button>
          <button onClick={this.props.addFiveToCounter}>Add 5</button>
          <button onClick={this.props.subtractFiveFromCounter}>Subtract 5</button>
          <div>
            <Link to="/" activeClassName="active" onlyActiveOnIndex>Home</Link>
            |
            <Link to="/court/coffee-beans" activeClassName="active">Coffee Beans`</Link>
          </div> */}
          <LoginForm/>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}
