# immutable-shuffle

> Fisher-Yates shuffle for immutable.js

[Immutable.js](http://facebook.github.io/immutable-js/) is an awesome, but does not provide a way to shuffle lists out of the box.

This module implements [Fisher-Yates Shuffle](https://bost.ocks.org/mike/shuffle/) for immutable.js. Some say it is [the only way to shuffle an array in JavaScript](https://www.frankmitchell.org/2015/01/fisher-yates/).

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Performance](#performance)
- [Contribute](#contribute)
- [License](#license)

## Install

```
npm install immutable-shuffle
```

## Usage

```
import shuffle from 'immutable-shuffle';

const list = Immutable.fromJS([1, 2, 3, 4, 5]);
const shuffled = shuffle(list);
```

## Performance

A naive shuffle could be implemented as follows:

```
const shuffled = list.sortBy(Math.random);
```

Compared to a fisher-yates shuffle this implementation is much slower.  
On a Macbook Air 2013:

```
array of 100 elements
naive: 2.503ms
fisher-yates: 0.568ms

array of 1000 elements
naive: 10.218ms
fisher-yates: 4.500ms

array of 10000 elements
naive: 30.075ms
fisher-yates: 13.920ms

array of 100000 elements
naive: 357.804ms
fisher-yates: 84.567ms

array of 1000000 elements
naive: 2877.592ms
fisher-yates: 833.101ms
```

## Contribute

PRs are very welcome.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © Tobias Kloht
