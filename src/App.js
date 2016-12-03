import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import logo from './logo.svg'
import './App.scss'

import { incrementCounter, decrementCounter } from './redux/actions'

const mapStateToProps = ({ counter }) => ({
  counter
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Countertown: {this.props.counter}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.props.incrementCounter}>Increment</button>
        <button onClick={this.props.decrementCounter}>Decrement</button>
        <button onClick={this.props.addFiveToCounter}>Add 5</button>
        <button onClick={this.props.subtractFiveFromCounter}>Subtract 5</button>
        <div>
          <Link to="/" activeClassName="active" onlyActiveOnIndex>Home</Link>
          |
          <Link to="/things" activeClassName="active">Go to Things</Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
