import '@/app/globals.css';
import Button from '@/components/Button/Button';
import { mount } from 'cypress/react18';

describe('Button Component', () => {
  it('renders the button with the correct title', () => {
    mount(<Button title="Click Me" type="button" />);
    cy.get('button').contains('Click Me');
  });

  it('calls onClick when button is clicked', () => {
    const onClick = cy.stub();
    mount(<Button title="Click Me" type="button" onClick={onClick} />);
    cy.get('button').click();
    cy.wrap(onClick).should('have.been.calledOnce');
  });

  it('disables the button when disabled prop is true', () => {
    mount(<Button title="Click Me" type="button" disabled />);
    cy.get('button').should('be.disabled');
  });

  it('applies correct styles when disabled', () => {
    mount(<Button title="Click Me" type="button" disabled />);
    cy.get('button').should('have.css', 'opacity', '0.5');
    cy.get('button').should('have.css', 'pointer-events', 'none');
  });

  it('applies correct styles when not disabled', () => {
    mount(<Button title="Click Me" type="button" />);
    cy.get('button').should('have.css', 'opacity', '1');
    cy.get('button').should('have.css', 'pointer-events', 'all');
  });
});
