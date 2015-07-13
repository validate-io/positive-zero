'use strict';

/**
* FUNCTION: isPositiveZero( value )
*	Validates if a value is positive zero.
*
* @param {*} value - value to validate
* @returns {Boolean} boolean indicating if a value is positive zero
*/
function isPositiveZero( value ) {
	return value === 0 && 1/value === Number.POSITIVE_INFINITY;
} // end FUNCTION isPositiveZero()


// EXPORTS //

module.exports = isPositiveZero;
