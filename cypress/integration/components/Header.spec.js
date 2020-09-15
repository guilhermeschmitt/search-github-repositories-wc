context('Header component test', () => {
  it('Should display search input', () => {
    cy.visit('/repositories/favorites');
    cy.get('#headerSearchInput').should('exist').type('react');
    cy.get('#headerSearchForm').submit();

    cy.url().should('include', '/repositories?q=react');
  });

  it('Should not display search input', () => {
    cy.visit('/');
    cy.get('#headerSearchInput').should('not.exist');
  });

  it('Click logo go to the home page', () => {
    cy.visit('/repositories/favorites');
    cy.get('#headerGithubLogo').click();

    cy.url().should('include', '/');
    cy.contains('Enter the name of the repository you want to search below');
  });

  it('On click favorites icon goes to page', () => {
    cy.visit('/');
    cy.get('#headerFavoriteButton').click();

    cy.url().should('include', '/repositories/favorites');
  });

  it('On click theme icon change theme', () => {
    cy.visit('/');
    cy.get('#headerThemeIcon').click();

    cy.get('#searchInput').should('have.css', 'background-color', 'rgb(63, 68, 72)');
  });

})
