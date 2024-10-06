const { wrap } = require("module")

describe('Testing the Redirects for the App', () => {
    beforeEach(() => {
        cy.viewport(600, 700)
        cy.clearLocalStorage()
        cy.setup()
    })

    it('Redirects for Pressing Buttons', () => {
        cy.get('[data-cy="home-settings-button"]').click()
        cy.url().then((url) => {
            expect(url).to.include('/settings')
        })

        cy.visit('/')
        cy.get('[data-cy="home-new-button"]').click()
        cy.url().then((url) => {
            expect(url).to.include('/new')
        })

        cy.visit('/')
        cy.get('[data-cy="home-taskList-filter"]').click()

        cy.selectClick('Add a New Task List')
        cy.url().should('include', '/list')

    })

    it('Page Not Found Test', () => {
        cy.visit('/hello')
        cy.get('h1').should('contain', '404')
        cy.get('h2').should('contain', 'Page not found')
        cy.get('button').click()

        cy.url().should('eq', Cypress.config('baseUrl') + '/')
    })

    it('Testing Card Redirects', () => {
        cy.get('[data-cy="card"][id=1]').click()
        cy.url().should('include', '/task/1')

        cy.visit('/')
        cy.get('[data-cy="card"][id=8]').click()
        cy.url().should('include', '/task/8')

        cy.visit('/')
        cy.get('[data-cy="card"][id=5]').click()
        cy.url().should('include', '/task/5')
    })
})