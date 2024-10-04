describe('New Task List', () => {
    beforeEach(() => {
        cy.viewport(600, 700)
        cy.clearLocalStorage()
        cy.setup()
    })
    it('Testing a New Task List', () => {

        cy.get('[data-cy="home-taskList-filter"]').click()

        cy.selectClick('Add a New Task List')

        cy.get('[data-cy="newTaskList-message"]').should('not.exist')
        cy.get('[data-cy="newTaskList-submit"]').click()
        cy.get('[data-cy="newTaskList-message"]').should('exist')

        cy.get('[data-cy="newTaskList-name"]').type('TestList1')
        cy.get('[data-cy="newTaskList-message"]').should('not.exist')
        cy.get('[data-cy="newTaskList-submit"]').click()

        cy.window().then((window) => {
            cy.wrap(JSON.parse(window.localStorage.getItem('taskList'))[2].title).should('eq', 'TestList1')
        })
    })

    it('Updating Taks', () => {
        cy.get('[data-cy="card"][id=1]').click()
        cy.get('[data-cy="newform-title-input"]').clear()
        cy.get('[data-cy="newform-title-input"]').type('Updated Text')

        cy.get('[data-cy="newform-desc-input"]').clear()
        cy.get('[data-cy="newform-desc-input"]').type('Updated Description')

        cy.get('[data-cy="newform-list-div"]').within(() => {
            cy.get('select[aria-hidden="true"]').select('List1', { force: true })
        })

        cy.get('[data-cy="newform-button-save"]').click()

        cy.window().then((window) => {
            const task = JSON.parse(window.localStorage.getItem('task')).find(task => task.id == 1)
            cy.wrap(task.title).should('eq', 'Updated Text')
            cy.wrap(task.notes).should('eq', 'Updated Description')
            cy.wrap(task.listId).should('eq', '1')
        })



        cy.get('[data-cy="card"][id=5]').click()
        cy.get('[data-cy="newform-title-input"]').clear()
        cy.get('[data-cy="newform-title-input"]').type('Updated Text 5')

        cy.get('[data-cy="newform-desc-input"]').clear()
        cy.get('[data-cy="newform-desc-input"]').type('Updated Description 5')

        cy.get('[data-cy="newform-list-div"]').within(() => {
            cy.get('select[aria-hidden="true"]').select('List2', { force: true })
        })

        cy.get('[data-cy="newform-button-save"]').click()

        cy.window().then((window) => {
            const task = JSON.parse(window.localStorage.getItem('task')).find(task => task.id == 5)
            cy.wrap(task.title).should('eq', 'Updated Text 5')
            cy.wrap(task.notes).should('eq', 'Updated Description 5')
            cy.wrap(task.listId).should('eq', '2')
        });

    })

})