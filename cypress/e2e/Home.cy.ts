describe('Car Listings Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads the page and displays filters and cars list', () => {
    cy.get('h1').contains('Filter').should('be.visible');
    cy.get('[data-testid="cars"]').should('exist');
  });

  it('filters cars by year', () => {
    // Open brand filter and select a brand
    cy.get('h1').contains('Year').click();
    cy.get('input[type="checkBox"][value="2017"]').check();
    cy.get('[data-testid="cardCarYear"]').should('contain', '2017');
  });

  it('searches for a car by name', () => {
    cy.get('input[name="searchCars"]').type('BMW');
    cy.get('[data-testid="cardCarTitle"]').should('contain', 'BMW');
  });

  it('resets filters', () => {
    cy.get('h1').contains('Brand').click();
    cy.get('input[type="checkBox"][value="BMW"]').check();

    cy.get('button').contains('Reset filters').click();

    // Check if all filters are reset
    cy.get('input[type="checkBox"][value="BMW"]').should('not.be.checked');
  });
});
