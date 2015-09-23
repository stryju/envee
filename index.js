"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var env = process.env;

exports["default"] = function (name) {
  return Object.defineProperties({

    required: function required() {
      if (!(name in env)) {
        throw new ReferenceError("process.env['" + name + "'] is undefined");
      }

      return env[name];
    },

    "default": function _default(value) {
      return name in env ? env[name] : value;
    }
  }, {
    value: {
      get: function get() {
        return env[name];
      },
      set: function set(v) {
        return env[name] = v;
      },
      configurable: true,
      enumerable: true
    }
  });
};

module.exports = exports["default"];
