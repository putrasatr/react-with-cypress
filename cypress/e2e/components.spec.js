/// <reference types="cypress"/>

const { email } = require("../constant");

describe("Komponen Test", () => {
  beforeEach("Do it before each test", () => {
    cy.visit("/");
  });
  it("injects dynamic React component and it works", () => {
    cy.get(".Hello").click("bottom");
    cy.get("input[type='color']")
      .invoke("val", "#00A79C")
      .trigger("change")
      .should((e) => {
        cy.log(e);
      });
    cy.contains("Hello, Gleb").should("not.be.visible");
    cy.log(email);
    cy.visit("/rewards");
  });

  it("Test document", () => {
    cy.document()
      .its("contentType")
      .should((res) => {
        cy.log(res);
      });
  });
});
