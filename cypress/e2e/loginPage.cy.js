/// <reference types="cypress" />

const { loginPageObject } = require("./Pages/loginPage")

describe('Flight Website', function () {
  it('Login Page', () => {
    cy.visit("/")

    //Get Username and Password from Page
    let username
    let password

    //Extract Username
    cy.get('div#login_credentials.login_credentials').invoke('text').then((usernames) => {
      username = usernames.split("out_user")[1].split("performance")[0]
    })

    //Extract Password
    cy.get('div.login_password').invoke('text').then((passwords) => {
      password = passwords.split(":")[1].trim()
    })

    //Login Actions
      .then(() => {
        loginPageObject.enterUsername().should('be.empty').type(username)
        loginPageObject.enterPassword().should('be.empty').type(password)

        loginPageObject.clickLogin().should('be.visible').and('be.enabled').click()
      })
  })
})