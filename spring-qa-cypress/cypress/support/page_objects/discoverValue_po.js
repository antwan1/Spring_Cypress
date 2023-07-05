/// <reference types="cypress" />
// / <reference types="cypress/xpath" />

class discoverValue_po {
  selectStorage(storage) {
    cy.get("[data-test='tech-valuation-question']")
    .contains(storage)
    .click();
  }

  selectNetwork(network){
    cy.get('[data-index="1"]')
    .find(`[data-test="tech-valuation-question"]`)
    .contains(network)
    .click()
  }

  selectBrandNew(brandNew){
    cy.get('[data-index="2"]')
    .find(`[data-test="tech-valuation-question"]`)
    .contains(brandNew)
    .click()
  }

  selectPassCode(passCode){
    cy.get('[data-index="9"]')
    .find(`[data-test="tech-valuation-question"]`)
    .contains(passCode)
    .click()
  }

  accountSettingModel(modal){
    cy.get('[data-test="modal-layout-buttons"]').contains(modal).click({force: true})
  }

  deviceQuotationModal(){
    cy.get('[data-test="modal-card"]').should('be.visible')
    // validating the continue button
    cy.get('[data-test="modal-card"]')
    .contains('Continue')
    .should('be.visible')
  }
  
}
export default discoverValue_po;
