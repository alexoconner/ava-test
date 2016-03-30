
import test from 'ava';
import fooBarTest from './foo-bar-test';

test('my first test', t => {

    t.plan(2);

    let bohho = [3, 5];
    let result = fooBarTest(bohho);
    let expected = ['foo', 'bar'];

    t.same( result, expected, 'test' );
    t.same( fooBarTest([5,10,15]), ['bar', 'bar', 'bar'], 'test' );

});
