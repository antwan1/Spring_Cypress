import { faker } from "@faker-js/faker";
/// <reference types="cypress" />

class auth0_po {

  constructor() {
    let randomNumber = faker.random.numeric(4);
    this.email = faker.internet.email("cyspringqa", randomNumber, "yopmail.com");
    this.password = faker.internet.password();
  }

  signUp()  {
    cy.userSignUp(this.email, this.password);
  }

  writeEmailsInFile() {
    let date = new Date();
    let formattedCurrentDate = date.toJSON().slice(0,10);
    let filePath = "cypress/fixtures/emails-" + formattedCurrentDate + ".csv";
    cy.writeFile(filePath, this.email + "\r\n", { flag: "a+" });
  }
}

export default auth0_po;
