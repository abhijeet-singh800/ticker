describe('Tests for New Page', () => {
    beforeEach(() => {
        cy.viewport(600, 700)
        cy.clearLocalStorage()
        cy.setup()
    })

    it('Tests for New Task Page', () => {
        cy.get('[data-cy="home-new-button"').click()

        cy.get('[data-cy="newform-button-save"]').click()

        cy.get('[data-cy="newform-title-message"]').should('be.visible')
        cy.get('[data-cy="newform-list-message"]').should('be.visible')
        cy.get('[data-cy="newform-desc-message"]').should('be.visible')

        cy.get('[data-cy="newform-title-input"]').type('Test Title 1')
        cy.get('[data-cy="newform-button-save"]').click()
        cy.get('[data-cy="newform-title-message"]').should('not.exist')

        cy.get('[data-cy="newform-desc-input"]').type('Test Description 1')
        cy.get('[data-cy="newform-button-save"]').click()
        cy.get('[data-cy="newform-desc-message"]').should('not.exist')

        cy.get('[data-cy="newform-list-div"]').within(() => {
            cy.get('select[aria-hidden="true"]').select('List1', { force: true })
        })

        cy.get('[data-cy="newform-button-save"]').click()

        cy.window().then((window) => {
            cy.wrap(JSON.parse(window.localStorage.getItem('task'))[0].title).should('eq', 'Test Title 1')
            cy.wrap(JSON.parse(window.localStorage.getItem('task'))[0].stared).should('eq', false)
            cy.wrap(JSON.parse(window.localStorage.getItem('task'))[0].notes).should('eq', 'Test Description 1')
            cy.wrap(JSON.parse(window.localStorage.getItem('task'))[0].listId).should('eq', '1')
            cy.wrap(JSON.parse(window.localStorage.getItem('task'))[0].completed).should('eq', false)
        })
    })
})