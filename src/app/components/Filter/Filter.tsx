import TextInput from '@/components/TextInput/TextInput';
import search from '@public/search.svg';
import Condition from '../Condition/Condition';
import FilterFieldset from '../FilterFieldset/FilterFieldset';
import styles from './filter.module.css';

const Filter = () => {
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
        <FilterFieldset title="Year" items={['2019', '2020']} name="year" />
        <FilterFieldset
          title="Brand"
          items={['Audi', 'BMW', 'Toyota', 'Mercedes Benz', 'Volkswagen']}
          name="brand"
        />
        <FilterFieldset title="Model" items={['test', 'test']} name="model" />
      </form>
    </menu>
  );
};

export default Filter;
