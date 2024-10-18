import '@axe-core/watcher/dist/cypressCommands';

afterEach(() => {
  cy.axeWatcherFlush();
});
