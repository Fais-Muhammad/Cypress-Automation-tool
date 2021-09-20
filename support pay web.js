/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Support pay website',function()
{
it('Testing support pay',function()
{
cy.visit('https://supportpay-development.vercel.app/dashboard')
cy.get('#login-page-create-an-account-btn').click()

cy.get('#register-form_first_name').type('Fais')
cy.get('#register-form_last_name').type('Muhd')
cy.get('#register-form_password').type('Fais@1236')
cy.get('#register-form_confirm_password').type('Fais@1236')

var Email=['a','12345','Faisahman','akjauhddg','Faishag123@gmail.com']
for(let i=0; i<Email.length; i++){
cy.get('#register-form_email').type(Email[i])
cy.get('#register-page-create-account-btn').click()
cy.get('#register-form_email').clear()
}
})




}

)