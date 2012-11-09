
# range

  Return a range of integers

## Installation

    $ component install component/range

## API ##

### range(start, end, step, inclusive) ###
Returns an array of integers from `start` to `end` by `step`. The default is for step to be 1. The range will be exclusive of the `end` value unless `inclusive` is truthy. 

## Examples ##

Exclusive range:

```js
range(5, 10);
// => [5,6,7,8,9]
```

Inclusive range (truthy value):

```js
range(5, 10, true);
range(5, 10, 'inclusive');
// => [5,6,7,8,9,10]
```

Inclusive range using step:

```js
range(50, 10, -10, true);
// => [50,40,30,20,10]
```

## License

  MIT
