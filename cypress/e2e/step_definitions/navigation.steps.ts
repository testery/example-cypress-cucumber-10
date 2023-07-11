import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I navigate to {string}", (url: string) => {
  cy.task('log', `Going to ${url}`);
  cy.visit(url);
  cy.screenshot();
});

Then("wait for {int} seconds", (time: number) => {
  cy.task('log', `Waiting ${time} seconds`);
  cy.wait(time * 1000);
});

Then("the page title is {string}", (title: string) => {
  cy.title().should("eq", title);
});
