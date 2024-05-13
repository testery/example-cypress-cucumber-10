const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    }),
  );
  on(
    'task',
    {
      log(message) {
        console.log(message);
        return null;
      },
    },
  );
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.name === 'chrome') {
      launchOptions.args.push(`--window-size=1920,1080`)
      launchOptions.args.push('--force-device-scale-factor=1')
    }
    return launchOptions
  });

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/e2e/features/*.feature',
  },
  pageLoadTimeout: 120000,
  defaultCommandTimeout: 30000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  scrollBehavior: 'center',
});
