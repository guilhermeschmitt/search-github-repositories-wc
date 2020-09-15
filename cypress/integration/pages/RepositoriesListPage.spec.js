context('Repositories list page test', () => {

  beforeEach(() => {
    cy.resetFavorites();
  })

  it('Should display results from the search page', () => {
    cy.visit('/');
    cy.get('#searchInput').type('react');
    cy.get('#searchButton').click();
    cy.url().should('include', '/repositories?q=react');
    cy.contains('results');
    cy.get('.ant-pagination-item-2');
  });

  it('Favorite a repository', () => {
    cy.visit('/repositories?q=react');
    cy.get('#idFavorite0').click().should('have.class', 'favorite');
  });

  it('Favorite a repository and refresh the page', () => {
    cy.visit('/repositories?q=react');
    cy.get('#idFavorite0').click().should('have.class', 'favorite');
    cy.get('#idFavorite1').click().should('have.class', 'favorite');
    cy.get('#idFavorite2').click().should('have.class', 'favorite');

    cy.visit('/repositories?q=react');
    cy.get('#idFavorite0').should('have.class', 'favorite');
    cy.get('#idFavorite1').should('have.class', 'favorite');
    cy.get('#idFavorite2').should('have.class', 'favorite');
  });

  it('Favorite a repository, go to search page and verify favor repo', () => {
    cy.visit('/repositories?q=react');
    cy.get('#idFavorite0').click().should('have.class', 'favorite');
    cy.get('#idFavorite1').click().should('have.class', 'favorite');
    cy.get('#idFavorite2').click().should('have.class', 'favorite');

    cy.visit('/');
    cy.get('#searchInput').type('react');
    cy.get('#searchButton').click();
    cy.url().should('include', '/repositories?q=react');

    cy.get('#idFavorite0').should('have.class', 'favorite');
    cy.get('#idFavorite1').should('have.class', 'favorite');
    cy.get('#idFavorite2').should('have.class', 'favorite');
  });

  it('Go to second page', () => {
    cy.visit('/repositories?q=react');

    cy.get('#idFavorite0').click().should('have.class', 'favorite');
    cy.get('#idFavorite1').click().should('have.class', 'favorite');

    cy.get('.ant-pagination-item-2').click();
    cy.get('#idFavorite0').should('not.have.class', 'favorite');
    cy.get('#idFavorite1').should('not.have.class', 'favorite');
  });

  it('Must disfavor repository', () => {
    cy.visit('/repositories?q=react');

    cy.get('#idFavorite0').click().should('have.class', 'favorite');
    cy.get('#idFavorite0').click().should('not.have.class', 'favorite');
  });

  it('Must disfavor a repository and refresh page', () => {
    cy.visit('/repositories?q=react');

    cy.get('#idFavorite0').click().should('have.class', 'favorite');

    cy.visit('/repositories?q=react');
    cy.get('#idFavorite0').should('not.have.class', 'favorite');
  });
});
