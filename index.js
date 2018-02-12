import PropTypes from 'prop-types';
import { createStore } from 'redux';

import * as reducers from './reducers';
import * as actions from './actions';
import initialState from './initial-state';

const reducer = (state = initialState, action) => {
  let nextState = {
    ...state,
  };

  if (action.type in reducers) {
    PropTypes.checkPropTypes(
      // typeSpecs
      actions[action.type].payloadSchema,
      // values
      action,
      // location
      'action',
      // componentName
      `reducer:${action.type}`
    );

    nextState = reducers[action.type](nextState, action);
  }

  return nextState;
};

const store = createStore(
  reducer,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
export * as actions from './actions';
