import '@/app/globals.css';
import InputNumber from '@/components/InputNumber/InputNumber';
import { mount } from 'cypress/react18';

describe('InputNumber Component', () => {
  it('renders correctly with given props', () => {
    const incrementMock = cy.stub();
    const decrementMock = cy.stub();
    const errors = ['Error 1', 'Error 2'];

    mount(
      <InputNumber
        increment={incrementMock}
        decrement={decrementMock}
        name="test-input"
        value={5}
        title="Test Input"
        errors={errors}
      />,
    );

    cy.get('h1').contains('Test Input');
    cy.get('input').should('have.value', 5);
    cy.get('ul.errors li').should('have.length', 2);
  });

  it('calls increment function on increment button click', () => {
    const incrementMock = cy.stub();
    const decrementMock = cy.stub();
    mount(
      <InputNumber
        increment={incrementMock}
        decrement={decrementMock}
        name="test-input"
        value={5}
        title="Test Input"
      />,
    );

    cy.get('button').eq(1).click();
    cy.wrap(incrementMock).should('have.been.calledOnce');
  });

  it('calls decrement function on decrement button click', () => {
    const incrementMock = cy.stub();
    const decrementMock = cy.stub();
    mount(
      <InputNumber
        increment={incrementMock}
        decrement={decrementMock}
        name="test-input"
        value={5}
        title="Test Input"
      />,
    );

    cy.get('button').eq(0).click();
    cy.wrap(decrementMock).should('have.been.calledOnce');
  });

  it('displays errors when provided', () => {
    const incrementMock = cy.stub();
    const decrementMock = cy.stub();
    const errors = ['Error 1', 'Error 2'];
    mount(
      <InputNumber
        increment={incrementMock}
        decrement={decrementMock}
        name="test-input"
        value={5}
        title="Test Input"
        errors={errors}
      />,
    );

    cy.get('ul.errors li').should('have.length', 2);
    cy.get('ul.errors li').eq(0).contains('Error 1');
    cy.get('ul.errors li').eq(1).contains('Error 2');
  });
});
