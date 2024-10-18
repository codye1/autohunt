import Image from 'next/image';
import React from 'react';
import styles from './styles.module.css';
import calendar from '@/app/public/CardCar/calendar.svg';
import iwheel from '@/app/public/CardCar/wheel.svg';
import iseats from '@/app/public/CardCar/seats.svg';
import fuel from '@/app/public/CardCar/fuel.svg';
import star from '@/app/public/CardCar/star.svg';
import starNoFill from '@/app/public/CardCar/star-no-fill.svg';
import Car from '@/app/lib/types';

interface CardCar extends Car {
  column: boolean;
}

const CardCar = ({
  type,
  title,
  price,
  location,
  year,
  driveType,
  engine,
  seats,
  rating,
  reviews,
  img,
  column,
}: CardCar) => {
  return (
    <section className={column ? styles.columnCard : styles.card}>
      <div className={styles.imgCont}>
        <Image src={img} fill style={{ objectFit: 'cover' }} alt="Car photo" />
      </div>
      <div className={styles.infoCont}>
        <div className={styles.type}>{type}</div>
        <h1>{title}</h1>
        <h2 className={styles.price}>${price}</h2>
        <p>{location}</p>
        <ul className={styles.info}>
          <li>
            <Image src={calendar} alt="calendar icon" />
            {year}
          </li>
          <li>
            <Image src={iwheel} alt="calendar icon" />
            {driveType}
          </li>
          <li>
            <Image src={fuel} alt="calendar icon" />
            {engine}
          </li>
          <li>
            <Image src={iseats} alt="calendar icon" />
            {seats}
          </li>
        </ul>
        <hr />
        <section>
          {Array(rating)
            .fill('')
            .map((_, index) => {
              return <Image key={index} src={star} alt="calendar icon" />;
            })}
          {Array(5 - rating)
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
          ({reviews} reviews)
        </section>
      </div>
    </section>
  );
};

export default CardCar;
