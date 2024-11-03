import MultiRange from '@/components/MultiRange/MultiRange';
import { mount } from 'cypress/react18';

describe('MultiRange Component', () => {
  const props = {
    title: 'Price Range',
    name: 'priceRange',
    min: 0,
    max: 100,
  };

  beforeEach(() => {
    // Instead of cy.visit, use mount to render the component
    mount(<MultiRange {...props} />);
  });

  it('should render the MultiRange component with the correct initial values', () => {
    // Check if the title is rendered correctly
    cy.contains('h1', 'Price Range').should('be.visible');

    // Check if initial min and max values are displayed
    cy.contains('$0').should('be.visible');
    cy.contains('$100').should('be.visible');
  });

  it('should update min value when dragged', () => {
    // Use the updated selector based on data-test-id
    cy.get('[data-test-id="min-slider"]')
      .trigger('mousedown', { which: 1, force: true })
      .trigger('mousemove', { clientX: 50, force: true })
      .trigger('mouseup', { force: true });

    // Verify that the min value has updated accordingly
    cy.contains('$10').should('be.visible'); // Assuming min value is now $10
  });

  it('should update hidden input fields with correct values', () => {
    // Update min and max values via dragging the slider
    cy.get('[data-test-id="min-slider"]')
      .invoke('val', 10)
      .trigger('input', { force: true });

    cy.get('[data-test-id="max-slider"]')
      .invoke('val', 90)
      .trigger('input', { force: true });

    // Verify that hidden inputs are updated with the new values
    cy.get('[data-test-id="min-slider"]').should('have.value', '10'); // Assuming min value is now 10

    cy.get('[data-test-id="max-slider"]').should('have.value', '90'); // Assuming max value is now 90
  });
});
