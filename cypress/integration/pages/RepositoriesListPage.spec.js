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
    cy.get('#id0').click().should('have.class', 'favorite');
  });

  it('Favorite a repository and refresh the page', () => {
    cy.visit('/repositories?q=react');
    cy.get('#id0').click().should('have.class', 'favorite');
    cy.get('#id1').click().should('have.class', 'favorite');
    cy.get('#id2').click().should('have.class', 'favorite');

    cy.visit('/repositories?q=react');
    cy.get('#id0').should('have.class', 'favorite');
    cy.get('#id1').should('have.class', 'favorite');
    cy.get('#id2').should('have.class', 'favorite');
  });

  it('Favorite a repository, go to search page and verify favor repo', () => {
    cy.visit('/repositories?q=react');
    cy.get('#id0').click().should('have.class', 'favorite');
    cy.get('#id1').click().should('have.class', 'favorite');
    cy.get('#id2').click().should('have.class', 'favorite');

    cy.visit('/');
    cy.get('#searchInput').type('react');
    cy.get('#searchButton').click();
    cy.url().should('include', '/repositories?q=react');

    cy.get('#id0').should('have.class', 'favorite');
    cy.get('#id1').should('have.class', 'favorite');
    cy.get('#id2').should('have.class', 'favorite');
  });

  //TODO:
  it('Go to second page', () => {
    cy.visit('/repositories?q=react');
  });

  //Desfavoritar
  //Desfavoritar e dar refresh
});
