/// <reference types="Cypress" />

describe('My first Test Alert',function()
{
it('My first Testcase for alert',function()
{


cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()

//catch the alert text
cy.on('window:alert',(str)=>
{
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
}
)

cy.on('window:confirm',(str)=>
{
expect(str).to.equal('Hello , Are you sure you want to confirm?')}
)

//remove child window
cy.get('#opentab').invoke('removeAttr','target').click()
//npcy.url().should('include','https://www.rahulshettyacademy.com/#/index')
 
cy.go('back')

//grab the href ..child tab
cy.get('#opentab').then(function(e1)
{
const url=e1.prop('href')
cy.visit(url)

//it gives error bcz we are trying to hit diff domain ,href should be same domain or sub domain

})


})


}

)