// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('loginOrange', (username, password) => { 
    
    cy.get("[name='username']").type(username)
        cy.get("[name='password']").type(password)
        cy.get("[type='submit']").click()
 })

 // custom command for locator
 Cypress.Commands.add('validateLocator', (locator) => {
    cy.get(locator).should('be.visible');
  })

  // custom command for contains the value
  Cypress.Commands.add('containValue', (value) => { 

    cy.contains(value).should('be.visible');

 })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress"/>

        