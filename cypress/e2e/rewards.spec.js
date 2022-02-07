/// <reference types="cypress" />
import { rewardsUI } from "../pages/rewards";

describe("Rewards dashboard", () => {
  it("should render the UI", () => {
    rewardsUI();
  });
  it("Network testing", () => {
    cy.visit("/rewards");
    cy.intercept("GET", "/rewards", (res) => {
      cy.log(res.body);
    });
  });
});
