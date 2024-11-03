import '@/app/globals.css';
import TextInput from '@/components/TextInput/TextInput';
import styles from '@/components/TextInput/textInput.module.css';
import search from '@/public/search.svg';
import { mount } from 'cypress/react18';

describe('TextInput Component', () => {
  it('renders without crashing', () => {
    mount(
      <TextInput
        title="Test Title"
        name="test"
        type="text"
        placeholder="Enter text"
      />,
    );
  });

  it('displays the title', () => {
    mount(
      <TextInput
        title="Test Title"
        name="test"
        type="text"
        placeholder="Enter text"
      />,
    );
    cy.contains('Test Title').should('exist');
  });

  it('renders an input with the correct attributes', () => {
    mount(
      <TextInput
        title="Test Title"
        name="test"
        type="text"
        placeholder="Enter text"
      />,
    );
    cy.get('input[name="test"]').should('have.attr', 'type', 'text');
    cy.get('input[name="test"]').should(
      'have.attr',
      'placeholder',
      'Enter text',
    );
  });

  it('displays text icon when provided', () => {
    mount(
      <TextInput
        title="Test Title"
        name="test"
        type="text"
        placeholder="Enter text"
        textIcon="🔍"
      />,
    );
    cy.contains('i', '🔍').should('exist');
  });

  it('displays image icon when provided', () => {
    mount(
      <TextInput
        title="Test Title"
        name="test"
        type="text"
        placeholder="Enter text"
        imgIcon={search}
      />,
    );
    cy.get(`.${styles.imgIcon} img`).should('have.attr', 'src', search.src);
  });

  it('displays errors when provided', () => {
    const errors = ['Error 1', 'Error 2'];
    mount(
      <TextInput
        title="Test Title"
        name="test"
        type="text"
        placeholder="Enter text"
        errors={errors}
      />,
    );
    errors.forEach((error) => {
      cy.contains('li', error).should('exist');
    });
  });

  it('displays tips when tipsOpen is true', () => {
    const tips = [
      { title: 'Tip 1', value: '1' },
      { title: 'Tip 2', value: '2' },
    ];
    const onClick = cy.stub();
    mount(
      <TextInput
        title="Test Title"
        name="test"
        type="text"
        placeholder="Enter text"
        tips={{ tips, onClick, tipsOpen: true }}
      />,
    );
    tips.forEach((tip) => {
      cy.contains('li', tip.title).should('exist');
    });
  });

  it('calls onClick when a tip is clicked', () => {
    const tips = [
      { title: 'Tip 1', value: '1' },
      { title: 'Tip 2', value: '2' },
    ];
    const onClick = cy.stub();
    mount(
      <TextInput
        title="Test Title"
        name="test"
        type="text"
        placeholder="Enter text"
        tips={{ tips, onClick, tipsOpen: true }}
      />,
    );
    cy.contains('li', 'Tip 1')
      .click()
      .then(() => {
        expect(onClick).to.have.been.calledWith(tips[0]);
      });
  });
});
