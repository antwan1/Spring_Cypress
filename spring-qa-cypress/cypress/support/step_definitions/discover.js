/// <reference types="cypress" />

import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import discover_po from "../page_objects/discover_po";
const discover_page = new discover_po();

Given(`I navigate to the spring home page`, () => {
  discover_page.navigateToDiscover();
  cy.wait(2000)
});

When("I select device from the device selection page {}", (modelType) => {
  discover_page.selectPopularDevice(modelType);
  cy.wait(2000);
});

When(
  "the user inputs the invalid search criteria ex - {} and hits enter",
  (failedSearch) => {
    discover_page.searchByBrand(failedSearch);
  }
);
When(`I enter {} in the search and press enter`, (brand) => {
  discover_page.searchByBrand(brand);
});

When(`User enters {} in the search and press enter`, (device) => {
  discover_page.searchByBrand(device);
});

When(`I click on menu icon`, () =>{
  discover_page.clickMenuIcon()
})