describe('Home page', () => {
  it('should render all expected elements to the DOM', () => {
    cy.intercept('GET', 'https://icanhazdadjoke.com/', {
      statusCode: 200,
      ok: true,
      fixture: 'joke1'
    });
    cy.visit('http://localhost:3000');
    cy.get('.logo').should('exist');
    cy.get('.link-box').should('exist').and('contain', 'Home').and('contain', 'Favs');
    cy.get('.display-joke').should('exist').and('contain', 'This is a joke!');
    cy.get('.fav-btn').should('exist').and('contain', 'Moar Favorite');
    cy.get('.new-joke-btn').should('exist').and('contain', 'New Joke Pls');
  });

  it('should display an error message to the user if the GET request fails', () => {
    cy.intercept('GET', 'https://icanhazdadjoke.com/', {
      statusCode: 404,
      ok: false
    });
    cy.visit('http://localhost:3000');
    cy.get('.error-msg').should('exist').and('contain', `Uh oh, that's a 404! Try again later.`);
  });

  it('should display a new joke when a user clicks the new joke button', () => {
    cy.visit('http://localhost:3000');
    cy.intercept('GET', 'https://icanhazdadjoke.com/', {
      statusCode: 200,
      ok: true,
      fixture: 'joke2'
    }).as('newJokeCall');
    cy.get('.new-joke-btn').click();
    cy.wait('@newJokeCall');
    cy.get('.display-joke').contains('This is another joke!');
  });

  it('should add joke to favorites and be displayed on the favorites page', () => {
    cy.intercept('GET', 'https://icanhazdadjoke.com/', {
      statusCode: 200,
      ok: true,
      fixture: 'joke1'
    });
    cy.visit('http://localhost:3000');
    cy.get('.fav-btn').click();
    cy.get('.update-favs').should('exist').contains('Added to your favorites!');
    cy.get('.favorites').click();
    cy.url().should('eq', 'http://localhost:3000/favorites');
    cy.get('.fav-card').should('exist').contains('This is a joke!');
  });

  it('should be able to handle a bad URL', () => {
    cy.intercept('GET', 'https://icanhazdadjoke.com/', {
      statusCode: 200,
      ok: true,
      fixture: 'joke1'
    });
    cy.visit('http://localhost:3000/izBad');
    cy.get('h2').should('exist').contains(`Uh oh, that's not a valid URL!`);
    cy.get('.bad-url-img').should('exist');
    cy.get('h3').should('exist').contains('This is fine... try going home or a different address.');
    cy.get('h3 > .inactive').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});