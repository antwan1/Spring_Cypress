/// <reference types="cypress" />

import { Then } from "@badeball/cypress-cucumber-preprocessor";

import auth0_po from "../page_objects/auth0_po";

const auth0 = new auth0_po();

Then(`I should be navigated to auth0 origin and sign up successfully with valid credentials`, () => {
  auth0.signUp();
});

Then(`I should write the email address in the file`, () => {
  auth0.writeEmailsInFile();
});

