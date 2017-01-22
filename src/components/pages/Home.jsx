import React, { Component } from 'react';
import { connect } from 'react-redux';
import CourtSummary from '../CourtSummary';
import { firebaseConnect, helpers } from 'react-redux-firebase'
const { dataToJS, isLoaded, isEmpty } = helpers

@firebaseConnect( [
  '/courts'
])
@connect(
  ({ firebase }) => ({
    courts: dataToJS(firebase, 'courts')
  })
)
export default class Home extends Component {
  render() {
    const { courts, firebase } = this.props;
    const courtsList = !isLoaded(courts)
      ? 'Loading courts'
      : isEmpty(courts)
        ? 'Courts list is empty'
        : Object.keys(courts).map((key, id) => {
          console.log('key', key); // eslint-disable-line no-console
          console.log('id', id); // eslint-disable-line no-console
          return <CourtSummary id={id} key={key} court={courts[key]}/>
        })
    console.log('this.props', this.props); // eslint-disable-line no-console
    console.log('courtsList', courtsList); // eslint-disable-line no-console
    console.log('firebase', firebase); // eslint-disable-line no-console
    return (
      <div className="home">
        <h1>Home sweet home!</h1>
        {courtsList}
      </div>
    )
  }
}
