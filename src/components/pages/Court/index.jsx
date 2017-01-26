import React, { Component } from 'react';
import CaseSummary from '../../CaseSummary';

class Court extends Component {
  render() {
    return (
      <div className="court">
        <h1>Open cases</h1>
        <CaseSummary/>
        <CaseSummary/>
        <CaseSummary/>
      </div>
    )
  }
}

export default Court;
