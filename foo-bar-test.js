
export default function fooBarTest( numbers ) {

    /**
     * check for array
     */
    if ( !Array.isArray(numbers) ) {
        throw new Error('numbers must be an array');
    }

    /**
     * check if numbers are integers
     */
    numbers.forEach( ( val, key ) => {
        if ( !Number.isInteger(val)) {
            throw new Error('array must contain integers only');
        }
    });

    // if all is good above map the list and return a new one
    return numbers.map( ( val, key ) => {
        if ( val % 3 === 0 && val % 5 === 0 ) {
            return 'quux';
        }
        if ( val % 3 === 0 ) {
            // number can be divided by 3
            return 'foo';
        }
        if ( val % 5 === 0 ) {
            // number can be divided by 5
            return 'bar';
        }
        return val;
    });

}
