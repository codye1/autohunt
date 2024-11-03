import '@/app/globals.css';
import CheckBox from '@/components/CheckBox/CheckBox';
import { mount } from 'cypress/react18';

describe('CheckBox Component', () => {
  it('renders the CheckBox component with correct width', () => {
    const title = 'Test CheckBox';
    const name = 'testCheckBox';
    const className = 'testClass';
    const checked = true;
    const onChange = cy.stub();

    mount(
      <CheckBox
        title={title}
        name={name}
        className={className}
        checked={checked}
        onChange={onChange}
      />,
    );

    cy.get('input[type="checkBox"]').should('have.attr', 'name', name);
    cy.get('input[type="checkBox"]').should('be.checked');
    cy.get('label').should('have.class', className);
    cy.get('svg').should('have.attr', 'width', '18');
  });
});
