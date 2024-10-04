describe('Testing the Base Functionalities of the App', () => {
  beforeEach(() => {
    cy.viewport(600, 700)
    cy.clearLocalStorage()
    cy.visit('/')
  })

  it('Local Storage Initialization Test', () => {

    // Onboarding Page
    cy.get('[data-cy="nameForm-firstName"]').type('firstname')
    cy.get('[data-cy="nameForm-lastName"]').type('lastname')
    cy.get('[data-cy="nameForm-nickName"]').type('nick')

    cy.get('button[type="submit"]').click()


    // TaskList Page
    cy.get('[data-cy="newTaskList-name"]').type('testList')

    cy.get('button[type="submit"]').click()

    cy.window().then((window) => {
      cy.wrap(window.localStorage.getItem('isFirst')).as('isFirst')
      cy.wrap(window.localStorage.getItem('settings')).as('settings')
      cy.wrap(window.localStorage.getItem('task')).as('task')
      cy.wrap(window.localStorage.getItem('taskList')).as('taskList')

      cy.get('@isFirst').should('eq', 'false')
      cy.get('@settings').should('eq', JSON.stringify({ "first_name": "firstname", "last_name": "lastname", "nick_name": "nick" }))
      cy.get('@task').should('eq', JSON.stringify([]))
      cy.get('@taskList').should('match', /\[\{"id":"[^"]*","title":"testList"\}\]/);
    })
  })

  it('Title Name Full or Nick Name Test', () => {

    // Onboarding Page
    cy.get('[data-cy="nameForm-firstName"]').type('first')
    cy.get('[data-cy="nameForm-lastName"]').type('lastname')
    cy.get('[data-cy="nameForm-nickName"]').type('nick')

    cy.get('button[type="submit"]').click()


    // TaskList Page
    cy.get('[data-cy="newTaskList-name"]').type('testList')

    cy.get('button[type="submit"]').click()

    // Home Page 
    cy.get('[data-cy="greet-name"]').should("contain", "first")


    cy.clearLocalStorage()
    cy.visit('/')

    // Onboarding Page
    cy.get('[data-cy="nameForm-firstName"]').type('firstName')
    cy.get('[data-cy="nameForm-lastName"]').type('lastname')
    cy.get('[data-cy="nameForm-nickName"]').type('nick')

    cy.get('button[type="submit"]').click()


    // TaskList Page
    cy.get('[data-cy="newTaskList-name"]').type('testList')

    cy.get('button[type="submit"]').click()

    // Home Page 
    cy.get('[data-cy="greet-name"]').should("contain", "nick")



    cy.clearLocalStorage()
    cy.visit('/')

    // Onboarding Page
    cy.get('[data-cy="nameForm-firstName"]').type('firstName')
    cy.get('[data-cy="nameForm-lastName"]').type('lastname')
    cy.get('[data-cy="nameForm-nickName"]').type('nickName')

    cy.get('button[type="submit"]').click()


    // TaskList Page
    cy.get('[data-cy="newTaskList-name"]').type('testList')

    cy.get('button[type="submit"]').click()

    // Home Page 
    cy.get('[data-cy="greet-name"]').should("contain", "nickName")
  })

  describe.only('Date Time and Calender Tests', () => {

    it('Happy Birthday to Me', () => {

      let now = new Date(2002, 5, 5, 22, 0, 0).getTime()
      cy.clock(now)

      cy.appInit('first', 'last', 'nick', 'list')

      cy.get('[data-cy="greet-greet"]').should("contain", "Good Night")
      cy.get('[data-cy="calender-day"]').should("contain", "Wednesday")
      cy.get('[data-cy="calender-date"]').should("contain", "5")
      cy.get('[data-cy="calender-month"]').should("contain", "June")
    })

    it('Time Edge Cases 1', () => {

      let now = new Date(2023, 1, 1, 17, 0, 0).getTime()
      cy.clock(now)

      cy.appInit('first', 'last', 'nick', 'list')

      cy.get('[data-cy="greet-greet"]').should("contain", "Good Evening")
      cy.get('[data-cy="calender-day"]').should("contain", "Wednesday")
      cy.get('[data-cy="calender-date"]').should("contain", "1")
      cy.get('[data-cy="calender-month"]').should("contain", "February")
    })

    it('Time Edge Cases 2', () => {

      let now = new Date(2028, 4, 1, 11, 0, 0).getTime()
      cy.clock(now)

      cy.appInit('first', 'last', 'nick', 'list')

      cy.get('[data-cy="greet-greet"]').should("contain", "Good Afternoon")
      cy.get('[data-cy="calender-day"]').should("contain", "Monday")
      cy.get('[data-cy="calender-date"]').should("contain", "1")
      cy.get('[data-cy="calender-month"]').should("contain", "May")
    })

    it('Leap Year Date Case', () => {

      let now = new Date(2024, 1, 29, 4, 0, 0).getTime()
      cy.clock(now)

      cy.appInit('first', 'last', 'nick', 'list')

      cy.get('[data-cy="greet-greet"]').should("contain", "Good Morning")
      cy.get('[data-cy="calender-day"]').should("contain", "Thursday")
      cy.get('[data-cy="calender-date"]').should("contain", "29")
      cy.get('[data-cy="calender-month"]').should("contain", "February")
    })

  })
})