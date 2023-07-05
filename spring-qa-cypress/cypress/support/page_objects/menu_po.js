/// <reference types="cypress" />

class menu_po { 

    clickSignUp() {
        cy.get('a[href="/sign-up"]')
        .click()
    }

    clickLogin() {
        cy.get('[data-test="nav-burger-menu-buttons"]')
        .contains('Login')
        .click()
    }

} 

export default menu_po;