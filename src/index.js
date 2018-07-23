const {T, F, __, map, pipe, join, split, equals, ifElse, always, modulo, identity} = require('ramda');

const mod3 = modulo(__, 3)
const mod5 = modulo(__, 5)
const mod15 = modulo(__, 15)

const is_mod3 = ifElse(pipe(mod3, equals(0)))(T)(F);
const is_mod5 = ifElse(pipe(mod5, equals(0)))(T)(F);
const is_mod15 = ifElse(pipe(mod15, equals(0)))(T)(F);

const to_fizz = ifElse(is_mod3)(always("fizz"))(identity);
const to_buzz = ifElse(is_mod5)(always("buzz"))(identity);
const to_fizzbuzz = ifElse(is_mod15)(always("fizzbuzz"))(identity);

const fizzbuzz = pipe(to_fizzbuzz, to_fizz, to_buzz);

module.exports = pipe(
  split(','),
  map(fizzbuzz),
  join(',')
);

