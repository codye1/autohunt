'use client';
import TextInput from '@/components/TextInput/TextInput';
import gridIcon from '@public/grid icon.svg';
import listIcon from '@public/list icon.svg';
import search from '@public/search.svg';
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import FilterFieldset from '../FilterFieldset/FilterFieldset';
import styles from './carsHeader.module.css';
interface ICarsHeader {
  twoColumns: boolean;
  handleColumnChange: () => void;
  resultsLength: number;
  setParams: Dispatch<SetStateAction<URLSearchParams>>;
}

const CarsHeader = ({
  twoColumns,
  handleColumnChange,
  resultsLength,
  setParams,
}: ICarsHeader) => {
  const [searchCar, setSearchCar] = useState<string>('');
  const [sortBy, setSortBy] = useState<string[]>([]);
  useEffect(() => {
    setParams((current) => {
      current.delete('sortBy');
      sortBy.forEach((item) => current.append('sortBy', item.toLowerCase()));
      return new URLSearchParams(current);
    });
  }, [sortBy, setParams]);
  return (
    <header className={styles.header}>
      <TextInput
        title=""
        placeholder="Search"
        name="searchCars"
        type="text"
        imgIcon={search}
        trackValue={{
          value: searchCar,
          onChange: (e) => {
            setSearchCar(e.target.value);
            setParams((current) => {
              current.set('title', e.target.value.toLowerCase());
              return new URLSearchParams(current);
            });
          },
        }}
      />

      <span>
        <h1>{`Results: ${resultsLength}`}</h1>
        <div>
          <FilterFieldset
            title="Sort by"
            items={[
              'Price ascending',
              'Price descending',
              'Year ascending',
              'Year descending',
            ]}
            selectedItems={sortBy.join(' ')}
            onSelected={setSortBy}
            name="sortBy"
          />
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
        </div>
      </span>
    </header>
  );
};

export default CarsHeader;
