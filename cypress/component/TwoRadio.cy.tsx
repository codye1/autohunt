import '@/app/globals.css';
import TwoRadio from '@/components/TwoRadio/TwoRadio';
import { mount } from 'cypress/react18';

describe('<TwoRadio /> Component', () => {
  let firstRadioMock: {
    title: string;
    value: string;
    onChange: sinon.SinonStub;
  };
  let secondRadioMock: {
    title: string;
    value: string;
    onChange: sinon.SinonStub;
  };

  beforeEach(() => {
    firstRadioMock = {
      title: 'Option 1',
      value: 'option1',
      onChange: cy.stub(),
    };

    secondRadioMock = {
      title: 'Option 2',
      value: 'option2',
      onChange: cy.stub(),
    };
  });

  const setupComponent = (errors?: string[]) => {
    mount(
      <TwoRadio
        name="testRadio"
        title="Test Radio Group"
        firstRadio={firstRadioMock}
        secondRadio={secondRadioMock}
        errros={errors}
      />,
    );
  };

  it('renders component with title and radio buttons', () => {
    setupComponent();

    cy.get('h1').contains('Test Radio Group').should('be.visible');
    cy.get('input[type="radio"]').should('have.length', 2);
    cy.contains(firstRadioMock.title).should('be.visible');
    cy.contains(secondRadioMock.title).should('be.visible');
  });

  it('displays error messages when provided', () => {
    const errors = ['Error 1', 'Error 2'];
    setupComponent(errors);

    cy.get('.errors').within(() => {
      cy.get('li').should('have.length', errors.length);
      cy.contains('Error 1').should('be.visible');
      cy.contains('Error 2').should('be.visible');
    });
  });
});
