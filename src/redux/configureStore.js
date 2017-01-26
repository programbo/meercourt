import { createStore, applyMiddleware, compose } from 'redux'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import thunk from 'redux-thunk'

import { firebase } from '../config';
import reducers from './reducers'

export default (initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const createStoreWithMiddleware = composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(getFirebase)),
    reactReduxFirebase(firebase.config, firebase.settings)
  )(createStore)
  const store = createStoreWithMiddleware(reducers)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store;
}





// import { createStore, applyMiddleware, compose } from 'redux'
// import rootReducer from '../reducers'
// import { firebase as fbConfig } from '../config'
// import { syncHistory } from 'react-router-redux'
// import { reactReduxFirebase } from 'react-redux-firebase' // >= v0.1.1
//
// export default function configureStore (initialState, history) {
//   const reduxRouterMiddleware = syncHistory(history)
//   const createStoreWithMiddleware = compose(
//     applyMiddleware(reduxRouterMiddleware),
//     reactReduxFirebase(fbConfig,
//       {
//         userProfile: 'users',
//         enableLogging: false
//       }
//     ),
//     typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
//   )(createStore)
//   const store = createStoreWithMiddleware(rootReducer, initialState)
//
  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     const nextRootReducer = require('../reducers')
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }
//
//   return store
// }
