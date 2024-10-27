'use client';
import CheckBox from '@/components/CheckBox/CheckBox';
import TextInput from '@/components/TextInput/TextInput';
import drop from '@/public/drop.svg';
import Image from 'next/image';
import { useState } from 'react';
import styles from './filterFieldset.module.css';
interface IFilterFieldset {
  title: string;
  name: string;
  items: string[];
}

const FilterFieldset = ({ title, items, name }: IFilterFieldset) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <fieldset className={styles.filterFieldset}>
      <span
        onClick={() => {
          setIsOpen((current) => !current);
        }}
      >
        <h1>{title}</h1>
        <Image
          src={drop}
          alt="drop icon"
          className={isOpen ? styles.open : ''}
        />
      </span>
      {isOpen && (
        <>
          <hr />
          <ul>
            <TextInput
              title=""
              placeholder="Search here"
              type="text"
              name="searchItems"
              trackValue={{
                value: searchValue,
                onChange: (event) => {
                  setSearchValue(event.target.value);
                },
              }}
              className={styles.searchInput}
            />
            {items
              .filter((item) => item.includes(searchValue))
              .map((item, index) => (
                <li key={index}>
                  <CheckBox title={item} name={name} />
                </li>
              ))}
          </ul>
        </>
      )}
    </fieldset>
  );
};

export default FilterFieldset;
