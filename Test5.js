/// <reference types="Cypress" />

describe('My first Test Row',function()
{
it('My first Testcase for Row',function()
{


cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

 const text =$el.text()
 if(text.includes("Python"))
 {
     cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
     {
         //const priceText= price.text()
         expect(price.text()).to.equal('25')
     }
     )
 }


})

// mouse over
cy.get('.mouse-hover-content').invoke('show') // if you want see list and click

cy.contains('Top').click({force: true})  // if you want click any hidden element
cy.url().should('include','top')
//cy.url().should('include','https://www.rahulshettyacademy.com/AutomationPractice/#top')
})


}

)