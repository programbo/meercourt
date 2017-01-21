import React, { Component } from 'react';
import { connect } from 'react-redux';
import CourtSummary from '../CourtSummary';

@connect()
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Home sweet home!</h1>
        <CourtSummary />
        <CourtSummary />
        <CourtSummary />
      </div>
    )
  }
}
