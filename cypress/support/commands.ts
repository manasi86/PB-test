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
const username  = Cypress.env('username');
const password  =  Cypress.env('pass');
const url = Cypress.env('url')

Cypress.Commands.add('visitURLUsingAuthentication', () => {
    cy.visit(`https://${username}:${password}@${url}`)
})

Cypress.Commands.add('visitURLUsingHref', (href) => {
    cy.visit(`https://${username}:${password}@${url}${href}`)
})

Cypress.Commands.add('getElementByClass', (selector) => {
    return cy.get(`*[class^= "${selector}"]`);
})

Cypress.Commands.add('getElementByDataTestId', (selector) => {
    return cy.get(`[data-testid= "${selector}"]`);
})

Cypress.Commands.add('getElementById', (selector) => {
    return cy.get(`[id= "${selector}"]`);
})

Cypress.Commands.add('closeCookiesBanner', () =>{
    cy.getElementById('cookiebanner').within(() =>{
        cy.getElementByClass('button button--small button--outline-dark').click();
    })
})
