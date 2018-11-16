/* global describe, beforeEach, context, it, cy */

describe('Visit site', function() {
  it('Find open date', function() {
    cy.visit('https://my.uscis.gov/en/appointment/us/91941/SND/dates')
    cy.get('div.top-part > h4.darkgray-text').should('contain', 'no available appointments')
  })
})


describe('Visit site', function() {
  it('Verify price', function() {
    cy.visit('https://www.costco.com/Aquaterra-Spas-Fairfax-80-jet%2c-6-or-7-person-Spa.product.100355849.html')
    cy.get('div.your-price > div > span.value').should('contain', '6,499.99')
  })
})
