
# range

  Return a range of integers

## Installation

    $ component install component/range

## API

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

## License

  MIT
