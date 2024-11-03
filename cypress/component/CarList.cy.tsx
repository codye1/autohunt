// CarsList.cy.tsx

import '@/app/globals.css';
import CarsList from '@/components/CarsList/CarsList';
import { Car } from '@/lib/types';
import { mount } from 'cypress/react18';

describe('CarsList Component', () => {
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

  it('renders car details in two-column layout', () => {
    mount(<CarsList twoColumns={true} cars={[car]} />);
    cy.contains('Mercedes Benz CLS').should('be.visible'); // Check for car title
    cy.contains('Gasoline').should('be.visible'); // Check for fuel type
    cy.contains('$90000').should('be.visible'); // Check for car price
  });

  it('renders car details in single-column layout', () => {
    mount(<CarsList twoColumns={false} cars={[car]} />);
    cy.contains('Mercedes Benz CLS').should('be.visible'); // Check for car title
  });
});
