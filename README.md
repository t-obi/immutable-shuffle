# immutable-shuffle

> Fisher-Yates shuffle for immutable.js

[Immutable.js](http://facebook.github.io/immutable-js/) is an awesome, but does not provide a way to shuffle lists out of the box.

This module implements [Fisher-Yates Shuffle](https://bost.ocks.org/mike/shuffle/) for immutable.js. Some say it is [the only way to shuffle an array in JavaScript](https://www.frankmitchell.org/2015/01/fisher-yates/).

## Table of Contents

- [Install](#install)
- [Usage](#usage)
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

## Contribute

PRs are very welcome.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © Tobias Kloht
