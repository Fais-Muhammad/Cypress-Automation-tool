/// <reference types="Cypress" />

describe('My first Test Suite',function()
{
it('My first Testcase',function()
{


cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
cy.get('input[type="checkbox"]').check(['option1','option2']).should('be.checked')

//Static dropdown
cy.get('select').select('option1').should('have.value','option1')

//dynamic dropdown
cy.get('#autocomplete').type('ind')

cy.get('.ui-menu-item div').each(($el, index, $list) => {

    if($el.text()==="India")
    {
        $el.click()

    }
})

cy.get('#autocomplete').should('have.value','India')

//verify edit box is display or not
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

//for radio button
cy.get('[value=radio1]').check().should('be.checked').and('have.value','radio1')




})


}

)