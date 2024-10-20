import { Car } from '@/app/lib/types';
import calendar from '@/app/public/CardCar/calendar.svg';
import fuel from '@/app/public/CardCar/fuel.svg';
import iseats from '@/app/public/CardCar/seats.svg';
import starNoFill from '@/app/public/CardCar/star-no-fill.svg';
import star from '@/app/public/CardCar/star.svg';
import iwheel from '@/app/public/CardCar/wheel.svg';
import Image from 'next/image';
import styles from './cardCar.module.css';

interface CardCar {
  column: boolean;
  car: Car;
}

const CardCar = ({ car, column }: CardCar) => {
  return (
    <section className={column ? styles.columnCard : styles.card}>
      <div className={styles.imgCont}>
        <Image
          src={car.img}
          fill
          style={{ objectFit: 'cover' }}
          alt="Car photo"
        />
      </div>
      <div className={styles.infoCont}>
        <div className={styles.type}>{car.details.type}</div>
        <h1>{car.details.brand}</h1>
        <h2 className={styles.price}>${car.price}</h2>
        <p>{car.location.addres}</p>
        <ul className={styles.info}>
          <li>
            <Image src={calendar} alt="calendar icon" />
            {car.details.year}
          </li>
          <li>
            <Image src={iwheel} alt="calendar icon" />
            {car.engine.drivetrain}
          </li>
          <li>
            <Image src={fuel} alt="calendar icon" />
            {car.engine.fuelType}
          </li>
          <li>
            <Image src={iseats} alt="calendar icon" />
            {car.details.seats}
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
