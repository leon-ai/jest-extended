'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jestMatcherUtils = require('jest-matcher-utils');

var _predicate = require('./predicate');

var _predicate2 = _interopRequireDefault(_predicate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const passMessage = (actual, expected) => () => (0, _jestMatcherUtils.matcherHint)('.not.toIncludeSameMembers') + '\n\n' + 'Expected list to not exactly match the members of:\n' + `  ${(0, _jestMatcherUtils.printExpected)(expected)}\n` + 'Received:\n' + `  ${(0, _jestMatcherUtils.printReceived)(actual)}`;

const failMessage = (actual, expected) => () => (0, _jestMatcherUtils.matcherHint)('.toIncludeSameMembers') + '\n\n' + 'Expected list to have the following members and no more:\n' + `  ${(0, _jestMatcherUtils.printExpected)(expected)}\n` + 'Received:\n' + `  ${(0, _jestMatcherUtils.printReceived)(actual)}`;

exports.default = {
  toIncludeSameMembers: (actual, expected) => {
    const pass = (0, _predicate2.default)(actual, expected);
    if (pass) {
      return { pass: true, message: passMessage(actual, expected) };
    }
    return { pass: false, message: failMessage(actual, expected) };
  }
};