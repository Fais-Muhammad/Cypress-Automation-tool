/// <reference types="Cypress" />

describe('My first Test Suite',function()
{
it('My first Testcase',function()
{

//ervery testcase will run on Mocha
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
// you can impliment the url also using command and implimenting global url in cypress.json
cy.get('.search-keyword').type('ca');
cy.wait(2000);
cy.get('.product:visible').should('have.length',4)
cy.get('.products').as('productlocator')
cy.get('@productlocator').find('.product').should('have.length',4)
cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
{
    console.log('sf')
}

)
console.log('sf')

cy.get('@productlocator').find('.product').each(($el, index, $list) => 
{

    const textVeg=$el.find('h4.product-name').text()
    if(textVeg.includes('cashews')){

        $el.find('button').click()
    }
}
)
//Assert if logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')

//this is to print in logs
cy.get('.brand').then(function(logoelement)
{
cy.log(logoelement.text())
})

const logo=cy.get('.brand')  





})




}

)