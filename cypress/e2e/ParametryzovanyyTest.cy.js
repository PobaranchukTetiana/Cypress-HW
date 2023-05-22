/*describe('ParametryzobanyyTest', () => {
  beforeEach(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
  })
  it("Test 1", () => {
    cy.get('[placeholder="Recipients"]').type('Field1');
    cy.get('[placeholder="Subject"]').type('Field2');
    cy.get('[placeholder="Message"]').type('Field3');
    cy.get('[status="success"]').click()
  })
})*/

describe('ParametryzovanyyTest', () => {
  beforeEach (() => {
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
  cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
  cy.get('[title="Forms"]').click();
  cy.get('[title="Form Layouts"]').click();
})

    const Test = (testData, expectedResult) =>

    function () {
    cy.get('[placeholder="Recipients"]').type(`${testData}`);
    cy.get('[placeholder="Subject"]').type(`${testData}`);
    cy.get('[placeholder="Message"]').type(`${testData}`);
    cy.get('[placeholder="Recipients"]').should ("contain.value", `${expectedResult}`);
    cy.get('[placeholder="Subject"]').should ("contain.value", `${expectedResult}`);
    cy.get('[placeholder="Message"]').should ("contain.value", `${expectedResult}`);
  };
  it('search for Field1', Test('Field1', 'Field1'));
  it('search for Field2', Test('Field2', 'Field2'));
  it('search for Field3', Test('Field3', 'Field3'));
})