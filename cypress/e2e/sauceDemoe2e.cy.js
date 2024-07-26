/// <reference types="cypress" />

import { loginPageObject } from "./Pages/loginPage"
import { sauceDemoObject } from "./Pages/sauceDemo"

describe("Full Sauce Demo site test", function () {
    beforeEach('Login Before Each Test', () => {
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
                loginPageObject.enterUsername().type(username)
                loginPageObject.enterPassword().type(password)

                loginPageObject.clickLogin().click()
            })
    })

    it('Menu Test', () => {
        //Open the Menu
        sauceDemoObject.openMenu().should('be.enabled').click()

        //Close the Menu
        sauceDemoObject.closeMenu().should('be.enabled').click()
    })

    it('Log Out test', () => {
        //Open the Menu
        sauceDemoObject.openMenu().should('be.enabled').click()

        //Click Logout Button
        sauceDemoObject.clickLogout().should('be.visible').click()
    })

    it('Reset App State Test', () => {
        //Open the Menu
        sauceDemoObject.openMenu().should('be.enabled').click()

        //Add an Item to Cart
        sauceDemoObject.addBackpackToCart().should('be.enabled').click()

        //Remove Item from Cart
        //sauceDemoObject.removeBackpackFromCart().should('be.enabled').click()

        //Click Reset App State
        sauceDemoObject.resetAppState().should('be.visible').click()
    })

    it.skip('Filters Test', () => {
        //Select an Option
        cy.get('div.right_component select.product_sort_container').click()

        sauceDemoObject.selectFilter().each((filters, index) => {
            if (filters.val() == "hilo") {
                cy.get('select.product_sort_container option').eq(index).click({ force: true })
            }
        })

        // cy.get('select.product_sort_container option').invoke('val').each((values, index) => {
        //     if(values == "hilo") {
        //         cy.get('select.product_sort_container option').eq(index).click()
        //     }
        // })
    })

    it('Add Items to Cart /Complete Checkout', () => {
        //Array containing all items to be added to cart
        let productsArray = ["Sauce Labs Backpack", "Sauce Labs Bike Light", "Sauce Labs Onesie"]

        //Mechanism to add items to cart
        productsArray.forEach((productName) => {
            sauceDemoObject.getAllProducts().each((product, index) => {
                if (product.text() == productName) {
                    sauceDemoObject.addToCartButton().eq(index).click()
                }
            })
        })

        //Click Cart Icon
        sauceDemoObject.getCartIcon().click()

        //Click Continue Shopping
        sauceDemoObject.continueShoppingButton().click()

        //Return to Cart
        sauceDemoObject.getCartIcon().click()

        //Remove Items from Cart
        let removeProductsArray = ['Sauce Labs Bike Light']
        removeProductsArray.forEach((removeProductName) => {
            sauceDemoObject.getItemsFromCart().each((removeProduct, index) => {
                if (removeProduct.text() == removeProductName) {
                    sauceDemoObject.removeFromCartButton().eq(index).click()
                }
            })
        })

        //Click Checkout
        sauceDemoObject.checkoutButton().click()

        //Click Cancel to return to Checkout
        sauceDemoObject.cancelButton().click()

        //Return to Checkout Info
        sauceDemoObject.checkoutButton().click()

        //Fill in Checkout Info
        sauceDemoObject.getLastNameField().focus().type('Last', { log: true })
        sauceDemoObject.getFirstNameField().clear().type('First')
        sauceDemoObject.getPostalCodeField().type('909021')
    })
})