'use client';

import InputNumber from '@/components/InputNumber/InputNumber';
import { carDetails } from '@/lib/constants';
import DropMenu from '@components/DropMenu/DropMenu';
import TextArea from '@components/TextArea/TextArea';
import TextInput from '@components/TextInput/TextInput';
import { useState } from 'react';
import TwoRadio from '../../../../components/TwoRadio/TwoRadio';
import styles from './carDetails.module.css';

const CarDetails = () => {
  const [number, setNumber] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState('');

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
          items={carDetails.bodyTypes}
          title="Body Type"
          name="bodyType"
          className={`${styles.flexItem} minw200`}
        />
        <DropMenu
          items={carDetails.brands.map((brand) => brand.name)}
          onSelected={(value) => setSelectedBrand(value)}
          title="Brand"
          name="brand"
          className={`${styles.flexItem}`}
        />
        <DropMenu
          items={carDetails.years}
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
          items={
            carDetails.brands.find((brand) => brand.name === selectedBrand)
              ?.models || []
          }
          disabled={selectedBrand === ''}
          title="Model"
          name="model"
        />
        <DropMenu
          items={carDetails.colors}
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
