const Immutable = require('immutable');
const shuffle = require('./index');

run([100, 1000, 10000, 100000, 1000000]);


function run(lengths) {
  lengths.forEach(length => {
    const list = Immutable.fromJS([...Array(length).keys()]);
    console.log(`test for array of ${length} elements`);
    naive(list);
    fisherYates(list);
  })
}

function naive(list) {
  console.time('naive');
  const shuffled = list.sortBy(Math.random);
  console.timeEnd('naive');
}

function fisherYates(list) {
  console.time('fisher-yates');
  const shuffled = shuffle(list);
  console.timeEnd('fisher-yates');
}