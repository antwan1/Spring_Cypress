import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import allureWriter from "@shelex/cypress-allure-plugin/writer";
import cypressSplit from "cypress-split";

export default defineConfig({
  e2e: {
    projectId: "m76ujk",
    specPattern: "cypress/e2e/**/*.feature",  
    chromeWebSecurity: false,
    experimentalRunAllSpecs: true,
    baseUrl: "https://web-qa.spring.co.uk/",
    retries: {
      runMode: 1,
    },
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);
      allureWriter(on, config);
      cypressSplit(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
    env: {
      allure: true,
      allureReuseAfterSpec: true,
      allureClearSkippedTests: true,
      allureResultsPath: "cypress/reports/allure-results",
    }
  },
});
