context('Repository page test', () => {
  beforeEach(() => {
    cy.resetFavorites();
  })

  it('Go to a non-existent repository', () => {
    cy.visit('/repository/faaaaceboook/react');
    cy.contains('404');
  });

  it('Go to the list of repositories and click on a link', () => {
    cy.visit('/repositories?q=react');
    cy.get('#linkRepo0').click();

    cy.url().should('include', '/repository/');
    cy.get('#repositoryFavorite').should('exist');
  });

});
