/// <reference types="cypress" />

const { subtract } = require("../utils");

describe("Accomplishment dashboard", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });

  it("should display inappropriate content error when text that includes giraffe is submitted", () => {
    cy.get("[placeholder='Title']").type("This is my accomplishment");
    cy.get("[placeholder='My accomplishment...']").type("I pet a giraffe");
    cy.get("[type='checkbox']").click();
    cy.get("button").click();
    cy.contains("Your content is not appropriate").should("be.visible");
  });

  it("should display inappropriate content error when text that includes giraffe is submitted (with mock)", () => {
    cy.intercept("POST", "http://localhost:4000", (req) => {
      req.reply((res) => {
        res.send({
          msg: "Your content is not appropriate",
        });
      });
    });

    cy.get("[placeholder='Title']").type("This is my accomplishment");
    cy.get("[placeholder='My accomplishment...']").type("I pet a giraffe");
    cy.get("[type='checkbox']").click();
    cy.get("button").click();
    cy.contains("Your content is not appropriate").should("be.visible");
  });
  it("can subtract numbers", () => {
    assert.equal(subtract(90, 111, 842934), -842955, "these numbers are equal");
  });
  it("Ngetest aja ini", () => {
    cy.request("http://localhost:4000/rewards").as("rewards");

    cy.get("@rewards").should((response) => {
      expect(response.body).to.have.length(9);
      expect(response).to.have.property("status", 200);
      expect(response).to.have.property("headers");
    });
  });
});
