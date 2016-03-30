
import test from 'ava';
import fooBarTest from './foo-bar-test';

test('my first test', t => {

    t.plan(1);

    let bohho = [1, 2, 3, 4, 5, 15];
    let result = fooBarTest(bohho);
    let expected = [1, 2, 'foo', 4, 'bar', 'quux'];

    t.same( result, expected, 'test' );

});
