/// <reference types="cypress" />

import { When } from "@badeball/cypress-cucumber-preprocessor";
import discover_po from "../page_objects/discover_po";
// const discover_page = new discover_po();

When(`I enter sitemap {} in the url field then I should get a response code of {}`, (url, response_code) => {

    const statusCode = Number(response_code);

    cy.request({url, failOnStatusCode: false})
    .its('status')
    .should('equal', statusCode)
});