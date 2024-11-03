/// <reference types="cypress" />
import '@/app/globals.css';
import CardCar from '@/components/CardCar/CardCar';
import styles from '@/components/CardCar/cardCar.module.css';
import { Car } from '@/lib/types';

describe('CardCar Component', () => {
  const car: Car = {
    _id: '60f1b5a4b2b3b4001f9dbb3b',
    title: 'Mercedes Benz CLS',
    brand: 'Mercedes Benz',
    carModel: 'CLS',
    condition: 'new',
    year: 2017,
    bodyType: 'Sedan',
    passengerCapacity: 4,
    exteriorColor: 'Red',
    fuelType: 'Gasoline',
    mileage: 20000,
    transmission: 'Automatic',
    drivetrain: 'All-Wheel Drive (AWD)',
    power: 600,
    engineCapacity: 400,
    length: 4000,
    width: 1700,
    height: 1600,
    cargoVolume: 400,
    price: 90000,
    rating: 0,
    reviews: 0,
    location: {
      address:
        'Олешник, Vynohradiv Urban Hromada, Береговский район, 90324, Украина',
      lat: '48.162968',
      lon: '22.963537',
    },
    images: [
      'https://i.ibb.co/f80CkGr/ced71bfdd660.jpg',
      'https://i.ibb.co/r3TmysN/95e69a33527f.jpg',
      'https://i.ibb.co/hHY8Yds/980f7206c44a.jpg',
      'https://i.ibb.co/MgmGrp8/68a6d710a7e2.jpg',
    ],
    description: 'Good car',
    features: [
      'Power Steering',
      'Wifi',
      'other',
      'features',
      'double features',
    ],
    seller: '671b9902a5ca2e24e784765d',
  };

  it('renders the car details correctly', () => {
    cy.mount(<CardCar car={car} column={false} />);

    // Check basic car details
    cy.get('h1').contains(`${car.brand} ${car.carModel}`);
    cy.get('h2').contains(`$${car.price}`);
    cy.get('p').contains(car.location.address);

    // Check specific info list
    cy.get('ul li').eq(0).contains(car.year);
    cy.get('ul li').eq(1).contains(car.drivetrain);
    cy.get('ul li').eq(2).contains(car.fuelType);
    cy.get('ul li').eq(3).contains(car.passengerCapacity.toString());
  });

  it('displays "new" condition tag', () => {
    cy.mount(<CardCar car={car} column={false} />);
    cy.get(`.${styles.type}`).contains(car.condition);
  });

  it('displays the first car image', () => {
    cy.mount(<CardCar car={car} column={false} />);
    cy.get('img[alt="Car photo"]')
      .should('have.attr', 'src')
      .then((src) => {
        // Decode the URL from Next.js's optimized `src` attribute
        const decodedSrc = decodeURIComponent(src.toString());
        expect(decodedSrc).to.include(car.images[0]);
      });
  });

  it('displays the correct number of filled and unfilled stars based on rating', () => {
    cy.mount(<CardCar car={car} column={false} />);

    cy.get('img[alt="calendar icon"]')
      .should('have.length', 6)
      .each(($el, index) => {
        if (index < car.rating) {
          cy.wrap($el).should('have.attr', 'src').and('include', 'star.svg'); // Filled star
        } else {
          cy.wrap($el).should('have.attr', 'src'); // Unfilled star
        }
      });
  });

  it('displays in column style when column prop is true', () => {
    cy.mount(<CardCar car={car} column={true} />);
    cy.get('section').should('have.class', styles.columnCard);
  });

  it('handles click event if onClick is provided', () => {
    const handleClick = cy.stub();
    cy.mount(<CardCar car={car} column={false} onClick={handleClick} />);

    cy.get('section').first().click();
    cy.wrap(handleClick).should('have.been.calledOnce');
  });

  it('displays the car location correctly', () => {
    cy.mount(<CardCar car={car} column={false} />);
    cy.get('p').contains(car.location.address);
  });
});
