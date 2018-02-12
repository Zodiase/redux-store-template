# Usage

This template is designed to be simple and basically plug-and-play.

`initial-state.js` is used to produce the initial state, while `index.js` takes in the initial state, the action definitions and the reducers and exports the store instance and all the action definitions along the way.

This template uses `PropTypes` for type checking and expects all action definitions to specify the schema of the payload in the `payloadSchema` property. See `actions/index.js` for examples.

For simplicity, this template uses the reducer with the same name as the action type. However, this does not prevent you from composing multiple reducers for one action.

# Dependency

- `prop-types`
- `redux`
