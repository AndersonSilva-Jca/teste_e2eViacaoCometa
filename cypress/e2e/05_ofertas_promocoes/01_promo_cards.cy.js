// /// <reference types='cypress' />

// const login = require('../../fixtures/login.json')

// describe('Validar cards de promoção', () => {
//   beforeEach(() => {
//     cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
//     cy.visit('https://www.viacaocometa.com.br');
//   });

//   it.only('Deve validar o link do 1º card de promoção e redirecionar para a página de login', () => {
//     cy.get('.aem-GridColumn > .promo-card > .promo-card-content > .promo-card-footer > .promo-card-btn').eq(0).click({ force: true });
//     cy.selecionarPassagemAleatoria1()
//     cy.get('#input-login').type(login.email)
//     cy.get('#input-password').type(login.senha, { log: false })
//     cy.get('#button-login').click()
//     cy.get('.logged-message').should('contain', 'Olá')
//     cy.get('#buyer-check-1', { timeout: 20000 }).click({ force: true })
//     cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click();
//     cy.selecionarAssentoAleatorio({ timeout: 5000 });
//     cy.wait(10000)
//     cy.get('#btn-proceed').should('be.visible').click()
//     cy.url().should('include', '/pagamento')
//     // cy.get('#tab-pix').click()
//     // cy.get('.conditions-check', { timeout: 20000 }).click({ force: true })
//     // Não finalizar a compra para evitar transações reais
//     // cy.get('#payment-submit').should('be.visible').and('not.be.disabled').click();
//   })
//   it('Deve validar o link do 2º card de promoção e redirecionar para a página de login', () => {
//     cy.get('.aem-Grid > .aem-GridColumn > .promo-card > .promo-card-content > .promo-card-footer > .promo-card-btn').eq(1).click({ force: true });
//     cy.selecionarPassagemAleatoria1()
//     cy.get('#input-login').type(login.email)
//     cy.get('#input-password').type(login.senha, { log: false })
//     cy.get('#button-login').click()
//     cy.get('.logged-message').should('contain', 'Olá')
//     cy.get('#buyer-check-1', { timeout: 20000 }).click({ force: true })
//     cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click();
//     cy.selecionarAssentoAleatorio({ timeout: 5000 });
//     cy.wait(10000)
//     cy.get('#btn-proceed').should('be.visible').click()
//     cy.url().should('include', '/pagamento')
//   });

//   it('Deve validar o link do 3º card de promoção e redirecionar para a página de login', () => {
//     cy.get('.aem-Grid > .aem-GridColumn > .promo-card > .promo-card-content > .promo-card-footer > .promo-card-btn').eq(3).click({ force: true });
//     cy.selecionarPassagemAleatoria1()
//     cy.get('#input-login').type(login.email)
//     cy.get('#input-password').type(login.senha, { log: false })
//     cy.get('#button-login').click()
//     cy.get('.logged-message').should('contain', 'Olá')
//     cy.get('#buyer-check-1', { timeout: 20000 }).click({ force: true })
//     cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click();
//     cy.selecionarAssentoAleatorio({ timeout: 5000 });
//     cy.wait(10000)
//     cy.get('#btn-proceed').should('be.visible').click()
//     cy.url().should('include', '/pagamento')
//   });

//   it('Deve validar o link do 4º card de promoção e redirecionar para a página de login', () => {
//     cy.get('.aem-Grid > .aem-GridColumn > .promo-card > .promo-card-content > .promo-card-footer > .promo-card-btn').eq(4).click({ force: true });
//     cy.selecionarPassagemAleatoria1()
//     cy.get('#input-login').type(login.email)
//     cy.get('#input-password').type(login.senha, { log: false })
//     cy.get('#button-login').click()
//     cy.get('.logged-message').should('contain', 'Olá')
//     cy.get('#buyer-check-1', { timeout: 20000 }).click({ force: true })
//     cy.get('#btn-proceed').should('be.visible').and('not.be.disabled').click();
//     cy.selecionarAssentoAleatorio({ timeout: 5000 });
//     cy.wait(10000)
//     cy.get('#btn-proceed').should('be.visible').click()
//     cy.url().should('include', '/pagamento')
//   });
// });