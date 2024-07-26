/// <reference types = "cypress"/>

export class sauceDemo {
    openMenu() {
        return cy.get('div.bm-burger-button button#react-burger-menu-btn')
    }

    closeMenu() {
        return cy.get('div.bm-cross-button button#react-burger-cross-btn')
    }

    clickLogout() {
        return cy.get('nav.bm-item-list a#logout_sidebar_link')
    }

    resetAppState() {
        return cy.get('nav.bm-item-list a#reset_sidebar_link')
    }

    addBackpackToCart() {
        return cy.get('div.pricebar button#add-to-cart-sauce-labs-backpack')
    }

    removeBackpackFromCart() {
        return cy.get('div.pricebar button#remove-sauce-labs-backpack')
    }

    selectFilter() {
        return cy.get('select.product_sort_container option')
    }

    getAllProducts() {
        return cy.get('div.inventory_item_name')
    }

    addToCartButton() {
        return cy.get('button.btn_inventory')
    }

    getCartIcon() {
        return cy.get('a.shopping_cart_link')
    }

    continueShoppingButton() {
        return cy.get('button#continue-shopping')
    }

    getItemsFromCart() {
        return cy.get('div.cart_item_label div.inventory_item_name')
    }

    removeFromCartButton() {
        return cy.get('button.cart_button')
    }

    checkoutButton() {
        return cy.get('button#checkout')
    }

    cancelButton() {
        return cy.get('div.checkout_buttons button#cancel')
    }

    getFirstNameField() {
        return cy.get('input#first-name')
    }

    getLastNameField() {
        return cy.get('input[placeholder="Last Name"]')
    }

    getPostalCodeField() {
        return cy.get('div.form_group input#postal-code')
    }

    continueButton() {
        return cy.get('div.checkout_buttons input#continue')
    }
}

export const sauceDemoObject = new sauceDemo