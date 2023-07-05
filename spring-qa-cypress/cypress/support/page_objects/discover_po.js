/// <reference types="cypress" />
import Utility from "../utility";

class discover_po {
  navigateToDiscover() {
    cy.viewport(1500, 1500);
    let url = new Utility().getBaseUrl();
    url == undefined || url == null || url == ""
      ? cy.visit("/")
      : cy.visit(url);
  }

  searchByBrand(brand) {
    cy.get("#q")
      .should("have.attr", "placeholder", "e.g. iPhone 14")
      .type(brand + "{enter}");
  }

  clickMenuIcon() {
    cy.get('[data-test="icon-menu"]').click();
  }

  selectPopularDevice(modelType) {
    cy.visit("/" + "tech/phones/apple");
    cy.wait(2000);

    //📍The below code is for the discover page which has been restricted on the website.
    //I am not removing it as it might be used in future.

    // cy.get('[data-test="discover-device-cards-list"]')
    // .contains("Phones").click()

    // cy.get('[data-test="discover-phone-brands-list"]')
    // .contains("Apple").click()

    // cy.get('[data-test="device-type-brand"]')
    // .contains("View all").click()

    cy.get('[data-test="discover-device-card-list"]')
      .contains(modelType)
      .click();
  }
}

export default discover_po;
