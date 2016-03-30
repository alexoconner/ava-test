
export default function fooBarTest( numbers ) {

    /**
     * check for array
     */
    if ( !Array.isArray(numbers) ) {
        console.error('numbers must be an array');
        return false;
    }

    /**
     * check if numbers are integers
     */
    numbers.forEach( ( val, key ) => {
        if ( !Number.isInteger(val)) {
            console.error('array must contain integers only');
        }
    });

    // if all is good above map the list and return a new one
    return numbers.map( ( val, key ) {
        if ( val % 3 === 0 ) {
            // number can be divided by 3
            return 'foo';
        }
        if ( val % 3 === 0 ) {
            // number can be divided by 5
            return 'bar';
        }

    });

}
