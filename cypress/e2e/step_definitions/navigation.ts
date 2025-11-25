import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
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
  expect(randomValue).to.equal(1);
});

When("I run a 5 minute test with logging every 30 seconds", () => {
  const totalDuration = 5 * 60 * 1000; // 5 minutes in milliseconds
  const logInterval = 30 * 1000; // 30 seconds in milliseconds
  const iterations = totalDuration / logInterval; // 10 iterations

  for (let i = 1; i <= iterations; i++) {
    const elapsedMinutes = Math.floor((i * 30) / 60);
    const elapsedSeconds = (i * 30) % 60;
    const timeString = elapsedSeconds === 0
      ? `${elapsedMinutes} minute${elapsedMinutes > 1 ? 's' : ''}`
      : `${elapsedMinutes} minute${elapsedMinutes > 1 ? 's' : ''} ${elapsedSeconds} seconds`;

    cy.wait(logInterval);
    cy.log(`Long Running Test: ${timeString} elapsed (${i * 30} seconds total)`);
  }

  cy.log("Long Running Test: 5 minutes completed successfully!");
});