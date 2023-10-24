const {defineConfig} = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "**/*.feature",
    supportFile: false,
    pageLoadTimeout: 120000,
    viewportHeight: 1080,
    viewportWidth: 1920,
  }
})
