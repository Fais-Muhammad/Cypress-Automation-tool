/// <reference types="Cypress" />

describe('My first Test Suite',function()
{
it('My first Testcase',function()
{


cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

cy.get('.search-keyword').type('ca');
cy.wait(2000);
cy.get('.product:visible').should('have.length',4)
cy.get('.products').as('productlocator')
cy.get('@productlocator').find('.product').should('have.length',4)




cy.get('@productlocator').find('.product').each(($el, index, $list) => {
const textVeg=$el.find('h4.product-name').text()
if(textVeg.includes('Cashews'))
{
$el.find('button').click()
}
}
)
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()

cy.get('select').select('India')

cy.get('[type="checkbox"]').check()
cy.get('button').click()



})

}

)