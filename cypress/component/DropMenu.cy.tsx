import '@/app/globals.css';
import DropMenu from '@/components/DropMenu/DropMenu';
import { mount } from 'cypress/react18';

describe('DropMenu Component', () => {
  const items = ['Option 1', 'Option 2', 'Option 3'];
  const title = 'Test DropMenu';
  const name = 'testDropMenu';

  it('should render without crashing', () => {
    mount(<DropMenu items={items} title={title} name={name} />);
    cy.get('h1').contains(title).should('exist');
  });

  it('should display default selected item', () => {
    const defaultSelectedItem = 'Option 2';
    mount(
      <DropMenu
        items={items}
        title={title}
        name={name}
        defaultSelectedItem={defaultSelectedItem}
      />,
    );
    cy.get('button').contains(defaultSelectedItem).should('exist');
  });

  it('should open and close the menu on button click', () => {
    mount(<DropMenu items={items} title={title} name={name} />);
    cy.get('button').click();
    cy.get('menu').should('exist');
    cy.get('button').click();
    cy.get('menu').should('not.exist');
  });

  it('should filter items based on search input', () => {
    mount(<DropMenu items={items} title={title} name={name} />);
    cy.get('button').click();
    cy.get('input[type="text"]').type('Option 1');
    cy.get('ul > li').should('have.length', 1).contains('Option 1');
  });

  it('should call onSelected when an item is clicked', () => {
    const onSelected = cy.stub();
    mount(
      <DropMenu
        items={items}
        title={title}
        name={name}
        onSelected={onSelected}
      />,
    );
    cy.get('button').click();
    cy.get('ul > li').contains('Option 1').click();
    cy.wrap(onSelected).should('have.been.calledWith', 'Option 1');
  });

  it('should display errors if provided', () => {
    const errors = ['Error 1', 'Error 2'];
    mount(<DropMenu items={items} title={title} name={name} errors={errors} />);
    cy.get('.errors > li').should('have.length', errors.length);
    errors.forEach((error) => {
      cy.get('.errors').contains(error).should('exist');
    });
  });

  it('should be disabled if disabled prop is true', () => {
    mount(<DropMenu items={items} title={title} name={name} disabled />);
    cy.get('label').should('have.css', 'opacity', '0.5');
    cy.get('button').should('have.css', 'pointer-events', 'none');
  });
});
