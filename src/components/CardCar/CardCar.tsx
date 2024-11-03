import { Car } from '@/lib/types';
import calendar from '@public/CardCar/calendar.svg';
import fuel from '@public/CardCar/fuel.svg';
import iseats from '@public/CardCar/seats.svg';
import starNoFill from '@public/CardCar/star-no-fill.svg';
import star from '@public/CardCar/star.svg';
import iwheel from '@public/CardCar/wheel.svg';
import Image from 'next/image';
import styles from './cardCar.module.css';

interface CardCar {
  column: boolean;
  car: Car;
  onClick?: () => void;
}

const CardCar = ({ car, column, onClick }: CardCar) => {
  return (
    <section
      onClick={onClick}
      className={column ? styles.columnCard : styles.card}
    >
      <div className={styles.imgCont}>
        <Image
          src={car.images[0]}
          fill
          style={{ objectFit: 'cover' }}
          alt="Car photo"
        />
      </div>
      <div className={styles.infoCont}>
        <div className={styles.type}>{car.condition}</div>
        <h1 data-testid="cardCarTitle">{car.title}</h1>
        <h2 className={styles.price}>${car.price}</h2>
        <p>{car.location.address}</p>
        <ul className={styles.info}>
          <li data-testid="cardCarYear">
            <Image src={calendar} alt="calendar icon" />
            {car.year}
          </li>
          <li>
            <Image src={iwheel} alt="wheel icon" />
            {car.drivetrain}
          </li>
          <li>
            <Image src={fuel} alt="fuel icon" />
            {car.fuelType}
          </li>
          <li>
            <Image src={iseats} alt="passenger icon" />
            {car.passengerCapacity}
          </li>
        </ul>
        <hr />
        <section>
          {Array(car.rating)
            .fill('')
            .map((_, index) => {
              return <Image key={index} src={star} alt="calendar icon" />;
            })}
          {Array(5 - car.rating)
            .fill('')
            .map((_, index) => {
              return (
                <Image
                  key={index}
                  src={starNoFill}
                  width={24}
                  height={24}
                  alt="calendar icon"
                />
              );
            })}
          ({car.reviews} reviews)
        </section>
      </div>
    </section>
  );
};

export default CardCar;
