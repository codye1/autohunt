'use client';

import InputNumber from '@/components/InputNumber/InputNumber';
import DropMenu from '@components/DropMenu/DropMenu';
import TextArea from '@components/TextArea/TextArea';
import TextInput from '@components/TextInput/TextInput';
import { useState } from 'react';
import TwoRadio from '../../../../components/TwoRadio/TwoRadio';
import styles from './carDetails.module.css';
const CarDetails = () => {
  const [number, setNumber] = useState(0);

  return (
    <fieldset className={styles.flexContainer}>
      <h1>Car Details</h1>
      <div className={styles.blockOne}>
        <TextInput
          title="Title"
          name="title"
          placeholder=""
          type="text"
          className={`${styles.firstItem}`}
        />
        <DropMenu
          items={[
            'Sedan',
            'SUV',
            'Coupe',
            'Convertible',
            'Hatchback',
            'Wagon',
            'Van',
            'Truck',
            'Crossover',
            'Sports Car',
          ]}
          title="Body Type"
          name="bodyType"
          className={`${styles.flexItem} minw200`}
        />
        <DropMenu
          items={[
            'Audi',
            'BMW',
            'Chevrolet',
            'Ford',
            'Fiat',
            'Audi',
            'BMW',
            'Chevrolet',
            'Ford',
            'Fiat',
          ]}
          title="Brand"
          name="brand"
          className={`${styles.flexItem}`}
        />
        <DropMenu
          items={[
            '2024',
            '2023',
            '2022',
            '2021',
            '2020',
            '2019',
            '2018',
            '2017',
          ]}
          title="Year"
          name="year"
          className={`${styles.flexItem} minw200`}
        />
        <InputNumber
          title="Passenger Capacity"
          value={number}
          increment={() => setNumber((prev) => prev + 1)}
          decrement={() => setNumber((prev) => prev - 1)}
          name="passengerCapacity"
          className={`${styles.flexItem}`}
        />
      </div>
      <div className={styles.blockTwo}>
        <TwoRadio
          firstRadio={{ title: 'New', value: 'new', onChange: () => {} }}
          secondRadio={{ title: 'Used', value: 'used', onChange: () => {} }}
          name="condition"
          title="Condition"
        />
        <DropMenu
          items={[
            'Audi',
            'BMW',
            'Chevrolet',
            'Ford',
            'Fiat',
            'Audi',
            'BMW',
            'Chevrolet',
            'Ford',
            'Fiat',
          ]}
          title="Model"
          name="model"
        />
        <DropMenu
          items={['Red', 'Blue', 'Black', 'White', 'Green', 'Red']}
          title="Exterior Color"
          name="exteriorColor"
        />
      </div>
      <div className={styles.blockThree}>
        <TextArea
          title="Description"
          name="description"
          placeholder="Write a description about your car"
        />
      </div>
    </fieldset>
  );
};

export default CarDetails;
