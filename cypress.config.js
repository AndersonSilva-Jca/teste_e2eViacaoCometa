const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    // Evita que o Cypress role a página automaticamente durante os testes
    scrollBehavior: false,
    // Tempo padrão em milissegundos (ex: 10000ms = 10 segundos)
    defaultCommandTimeout: 10000, 
    
    // Outros timeouts úteis para sites pesados:
    pageLoadTimeout: 120000, // Espera até 60s para a página carregar totalmente
    requestTimeout: 15000,  // Espera até 15s por respostas de APIs (cy.request)
    responseTimeout: 15000, // Espera até 15s por respostas de interceptações
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
