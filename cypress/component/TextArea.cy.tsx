import '@/app/globals.css';
import TextArea from '@/components/TextArea/TextArea';
import { mount } from 'cypress/react18';
describe('TextArea Component', () => {
  it('renders the TextArea component with title, placeholder, and errors', () => {
    const title = 'Test Title';
    const name = 'testName';
    const placeholder = 'Enter text here...';
    const errors = ['Error 1', 'Error 2'];
    mount(
      <TextArea
        title={title}
        name={name}
        placeholder={placeholder}
        errors={errors}
      />,
    );

    cy.get('h1').contains(title);
    cy.get('textarea').should('have.attr', 'placeholder', placeholder);
    cy.get('ul.errors').children().should('have.length', errors.length);
    errors.forEach((error, index) => {
      cy.get('ul.errors').children().eq(index).contains(error);
    });
  });

  it('applies additional className if provided', () => {
    const className = 'additional-class';
    mount(
      <TextArea
        title="Test Title"
        name="testName"
        placeholder="Enter text here..."
        className={className}
      />,
    );

    cy.get('label').should('have.class', className);
  });
});
