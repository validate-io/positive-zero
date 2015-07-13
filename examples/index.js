'use strict';

var isPositiveZero = require( './../lib' );

console.log( isPositiveZero( 0 ) );
// returns true

console.log( isPositiveZero( -0 ) );
// returns false

console.log( isPositiveZero( '' ) );
// returns false

console.log( isPositiveZero( null ) );
// returns false
