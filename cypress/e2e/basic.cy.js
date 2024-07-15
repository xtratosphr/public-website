describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("opens the index page", () => {
    cy.get("h1").contains("Elevate Your Infrastructure");
  });

  it("navigates to the services page", () => {
    cy.get('a[href="/services"]').eq(0).click();
    cy.url().should("include", "/services");
    cy.get("h1").contains(/Our Services/i);
  });

  it("navigates to the contact page", () => {
    cy.get('a[href="/contact"]').eq(0).click();
    cy.url().should("include", "/contact");
    cy.get("h1").contains(/Contact/i);
  });

});
