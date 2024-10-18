import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { cypressConfig } from '@axe-core/watcher';
import 'dotenv/config'

async function setupNodeEvents(on: Cypress.PluginEvents,config: Cypress.PluginConfigOptions): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
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


export default defineConfig(
  cypressConfig({
    axe: {
      apiKey: process.env.API_KEY
    },
    e2e: {
      specPattern: "**/*.feature",
      supportFile: false,
      setupNodeEvents,
      viewportWidth: 1920,
      viewportHeight: 1080
    }
  })
);
