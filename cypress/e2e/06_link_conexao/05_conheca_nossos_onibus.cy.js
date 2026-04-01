/// <reference types='cypress' />


describe('', () => {
 beforeEach(() => {
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  cy.visit('https://www.viacaocometa.com.br', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
      }
  });
  
});
it('', () => {

  })
});