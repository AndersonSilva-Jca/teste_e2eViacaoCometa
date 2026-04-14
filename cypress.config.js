const { defineConfig } = require("cypress");
require('dotenv').config();
module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true, // Para o Pages, é melhor sobrescrever e manter sempre o último
    html: true,
    json: false,
  },  
  env: {
      login : process.env.LOGIN,
      senha : process.env.SENHA,
      mailUsername : process.env.MAIL_USERNAME,
      mailPassword : process.env.MAIL_PASSWORD
  },
  
  //npx cypress run --spec "cypress/e2e/01_busca_passagens/**/*"
  
  e2e: {
    baseUrl: 'https://www.viacaocometa.com.br',
    video: false, // Importante para ver o que aconteceu na falha no CI
    screenshotOnRunFailure: true,
    // scrollBehavior: true, // Evita que o Cypress role a página automaticamente durante os testes
    defaultCommandTimeout: 10000, // Aumenta o tempo padrão de espera por elementos
    pageLoadTimeout: 120000, // Espera até 120s para a página carregar totalmente
    requestTimeout: 15000,  // Espera até 15s por respostas de APIs (cy.request)
    responseTimeout: 15000, // Espera até 15s por respostas de interceptações
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // experimentalRunAllSpecs: true,
    // testIsolation: false, // Isso mantém a página carregada entre os 'it's
    allowCypressEnv: false,
      trashAssetsBeforeRuns: false, // Evita deletar vídeos e screenshots antigos, útil para análise pós-falha
  },
});
