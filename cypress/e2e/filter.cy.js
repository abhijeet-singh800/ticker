describe('Testing the Filtering Functions', () => {
    beforeEach(() => {
        cy.viewport(600, 700)
        cy.clearLocalStorage()
        cy.setup()
    })

    it('Testing the TaskList Filter', () => {

        cy.get('[data-cy="home-taskList-filter"]').click()
        cy.selectClick('Show All Lists')

        cy.get('[data-cy="home-prop-filter"]').click()
        cy.selectClick('No Filters Applied')

        cy.get('[data-cy="card"][taskid]').should('have.length', 8)

        cy.get('[data-cy="home-taskList-filter"]').click()
        cy.selectClick('List1')
        cy.get('[data-cy="card"][taskid]').each(($el) => {
            const taskId = $el.attr('taskid')
            cy.window().then((window) => {
                const task = JSON.parse(window.localStorage.getItem('task')).find(task => task.id === taskId);
                cy.wrap(task.listId).should('eq', '1')
            });
        });

        cy.get('[data-cy="home-taskList-filter"]').click()
        cy.selectClick('List2')
        cy.get('[data-cy="card"][taskid]').each(($el) => {
            const taskId = $el.attr('taskid')
            cy.window().then((window) => {
                const task = JSON.parse(window.localStorage.getItem('task')).find(task => task.id === taskId)
                cy.wrap(task.listId).should('eq', '2')
            });
        });

    })

    it('Testing the Properties Filter', () => {
        cy.get('[data-cy="home-taskList-filter"]').click()
        cy.selectClick('Show All Lists')

        cy.get('[data-cy="home-prop-filter"]').click()
        cy.selectClick('Only Show Starred')
        cy.get('[data-cy="card"][taskid]').each(($el) => {
            const taskId = $el.attr('taskid')
            cy.window().then((window) => {
                const task = JSON.parse(window.localStorage.getItem('task')).find(task => task.id === taskId)
                cy.wrap(task.stared).should('eq', true)
            });
        });


        cy.get('[data-cy="home-prop-filter"]').click()
        cy.selectClick('Only Show Completed')
        cy.get('[data-cy="card"][taskid]').each(($el) => {
            const taskId = $el.attr('taskid')
            cy.window().then((window) => {
                const task = JSON.parse(window.localStorage.getItem('task')).find(task => task.id === taskId)
                cy.wrap(task.completed).should('eq', true)
            });
        });


    })

})