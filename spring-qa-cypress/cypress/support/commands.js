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


//ℹ️ This code is for cross origin testing. Keeping this here for any future reference.
//We can move this to custom command at later time. ℹ️
Cypress.Commands.add("crossOriginUserSignUp", (email, password) => {
  // const args = {email, password}
  // cy.origin("https://login.spring.co.uk/login", {args} ,({email, password}) => {
  //   cy.title().should("include", "Sign In with Auth0");
  //   cy.get("#1-email").type(email, { log: false });
  //   cy.get('[placeholder="Password"]').type(password, { log: false });
  //   // cy.get('[name="submit"]').click()
  // });
});

Cypress.Commands.add("userSignUp", (email, password) => {
  cy.intercept("https://login.spring.co.uk/user/ssodata").as("getssoData");
  cy.title().should("include", "Sign In with Auth0");
  // cy.wait("@getssoData")
  cy.get("#1-email").should("be.visible").type(email, { log: false });
  cy.get('[placeholder="Password"]').type(password, { log: false });
  cy.get('[name="submit"]').click()
  cy.url().should("include", "/account/tech");
});
