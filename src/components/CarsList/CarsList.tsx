import { Car } from '../../lib/types';
import CardCar from '../CardCar/CardCar';
import styles from './carsList.module.css';

interface ICarsList {
  twoColumns: boolean;
  cars: Car[];
}

const CarsList = ({ twoColumns, cars }: ICarsList) => {
  return (
    <div className={twoColumns ? styles.carsListTwoColumns : styles.carsList}>
      {cars.map((car, index) => (
        <CardCar car={car} column={twoColumns} key={index} />
      ))}
    </div>
  );
};

export default CarsList;
