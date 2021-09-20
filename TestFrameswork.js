/// <reference types="Cypress" />

import Homepage from '../Page objects/HomePage'
import Productpage from '../Page objects/ProductPage'
describe('Frame work',function(){
 
    before(function(){
      //runs before all the test
     cy.fixture('example').then(function(data)
     {
        this.data=data  //This have access to entire json file
     }
     )
      
    })
 
   it('Frameswork Example',function(){
const HomePage=new Homepage()
const ProductPage=new Productpage()
cy.visit(Cypress.env('url'))
//type(data.name) will work only inside that loop
cy.get(':nth-child(1) > .form-control').type(this.data.name)
HomePage.getGender().select(this.data.gender)
HomePage.getTwoWayDataBinding().should('have.value',this.data.name)
HomePage.getEditBox().should('have.attr','minlength','2')
HomePage.getEnterprenuor().should('be.disabled')
//cy.pause() use to stop the Test run and debugg...same feature cy.debug() will do
HomePage.getShopTab().click()
// check the support command left side
//cy.selectProduct('Blackberry')
//cy.selectProduct('Nokia Edge')


this.data.productname.forEach(function(element){

   cy.selectProduct(element)
 });
 ProductPage.getCheckoutButton().click()
//compare the amount and verify the sum of amount
var sum =0

cy.get('tr td:nth-child(4) strong').each(($el, index, $list)=>{

const amount=$el.text()
var res=amount.split(" ") // this methode helps to split amount and rupee sign
// after splitting it will store like index(0)=₹,,,,and ind(1)=amount
res=res[1].trim()
sum=Number(sum)+Number(res)
//If dont use (Number) the cypress will take the value as string

}).then(function()
{
   cy.log(sum)
})

cy.get('h3 strong').then(function(element)

{
   const amount=element.text()
   var res=amount.split(" ")
   var total=res[1].trim()
  expect(Number(total)).to.equal(sum)
})


ProductPage.getCheckoutProceed().click()
ProductPage.getSelectcountry().wait(6000)

cy.get('.suggestions > ul > li > a').click()

cy.get('#checkbox2').click({force: true})
cy.get('input.btn.btn-success.btn-lg').click()

cy.get('.alert').then(function(element)

{
expect(element.text().includes('Success')).to.be.true

} )

})

})














