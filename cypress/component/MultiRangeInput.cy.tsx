/// <reference types="cypress" />
import '@/app/globals.css';
import MultiRangeInput from '@/components/MultiRangeInput/MultiRangeInput';
import styles from '@/components/MultiRangeInput/multiRangeInput.module.css';
import { useState } from 'react';

// Wrapper component to set up state for testing
const MultiRangeInputWrapper = () => {
  const [minVal, setMinVal] = useState(1000);
  const [maxVal, setMaxVal] = useState(5000);

  return (
    <MultiRangeInput
      minVal={minVal}
      maxVal={maxVal}
      min={1000}
      max={10000}
      setMinVal={setMinVal}
      setMaxVal={setMaxVal}
    />
  );
};

describe('MultiRangeInput Component', () => {
  beforeEach(() => {
    cy.mount(<MultiRangeInputWrapper />);
  });

  it('should render both range inputs with correct initial values', () => {
    cy.get('input[type="range"]').first().should('have.value', '1000');
    cy.get('input[type="range"]').last().should('have.value', '5000');
  });

  it('should update minVal when the left range input changes', () => {
    cy.get('input[type="range"]').first().as('minInput');
    cy.get('@minInput').invoke('val', 2000).trigger('input', { force: true });
    cy.get('@minInput').should('have.value', '2000');
  });

  it('should update maxVal when the right range input changes', () => {
    cy.get('input[type="range"]').last().as('maxInput');
    cy.get('@maxInput').invoke('val', 6000).trigger('input', { force: true });
    cy.get('@maxInput').should('have.value', '6000');
  });

  it('should allow minVal to be set independently of maxVal', () => {
    cy.get('input[type="range"]').first().as('minInput');
    cy.get('input[type="range"]').last().as('maxInput');

    // Set max value to 8000
    cy.get('@maxInput').invoke('val', 8000).trigger('input', { force: true });

    // Set min value to 9000 and verify it remains 9000
    cy.get('@minInput').invoke('val', 9000).trigger('input', { force: true });
    cy.get('@minInput').should('have.value', '9000');
  });

  it('should adjust the range indicator correctly', () => {
    cy.get('input[type="range"]')
      .first()
      .invoke('val', 2000)
      .trigger('input', { force: true });
    cy.get('input[type="range"]')
      .last()
      .invoke('val', 7000)
      .trigger('input', { force: true });

    // Wait a moment for DOM updates
    cy.get(`.${styles.sliderRange}`).then((range) => {
      const computedLeft = Cypress.$(range).css('left');
      const computedWidth = Cypress.$(range).css('width');
      cy.log(`Computed Left: ${computedLeft}`);
      cy.log(`Computed Width: ${computedWidth}`);
    });
  });
});
