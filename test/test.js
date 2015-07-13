/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isPositiveZero = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-positive-zero', function tests() {

	it( 'should export a function', function test() {
		expect( isPositiveZero ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.isTrue( isPositiveZero( 0 ) );
		assert.isTrue( isPositiveZero( +0 ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
			'5',
			5,
			-0,
			false,
			null,
			undefined,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isFalse( isPositiveZero( values[ i ] ), values[ i ] );
		}
	});

});
