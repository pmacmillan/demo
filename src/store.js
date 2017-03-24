import { compose, applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import DevTools from './containers/DevTools'

const INITIAL_STATE = {
  current: 0,
  history: [{
    xIsNext: true,
    squares: Array(9).fill(null)
  }]
}

function reducer (state = INITIAL_STATE, action) {
  if (action.type === 'setState') {
    return Object.assign({}, state, action.payload)
  } else if (action.type === 'jumpTo') {
    return Object.assign({}, state, { current: action.payload.n })
  }

  return state
}

export default function () {
  let enhancer = compose(
    applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })),
    DevTools.instrument()
  )

  let store = createStore(reducer, undefined, enhancer)

  return store
}

