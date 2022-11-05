describe('Home page', () => {
  it('should render all expected elements to the DOM', () => {
   cy.intercept('GET', 'https://icanhazdadjoke.com/', {
    statusCode: 200,
    ok: true,
    body: {id:'ilksjdfidos', joke: 'This is a joke!'}
   })
   cy.visit('http://localhost:3000')
   cy.get('.logo').should('exist')
   cy.get('.link-box').should('exist').and('contain', 'Home').and('contain', 'Favs')
   cy.get('.display-joke').should('exist').and('contain', 'This is a joke!')
   cy.get('.fav-btn').should('exist').and('contain', 'Moar Favorite')
   cy.get('.new-joke-btn').should('exist').and('contain', 'New Joke Pls')
  })

  it('should display an error message to the user if the GET request fails', () => {
    cy.intercept('GET', 'https://icanhazdadjoke.com/', {
      statusCode: 404,
      ok: false
     })
     cy.visit('http://localhost:3000')
     cy.get('.error-msg').should('exist').and('contain', `Uh oh, that's a 404! Try again later.`)
  })

  it('should display a new joke when a user clicks the new joke button', () => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', 'https://icanhazdadjoke.com/', {
      statusCode: 200,
      ok: true,
      body: {id:'dfisdifhsd', joke: 'This is another joke!'}
    }).as('newJokeCall')
    cy.get('.new-joke-btn').click()
    cy.wait('@newJokeCall')
    cy.get('.display-joke').contains('This is another joke!')
  })

})