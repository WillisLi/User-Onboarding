const nameInput = () => cy.get('input[name = "name"]');
const passwordInput = () => cy.get('input[name = "password"]');
const emailInput = () => cy.get('input[name = "email"]');
const submitButton = () => cy.get('#submit')
const checkBox = () => cy.get('[type = "checkbox"]')

describe('App Test', function () {
    
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('check if can type in name as input', () => {
        nameInput()
            .should('have.value', "")
            .type("What's up")
            .should('have.value', "What's up")
    })

    it('check if can type in email as input', () => {
        emailInput()
            .should('have.value', '')
            .type('hey@gmail.com')
            .should('have.value', 'hey@gmail.com')
    })

    it('check if can type in password as input', () => {
        passwordInput()
            .should('have.value', '')
            .type('Banana')
            .should('have.value', 'Banana')
    })

    it('checked if user can check the tos box', () => {
        checkBox().check();
    })

    it('submit button enabled when received values', () => {
        nameInput().type("name")
        passwordInput().type("password")
        emailInput().type("email@gmail.com")
        checkBox().check();
        submitButton().should('not.be.disabled')
    })

    it('check for form validation is one input is empty', () => {
        nameInput().type("name")
        emailInput().type("email@gmail.com")
        checkBox().check();
        submitButton().should('be.disabled')
    })
})