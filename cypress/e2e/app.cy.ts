/// <reference types="cypress" />

describe('App', () => {
  it('increments the counter', () => {
    cy.visit('/')
    let btn = cy.findByText('count is 0')
    btn.click()
    btn.should('contain', 'count is 1')
  })
})
