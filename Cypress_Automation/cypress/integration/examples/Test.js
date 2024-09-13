/// <reference types="cypress" />
// describe actually take two arguments 1st argument is "My first test suite" this is dscribtion of suite 
//2nd argument is have the function() that is wrap all "it" blocks

describe('My First Test Suite', function() // all test case going inside the function()
{
    //test case
it('My First Test Case', function(){

// test steps

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") // navigate to URL DONE
cy.get('.search-keyword').type('ca')
cy.wait(2000) // use wait for 2 sec
cy.get('.product:visible').should('have.length', 4)

// "cy" is global command which is invoke any cypress command cypress driver object--> "driver" like "selenium"

})

}) 

//---------------------ABOVE IS SYNTAX OF CYPRESS test case declaration-------------------------
 