import React from 'react';
import CardCar from '../CardCar/CardCar';
import styles from './styles.module.css';
import Car, { driveType, engine, type } from '@/app/lib/types';

interface ICarsList {
  twoColumns: boolean;
  cars: Car[];
}

const CarsList = ({ twoColumns, cars }: ICarsList) => {
  return (
    <div className={twoColumns ? styles.carsListTwoColumns : styles.carsList}>
      {cars.map((car, index) => (
        <CardCar
          key={index}
          type={car.type}
          title={car.title}
          price={car.price}
          location={car.location}
          year={car.year}
          driveType={car.driveType}
          engine={car.engine}
          seats={car.seats}
          rating={car.rating}
          reviews={car.reviews}
          img={car.img}
          column={twoColumns}
        />
      ))}
    </div>
  );
};

export default CarsList;
