import { ICarDocument } from '@/models/carModel';
import CardCar from '../CardCar/CardCar';
import styles from './carsList.module.css';

interface ICarsList {
  twoColumns: boolean;
  cars: ICarDocument[];
}

const CarsList = ({ twoColumns, cars }: ICarsList) => {
  return (
    <div className={twoColumns ? styles.carsListTwoColumns : styles.carsList}>
      {cars.map((car, index) => (
        <CardCar
          onClick={() => {
            window.location.href = `/car/${car._id}`;
          }}
          car={car}
          column={twoColumns}
          key={index}
        />
      ))}
    </div>
  );
};

export default CarsList;
