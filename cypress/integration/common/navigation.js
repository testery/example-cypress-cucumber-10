import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("I navigate to {string}", (url) => {
  cy.log(url);
  cy.visit(url);
});

Then("wait for {int} seconds", (time) => {
  cy.wait(time * 1000);
});

Then("the page title is {string}", (title) => {
  cy.title().should("eq", title);
});
