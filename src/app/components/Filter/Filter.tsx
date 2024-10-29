'use client';

import Button from '@/components/Button/Button';
import MultiRange from '@/components/MultiRange/MultiRange';
import TextInput from '@/components/TextInput/TextInput';
import { carDetails } from '@/lib/constants';
import search from '@public/search.svg';
import { useState } from 'react';
import Condition from '../Condition/Condition';
import FilterFieldset from '../FilterFieldset/FilterFieldset';
import styles from './filter.module.css';

const Filter = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  return (
    <menu className={styles.filter}>
      <h1>Filter</h1>
      <hr />
      <TextInput
        title=""
        placeholder="Search"
        type="text"
        name="search"
        imgIcon={search}
      />
      <form action="">
        <Condition />
        <FilterFieldset title="Year" items={carDetails.years} name="year" />
        <FilterFieldset
          title="Brand"
          items={carDetails.brands.map((brand) => brand.name)}
          onSelected={setSelectedBrands}
          name="brand"
        />
        <FilterFieldset
          title="Model"
          items={carDetails.brands
            .filter((brand) => selectedBrands.includes(brand.name))
            .flatMap((brand) => brand.models)}
          name="model"
          disabled={!selectedBrands.length}
        />

        <FilterFieldset
          title="Body type"
          items={carDetails.bodyTypes}
          name="bodyType"
        />
        <FilterFieldset
          title="Transmission"
          items={carDetails.transmissions}
          name="transmission"
        />
        <FilterFieldset
          title="Fuel type"
          items={carDetails.fuelTypes}
          name="fuelType"
        />
        <FilterFieldset
          title="Drive train"
          items={carDetails.drivetrains}
          name="driveTrain"
        />
        <FilterFieldset
          title="Passenger capacity"
          items={['1', '2', '4', '5', '7', '8']}
          name="passengerCapacity"
        />
        <FilterFieldset
          title="Exterior color"
          items={carDetails.colors}
          name="exteriorColor"
        />
        <MultiRange title="Price range" min={0} max={1000000} />
        <Button title="Reset filters" type="button" disabled />
      </form>
    </menu>
  );
};

export default Filter;
