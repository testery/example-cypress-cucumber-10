import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import {expect} from "chai";

Given("I navigate to {string}", (url: string) => {
  cy.log(url);
  cy.visit(url);
  cy.screenshot();
});

Then("wait for {int} seconds", (time: number) => {
  cy.wait(time * 1000);
});

Then("the page title is {string}", (title: string) => {
  cy.title().should("eq", title);
});

Then("the page title contains {string}", (title: string) => {
  cy.title().should("have.string", title);
});

When("I perform a flaky test action", () => {
  const randomValue = Math.random() < 0.5 ? 0 : 1;
  expect(randomValue).to.be.true;
};