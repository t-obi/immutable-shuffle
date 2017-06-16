import test from 'ava';
import Immutable from 'immutable';

import shuffle from './index.js';

test('not equal after shuffle', t => {
	const list = Immutable.fromJS([...Array(10).keys()]);
	for (var i = 1000; i >= 0; i--) {
		let result = shuffle(list);
		t.false(Immutable.is(list, result));
	}
});

test('huge list', t => {
	const list = Immutable.fromJS([...Array(999999).keys()]);
	let result = shuffle(list);
	t.false(Immutable.is(list, result));
});

test('empty list', async t => {
	const list = Immutable.fromJS([]);
	t.notThrows(() => {
		const result = shuffle(list);
		t.true(Immutable.is(list, result));
	});
});

test('single element list', t => {
	const list = Immutable.fromJS(['1']);
	t.notThrows(() => {
		const result = shuffle(list);
		t.true(Immutable.is(list, result));
	});
});
