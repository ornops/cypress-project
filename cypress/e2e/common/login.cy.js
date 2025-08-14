/// <reference types="cypress"/>

describe('Login Test Suite', () => {

	it('Valid Login Credentials', () => {

		cy.visit('/');
		cy.get('#user-name').type('joshtest');
		cy.contains('Login').click();

	})
})