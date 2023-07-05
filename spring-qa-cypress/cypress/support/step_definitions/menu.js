/// <reference types="cypress" />

import { When } from "@badeball/cypress-cucumber-preprocessor";

import menu_po from "../page_objects/menu_po";

const menu = new menu_po();

When(`I click on Sign Up button on the screen`, () => {
  menu.clickSignUp();
  cy.wait(2000);
});

When(`I click on Login button on the screen`, () => {
  menu.clickLogin();
  cy.wait(5000);
});
