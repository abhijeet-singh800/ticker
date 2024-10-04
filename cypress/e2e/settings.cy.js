describe('Settings Page Tests', () => {
    beforeEach(() => {
        cy.viewport(600, 700)
        cy.clearLocalStorage()
    })

    it('Testing Settings Page with Fixtures Data', () => {
        cy.setup()

        cy.fixture('settings').then((settings) => {
            cy.wrap(settings.first_name).as('firstName')
            cy.wrap(settings.last_name).as('lastName')
            cy.wrap(settings.nick_name).as('nickName')
        })

        cy.get('[data-cy="home-settings-button"]').click()

        cy.get('@firstName').then((firstName) => {
            cy.get('[data-cy="nameForm-firstName"]').should('have.value', firstName)
        })

        cy.get('@lastName').then((lastName) => {
            cy.get('[data-cy="nameForm-lastName"]').should('have.value', lastName)
        })

        cy.get('@nickName').then((nickName) => {
            cy.get('[data-cy="nameForm-nickName"]').should('have.value', nickName)
        })

        cy.get('[data-cy="nameForm-firstName"]').clear().type('newName')
        cy.get('[data-cy="nameForm-lastName"]').clear().type('SirName')
        cy.get('[data-cy="nameForm-nickName"]').clear().type('nicky')

        cy.get('[data-cy="nameform-update-button"]').click()
        cy.visit('/')
        cy.get('[data-cy="greet-name"]').should('contain', 'nicky')

        cy.visit('/settings')
        cy.get('[data-cy="nameForm-firstName"]').should('have.value', 'newName')
        cy.get('[data-cy="nameForm-lastName"]').should('have.value', 'SirName')
        cy.get('[data-cy="nameForm-nickName"]').should('have.value', 'nicky')

        cy.get('[data-cy="nameform-delete-button"]').click()

        cy.window().then((window) => {
            expect(window.localStorage.getItem('task')).to.eql('[]')
            expect(window.localStorage.getItem('taskList')).to.eql('[]')
        })
    })
})