describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("opens the index page", () => {
    cy.get("h1").contains("Great coffee with a conscience");
  });

  it("navigates to the services page", () => {
    cy.get('a[href="/services"]').eq(0).click();
    cy.url().should("include", "/services");
    cy.get("h1").contains(/Our Coffee/i);
  });

  it("navigates to the values page", () => {
    cy.get('a[href="/values"]').eq(0).click();
    cy.url().should("include", "/values");
    cy.get("h1").contains(/Values/i);
  });
});
