describe('The test with the screenshot page', () => {

it('I take a screenshot of the page', () => {

    cy.visit('https://www.google.com');
    cy.screenshot();

})
})
