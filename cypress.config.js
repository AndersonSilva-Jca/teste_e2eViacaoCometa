const { defineConfig } = require("cypress");
module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  //npx cypress run --spec "cypress/e2e/01_busca_passagens/**/*"
  
  e2e: {
    baseUrl: 'https://www.viacaocometa.com.br',
    video: true, // Importante para ver o que aconteceu na falha no CI
    screenshotOnRunFailure: true,
    // scrollBehavior: true, // Evita que o Cypress role a página automaticamente durante os testes
    defaultCommandTimeout: 10000, // Aumenta o tempo padrão de espera por elementos
    pageLoadTimeout: 120000, // Espera até 120s para a página carregar totalmente
    requestTimeout: 15000,  // Espera até 15s por respostas de APIs (cy.request)
    responseTimeout: 15000, // Espera até 15s por respostas de interceptações
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // allowCypressEnv: true
  },
});
