/// <reference types="cypress" />

class search_brand { 

    searchByBrand(brand) {
        cy.get("mark").contains(brand).should('be.visible');
    }

    invalidSearchError(error){

        cy.get("p").contains("Ah, no results found for "+ error + ". Try another search?")
        .should("be.visible")
    }

    deviceSearchResults(device) {
        cy.get("mark").contains(device).should('be.visible');
    }
} 

export default search_brand;