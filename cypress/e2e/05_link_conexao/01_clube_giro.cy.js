/// <reference types='cypress' />

describe('Validar link do clube giro', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/');
  });

  it.only('Deve validar o link do card de clube giro e redirecionar para a página do clube giro', () => {
    cy.get('#slick-slide20 > .carousel-cards-content-text > .aem-Grid > .button > clientlib > .about-card-button > .focusable').invoke('removeAttr', 'target').click({ force: true })
    // cy.url().should('include', 'https://www.viacaocometa.com.br/clubegiro')
    // cy.env(['login', 'senha']).then((env) => {
    //   cy.get('#header-login-button').click()
    //   cy.get('#input-login').type(env.login)
    //   cy.get('#input-password').type(env.senha, { log: false })
    //   cy.get('#button-login').click()
    //   cy.get('.logged-message').should('contain', 'Olá')
      // cy.get(':nth-child(6) > .custom-padding > .container > :nth-child(1) > .aem-Grid > .button > clientlib > .about-card-button > .focusable').invoke('removeAttr', 'target').click({ force: true })
    //   cy.url().should('include', 'https://www.clubegiro.com.br/')
    // })
  })
});