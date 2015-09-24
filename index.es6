/** @module envee */

const env = process.env;

// /**
//  * handler for `process.env[name]`
//  * @constructor
//  * @param  {String} name - environmental variable name
//  */
export default ( name ) => ({
  /**
   * value setter
   * @param  {*} val - value to set `process.env[name]` to
   * @return {*}       current value of `process.env[name]`
   */
  set value( val ) {
    return env[ name ] = val;
  },

  /**
   * value getter
   * @return {*} current value of `process.env[name]`
   */
  get value() {
    return env[ name ];
  },

  /**
   * provides a fallback value for `process.env[name]`, if it's not defined
   * keep in mind, that it will NOT change `process.env[name]` itself
   * @param  {*} value - default (fallback) value
   * @return {*}         current or fallback value
   */
  default( value ) {
    return name in env ? env[ name ] : value;
  },

  /**
   * returns current value of `process.env[name]`, if it's present,
   * throws {ReferenceError} otherwise
   * @throws {ReferenceError} throws when the `process.env[name]` is undefined
   * @return {*}              current value
   */
  required() {
    if ( !( name in env ) ) {
      throw new ReferenceError( `process.env['${name}'] is undefined` );
    }

    return env[ name ];
  }
})
