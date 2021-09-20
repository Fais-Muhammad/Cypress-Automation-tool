/// <reference types="Cypress" />

describe('Testcase for salesforce',function()
{
it('Salesforce website',function()
{

cy.visit('https://login.salesforce.com/')
cy.get('#username').type('faishameed6@gmail.com')
cy.get('#password').type('hhbcchj')

cy.get('#Login').click()

















}

)

}

)
