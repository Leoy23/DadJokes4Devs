describe('Favorites page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://icanhazdadjoke.com/', {
      statusCode: 200,
      ok: true,
      fixture: 'joke1'
     });
  });

  it('should have a message displayed if there are no favorited dad jokes', () => {
    cy.visit('http://localhost:3000/favorites');
    cy.get('h2.no-fav-text').should('exist').contains(`You don't have any favorites yet!`);
    cy.get('.sad-dog').should('exist');
    cy.get('h3.no-fav-text').should('exist').contains('You should probably go home and add some favorites...');
    cy.get('h3.no-fav-text > .inactive').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('user should be able to navigate home from favorites page', () => {
    cy.visit('http://localhost:3000/favorites');
    cy.get('.home').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('if a user removes a favorited dad joke, it no longer appears on the DOM', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.fav-btn').click();
    cy.get('.favorites').click();
    cy.get('.delete-fav-btn').click();
    cy.get('.ilksjdfidos').should('not.exist');
  });
});