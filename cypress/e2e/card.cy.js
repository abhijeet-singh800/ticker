describe('Testing Cards', () => {
    beforeEach(() => {
        cy.viewport(600, 700)
        cy.clearLocalStorage()
        cy.setup()
    })

    it('Testing Mark Completed', () => {
        cy.get('[data-cy="card-drop"][id="1"]').click()
        cy.selectDrop('Mark as Completed')
        cy.window().then((window) => {
            const task = JSON.parse(window.localStorage.getItem('task')).find(task => task.id == 1)
            cy.wrap(task.completed).should('eq', true)
        })
    })

    it('Testing Mark Pending', () => {
        cy.get('[data-cy="card-drop"][id="5"]').click()
        cy.selectDrop('Mark as Pending')
        cy.window().then((window) => {
            const task = JSON.parse(window.localStorage.getItem('task')).find(task => task.id == 5)
            cy.wrap(task.completed).should('eq', false)
        })

    })

    it('Removing the Star', () => {
        cy.get('[data-cy="card-drop"][id="1"]').click()
        cy.selectDrop('Remove the Star')
        cy.window().then((window) => {
            const task = JSON.parse(window.localStorage.getItem('task')).find(task => task.id == 1)
            cy.wrap(task.stared).should('eq', false)
        })
    })

    it('Adding the Star', () => {
        cy.get('[data-cy="card-drop"][id="2"]').click()
        cy.selectDrop('Mark as Stared')
        cy.window().then((window) => {
            const task = JSON.parse(window.localStorage.getItem('task')).find(task => task.id == 2)
            cy.wrap(task.stared).should('eq', true)
        })
    })

    it('Testing Delete', () => {
        cy.get('[data-cy="card-drop"][id="1"]').click()
        cy.selectDrop('Delete this Task')

        cy.get('[data-cy="card"]').should('have.length', 7)
    })


})