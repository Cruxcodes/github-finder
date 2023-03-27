"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var alertReducer = function alertReducer(state, action) {
  switch (action.type) {
    case 'SET_ALERT':
      return action.payload;

    case 'REMOVE_ALERT':
      return null;

    default:
      return state;
  }
};

var _default = alertReducer;
exports["default"] = _default;
//# sourceMappingURL=AlertReducer.dev.js.map
