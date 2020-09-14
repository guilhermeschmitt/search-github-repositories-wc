context('Search repository page test', () => {
  it('Throws alert when searching with empty query', () => {
    cy.visit('/');
    cy.get('#searchButton').click();
    cy.contains('Type something in the search field!');
  });

  it('It must go to the list page when click the search button and inform query', () => {
    cy.visit('/');
    cy.get('#searchInput').type('react');
    cy.get('#searchButton').click();
    cy.url().should('include', '/repositories?q=react');
  });
});
