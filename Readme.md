# envee

"better" handling of `process.env.*`

## usage

```js
import envee from 'envee';

// return current value of `process.env.FOO`
envee( 'FOO' ).value;

// set and return value of `process.env.FOO`
envee( 'FOO' ).value = 'foo';

// return current value of `process.env.BAR` or fallback to given default value
envee( 'BAR' ).default( 'bar fallback' );

// return current value of `process.env.BAZ` or throw an error, if it's undefined
envee( 'BAZ' ).required();
```

## TODO
- [ ] better docs
- [ ] tests

## license
MIT
