'use client';

import { ChangeEvent, useState } from 'react';
import styles from './page.module.css';
import CarsList from './ui/CarsList/CarsList';
import Car, { driveType, engine, type } from './lib/types';
import listIcon from '@/app/public/list icon.svg';
import gridIcon from '@/app/public/grid Icon.svg';
import Image from 'next/image';

const cars: Car[] = [
  {
    type: type.new,
    title: 'Tesla Model 3 Standard Range Plus',
    price: 50000,
    location: 'Florida, USA',
    year: 2020,
    driveType: driveType.allWheel,
    engine: engine.electric,
    seats: 5,
    rating: 4,
    reviews: 12,
    img: 'https://i.imgur.com/dO3Oowu.png',
  },
  {
    type: type.new,
    title: 'Tesla Model 3 Standard Range Plus',
    price: 50000,
    location: 'Florida, USA',
    year: 2020,
    driveType: driveType.allWheel,
    engine: engine.electric,
    seats: 5,
    rating: 4,
    reviews: 12,
    img: 'https://i.imgur.com/WcCqD2Y.jpeg',
  },
];

export default function Home() {
  const [twoColumns, setTwoColumns] = useState(false);

  const handleColumnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTwoColumns(e.target.value === 'twoColumn');
  };

  return (
    <div className={styles.page}>
      <menu className={styles.filters}>Filters</menu>
      <div className={styles.cars}>
        Cars list
        <div className={styles.switcher}>
          <label htmlFor="oneColumn" className={styles.switcherItem}>
            <input
              type="radio"
              id="oneColumn"
              name="columns"
              value="oneColumn"
              onChange={handleColumnChange}
            />
            <Image
              src={listIcon}
              alt="listIcon"
              style={twoColumns ? { opacity: '100%' } : { opacity: '50%' }}
            />
          </label>

          <label htmlFor="twoColumn" className={styles.switcherItem}>
            <input
              type="radio"
              id="twoColumn"
              name="columns"
              value="twoColumn"
              onChange={handleColumnChange}
            />
            <Image
              src={gridIcon}
              alt="gridIcon"
              style={twoColumns ? { opacity: '50%' } : { opacity: '100%' }}
            />
          </label>
        </div>
        <CarsList cars={cars} twoColumns={twoColumns} />
      </div>
    </div>
  );
}
