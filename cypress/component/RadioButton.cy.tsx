// RadioButton.cy.tsx

import '@/app/globals.css';
import RadioButton from '@/components/RadioButton/RadioButton';
import { mount } from 'cypress/react18';

describe('RadioButton Component', () => {
  const title = 'Option 1';
  const value = 'option1';
  const name = 'radioGroup';

  beforeEach(() => {
    mount(<RadioButton title={title} value={value} name={name} />);
  });

  it('renders the radio button with the correct title', () => {
    cy.get('label').should('contain.text', title);
  });

  it('renders the radio button input with correct attributes', () => {
    cy.get(`input[type="radio"][value="${value}"]`).should('exist');
    cy.get(`input[type="radio"][value="${value}"]`).should(
      'have.attr',
      'name',
      name,
    );
    cy.get(`input[type="radio"][value="${value}"]`).should(
      'have.attr',
      'id',
      value,
    );
  });

  it('can be selected and checks that it is selected', () => {
    // Ensure the radio button is not selected initially
    cy.get(`input[type="radio"][value="${value}"]`).should('not.be.checked');

    // Click the radio button to select it
    cy.get(`input[type="radio"][value="${value}"]`).check();

    // Assert that the radio button is now selected
    cy.get(`input[type="radio"][value="${value}"]`).should('be.checked');
  });

  it('only one radio button in the group can be selected at a time', () => {
    // Mount two radio buttons with the same name
    mount(
      <>
        <RadioButton title="Option 1" value="option1" name="radioGroup" />
        <RadioButton title="Option 2" value="option2" name="radioGroup" />
      </>,
    );

    // Select the first radio button
    cy.get(`input[type="radio"][value="option1"]`).check();
    cy.get(`input[type="radio"][value="option1"]`).should('be.checked');
    cy.get(`input[type="radio"][value="option2"]`).should('not.be.checked');

    // Select the second radio button
    cy.get(`input[type="radio"][value="option2"]`).check();
    cy.get(`input[type="radio"][value="option2"]`).should('be.checked');
    cy.get(`input[type="radio"][value="option1"]`).should('not.be.checked');
  });
});
