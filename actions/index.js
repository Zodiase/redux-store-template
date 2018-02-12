/**
 * This file exports all actions as one collection.
 */

import PropTypes from 'prop-types';

// You can define an action in this file.
export const FOOBAR = {
  type: 'FOOBAR',
  // This is used to validate the `action`
  payloadSchema: {
    secret: PropTypes.string.isRequired,
  },
};

// Or pull in definitions from other modules.
// export * from './foobar';
