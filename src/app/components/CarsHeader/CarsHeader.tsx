import TextInput from '@/components/TextInput/TextInput';
import gridIcon from '@public/grid icon.svg';
import listIcon from '@public/list icon.svg';
import search from '@public/search.svg';
import Image from 'next/image';
import FilterFieldset from '../FilterFieldset/FilterFieldset';
import styles from './carsHeader.module.css';

interface ICarsHeader {
  twoColumns: boolean;
  handleColumnChange: () => void;
  resultsLength: number;
}

const CarsHeader = ({
  twoColumns,
  handleColumnChange,
  resultsLength,
}: ICarsHeader) => {
  return (
    <header className={styles.header}>
      <TextInput
        title=""
        placeholder="Search"
        name="searchCars"
        type="text"
        imgIcon={search}
      />

      <span>
        <h1>{`Results: ${resultsLength}`}</h1>
        <div>
          <FilterFieldset
            title="Sort by"
            items={['Price', 'Rating', 'Year']}
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
