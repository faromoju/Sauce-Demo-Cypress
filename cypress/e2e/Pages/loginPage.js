/// <reference types="cypress" />

export class loginPage {
    enterUsername() {
        return cy.get('input#user-name')
    }

    enterPassword() {
        return cy.get('input#password')
    }

    clickLogin() {
        return cy.get('input#login-button')
    }
}

export const loginPageObject = new loginPage