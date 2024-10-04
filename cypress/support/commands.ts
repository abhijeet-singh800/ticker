/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
Cypress.Commands.add('appInit', (firstName, lastName, nickName, taskList) => {
    // Onboarding Page
    cy.get('[data-cy="nameForm-firstName"]').type(firstName)
    cy.get('[data-cy="nameForm-lastName"]').type(lastName)
    cy.get('[data-cy="nameForm-nickName"]').type(nickName)

    cy.get('button[type="submit"]').click()


    // TaskList Page
    cy.get('[data-cy="newTaskList-name"]').type(taskList)

    cy.get('button[type="submit"]').click()

})

Cypress.Commands.add('setup', () => {
    cy.clearAllLocalStorage()

    cy.fixture('isFirst').then((isFirst) => {
        cy.window().then((window) => {
            window.localStorage.setItem('isFirst', JSON.stringify(isFirst))
        })
    })

    cy.fixture('settings').then((settings) => {
        cy.window().then((window) => {
            window.localStorage.setItem('settings', JSON.stringify(settings))
        })
    })

    cy.fixture('task').then((task) => {
        cy.window().then((window) => {
            window.localStorage.setItem('task', JSON.stringify(task))
        })
    })

    cy.fixture('taskList').then((taskList) => {
        cy.window().then((window) => {
            window.localStorage.setItem('taskList', JSON.stringify(taskList))
        })
    })

    cy.visit('/')

})

Cypress.Commands.add('selectClick', (element) => {
    cy.get('span[id]').contains(element).then(($span) => {
        cy.wrap($span).click()
    })
})

Cypress.Commands.add('selectDrop', (element) => {
    cy.get('div[role="menuitem"]').contains(element).then(($div) => {
        cy.wrap($div).click()
    })
})