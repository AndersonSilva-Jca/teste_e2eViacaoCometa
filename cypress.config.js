const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {

    video: true, // Importante para ver o que aconteceu na falha no CI
    screenshotOnRunFailure: true,  
    // scrollBehavior: false, // Evita que o Cypress role a página automaticamente durante os testes
    defaultCommandTimeout: 10000, // Aumenta o tempo padrão de espera por elementos
    pageLoadTimeout: 120000, // Espera até 60s para a página carregar totalmente
    requestTimeout: 15000,  // Espera até 15s por respostas de APIs (cy.request)
    responseTimeout: 15000, // Espera até 15s por respostas de interceptações
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
