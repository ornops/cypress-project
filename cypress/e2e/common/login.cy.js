/// <reference types="cypress"/>

describe('Login Test Suite', () => {

	it('Valid Login Credentials', () => {

		cy.visit('/');
		cy.get('#user-name').type('standard_user');
		cy.get('#password').type('secret_sauce');
		cy.contains('Login').click();


	})

	it('Assert App Logo Title', () => {

		cy.wait(3000);
		cy.get('.app_logo').should('contain', 'Swag Labs');

	})


	// it('Save subject of the command', () => {

	// 	cy.visit('/');
	// 	cy.get('#user-name').type('joshtest');
	// 	cy.contains('Login').click();

	// })
})