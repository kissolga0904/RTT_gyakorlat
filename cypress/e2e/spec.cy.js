Cypress.on('uncaught:exception', (err, runnable) => {
  console.log(err);
  return false;
})

describe('Website is Visitable', () => {
  it('Visits website', () => {
    cy.visit('localhost:3000')
  })
})

describe('Contains creator', () => {
  it('Visits website and find creator', () => {
    cy.visit('localhost:3000')
    cy.contains('Kiss Olga')
  })
})

describe('Contains creators NC', () => {
  it('Visits website and finds Neptun Code', () => {
    cy.visit('http://localhost:3000')
    cy.contains('QLCBH6')
  })
})

describe('Form submit clickable', () => {
  it('Finds and Clicks form submit button', () => {
    cy.visit('localhost:3000')
    cy.get('button[id="submitform1"]').click()
  })
})

describe('Calculatorform submit clickable', () => {
  it('Finds and Clicks calcform submit button', () => {
    cy.visit('localhost:3000')
    cy.get('button[id="submitcalculatorform"]').click()
  })
})

describe('Submitting the form', () => {
  it('Finds and types in data into the form', () => {
    cy.visit('localhost:3000')
    cy.get('input[id="name"]').type('Teszt')
    cy.get('input[id="password"]').type('alma123')
    cy.get('input[id="age"]').type(20)
    cy.get('button[id="submitform1"]').click()
  })
})

describe('Submitting the form and validating', () => {
  it('Finds and types in data into the form', () => {
    cy.visit('localhost:3000')
    cy.get('input[id="name"]').type('Teszt')
    cy.get('input[id="password"]').type('alma123')
    cy.get('input[id="age"]').type(20)
    cy.get('button[id="submitform1"]').click()


    cy.contains('Név: Teszt')
    cy.contains('Jelszó: alma123')
    cy.contains('Életkor: 20')
  })
})

describe('Submitting the Calculator form', () => {
  it('Finds and types in data into the form', () => {
    cy.visit('localhost:3000')
    cy.get('input[id="num1"]').type(5)
    cy.get('input[id="num2"]').type(2)
    cy.get('input[id="num3"]').type(3)
    cy.get('input[id="num4"]').type(1)
    cy.get('button[id="submitcalculatorform"]').click()
  })
})

describe('Submitting the Calculator form and validating', () => {
  it('Finds and types in data into the form', () => {
    cy.visit('localhost:3000')
    cy.get('input[id="num1"]').type(5)
    cy.get('input[id="num2"]').type(2)
    cy.get('input[id="num3"]').type(3)
    cy.get('input[id="num4"]').type(1)
    cy.get('button[id="submitcalculatorform"]').click()

    cy.contains(7)
    cy.contains(2)
  })
})