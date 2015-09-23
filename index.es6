const env = process.env;

export default ( name ) => ({
  get value() {
    return env[ name ];
  },

  set value( v ) {
    return env[ name ] = v;
  },

  required() {
    if ( !( name in env ) ) {
      throw new ReferenceError( `process.env['${name}'] is undefined` );
    }

    return env[ name ];
  },

  default( value ) {
    return name in env ? env[ name ] : value;
  }
})
